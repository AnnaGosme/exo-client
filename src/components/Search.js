import { useNavigate } from 'react-router-dom';
import { Box } from '@chakra-ui/react';

const Search = ({ searchQuery, setSearchQuery }) => {
  const history = useNavigate();
  const onSubmit = (e) => {
    history.push(`?=${searchQuery}`);
    e.preventDefault();
  };

  return (
    <Box bg="black" textColor="white" p={4}>
      <form action="/" method="get" autoComplete="off" onSubmit={onSubmit}>
        <label htmlFor="header-search">
          <span
            className="visually-hidden"
            style={{
              clip: 'rect(0 0 0 0)',
              clipPath: 'inset(50%)',
              height: '1px',
              overflow: 'hidden',
              position: 'absolute',
              whiteSpace: 'nowrap',
              width: '1px',
            }}
          >
            Search movies
          </span>
        </label>
        <input
        style={{color: 'black', padding: '5px'}}
          name="s"
          type="text"
          defaultValue={searchQuery}
          onInput={(e) => setSearchQuery(e.target.value)}
          placeholder="Search..."
        />
        <button type="submit" style={{padding:'5px'}}>Search</button>
      </form>
    </Box>
  );
};

export default Search;
