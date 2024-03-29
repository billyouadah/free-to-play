import axios from 'axios';
import { useState, useEffect, useCallback } from "react";
import Display from '../Display/Display';
import { Typography, useScrollTrigger, Zoom, Box, Fab } from '@mui/material';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import FiltreBar from '../FiltreBar/FiltreBar';

function Catalogue({ setFilteredGames, filteredGames }) {
  const [allGame, setAllGame] = useState([]);
  const [loading, setLoading] = useState(true); // Ajout de l'état de chargement

  useEffect(() => {
    const fetchAllGame = async () => {
      const options = {
        method: 'GET',
        url: 'https://free-to-play-games-database.p.rapidapi.com/api/games',
        headers: {
          'X-RapidAPI-Key': '092661c20bmsha8be65cf21c2169p1dd15cjsn94b2b8076799',
          'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
        }
      };

      try {
        const response = await axios.request(options);
        setAllGame(response.data);
        setLoading(false); // Indiquer que le chargement est terminé
      } catch (error) {
        console.error(error);
        setLoading(false); // Indiquer que le chargement est terminé même en cas d'erreur
      }
    };

    fetchAllGame();
  }, []);

    // Use `window` instead of `body` as `document` will be `undefined` when the
    // hooks first runs. By default, useScrollTrigger will attach itself to `window`.
    const trigger = useScrollTrigger({
      // Number of pixels needed to scroll to toggle `trigger` to `true`.
      threshold: 100,
    })
  
    const scrollToTop = useCallback(() => {
      window.scrollTo({ top: 0, behavior: "smooth" })
    }, [])


  return (
    <div>
      <Typography variant='h1' fontFamily="audiowide-regular" 
      sx={{ color:"white", margin:{xs:"10px", sm:"20px", md:"30px"}, fontSize:{xs:"42px", sm:"75px", md:"96px"} }}>
        Game :
      </Typography>
      <FiltreBar setFilteredGames={setFilteredGames} allGame={allGame} loading={loading} />
      <div style={{ maxWidth:"1280px", marginLeft:"auto", marginRight:"auto" }}>
        <Display fullTab={allGame} setFilteredGames={setFilteredGames} tableau={filteredGames.length === 0 ? allGame : filteredGames} />
      </div>
      <Zoom in={trigger}>
        <Box role="presentation" sx={{ position: "fixed", bottom: 32, right: 32, zIndex: 1, }}>
          <Fab onClick={scrollToTop} size="small" aria-label="Scroll back to top">
            <KeyboardArrowUpIcon fontSize="medium" />
          </Fab>
        </Box>
      </Zoom>
    </div>
  );
}

export default Catalogue;