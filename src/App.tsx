import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react'
import { useReactPWAInstall } from "react-pwa-install";

function App() {
  const { pwaInstall, supported, isInstalled } = useReactPWAInstall();
  const [installable, setInstallable] = useState(false);
  let deferredPrompt: any;

  const handleClick = () => {
    pwaInstall({
      title: "Install Web App",
      logo: logo,
      features: (
        <ul>
          <li>Cool feature 1</li>
          <li>Cool feature 2</li>
          <li>Even cooler feature</li>
          <li>Works offline</li>
        </ul>
      ),
      description: "This is a very good app that does a lot of useful stuff. ",
    })
      .then(() => alert("App installed successfully or instructions for install shown"))
      .catch(() => alert("User opted out from installing"));
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          KotlinskiDev!
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Portfolio
        </a>
        <div>
          {supported() && !isInstalled() && (
            <button type="button" onClick={handleClick}>
              Install App
            </button>
          )}
        </div>
      </header>
    </div>
  );
}

export default App;
