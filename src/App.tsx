import SearchTable from './components/SearchTable';
import GlobalStyles from './styles/GlobalStyles';
import { StyledSectionContainer } from './styles/SectionContainer';

function App() {
  return (
    <>
      <GlobalStyles />
      <main>
        <section>
          <StyledSectionContainer>
            <SearchTable />
          </StyledSectionContainer>
        </section>
      </main>
    </>
  );
}

export default App;
