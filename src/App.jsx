import { useState } from 'react'

import './App.css';

import { SearchBar } from './components/SearchBar';
import { SearchResultList } from './components/SearchResultList';
import { Footer } from './components/Footer';

function App() {

  const [results, setResults] = useState([]);

  return (
    <div className="App">
      <div className="search-bar-conatiner">
        <SearchBar setResults={setResults}/>
        <SearchResultList results={results} />
        <Footer />
      </div>
    </div>
  )
}

export default App
