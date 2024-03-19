import { useEffect, useState } from 'react';
import axios from 'axios';
import './searchbar.css'

const SearchBar = () => {
    console.log('loaded');
    const [allGames, setAllGames] = useState([]);
    const [filteredGames, setFilteredGames] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");


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
            const response = await axios.request(options); 
            setAllGames(response.data);
            console.log(response.data);
        } catch (error) {
            console.error(error);
            throw error; // Lève à nouveau l'erreur pour la gérer ailleurs si nécessaire
        }
    }

        useEffect(() => {
            fetchApi()
        }, []);

        const handleSearch = () => {
            if (!searchTerm.trim()) return;
            const filteredList = allGames.filter((game) => game.title.toLowerCase().includes(searchTerm.toLowerCase()));
            setFilteredGames(filteredList);
        }
        console.log(filteredGames);

    return (
        <>
        <div id="searchbar">
            <input type="text" placeholder="Search.." id="searchinput" name="search" onChange={e => setSearchTerm(e.target.value)}/>
            <img src="src\assets\search-icon.svg" alt="search icon" id="search-icon" width="15" onClick={handleSearch} />
        </div>
        </>
    )
}

export default SearchBar