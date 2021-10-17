import React from 'react';
import Search from './components/Search';
import Temp from './components/Temp';
import WeatherDetails from './components/WeatherDetails';

const App = () => {
  return (
    <div className='app'>
      <Temp />
      <Search />
      <WeatherDetails />
    </div>
  );
};

export default App;
