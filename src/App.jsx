import DisplayGames from './components/DisplayGames'
import DisplayHeader from './components/Header/DisplayHeader';
import DisplayFooter from './components/Header/DisplayFooter';
import Accueil from './components/Accueil';
import {Routes,Route} from "react-router-dom";
import { BrowserRouter} from "react-router-dom";
import { useState } from 'react';
import './App.css'

function App() {
  const [filteredGames, setFilteredGames] = useState([]);

  console.log("eeeee");
  return (
    <BrowserRouter>
      <DisplayHeader setFilteredGames={setFilteredGames}></DisplayHeader> 
      <Routes>
        <Route path='/Accueil' element={<Accueil></Accueil>}></Route>
        <Route path='/Catalogue' element={<DisplayGames setFilteredGames={setFilteredGames} filteredGames={filteredGames}></DisplayGames>}></Route>
        {/* <Route path='/Form' element={}></Route> */}
      </Routes>
      <DisplayFooter />
    </BrowserRouter>
  );
}

export default App;