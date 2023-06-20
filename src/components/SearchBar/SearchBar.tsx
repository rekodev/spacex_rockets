import SearchInput from '../SearchInput';
import { StyledSearchBar } from './style';

interface ISearchBarProps {
  resultCount: number | null;
  setSearchTerm: (searchTerm: string) => void;
}

const SearchBar = ({ resultCount, setSearchTerm }: ISearchBarProps) => {
  return (
    <StyledSearchBar>
      <h3>SpaceX rockets</h3>
      {resultCount === 1 ? (
        <p>{resultCount} Result</p>
      ) : resultCount ? (
        <p>{resultCount} Results</p>
      ) : (
        <p>No results</p>
      )}
      <SearchInput setSearchTerm={setSearchTerm} />
    </StyledSearchBar>
  );
};

export default SearchBar;
