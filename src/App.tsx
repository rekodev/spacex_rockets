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
    {
      'Rocket Name': 'Rocket 1',
      Diameter: 'Diameter 1',
      Height: 'Height 1',
      Mass: 'Mass 1',
      'Cost per launch': 'Cost 1',
    },
    {
      'Rocket Name': 'Rocket 2',
      Diameter: 'Diameter 2',
      Height: 'Height 2',
      Mass: 'Mass 2',
      'Cost per launch': 'Cost 2',
    },
    {
      'Rocket Name': 'Rocket 3',
      Diameter: 'Diameter 3',
      Height: 'Height 3',
      Mass: 'Mass 3',
      'Cost per launch': 'Cost 3',
    },
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
