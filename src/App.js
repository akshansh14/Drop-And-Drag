import { useContext, useEffect } from 'react';
import './App.css';
import Canvas from './components/Canvas';
import Navbar from './components/Navbar';
import { AppContext } from './context/AppContext';

function App() {

  return (
    <div className="w-screen pb-[100px] overflow-hidden ">
  <Navbar/>
  <Canvas/>

    </div>
  )
}

export default App;
