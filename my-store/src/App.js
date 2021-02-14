import Header from './components/Header'
import Footer from './components/Footer'
import Categories from './components/Categories'
import Status from './components/Products'
import React from 'react';
import {AppBar,Typography,Toolbar} from '@material-ui/core/';



function App() {
  return (
    <>
  
   <Header/>
   <Categories/>
   <Status/>
   <Footer/>


</>
  );
}

export default App;