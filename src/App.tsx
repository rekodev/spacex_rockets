import { useState, useEffect } from 'react';
import SearchBar from './components/SearchBar';
import Table from './components/Table';
import GlobalStyles from './styles/GlobalStyles';
import { StyledSectionContainer } from './styles/SectionContainer';
import axios from 'axios';

interface IRocketData {
  rocket_name: string;
  diameter: { meters: number };
  height: { meters: number };
  mass: { kg: number };
  cost_per_launch: number;
}

function App() {
  const [data, setData] = useState<IRocketData[]>([]);
  const [loading, setLoading] = useState<boolean | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [resultCount, setResultCount] = useState<number | null>(null);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios.get('https://api.spacexdata.com/v3/rockets');

        setData(result.data);

        setLoading(false);
      } catch (error) {
        console.error('Error fetching data: ', error);
        setError('Error...');
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error...</p>;
  }

  const headers = [
    'Rocket Name',
    'Diameter',
    'Height',
    'Mass',
    'Cost per launch',
  ];

  const rows = data?.map((rocket) => ({
    'Rocket Name': rocket.rocket_name,
    Diameter: `${rocket.diameter.meters.toString()}m`,
    Height: `${rocket.height.meters.toString()}m`,
    Mass: `${rocket.mass.kg.toString()}kg`,
    'Cost per launch': `$${rocket.cost_per_launch.toString()}`,
  }));

  console.log(searchTerm);

  return (
    <>
      <GlobalStyles />
      <main>
        <section>
          <StyledSectionContainer>
            <SearchBar
              resultCount={resultCount}
              setSearchTerm={setSearchTerm}
            />
            {rows && (
              <Table
                headers={headers}
                rows={rows}
                searchTerm={searchTerm}
                setResultCount={setResultCount}
              />
            )}
          </StyledSectionContainer>
        </section>
      </main>
    </>
  );
}

export default App;
