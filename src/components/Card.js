import { Flex, Stack, Text, Container } from '@chakra-ui/react';
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
          <Stack direction="row" p={5}>
            <img src={IMG_API + poster_path} alt={title} />
            <Container p={10} m={10}>
              <Text color="white">
                <p>{title}</p>
                {<p>{vote_average} / 10</p>}
                <p>Released on: {release_date}</p>
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
              </Text>
            </Container>
          </Stack>
      </Flex>
    </>
  );
};

export default Card;
