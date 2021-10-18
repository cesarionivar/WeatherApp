import React, { useEffect, useState } from 'react';
import Search from './components/Search';
import Temp from './components/Temp';
import WeatherDetails from './components/WeatherDetails';
import { useClimaValues } from './context/ClimaProvider';
import { fetchData } from './helpers/fetchData';
import { types } from './types/types';

const App = () => {
  const [, dispatch] = useClimaValues();

  useEffect(() => {
    const getData = async () => {
      const weatherData = await fetchData('Villa Altagracia');
      dispatch({
        type: types.setClima,
        payload: weatherData,
      });
    };

    getData();
  }, []);

  return (
    <div className='app'>
      <Temp />
      <Search />
      <WeatherDetails />
    </div>
  );
};

export default App;
