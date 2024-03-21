import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import DisplayHeader from './components/Header/DisplayHeader'
import DisplayFooter from './components/Header/DisplayFooter'
// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import SearchBar from './components/Header/SearchBar'
import DisplayCatalogue from './components/DisplayCatalogue'


 function App() {

 
  return (
    <>
    <div>
       <DisplayHeader>
       </DisplayHeader> 
       <SearchBar/>
      <DisplayCatalogue/>     
  </div>
    <DisplayFooter>
    </DisplayFooter>
</>
  )
  }
export default App 