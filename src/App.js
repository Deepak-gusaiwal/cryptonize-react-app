import {Routes,Route} from "react-router-dom"

import Navbar from "./components/Navbar";
import Home from "./components/Home.jsx";
import Coins from "./components/Coins.jsx";
import Exchanges from "./components/Exchanges.jsx";
import CoinDetails from "./components/CoinDetails.jsx";
import Footer from "./components/Footer";
import './App.css';
function App() {
  return (
   <>
   <Navbar/>
   <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/coins' element={<Coins/>}/>
    <Route path='/exchanges' element={<Exchanges/>}/>
    <Route path='/coin/:id' element={<CoinDetails/>}/>
   </Routes>
   <Footer/>
   </>
  );
}

export default App;
