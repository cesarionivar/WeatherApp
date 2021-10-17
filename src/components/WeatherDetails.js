import React from 'react';

const WeatherDetails = () => {
  return (
    <div className='weatherDetails'>
      <p>Today's Highlights</p>
      <div className='weatherDetails__feature'>
        <div className='block1'>
          <div className='wind'>
            <p className='feature__name'>Wind status</p>
            <p className='feature__data'>
              <span>7</span>
              <span>mph</span>
            </p>
          </div>
          <div className='humidity'>
            <p className='feature__name'>Humidity</p>
            <p className='feature__data'>
              <span>75</span>
              <span>%</span>
            </p>
          </div>
        </div>
        <div className='block2'>
          <div className='visibility'>
            <p className='feature__name'>Visibility</p>
            <p className='feature__data'>
              <span>6.2</span>
              <span>miles</span>
            </p>
          </div>
          <div className='presure'>
            <p className='feature__name'>Air Presure</p>
            <p className='feature__data'>
              <span>1205</span>
              <span>mb</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherDetails;
