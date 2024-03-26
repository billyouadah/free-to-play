import img from "../../assets/Poisson.png";
import { Stack } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { InputBase, IconButton } from "@mui/material";
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
        >
          <div>
            <img
              src={img}
              alt=""
              width="75"
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
              textDecoration: "none",
              borderRadius: "10px",
              marginRight: "20%",
            }}
          >
            <a href="Accueil">Accueil</a>
            <a href="Catalogue">Catalogue</a>
            <a href="Contact">Contact</a>
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

