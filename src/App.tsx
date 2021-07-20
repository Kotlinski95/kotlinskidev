import React from 'react';
import logo from './logo.svg';
import './App.css';
import {useState, useEffect } from 'react'

function App() {

  const [installable, setInstallable] = useState(false);
  let deferredPrompt: any;

  useEffect(() => {
    window.addEventListener("beforeinstallprompt", (e: any) => {
      // Prevent the mini-infobar from appearing on mobile
      e.preventDefault();
      // Stash the event so it can be triggered later.
      deferredPrompt = e;
      // Update UI notify the user they can install the PWA
      setInstallable(true);
    });

    window.addEventListener('appinstalled', () => {
      // Log install to analytics
      console.log('INSTALL: Success');
    });
  }, []);

  const handleInstallClick = (e: any) => {
      // Hide the app provided install promotion
      setInstallable(false);
      // Show the install prompt
      deferredPrompt.prompt();
      // Wait for the user to respond to the prompt
      deferredPrompt.userChoice.then((choiceResult: any) => {
        if (choiceResult.outcome === 'accepted') {
          console.log('User accepted the install prompt');
        } else {
          console.log('User dismissed the install prompt');
        }
      });
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
        {installable &&
          <button className="install-button" onClick={handleInstallClick}>
            INSTALL ME
          </button>
        }
      </header>
    </div>
  );
}

export default App;
