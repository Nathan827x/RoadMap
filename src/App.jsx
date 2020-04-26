import React from 'react';
import './App.css';
import NavBar from './components/navbar/navbar';
import LandingPage from './components/landing-page/landing-page';
import StickyFooter from './components/footer/footer';


function App() {
  return (
    <div className="App">
      <NavBar />
      <LandingPage />
      <StickyFooter />
    </div>
  );
}

export default App;
