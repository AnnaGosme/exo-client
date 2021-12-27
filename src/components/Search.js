import { useNavigate } from "react-router-dom";

const Search = ({searchQuery, setSearchQuery}) => {
    const history = useNavigate();
    const onSubmit = e => {
        history.push(`?=${searchQuery}`)
        e.preventDefault();
    }

  return (
    <div className="search">
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
        <input name="s" type="text" defaultValue={searchQuery} onInput={e => setSearchQuery(e.target.value)} placeholder="Search..." />
        <button type="submit">Search</button>
      </form>
    </div>
  );
};

export default Search;
