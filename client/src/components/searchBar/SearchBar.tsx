import React, {useState} from 'react';
import './searchBar.css';
import icon from '../../assets/search.svg';

const SearchBar = () => {

    const [input, setInput] = useState('');

    return (
        <div className={'search-bar'}>
            <div
                className={'search-bar__icon'}
                style={{
                    mask: `url(${icon})`,
                    WebkitMaskImage: `url(${icon})`
                }}
            />
            <input
                className={'search-bar__input'}
                placeholder={'Search'}
                value={input}
                type={'text'}
                onChange={e => setInput(e.target.value)}/>
        </div>
    );
};

export default SearchBar;