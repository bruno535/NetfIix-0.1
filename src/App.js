import React from "react";
import GlobalStyle from './components/globalStyle.js';
import { Nav } from './components/Nav.js';
import { Home } from './components/Home.js';
import { 
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

export default function App(){
  return(
    <>
      <GlobalStyle/>
      <Router>
        <Nav/>
        <Routes>
          <Route path="/" element={<Home/>}/>
        </Routes>
      </Router>
    </>
  )
}