import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  BrowserRouter,
  Route,
  Routes
} from "react-router-dom";
import reportWebVitals from './reportWebVitals';


//Pages
import MainPage from './Routes/Main/MainPage';
import Proyects from './Routes/Proyects/Proyects';
import Resume from './Routes/Resume/Resume'
import Contact from './Routes/Contact/Contact'
import Demos from './Routes/Demos/Demos'
import Options from './Routes/Options/Options'

//Global
import NavBar from './Components/Global/Navbar/Navbar';
import Footer from './Components/Global/Footer/Footer';

import ErrorPage from './Routes/Error/error-page';

//Bootstrap 
import './Styles/custom.scss';
import './Styles/constants.css';
// import 'bootstrap/dist/css/bootstrap.min.css';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

    <BrowserRouter>
    <NavBar/>
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/Proyects' element={<Proyects />} />
        <Route path='/CV' element={<Resume />} />
        <Route path='/Contact' element={<Contact />} />
        <Route path='/Demos' element={<Demos />} />
        <Route path='/Options' element={<Options />} />
        <Route path='/*' element={<ErrorPage />} />
      </Routes>
      <Footer/>
    </BrowserRouter>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
