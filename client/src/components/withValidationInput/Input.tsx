import React from 'react';
import './input.css';

interface IProps {
    className?: string
    value: string
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
    placeholder: string
    errorMessage: string
}

const Input: React.FC<IProps> = ({className, value, errorMessage, onChange, placeholder}) => {

    return (
        <>
            <input
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                className={'withValidInput ' + className + ' ' + (!!errorMessage && 'invalid')}/>
            {!!errorMessage && <span className={'error-message'}>
                {errorMessage}
            </span>}
        </>
    );
};

export default Input;