import React , { useState } from 'react';
import '../styles/Search.css';

const Search = () => {
    const [searchText, setSearchText] = useState('');
    console.log(searchText);
    
    return(
        <>
            <form
                className='search-form'
            >
                <input
                    className='search-input'
                    type='text'
                    placeholder='Search for an image'
                    onChange={(e) => setSearchText(e.target.value)}
                >
                </input>
                <button
                    className='submit-button'
                    type='submit'
                    name='go'
                >
                    Go!
                </button>
            </form>
        </>
    )   
};

export default Search;
