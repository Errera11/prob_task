import React from 'react';
import UserItem from "../userItem/UserItem";
import {User} from "../../api/api";
import './userTable.css';

interface IProps {
    users: User[]
}

const UserTable: React.FC<IProps> = ({users}) => {
    const gridHeaders = ['Avatar', 'Name', 'Birthday', 'Cell number', 'Email', 'City'];
    return (
        <div className={'grid'}>
            {gridHeaders.map((header, index) => <span key={index} className={'grid__header'}>{header}</span>)}
            {!!users?.length && users.map((user, index) => <UserItem key={index} user={user}/>)}
        </div>
    );
};

export default UserTable;