import React from 'react';

const Temp = () => {
  return (
    <div className='app__temp'>
      <div className='app__tempTop'>
        <button>Search places</button>
        <span>
          <i className='fas fa-location-arrow'></i>
        </span>
      </div>
      <img src='https://openweathermap.org/img/wn/10d@4x.png' alt='Weather' />
      <p className='temp'>
        15<span>°C</span>
      </p>
      <p className='weather'>Clouds</p>
      <p className='location'>
        <i className='fas fa-map-marker-alt'></i> &nbsp; Rusia
      </p>
    </div>
  );
};

export default Temp;
