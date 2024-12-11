import React from 'react'


import Navbar from "./Components/NavBar/Navbar";
import './Appy.css'
import { ComedyMovies, ActionMovies,trending,HorrorMovies } from './urls'
import Banner from './Components/Banner/Banner';
import RowPost from './Components/RowPost/RowPost';

function App(props) {
  return (
  <div>
    
    <Navbar/>
    <Banner/>
    <RowPost url={ComedyMovies} title='Comedy Movies'/>
    <RowPost url={ActionMovies} title='Action Movies' isSmall/>{/*checks second row images are true*/}
    <RowPost url={trending} title='Trending Movies' isSmall/>
    <RowPost url={HorrorMovies} title='Horror Movies' isSmall/>
    </div>//any value which is to passed to next file we will use props
      
    
  );
}

export default App;
