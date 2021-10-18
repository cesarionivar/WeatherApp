export const fetchData = async (city) => {
  const resp = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.REACT_APP_APIKEY}`
  );

  const data = await resp.json();

  return data;
};
