import React, {ChangeEvent} from 'react';
import './input.css';

interface IProps {
    value: string
    placeholder: string
    onChange: (e: ChangeEvent<HTMLInputElement>) => void
}

const Input: React.FC<IProps> = ({value, placeholder, onChange}) => {
    return (
        <input className={'app-input'} placeholder={placeholder} value={value} onChange={onChange}/>
    );
};

export default Input;