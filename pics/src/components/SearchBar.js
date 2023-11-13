import { useState } from "react";
import './SearchBar.css';

function SearchBar({ onSubmit }) {
    const [search, setSearch] = useState('');

    const handleSearch = (event) => {
        event.preventDefault();
        onSubmit(search);
    }

    const handleChange = (event) => {
        setSearch(event.target.value);
    }

    return (
        <div className="search-bar">
            <form onSubmit={handleSearch}>
                <label>Enter search term: </label>
                <input value={search} onChange={handleChange} />
            </form>
        </div>
    );
}

export default SearchBar;