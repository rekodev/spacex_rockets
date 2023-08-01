import { StyledSearchInput } from './style';
import searchIcon from '../../assets/images/search-icon.svg';

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
        <img src={searchIcon} alt='Search Icon' />
      </div>
    </StyledSearchInput>
  );
};

export default SearchInput;
