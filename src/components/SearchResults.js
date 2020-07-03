import React from 'react';
import '../styles/SearchResults.css';

const SearchResults = ({results}) => {
    if(!results.length) {
       return <h1 className='no-result'>No result</h1>
    } else {
    return(
        <div className='image-container'>
            <>
                {results.map(image => 
                    <img 
                    key={image}
                    src={image}
                    alt='spaceImage'
                    className='spaceImages'
                    />
                )}
            </>            
        </div>
    )
    };
};
    
    

export default SearchResults;