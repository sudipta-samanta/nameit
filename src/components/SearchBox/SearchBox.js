import React from 'react';
import './SearchBox.css'

export const SearchBox = ({ onInputChange }) => {
    return (
        <div className="SearchBox">
            <input
                type="text"
                placeholder="Type keywords"
                className="search-input"
                onChange={(event) => onInputChange(event.target.value)} />
        </div>
    )
}