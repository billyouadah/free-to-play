import axios from 'axios';

function async fetchapi {

const options = {
  method: 'GET',
  url: 'https://free-to-play-games-database.p.rapidapi.com/api/games',
  headers: {
    'X-RapidAPI-Key': 'SIGN-UP-FOR-KEY',
    'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
  }
};

try {
	const response = await axios.request(options);
	console.log(response.data);
} catch (error) {
	console.error(error);
}
}
export default async function fetchapi()