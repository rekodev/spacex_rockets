import SearchBar from './components/SearchBar';
import Table from './components/Table';
import GlobalStyles from './styles/GlobalStyles';
import { StyledSectionContainer } from './styles/SectionContainer';

function App() {
  const headers = [
    'Rocket Name',
    'Diameter',
    'Height',
    'Mass',
    'Cost per launch',
  ];
  const rows = [
    ['Rocket 1', 'Diameter 1', 'Height 1', 'Mass 1', 'Cost 1'],
    ['Rocket 2', 'Diameter 2', 'Height 2', 'Mass 2', 'Cost 2'],
    ['Rocket 3', 'Diameter 3', 'Height 3', 'Mass 3', 'Cost 3'],
  ];

  return (
    <>
      <GlobalStyles />
      <main>
        <section>
          <StyledSectionContainer>
            <SearchBar />
            <Table headers={headers} rows={rows} />
          </StyledSectionContainer>
        </section>
      </main>
    </>
  );
}

export default App;
