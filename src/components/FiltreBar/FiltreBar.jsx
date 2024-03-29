import { Select, MenuItem, InputLabel, FormControl, Box } from "@mui/material";
import { useState, useEffect } from "react";

const FiltreBar = ({ setFilteredGames, tendanceGame, loading }) => {
  const [genre, setGenre] = useState("");
  const [plateforme, setPlateforme] = useState("");

  useEffect(() => {
    if (!loading) {
      applyFilter(); // Appliquer le filtrage une fois que les données sont chargées
    }
  }, [loading]);

  const genreChange = (event) => {
    setGenre(event.target.value);
    applyFilter();
  };

  const plateformeChange = (event) => {
    setPlateforme(event.target.value);
    applyFilter();
  };

  const applyFilter = () => {
    let filtered = tendanceGame;
    if (genre !== "All") {
      filtered = filtered.filter((game) => game.genre.includes(genre));
    }
    if (plateforme !== "All") {
      filtered = filtered.filter((game) => game.platform.includes(plateforme));
    }
    setFilteredGames(filtered);
  };

    return (
      <Box sx={{ marginBottom:'16px', display:'flex', justifyContent:'center', alignItems:'center', gap:{xs:'5px', sm:'200px'} }}>
      <FormControl variant="standard" sx={{ m: 1, minWidth: {xs:'130px', sm:'150px'}, backgroundColor: '#9d4edd', borderRadius:'15px', padding:'10px' }} >
        <InputLabel id="categorie-label" sx={{ marginLeft:'10px' }}>Genre/Tag</InputLabel>
        <Select 
          labelId="categorie-label"
          id="categorie"
          label="Catégorie"
          value={genre}
          onChange={genreChange}
          MenuProps={{ PaperProps: { sx: { maxHeight: 200 } } }}
        >
          <MenuItem value="All">All</MenuItem>
          <MenuItem value="MMO">MMO</MenuItem>
          <MenuItem value="MMORPG">MMORPG</MenuItem>
          <MenuItem value="Shooter">Shooter</MenuItem>
          <MenuItem value="Strategy">Strategy</MenuItem>
          <MenuItem value="Moba">Moba</MenuItem>
          <MenuItem value="Card Games">Card Games</MenuItem>
          <MenuItem value="Racing">Racing</MenuItem>
          <MenuItem value="Sports">Sports</MenuItem>
          <MenuItem value="Social">Social</MenuItem>
          <MenuItem value="Fighting">Fighting</MenuItem>
          <MenuItem value="MMOFPS">MMOFPS</MenuItem>
          <MenuItem value="Action RPG">Action RPG</MenuItem>
          <MenuItem value="Sandbox">Sandbox</MenuItem>
          <MenuItem value="Open World">Open World</MenuItem>
          <MenuItem value="Survival">Survival</MenuItem>
          <MenuItem value="Battle Royale">Battle Royale</MenuItem>
          <MenuItem value="MMOTPS">MMOTPS</MenuItem>
          <MenuItem value="Anime">Anime</MenuItem>
          <MenuItem value="PvP">PvP</MenuItem>
          <MenuItem value="PvE">PvE</MenuItem>
          <MenuItem value="Pixel">Pixel</MenuItem>
          <MenuItem value="MMORTS">MMORTS</MenuItem>
          <MenuItem value="Fantasy">Fantasy</MenuItem>
          <MenuItem value="Sci-Fi">Sci-Fi</MenuItem>
          <MenuItem value="Action">Action</MenuItem>
          <MenuItem value="Voxel">Voxel</MenuItem>
          <MenuItem value="Zombie">Zombie</MenuItem>
          <MenuItem value="Turn-Based">Turn-Based</MenuItem>
          <MenuItem value="First Person View">First Person View</MenuItem>
          <MenuItem value="Third Person View">Third Person View</MenuItem>
          <MenuItem value="Top-Down View">Top-Down View</MenuItem>
          <MenuItem value="3D Graphics">3D Graphics</MenuItem>
          <MenuItem value="2D Graphics">2D Graphics</MenuItem>
          <MenuItem value="Tank">Tank</MenuItem>
          <MenuItem value="Space">Space</MenuItem>
          <MenuItem value="Sailing">Sailing</MenuItem>
          <MenuItem value="Side Scroller">Side Scroller</MenuItem>
          <MenuItem value="Superhero">Superhero</MenuItem>
          <MenuItem value="Permadeath">Permadeath</MenuItem>
        </Select>
      </FormControl>
      <FormControl variant="standard" sx={{ m: 1, minWidth: {xs:'130px', sm:'150px'}, backgroundColor: '#9d4edd', borderRadius:'15px', padding:'10px' }}>
        <InputLabel id="plateforme-label" sx={{ marginLeft:'10px'}} >Plateforme</InputLabel>
        <Select
          labelId="plateforme-label"
          id="plateforme"
          label="Plateforme"
          value={plateforme}
          onChange={plateformeChange}
        >
          <MenuItem value="All">All</MenuItem>
          <MenuItem value="PC (Windows)">PC (Windows)</MenuItem>
          <MenuItem value="Web Browser">Web Browser</MenuItem>
        </Select>
      </FormControl>
    </Box>
)
}
export default FiltreBar;