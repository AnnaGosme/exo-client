import { useState, useEffect } from 'react';
import { Box } from '@chakra-ui/react';
import FavCard from './FavCard';
import Axios from 'axios';

const Favs = ({ movies, setMovies }) => {
  const [favs, setFavs] = useState([]);

  useEffect(() => {
    const url = 'http://localhost:3000/favorites';
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const json = await response.json();
        setFavs(json);
      } catch (error) {
        console.log('error:', error);
      }
    };
    fetchData();
  }, []);

  const favMovies = Object.values(favs);

  const deleteMovie = (id) => {
    Axios.delete(`http://localhost:3000/favorites/${id}`).then(() => {
      setFavs(
        favs.filter((value) => {
          return value.id !== id;
        })
      );
    });
  };

  return (
    <>
      <Box
        width="100%"
        alignItems="center"
        bgGradient="linear(to-r, #000000, #5d0076)"
      >
        {favMovies.map((fav) => {
          return (
            <>
              <FavCard
                key={fav.id}
                id={fav.id}
                title={fav.title}
                poster_path={fav.poster_path}
                overview={fav.overview}
                vote_average={fav.vote_average}
                release_date={fav.release_date}
                deleteMovie={deleteMovie}
              />
            </>
          );
        })}
      </Box>
    </>
  );
};

export default Favs;
