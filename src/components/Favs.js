import { useState, useEffect } from 'react';
import Card from './Card';

const Favs = () => {
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

  const favMovies = Object.values(favs)
  console.log(favMovies)


  return (
    <>
      <h2>Favorite Movies</h2>
      {favMovies.map((fav) => {
        return (
          <Card
            key={fav.id}
            id={fav.id}
            title={fav.title}
            poster_path={fav.poster_path}
            overview={fav.overview}
            vote_average={fav.vote_average}
            release_date={fav.release_date}
          />
        );
      })}
    </>
  );
};

export default Favs;