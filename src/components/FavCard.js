import { Flex, Stack, Text, Container, Button } from '@chakra-ui/react';


const IMG_API = 'https://image.tmdb.org/t/p/w200';

const FavCard = ({
  id,
  title,
  poster_path,
  overview,
  vote_average,
  release_date,
  deleteMovie
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
              <div className="movie-overview">{overview}</div>
            </Text>
            <Button
              variant="outline"
              onClick={() => {
                deleteMovie(id);
              }}
              style={{
                color: 'white',
                marginBottom: '20px',
                marginTop: '20px',
              }}
            >
              Remove from favorites
            </Button>
          </Container>
        </Stack>
      </Flex>
    </>
  );
};

export default FavCard;
