import React , { useState } from 'react';
import '../styles/Search.css';
import getImages from '../requests/getImages'

const Search = () => {
    const [searchText, setSearchText] = useState('');
    
    const handleSubmit = async (event) => {
        event.preventDefault();
        await getImages(searchText);
    };

    
    return(
        <>
            <form
                className='search-form'
                onSubmit={handleSubmit}
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
