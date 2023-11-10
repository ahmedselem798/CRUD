import React from 'react';
import {Route,Routes,BrowserRouter} from 'react-router-dom'
import './App.css';
import Countries from './Countries';
import CreateCountry from './CreateCountry';
import UpdateCountry from './UpdateCountry';
import "bootstrap/dist/css/bootstrap.min.css"

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element = {<Countries/>} ></Route>
        <Route path='/create' element = {<CreateCountry/>} ></Route>
        <Route path='/update/:id' element = {<UpdateCountry/>} ></Route>
      </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
