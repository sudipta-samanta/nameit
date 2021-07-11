import React from 'react';
import { NameCard } from '../NameCard/NameCard';
import './ResultsContainer.css'

export const ResultsContainer = ({ suggestedNames }) => {
    return (
        <div className="ResultsContainer">
            {suggestedNames.map(suggestedName => <NameCard suggestedName={suggestedName} key={suggestedName} />)}
        </div >
    )
}