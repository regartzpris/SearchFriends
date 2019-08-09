import React from 'react';

import '../search-box/search-box.css'


const SearchBox = ({ placeholder, handleChange }) => (
    <input
        className='search'
        type='text'
        placeholder={placeholder}
        onChange={handleChange}
    />


)




export default SearchBox;
