import './App.css'

import { Outlet } from 'react-router-dom';

import Navbar from './components/Navbar';
import Footer from './components/Footer';

import Home from './pages/Home'
import Search from "./pages/Search";

function App() {

  return (
    <>
      <Navbar/>
       <Outlet/>
      <Footer/>
    </>
  )
}

export default App
