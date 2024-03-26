import axios from 'axios';
import { useState, useEffect } from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';

function DisplayCatalogue({ setFilteredGames }) {
    const [allGame, setAllGame] = useState([]);
  
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
      } catch (error) {
        console.error(error);
      }
    };
  
    useEffect(() => {
      fetchAllGame();
    }, []);
  
    const tendanceGame = allGame.slice(0, 200);
    console.log(tendanceGame);
    return (
      <div>
        <DisplayHeader setFilteredGames={setFilteredGames}></DisplayHeader>
        <FiltreBar setFilteredGames={setFilteredGames} tendanceGame={tendanceGame} loading={loading} />
        <div>
          <Display tableau={filteredGames.length === 0 ? tendanceGame : filteredGames} />
        </div>
    </div>
    );
  }
  
  export default DisplayCatalogue;