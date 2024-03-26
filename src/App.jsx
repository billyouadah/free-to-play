import React, { useState } from "react";
import DisplayHeader from "./components/Header/DisplayHeader";
import DisplayFooter from "./components/Header/DisplayFooter";
import SearchBar from "./components/Header/SearchBar";
import DisplayCatalogue from "./components/DisplayCatalogue";
import DisplayGames from './components/DisplayGames'
import './App.css'

function App() {

  return (
    <>
      <DisplayGames></DisplayGames>
    </>
  );
}

export default App;