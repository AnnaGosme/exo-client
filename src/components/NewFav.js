import { useState } from 'react';

const NewFav = (props) => {
  const [newFav, setNewFav] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();

    const movie = {
        id: props.id,
        title: props.title, 
        poster_path: props.poster_path, 
        overview: props.overview, 
        vote_average: props.vote_average,  
        release_date: props.release_date
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
    });
    console.log('new fav', newFav);
    console.log('movie', movie);
  };
  return <button onClick={handleSubmit}>Add to Favorites</button>;
};

export default NewFav;
