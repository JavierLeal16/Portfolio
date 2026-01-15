import Article from './components/Article.jsx';
import Header from './components/Header.jsx';
import NavBar from './components/NavBar.jsx';
import ProjectReel from './components/ProjectReel.jsx';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './App.css';

function App() {
  return (
    <div className='App'>
      <Header />
      <NavBar />
      <main>
        <ProjectReel />
        {Array.from({ length: 20 }).map((_, i) => (
          <Article key={i} />
        ))}
      </main>
    </div>
  );
}

export default App;
