import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Cards from './components/Cards';
import Favs from './components/Favs';

function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <ul>
            <li>
              <Link to="/">All movies</Link>
            </li>
            <li>
              <Link to="/favorites">Favorites</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/favorites" element={<Favs />} />
          <Route path="/" element={<Cards />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
