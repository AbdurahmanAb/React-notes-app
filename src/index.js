import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import './App.css';
import Home from './pages/Home'
import App from './App';




ReactDOM.render( 
  <Router>
    <Routes>
         <Route path='/' element={<Home/>}/>
       <Route path='/app' element={<App/>}/>
    </Routes>
  </Router>
,
  document.getElementById('root')

);


