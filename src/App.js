import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Box, Spacer, Flex, Image } from '@chakra-ui/react';
import Cards from './components/Cards';
import Favs from './components/Favs';
import movies from './assets/movies.png';

function App() {
  return (
    <Router>
      <Flex bg="black" textColor="white">
        <Box p={4}>
          <Link to="/">
            <Image boxSize="50px" src={movies} alt="logo" />
          </Link>
        </Box>
        <Spacer mr="3" />
        <Box p={5}>
          <ul style={{listStyle:'none'}}>
            <li >
          <Link to="/">All movies</Link>
          </li>
          <li>
          <Link to="/favorites">Favorites</Link>
          </li>
          </ul>
        </Box>
      </Flex>
      <Routes>
        <Route path="/favorites" element={<Favs />} />
        <Route path="/" element={<Cards />} />
      </Routes>
    </Router>
  );
}

export default App;
