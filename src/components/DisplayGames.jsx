import axios from 'axios';
import { useState, useEffect } from "react";
import Display from './Display';
import FiltreBar from './FiltreBar';

function DisplayGames({ setFilteredGames, filteredGames }) {
  const [allGame, setAllGame] = useState([]);
  const [loading, setLoading] = useState(true); // Ajout de l'état de chargement

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
        setLoading(false); // Indiquer que le chargement est terminé
      } catch (error) {
        console.error(error);
        setLoading(false); // Indiquer que le chargement est terminé même en cas d'erreur
      }
    };

    fetchAllGame();
  }, []);

  const gameArray = allGame.slice(0, 200);

  return (
    <div>
      <h1 style={{ color:'white', fontSize:'64px' }}>Catalogue</h1>
      <FiltreBar setFilteredGames={setFilteredGames} gameArray={gameArray} loading={loading} />
      <div style={{ maxWidth: "1280px", marginLeft:"auto", marginRight: "auto" }}>
        <Display setFilteredGames={setFilteredGames} fullTab={gameArray} tableau={filteredGames.length === 0 ? gameArray : filteredGames} />
      </div>
    </div>
  );
}

export default DisplayGames;