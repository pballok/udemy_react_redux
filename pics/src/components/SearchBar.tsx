import './SearchBar.css';

import React, { useState } from 'react';

interface SearchBarProps {
    onSubmit: (term: string) => void,
}

function SearchBar({onSubmit} : SearchBarProps) {
    const [term, setTerm] = useState('');

    const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        onSubmit(term);
    }
    return (
        <div className="search-bar">
            <form onSubmit={handleFormSubmit}>
                <label>Enter Search Term</label>
                <input
                    onChange={(event) => {
                        setTerm(event.target.value);
                    }}
                    value={term} />
            </form>
        </div>
    );
}

export default SearchBar;
