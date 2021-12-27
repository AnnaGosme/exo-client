import { useState, useEffect } from 'react';
import { Container, Flex, VStack, Grid } from '@chakra-ui/react';
import Search from './Search';
import Card from './Card';

// const FEATURED_API =
//   'https://api.themoviedb.org/3/movie/now_playing?api_key=fb55081276ff4308dc10d1c41ca8ec83&language=en-EN';

// const FEATURED_API =

// 'https://api.themoviedb.org/3/movie/latest?api_key=fb55081276ff4308dc10d1c41ca8ec83&language=en-US';

const FEATURED_API =
  'https://api.themoviedb.org/3/movie/upcoming?api_key=fb55081276ff4308dc10d1c41ca8ec83&language=en-US&page=1';

const filterMovies = (movies, query) => {
  if (!query) {
    return movies;
  }
  return movies.filter((movie) => {
    const movieTitle = movie.title.toLowerCase();
    return movieTitle.includes(query);
  });
};

const Cards = () => {
  const [movies, setMovies] = useState([]);
  const { search } = window.location; //get the url
  const query = new URLSearchParams(search).get('s');
  const [searchQuery, setSearchQuery] = useState(query || '');
  const filteredMovies = filterMovies(movies, searchQuery);

  useEffect(() => {
    fetch(FEATURED_API)
      .then((res) => res.json())
      .then((data) => {
        setMovies(data.results);
      });
  }, []);

  return (
    <>
      <div className="search">
        <Search searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      </div>
      <div className="movie-container">
        {filteredMovies
          .sort(function (a, b) {
            return new Date(b.release_date) - new Date(a.release_date);
          })
          .map((movie) => <Card key={movie.id} {...movie} />)
          .slice(0, 10)}
      </div>
    </>
  );
};

export default Cards;