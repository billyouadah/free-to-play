// Import des hooks useEffect et useState ainsi que la librairie axios
import { useEffect, useState } from 'react';
import axios from 'axios';
// Import du fichier CSS pour les styles du composant SearchBar
import './searchbar.css';

// Définition du composant SearchBar
const SearchBar = () => {
    // Affichage d'un message dans la console pour indiquer que le composant a été chargé
    console.log('loaded');

    // Déclaration des états avec useState
    const [allGames, setAllGames] = useState([]); // Liste de tous les jeux
    const [filteredGames, setFilteredGames] = useState([]); // Liste des jeux filtrés selon la recherche
    const [searchTerm, setSearchTerm] = useState(""); // Terme de recherche saisi par l'utilisateur

    // Fonction asynchrone pour récupérer les données des jeux depuis l'API
    const fetchApi = async () => {
        const options = {
            method: 'GET',
            url: 'https://free-to-play-games-database.p.rapidapi.com/api/games',
            headers: {
                'X-RapidAPI-Key': '092661c20bmsha8be65cf21c2169p1dd15cjsn94b2b8076799',
                'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
            } 
        };
        try {
            // Requête HTTP GET vers l'API avec axios
            const response = await axios.request(options);
            // Mise à jour de l'état allGames avec les données récupérées
            setAllGames(response.data);
            console.log(response.data); // Affichage des données récupérées dans la console
        } catch (error) {
            // Affichage des erreurs dans la console en cas d'échec de la requête
            console.error(error);
            throw error; // Lève à nouveau l'erreur pour la gérer ailleurs si nécessaire
        }
    }

    // Effet useEffect pour exécuter fetchApi une fois après le premier rendu du composant
    useEffect(() => {
        fetchApi(); // Appel de la fonction fetchApi
    }, []);

    // Fonction pour filtrer les jeux en fonction du terme de recherche saisi par l'utilisateur
    const handleSearch = () => {
        // Vérification si le terme de recherche est vide
        if (!searchTerm.trim()) return;
        // Filtrage des jeux en fonction du titre et mise à jour de l'état filteredGames
        const filteredList = allGames.filter((game) => game.title.toLowerCase().includes(searchTerm.toLowerCase()));
        setFilteredGames(filteredList);
        setSearchTerm("");
    }
    console.log(filteredGames);

    // Affichage du composant SearchBar avec un champ de recherche et une icône de recherche
    return (
        <>
        <div id="searchbar">
            <input type="text" placeholder="Search.." id="searchinput" name="search" value={searchTerm} onChange={e => setSearchTerm(e.target.value)}/>
            {/* Icône de recherche avec un événement onClick pour déclencher la recherche */}
            <img src="src\assets\search-icon.svg" alt="search icon" id="search-icon" width="15" onClick={handleSearch} />
        </div>
        </>
    )
}

// Export du composant SearchBar pour pouvoir l'utiliser dans d'autres fichiers
export default SearchBar;
