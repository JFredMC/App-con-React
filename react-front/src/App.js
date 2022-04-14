import './App.css';
import Navbar from './components/NavBar';
import { Fragment } from 'react';

//Importación de componentes
import CompShowUsers from './components/ShowUsers';
import CompCreateUser from './components/CreateUser';
import CompEditUser from './components/EditUser';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Fragment>
      <Navbar brand='My api'></Navbar>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<CompShowUsers/>} />
          <Route path='/createuser' element={<CompCreateUser/>} />
          <Route path='/edituser/:id' element={<CompEditUser/>} />
        </Routes>
      </BrowserRouter>
      
    </Fragment>
 
  );
}

export default App;
