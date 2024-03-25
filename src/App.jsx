import React, { useState } from "react";
import DisplayHeader from "./components/Header/DisplayHeader";
import DisplayFooter from "./components/Header/DisplayFooter";
import SearchBar from "./components/Header/SearchBar";
import DisplayCatalogue from "./components/DisplayCatalogue";
import "./App.css";



function App() {
  const [filteredGames, setFilteredGames] = useState([]);

  return (
    <>
<<<<<<< HEAD
      <DisplayHeader setFilteredGames={setFilteredGames} /> 
=======
   <DisplayHeader setFilteredGames={setFilteredGames} /> 
>>>>>>> 8a9e74b4ef583dd784e5f42ee9bf8e83ec1b90b3
      <div className="App">
        <div className="games-container">
          {filteredGames.map((game) => (
            <div className="card" key={game.id}>
              <h2>{game.title}</h2>
              <p>{game.short_description}</p>
              <img src={game.thumbnail} alt={game.title} />
            </div>
          ))}
        </div>
        <DisplayCatalogue />
      </div>
      <DisplayFooter />
    </>
  );
}

export default App;