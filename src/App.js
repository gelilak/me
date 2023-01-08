import React from 'react';
//import logo from './logo.svg';
import './index.css';
import './App.css';
//import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Header from './components/header.js'
import TopSection from './components/top_section.js'
import Bio from './components/bio.js'

function App() {
  return (
    <main>
      <Header />
      <TopSection />
      <Bio />
    </main>
    
  );
}

export default App;
