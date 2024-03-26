import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DisplayHeader from "./components/Header/DisplayHeader";
import DisplayFooter from "./components/Header/DisplayFooter";
import SearchBar from "./components/Header/SearchBar";
import DisplayCatalogue from "./components/DisplayCatalogue";
import DisplayGames from "./components/DisplayGames";
import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <DisplayHeader />
        <SearchBar />
        <Routes>
          <Route path="/Catalogue" element={<DisplayCatalogue />} />
          <Route path="/Home" element={<DisplayGames />} />
        </Routes>
        <DisplayFooter />
      </BrowserRouter>
    </div>
  );
}

export default App;