import React from "react";
import NavBar from "./Components/NavBar/NavBar";
import './App.css'
import Banner from "./Components/Banner/Banner";
import RowPost from "./Components/RowPost/RowPost";
import { originals,actions } from "./Urls";

function App() {
  return (
    <div className="App">
        <NavBar/>
        <Banner/>
        <RowPost url={originals} title='Netflix Orginal'/>
        <RowPost url={actions} title='Action' isSmall/>
        <RowPost url={actions} title='Action' isSmall/>
    </div>
  );
}

export default App;
