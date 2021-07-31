import axios from 'axios';
import { useEffect, useState } from 'react';

function App() {
  const [countries, setCountries] = useState([]);
  const [search, setSearch] = useState('');
  // const [weather, setWeather] = useState({});
  // const [country, setCountry] = useState({ name: '', capital: '' });

  // const api_key = process.env.REACT_APP_API_KEY;

  useEffect(() => {
    if (search === '') return;
    const url = `https://restcountries.eu/rest/v2/name/${search}`;
    axios.get(url).then((response) => {
      setCountries(response.data);
    });
  }, [search]);

  // useEffect(() => {
  //   if (countries.length !== 1) return;
  //   const url2 = `http://api.weatherstack.com/current?access_key=${api_key}&query=${country.capital}, ${country.name}`;
  //   axios.get(url2).then((response) => {
  //     setWeather(response.data);
  //   });
  // }, [country, api_key, countries]);

  // useEffect(() => {
  //   if (countries.length === 1) {
  //     setCountry(countries[0]);
  //   }
  // }, [countries]);

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
          countries.map(({ name, capital, population, languages, flag }) => {
            return (
              <div key={name}>
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
                {/* {weather !== {} && (
                  <>
                    <h4>Weather in {capital}</h4>
                    <p>
                      temperature: {weather.current.temperature} Celsius
                    </p>{' '}
                  </>
                )} */}
              </div>
            );
          })
        ) : (
          countries.map(({ name }) => {
            return (
              <div key={name} style={{ marginTop: '3px' }}>
                <span>{name}</span>{' '}
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
