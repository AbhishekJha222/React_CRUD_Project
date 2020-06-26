import React from 'react';
import {Heading} from './Heading';
import {UserList} from './UserList';

export const Home = () => {
    return (
        <React.Fragment>
           <Heading />
           <UserList />
        </React.Fragment>
    )
}
