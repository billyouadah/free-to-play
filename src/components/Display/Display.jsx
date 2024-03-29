import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { useState } from "react"
import { CardActionArea, CardActions, Button, Pagination } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import './Display.css'

function Display({ tableau, setFilteredGames, fullTab }) {

  // État pour suivre la page actuelle
  const [currentPage, setCurrentPage] = useState(1);
  // Nombre de jeux à afficher par page
  const [gamePerPage] = useState(20);
  
  // Calcule l'index du dernier Pokémon à afficher sur la page actuelle
  const indexOfLastGame= currentPage * gamePerPage;
  // Calcule l'index du premier Pokémon à afficher sur la page actuelle
  const indexOfFirstGame = indexOfLastGame - gamePerPage;
  // Extrait les Pokémon à afficher sur la page actuelle
  const currentGames = tableau.slice(indexOfFirstGame, indexOfLastGame);
  const count = Math.ceil(tableau.length / gamePerPage)
  // Fonction pour changer de page
  const handleChange = (e, page) => {
    setCurrentPage(page)
  }

  // Fonctions pour filtrer
  function filtreGenre(genre) {
    let filtered = fullTab;
    filtered = filtered.filter((game) => game.genre.includes(genre));
    setFilteredGames(filtered);
    console.log("filtre genre activé");
  }
  function filtrePlateforme(plateforme) {
    let filtered = fullTab;
    filtered = filtered.filter((game) => game.platform.includes(plateforme));
    setFilteredGames(filtered);
    console.log("filtre plateforme activé");
  }

  return (
    <>
    <Grid container  display="flex" justifyContent="center" sx={{ gap: 5 }} >
      {currentGames.map((element) => (
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
            <CardActions sx={{ display:'flex', justifyContent:'center' }}>
              <Button size="small" onClick={ () => {filtreGenre(element.genre)}} sx={{ backgroundColor:'#10002b', padding:'5px', borderRadius:'15px', color:'white', ':hover': {backgroundColor:'#3f3255' } }}>{element.genre}</Button>
              <Button size="small" onClick={ () => {filtrePlateforme(element.platform)}} sx={{ backgroundColor:'#10002b', padding:'5px', borderRadius:'15px', color:'white', ':hover': {backgroundColor:'#3f3255' } }}>{element.platform}</Button>
            </CardActions>
          </div>
        </Card>
      ))}
    </Grid>
    <div style={{ width:'100%', display:'flex', justifyContent:'center', marginTop:'1rem' }}>
      <Pagination 
        id="pagination"
        count={count} 
        page={currentPage} 
        onChange={handleChange}
      />
    </div>
    </>
  )
}

export default Display