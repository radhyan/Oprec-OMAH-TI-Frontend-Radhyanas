import React from 'react';
import Head from './components/Head';
import Nav from './components/Nav';
import Trending from './components/Trending';
import New from './components/New';
import Topics from './components/Topics';
import './app.css'
import Writer from './components/Writer';
import FooterSection from './components/FooterSection';

function App() {
    return (
      <div className="App">
          <Head />
          <Nav />
          <Trending />
          <div className="section">
            <div className="whatsNew">
              <New />
            </div>
            <div className="featured">
              <Topics />
              <Writer />
            </div>
          </div>
          <footer>
            <FooterSection 
            section1='Information'
            section2='Follow Us'
            />
          </footer>
      </div>
    );
  }

export default App;