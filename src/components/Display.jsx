import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, CardActions, Chip } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';

function Display({ tableau }) {
    return (
        <Grid container  display="flex" justifyContent="center" sx={{ gap: 5 }} >
      {tableau.map((element) => (
        <Card key={element.id} sx={{ 
          maxWidth: 270,
          borderRadius: '10px',
          boxShadow: '0 5px 10px rgba(0, 0, 0, 0.15)',
          transition: 'transform .3s',
          '&:hover': {
            transform: 'scale3d(1.05, 1.05, 1)',
          }, }}>
        <CardActionArea href={element.game_url} sx={{ height: '100%',  display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
          <div>
          <CardMedia component="img" height="140" image={element.thumbnail} alt={element.title}/>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">{element.title}</Typography>
            <Typography variant="body2" color="text.secondary">{element.short_description}</Typography>
          </CardContent>
          </div>
          <CardActions>
          <Chip size="small" label={element.genre} sx={{ backgroundColor:'#10002b', color:'white' }}/>
          <Chip size="small" label={element.platform} sx={{ backgroundColor:'#10002b', color:'white' }}/>
          </CardActions>
        </CardActionArea>
      </Card>
      ))}
    </Grid>
    )
}

export default Display