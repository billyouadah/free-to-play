import axios from 'axios';
import { useState, useEffect } from "react";
import Display from './Display';
import DisplayHeader from './Header/DisplayHeader';
import FiltreBar from './FiltreBar';

function DisplayGames() {
  const [filteredGames, setFilteredGames] = useState([]);
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

  const tendanceGame = allGame.slice(0, 200);

  return (
    <div>
      <DisplayHeader setFilteredGames={setFilteredGames}></DisplayHeader>
      <FiltreBar setFilteredGames={setFilteredGames} tendanceGame={tendanceGame} loading={loading} />
      <div>
        <Display tableau={filteredGames.length === 0 ? tendanceGame : filteredGames} />
      </div>
    </div>
  );
}

export default DisplayGames;