import NewFav from './NewFav';

const IMG_API = 'https://image.tmdb.org/t/p/w200';

const Card = ({
  id,
  title,
  poster_path,
  overview,
  vote_average,
  release_date,
}) => {
  return (
    <>
      <div className="movie">
        <img src={IMG_API + poster_path} alt={title} />
        <div className="movie-info">
          <h3>{title}</h3>
          <span>{vote_average} / 10</span>
          <h5>Released on: {release_date}</h5>
          <NewFav
            key={id}
            id={id}
            title={title}
            poster_path={poster_path}
            overview={overview}
            vote_average={vote_average}
            release_date={release_date}
          />
          <div className="movie-overview">{overview}</div>
        </div>
      </div>
    </>
  );
};

export default Card;
