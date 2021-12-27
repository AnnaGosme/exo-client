import {Flex, Stack, Text} from "@chakra-ui/react";
import CreateFav from './CreateFav';

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
    <Flex width="80%" display="flex" alignItems="center">
      <div className="movie">
        <Text color='white'>
      <Stack direction="row" p={5}>
        <img src={IMG_API + poster_path} alt={title} />
        <div className="movie-info">
          <h3>{title}</h3>
          {/* {vote_average === 0 ? vote_average="Not yet rated" : */}
          <span>{vote_average} / 10</span>
          <h5>Released on: {release_date}</h5>
          <CreateFav
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
      </Stack>
          </Text>
      </div>
      </Flex>
    </>
  );
};

export default Card;
