import React from 'react';
import { useClimaValues } from '../context/ClimaProvider';
import { convertMeterToMiles } from '../helpers/conventions';

const WeatherDetails = () => {
  const [{ clima }] = useClimaValues();

  return (
    <div className='weatherDetails'>
      <p>Today's Highlights</p>
      <div className='weatherDetails__feature'>
        <div className='block1'>
          <div className='wind'>
            <p className='feature__name'>Wind status</p>
            <p className='feature__data'>
              <span>{clima?.wind?.speed}</span>
              <span>mph</span>
            </p>
          </div>
          <div className='humidity'>
            <p className='feature__name'>Humidity</p>
            <p className='feature__data'>
              <span>{clima?.main?.humidity}</span>
              <span>%</span>
            </p>
          </div>
        </div>
        <div className='block2'>
          <div className='visibility'>
            <p className='feature__name'>Visibility</p>
            <p className='feature__data'>
              <span>{convertMeterToMiles(clima?.visibility)}</span>
              <span>miles</span>
            </p>
          </div>
          <div className='presure'>
            <p className='feature__name'>Air Presure</p>
            <p className='feature__data'>
              <span>{clima?.main?.pressure}</span>
              <span>mb</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherDetails;
