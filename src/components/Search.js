import React from 'react';

const Search = () => {
  return (
    <div className='search__menu'>
      <button className='search__menuExit'>X</button>
      <form className='search__menuForm'>
        <div className='formControl'>
          <span>
            <i className='fas fa-search'></i>
          </span>
          <input placeholder='Search location' />
        </div>
        <button type='submit'>Search</button>
      </form>

      <ul className='search__menuResults'>
        <li>
          <a href='#'>London</a>
        </li>
        <li>
          <a href='#'>Barcelona</a>
        </li>
        <li>
          <a href='#'>Long Beach</a>
        </li>
      </ul>
    </div>
  );
};

export default Search;
