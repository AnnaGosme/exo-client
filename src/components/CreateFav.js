import { useState } from 'react';
import {Button} from '@chakra-ui/react';

const NewFav = (props) => {
  const [newFav, setNewFav] = useState();
  const [favorited, setFavorited] = useState(false);

  const handleClick = (e) => {
    e.preventDefault();

    const movie = {
      id: props.id,
      title: props.title,
      poster_path: props.poster_path,
      overview: props.overview,
      vote_average: props.vote_average,
      release_date: props.release_date,
    };

    fetch('http://localhost:3000/favorites', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(movie),
    }).then((res) => {
      if (!res.ok) {
        return res
          .text()
          .then((error) =>
            Promise.reject(
              new Error(`${res.status} ${res.statusText}: ${error}`)
            )
          );
      }
      setNewFav(res.data);
      setFavorited(true)
    });
  };
  return (
    <>
      <Button variant="outline" aria-label="Add to favorite movies" onClick={handleClick}>
        {favorited ? "Added to favorite movies" : "Add to favorite movies"}
      </Button>
    </>
  );
};

export default NewFav;
