import axios from 'axios';
import { useState, useEffect } from "react";
import Display from '../Display/Display';
import { Typography } from '@mui/material';
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


  return (
    <div>
      <Typography variant='h1' fontFamily="audiowide-regular" 
      sx={{ color:"white", margin:{xs:"10px", sm:"20px", md:"30px"}, fontSize:{xs:"42px", sm:"75px", md:"96px"} }}>
        Game :
      </Typography>
      <FiltreBar setFilteredGames={setFilteredGames} tendanceGame={allGame} loading={loading} />
      <div style={{ maxWidth:"1280px", marginLeft:"auto", marginRight:"auto" }}>
        <Display fullTab={allGame} setFilteredGames={setFilteredGames} tableau={filteredGames.length === 0 ? allGame : filteredGames} />
      </div>
    </div>
  );
}

export default Catalogue;