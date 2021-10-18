import React, { useState } from 'react';
import { useMenuValues } from '../context/MenuProvider';
import { types } from '../types/types';

const Search = ({ setCity }) => {
  const [place, setPlace] = useState('');
  const [{ status }, dispatch] = useMenuValues();

  const handleCloseMenu = () => {
    dispatch({
      type: types.setMenuStatus,
    });
  };

  const handleChange = (e) => {
    setPlace(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setCity(place);
    setPlace('');
    handleCloseMenu();
  };

  return (
    <div className={`search__menu ${status && 'show'}`}>
      <button onClick={handleCloseMenu} className='search__menuExit'>
        X
      </button>
      <form onSubmit={handleSubmit} className='search__menuForm'>
        <div className='formControl'>
          <span>
            <i className='fas fa-search'></i>
          </span>
          <input
            value={place}
            onChange={handleChange}
            placeholder='Search location'
          />
        </div>
        <button type='submit'>Search</button>
      </form>

      {/* <ul className='search__menuResults'>
        <li>
          <a href='#!'>London</a>
        </li>
        <li>
          <a href='#!'>Barcelona</a>
        </li>
        <li>
          <a href='#!'>Long Beach</a>
        </li>
      </ul> */}
    </div>
  );
};

export default Search;
