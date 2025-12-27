import { useState } from 'react';
import Article from './components/Article.jsx';
import Header from './components/Header.jsx';
import NavBar from './components/NavBar.jsx';
import './App.css';
import articles from './data/dummyArticles.js';

function App() {
  return (
    <div className='App'>
      <Header />
      <NavBar />
      <main>
        {Array.from({ length: 20 }).map((_, i) => (
          <Article key={i} />
        ))}
      </main>
    </div>
  );
}

export default App;
