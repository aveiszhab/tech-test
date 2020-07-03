import React, { useState } from 'react';
import '../styles/App.css';
import Search from './Search';
import SearchResults from '../components/SearchResults';

function App() {
  
  const [searchResult, setSearchResult] = useState([]);

  return (
    <div className="App">
    <img
      className='nasa-logo'
      src='https://cdn.cnn.com/cnnnext/dam/assets/200424060716-nasa-worm-logo.jpg'
      alt='nasa-logo'
      name='nasa-logo'
    />
    <Search setSearchResultList ={setSearchResult}/>
    <SearchResults results = {searchResult} />
    </div>
  );
}

export default App;
