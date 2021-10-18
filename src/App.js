import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import Search from './components/Search';
import Temp from './components/Temp';
import WeatherDetails from './components/WeatherDetails';
import { useClimaValues } from './context/ClimaProvider';
import { fetchData } from './helpers/fetchData';
import { types } from './types/types';

const App = () => {
  const [city, setCity] = useState('Santo Domingo');
  const [, dispatch] = useClimaValues();

  useEffect(() => {
    const getData = async () => {
      const weatherData = await fetchData(city);

      if (!weatherData.message) {
        dispatch({
          type: types.setClima,
          payload: weatherData,
        });
      } else {
        Swal.fire('Error', 'Sorry, city not found!', 'error');
      }
    };

    getData();
  }, [city, dispatch]);

  return (
    <div className='app'>
      <Temp />
      <Search setCity={setCity} />
      <WeatherDetails />
    </div>
  );
};

export default App;
