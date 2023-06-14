import React, { Component } from 'react';
import Homepage from './pages/homepage';
import Projects from './pages/projects';
import Experiences from './pages/experiences';
import Contact from './pages/contact';
import SecondaryNavigationBar from './components/secondarynavbar';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './site.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="wrapper">
        <BrowserRouter>
          <SecondaryNavigationBar />
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/experiences" element={<Experiences />} />
            <Route path="/contact" element={<Contact/>} />
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
