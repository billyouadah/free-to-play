import img from "../../assets/Poisson.png";
import { Stack } from "@mui/material";
import SearchBar from "./SearchBar";

function DisplayHeader({ setFilteredGames }) {
  return (
    <header>
      <nav>
        <Stack
          direction="row"
          bgcolor="#9D4EDD"
          justifyContent="space-between"
          alignItems="center"
          paddingLeft="20px"
          paddingRight="20px"
        >
          <div>
            <img
              src={img}
              alt=""
              width="75px"
              style={{
                backgroundColor: "white",
                margin: "10px",
                borderRadius: "10px",
                display: "block",
              }}
            />
          </div>
          <div
            style={{
              borderRadius: "10px",
              marginRight: "20%",
              display: "flex",
              justifyContent: "space-around",
	            alignItems: "center",
              gap: "100px",
            }}>
            <a href="Accueil" style={{ textDecoration: "none", color: "black" }}>Accueil</a>
            <a href="Catalogue" style={{ textDecoration: "none", color: "black" }}>Catalogue</a>
            <a href="Contact" style={{ textDecoration: "none", color: "black" }}>Contact</a>
          </div>
          <div>
          <SearchBar setFilteredGames={setFilteredGames}></SearchBar>
          </div>
        </Stack>
      </nav>
    </header>
  );
}

export default DisplayHeader;
