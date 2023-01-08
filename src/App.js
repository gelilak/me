import React from 'react';
import logo from './logo.svg';
import './index.css';
import './App.css';
//import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Header from './components/header.js'
import TopSection from './components/top_section.js'

function App() {
  return (
    <main>
      <Header />
      <TopSection />
    </main>
    
  );
}

export default App;
