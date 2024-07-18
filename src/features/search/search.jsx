import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setSearch, clearSearch, selectSearch } from './searchSlice';
import './search.css';

export const Search = () => {
  const searchTerm = useSelector(selectSearch);
  const dispatch = useDispatch();

  const onSearchTermChangeHandler = (e) => {
    const userInput = e.target.value;
    dispatch(setSearch(userInput));
  };

  const onClearSearchTermHandler = () => {
    dispatch(clearSearch());
  };

  return (
    <div id='search-container'>
      <img id='search-icon' alt='search' src='../../resources/search.png' />
      <input
        id='search'
        type='text'
        value={searchTerm}
        onChange={onSearchTermChangeHandler}
        placeholder='Search Images'
      />
      {searchTerm.length > 0 && (
        <button
          onClick={onClearSearchTermHandler}
          type='button'
          id='search-clear-button'
          className={searchTerm.length > 0 ? 'show' : ''}
        >
          <img src='../../resources/close.png' alt='clear' />
        </button>
      )}
    </div>
  );
};


