
import React from 'react';
import ToDoList from './ToDoList';
import './ToDoLists.css';

function ToDoLists(props) {
    return (
        <>
            <ul className="lists">
                {props.lists.map(el => {
                    return <ToDoList key={el[0]} id={el[0]} date={el[1]} text={el[2]} completed={el[3]} />
                })}
            </ul>
        </>
    );
}

export default ToDoLists;