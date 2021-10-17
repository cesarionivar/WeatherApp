import { types } from '../types/types';

export const climaInitialState = {
  clima: {
    coord: {
      lon: 27.9315,
      lat: 45.9023,
    },
    weather: [
      {
        id: 804,
        main: 'Clouds',
        description: 'overcast clouds',
        icon: '04n',
      },
    ],
    base: 'stations',
    main: {
      temp: 282.77,
      feels_like: 280.41,
      temp_min: 282.77,
      temp_max: 282.77,
      pressure: 1019,
      humidity: 79,
      sea_level: 1019,
      grnd_level: 1013,
    },
    visibility: 10000,
    wind: {
      speed: 4.63,
      deg: 339,
      gust: 9.19,
    },
    clouds: {
      all: 100,
    },
    dt: 1634424569,
    sys: {
      country: 'RO',
      sunrise: 1634444847,
      sunset: 1634483967,
    },
    timezone: 10800,
    id: 683352,
    name: 'Moscu',
    cod: 200,
  },
};

export const climaReducer = (state, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
