import React from 'react';
import '../styles/Search.css';

const Search = () => {
    
    return(
        <>
            <form
                className='search-form'
            >
                <input
                    className='search-input'
                    type='text'
                    placeholder='Search for an image'
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
