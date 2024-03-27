import Accueil from './components/PageAcueil/Accueil';
import Catalogue from './components/PageCatalogue/Catalogue'
import ContactForm from './components/Contact/Form/ContactForm';
import DisplayHeader from './components/Header/DisplayHeader';
import DisplayFooter from './components/Footer/DisplayFooter';
import {Routes,Route} from "react-router-dom";
import { BrowserRouter} from "react-router-dom";
import { useState } from 'react';
import './App.css'

function App() {
  const [filteredGames, setFilteredGames] = useState([]);

  return (
    <BrowserRouter>
      <DisplayHeader setFilteredGames={setFilteredGames}></DisplayHeader> 
      <Routes>
        <Route path='/' element={<Accueil></Accueil>}></Route>
        <Route path='/Accueil' element={<Accueil></Accueil>}></Route>
        <Route path='/Catalogue' element={<Catalogue setFilteredGames={setFilteredGames} filteredGames={filteredGames}></Catalogue>}></Route>
        <Route path='/Contact' element={<ContactForm></ContactForm>}></Route>
      </Routes>
      <DisplayFooter />
    </BrowserRouter>
  );
}

export default App;