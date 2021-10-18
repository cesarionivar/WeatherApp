import React, { useEffect, useState } from 'react';
import { useClimaValues } from '../context/ClimaProvider';
import { useMenuValues } from '../context/MenuProvider';
import { convertKelvinToCelsius } from '../helpers/conventions';
import { types } from '../types/types';

const Temp = () => {
  const [, dispatch] = useMenuValues();
  const [{ clima }] = useClimaValues();
  const [tempCelsius, setTempCelsius] = useState(null);

  useEffect(() => {
    setTempCelsius(convertKelvinToCelsius(clima?.main?.temp));
  }, [clima]);

  const handleOpenMenu = () => {
    dispatch({
      type: types.setMenuStatus,
    });
  };

  return (
    <div className='app__temp'>
      <div className='app__tempTop'>
        <button onClick={handleOpenMenu}>Search place</button>
        <span>
          <i className='fas fa-location-arrow'></i>
        </span>
      </div>
      <img
        src={`https://openweathermap.org/img/wn/${clima?.weather[0]?.icon}@4x.png`}
        alt='Weather'
      />
      <p className='temp'>
        {tempCelsius}
        <span>°C</span>
      </p>
      <p className='weather'>{clima?.weather[0]?.main}</p>
      <p className='location'>
        <i className='fas fa-map-marker-alt'></i> &nbsp; {clima?.name}
      </p>
    </div>
  );
};

export default Temp;
