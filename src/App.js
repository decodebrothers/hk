import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './Containers/Login';
import SvgSprite from "./utils/SvgSpriteLoader";
import './App.scss';
import SvgIcon from './Components/svg-icon/svg-icon';
import svgFile from './assets/images/svg/svg-sprite.svg'
import Customers from './Containers/Customers';

function App() {
  const [theme, setTheme] = useState(
    window.localStorage.getItem('theme') || 'light'
  );

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    window.localStorage.setItem('theme', newTheme);
  };

  useEffect(() => {
    document.documentElement.setAttribute('class', theme);
  }, [theme]);

  return (
    <div className="App">
      <button className='theme-toggle' onClick={toggleTheme}>
        <SvgIcon name={theme === 'light' ? 'theme-dark' : 'theme-light'} viewbox='0 0 22 23' />
      </button>
      <SvgSprite url={svgFile} />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/customers" element={<Customers />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;