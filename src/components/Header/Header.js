import React from 'react';
import { SearchBox } from './../SearchBox/SearchBox';
import './Header.css';

export const Header = ({ headerExpanded }) => {
    return (
        <div className="Header">
            <img src="https://user-images.githubusercontent.com/26179770/106359099-693e3380-6336-11eb-8069-9e36f25de5ca.png"
                alt="hero"
                className={`head-image ${headerExpanded ? "head-image-expanded" : "head-image-contracted"}`} />
            <h1 className={`head-text ${headerExpanded ? "head-text-expanded" : "head-text-contracted"}`}>Name It!</h1>
        </div>
    );
}