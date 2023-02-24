import logo from './logo.svg';
import './App.css';
import NavBar_header from './Components/NavBar_header/NavBar_header';
import Home_land from './Components/Home_land/Home_land';
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header_Dashboard from './Ico_DashBoard/Header_DashBoard/Header_Dashboard';
import DashBoard from './Ico_DashBoard/DashBoard_page/DashBoard';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ICO_BSC from './ICO_BSC/Components/Home_land/Home_land';



function App() {
  const [BtTxt, setBtTxt] = useState("Connect");


  return (
    <div className="App">
      <div className="overlay"></div>
      <ToastContainer />




     
 

      <Routes>
      <Route path="/" element={  <DashBoard />} />

        <Route path="/Ico_Eth" element={<Home_land BtTxt={BtTxt} setBtTxt={setBtTxt} />} />
        <Route path="/ICO_BSC" element={<ICO_BSC BtTxt={BtTxt} setBtTxt={setBtTxt} />} />

      </Routes>


    </div>
  );
}

export default App;
