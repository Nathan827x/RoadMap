import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import NavBar from './components/navbar/navbar';
import LandingPage from './components/landing-page/landing-page';
import StickyFooter from './components/footer/footer';
import LearningResources from './components/learning-resources/learning-resources';


function App() {
  return (
    <div className="App">
      <NavBar />
      <Router>
        <Switch>
          <Route exact path="/">
            <LandingPage />
          </Route>
          <Route path="/learning-resources">
            <LearningResources />
          </Route>
        </Switch>
      </Router>
      <StickyFooter />
    </div>
  );
}

export default App;
