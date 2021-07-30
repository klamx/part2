import axios from 'axios';
import { useEffect, useState } from 'react';

function App() {
  const [countries, setCountries] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    if (search === '') return;
    const url = `https://restcountries.eu/rest/v2/name/${search}`;
    axios.get(url).then((response) => {
      setCountries(response.data);
    });
  }, [search]);

  const handleCountry = (e) => {
    setSearch(e.target.value);
  };

  const handleShow = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div>
      <div>
        find countries:{' '}
        <input type='text' value={search} onChange={handleCountry} />
        <button
          onClick={() => {
            setSearch('');
          }}
        >
          clean
        </button>
      </div>
      <div>
        {countries.length >= 10 ? (
          <p>Too many matches, specify another filter</p>
        ) : countries.length === 1 ? (
          countries.map(
            ({ name, numericCode, capital, population, languages, flag }) => {
              return (
                <div key={numericCode}>
                  <h3>{name}</h3>
                  <p>{capital}</p>
                  <p>Populatio: {population}</p>
                  <h4>Languages</h4>
                  <ul>
                    {languages.map(({ name }) => {
                      return <li>{name}</li>;
                    })}
                  </ul>
                  <img
                    src={flag}
                    alt={name}
                    style={{ width: 100, border: '1px solid black' }}
                  />
                </div>
              );
            }
          )
        ) : (
          countries.map(({ name, numericCode }) => {
            return (
              <div style={{ marginTop: '3px' }}>
                <span key={numericCode}>{name}</span>{' '}
                <button value={name} onClick={handleShow}>
                  show
                </button>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}

export default App;
