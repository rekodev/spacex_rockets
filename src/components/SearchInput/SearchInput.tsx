import { StyledSearchInput } from './style';

interface ISearchInputProps {
  setSearchTerm: (searchTerm: string) => void;
}

const SearchInput = ({ setSearchTerm }: ISearchInputProps) => {
  return (
    <StyledSearchInput>
      <input
        type='text'
        placeholder='Search'
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <div className='search-icon'>
        <img src='../../../public/search-icon.svg' alt='Search Icon' />
      </div>
    </StyledSearchInput>
  );
};

export default SearchInput;
