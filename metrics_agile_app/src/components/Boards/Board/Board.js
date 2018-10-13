import React from 'react';
import classes from './Board.css';

const board = (props)  => (
    <li className={classes.BoardLine} key={props.label}>
        <strong>{props.name}</strong>
        <p>{props.description}</p>
    </li>
);
    

export default board;