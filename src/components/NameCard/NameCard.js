import React from 'react';

import './NameCard.css';

const nameCheapURL = "https://www.namecheap.com/domains/registration/results/?domain=";

export const NameCard = ({ suggestedName }) => {
    return (
        <a className="name-link"
            target="_blank"
            rel="noopener noreferrer"
            href={`${nameCheapURL}${suggestedName}`}>
            <div className="NameCard">
                <p className="result-name">{suggestedName}</p>
            </div>
        </a>
    )
}