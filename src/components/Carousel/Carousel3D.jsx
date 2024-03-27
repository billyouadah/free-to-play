import Carousel from 'react-material-ui-carousel';
import { useState, useEffect } from 'react';
import { Paper } from '@mui/material';
import axios from 'axios';
import SetMealRounded from '@mui/icons-material/SetMeal';

function Carousel3D() {
  const [allGame, setAllGame] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAllGame = async () => {
      try {
        const response = await axios.get('https://free-to-play-games-database.p.rapidapi.com/api/games', {
          headers: {
            'X-RapidAPI-Key': '092661c20bmsha8be65cf21c2169p1dd15cjsn94b2b8076799',
            'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
          }
        });
        setAllGame(response.data.slice(0, 100));
        setLoading(false);
      } catch (error) {
        console.error(error);
        setError('Une erreur s\'est produite lors de la récupération des données.');
        setLoading(false);
      }
    };

    fetchAllGame();
  }, []);

  const randomGameIndices = [Math.floor(Math.random() * 100), Math.floor(Math.random() * 100), Math.floor(Math.random() * 100)];

  if (loading) return <p>Chargement...</p>;
  if (error) return <p>{error}</p>;

  return (
      <Carousel
        sx={{ width:{xs:"95%", sm:"70%", md:"40%"} }}
        autoPlay={true}
        animation="fade"
        timeout={100}
        indicators={true}
        navButtonsAlwaysInvisible={true}
        IndicatorIcon={<SetMealRounded/>}
        indicatorIconButtonProps={{
          style: {
            padding: '10px',
            color: 'black',
            border: 'none',
            outline:"none",
          }
        }}
        activeIndicatorIconButtonProps={{
          style: {
            color: 'purple',
            border: 'none',
          }
        }}
      >
        {randomGameIndices.map((index, i) => (
          <Paper key={i} sx={{ borderRadius: '20px', background: 'transparent', boxShadow: 'none', margin:"10px", }}>
            <a href={allGame[index]?.game_url} target="_blank" rel="noopener noreferrer"><img src={allGame[index]?.thumbnail}  alt={`Image ${i + 1}`} style={{ height: '100%', borderRadius: '20px', width:"100%" }} /></a>
          </Paper>
        ))}
        </Carousel> 
  );
}

export default Carousel3D;
