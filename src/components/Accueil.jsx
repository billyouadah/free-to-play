import axios from 'axios';
import { useState, useEffect } from "react";
import '../App.css';
import Carousel3D from './Carousel3D';
import { CardActionArea, CardActions, Card, Button, CardMedia, CardContent, Typography } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';

function Accueil() {

    const [allGame, setAllGame] = useState([]);
  
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
        } catch (error) {
          console.error(error);
        }
      };
  
      fetchAllGame();
    }, []);
  
    const trending = allGame.slice(0, 8);

  return (
    <div className="App">
      <h1 style={{ color:'white', fontSize:'64px' }}>Fish-To-Play</h1>
      <Carousel3D />
      <h1 style={{ color:'white', fontSize:'32px' }}>Fish tendance:</h1>
      <div style={{ maxWidth: "1280px", marginLeft:"auto", marginRight: "auto" }}>
        <Grid container  display="flex" justifyContent="center" sx={{ gap: 5 }} >
            {trending.map((element) => (
            <Card key={element.id} sx={{ 
                maxWidth: 270,
                borderRadius: '10px',
                boxShadow: '0 5px 10px rgba(0, 0, 0, 0.15)',
                transition: 'transform .3s',
                '&:hover': {
                transform: 'scale3d(1.05, 1.05, 1)',
                }, }}>
                <div style={{ height: '100%',  display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <CardActionArea href={element.game_url} sx={{ height: '100%',  display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
                    <div>
                    <CardMedia component="img" height="140" image={element.thumbnail} alt={element.title}/>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">{element.title}</Typography>
                        <Typography variant="body2" color="text.secondary">{element.short_description}</Typography>
                    </CardContent>
                    </div>
                </CardActionArea>
                </div>
            </Card>
            ))}
        </Grid>
      </div>
    </div>
  );
}

export default Accueil;