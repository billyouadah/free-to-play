import img from "../../assets/Poisson.png";
import { Stack, AppBar, Toolbar, Typography, Container, Box, Drawer, Divider, ListItemButton, ListItemIcon, ListItemText, Button, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from '@mui/icons-material/Home';
import GamepadIcon from '@mui/icons-material/Gamepad';
import EmailIcon from '@mui/icons-material/Email';
import { useState } from "react";
import SearchBar from "./SearchBar/SearchBar"

function DisplayHeader({ setFilteredGames }) {
  console.log("ddddddd");

  const [open, setState] = useState(false);

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    //changes the function state according to the value of open
    setState(open);
  };

  return (
    <AppBar position="static" sx={{ backgroundColor:"#9d4edd" }}>
      <Container maxWidth="lg" disableGutters="true">
        <Toolbar sx={{ justifyContent:"space-between" }}>
          <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center" }}>
            <div>
              <img src={img} alt="Logo du site" width="75px" style={{ margin: "10px", borderRadius: "10px", display: "block", }}/>
            </div>

            <Box component="div" sx={{ display: { xs: "none", md: "block" } }}>
              <div style={{ borderRadius: "10px", marginRight: "20%", display: "flex", justifyContent: "space-around", alignItems: "center", gap: "100px", flexDirection: "row" }}>
                <a href="/Accueil" style={{ textDecoration: "none", color: "black" }}>Accueil</a>
                <a href="Catalogue" style={{ textDecoration: "none", color: "black" }}>Catalogue</a>
                <a href="Contact" style={{ textDecoration: "none", color: "black" }}>Contact</a>
              </div>
            </Box>
          </div>

          <Box
            component="div"
            sx={{
              display: {
                xs: "none",
                md: "block"
              }
            }}
          >
          <SearchBar setFilteredGames={setFilteredGames}></SearchBar>

          </Box>

          <IconButton
            edge="end"
            aria-label="open drawer"
            onClick={toggleDrawer(true)}
            sx={{ mr: 2, display: { xs: "block", md: "none" } }}>
            <MenuIcon />
          </IconButton>

          {/* The outside of the drawer */}
          <Drawer
            //from which side the drawer slides in
            anchor="right"
            //if open is true --> drawer is shown
            open={open}
            //function that is called when the drawer should close
            onClose={toggleDrawer(false)}
            //function that is called when the drawer should open
            onOpen={toggleDrawer(true)}
          >
            {/* The inside of the drawer */}
            <Box
              sx={{
                p: 2,
                height: 1,
                backgroundColor: "#9d4edd"
              }}
            >
              {/* when clicking the icon it calls the function toggleDrawer and closes the drawer by setting the variable open to false */}
              <IconButton sx={{ mb: 2 }}>
                <CloseIcon onClick={toggleDrawer(false)} />
              </IconButton>

              <Divider sx={{ mb: 2 }} />

              <Box sx={{ mb: 2 }}>
                <ListItemButton href="Accueil">
                  <ListItemIcon>
                    <HomeIcon></HomeIcon>
                  </ListItemIcon>
                  <ListItemText primary="Accueil" />
                </ListItemButton>

                <ListItemButton href="Catalogue">
                  <ListItemIcon>
                    <GamepadIcon></GamepadIcon>
                  </ListItemIcon>
                  <ListItemText primary="Catalogue" />
                </ListItemButton>

                <ListItemButton href="Contact">
                  <ListItemIcon>
                    <EmailIcon></EmailIcon>
                  </ListItemIcon>
                  <ListItemText primary="Contact" />
                </ListItemButton>
              </Box>

              <SearchBar setFilteredGames={setFilteredGames}></SearchBar>

            </Box>
          </Drawer>
        </Toolbar>
      </Container>
    </AppBar>
  );}

export default DisplayHeader;

