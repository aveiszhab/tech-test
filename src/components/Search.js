import React , { useState } from 'react';
import '../styles/Search.css';
import getImages from '../requests/getImages';
import PropTypes from 'prop-types';

const Search = ({setSearchResultList}) => {
    const [searchText, setSearchText] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);
    
    const handleSubmit = async (event) => {
        setIsLoading(true);
        event.preventDefault();
        try {
            setSearchResultList(await getImages(searchText));        
        } catch (error) {
            setIsError(true);
        }   
        setIsLoading(false);  
    };

    if (isError) {
        return <div>Sorry, something went wrong. Please refresh the page.</div>;
    }

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
            {isLoading && <div className='loader'></div>}
        </>
    )   
};

Search.propTypes = {
    setSearchResultList: PropTypes.func.isRequired
};

export default Search;
