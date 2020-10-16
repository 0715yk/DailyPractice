import React from 'react';
import { store } from '../index';
import './ToDoList.css'
import { completedList, deleteList } from '../actions';

class ToDoList extends React.Component {
    constructor(props) {
        super(props);
        this.checkComplete = this.checkComplete.bind(this);
        this.deleteList = this.deleteList.bind(this);
    }
    checkComplete() {
        store.dispatch(completedList(this.idValue.value));
    }

    deleteList() {
        store.dispatch(deleteList(this.idValue.value));
    }

    render() {
        const { id, date, text, completed } = this.props;
        return (
            <>
                <li className="list">
                    <div id="date">{date}</div>
                    <div id="text" style={completed ? { textDecorationLine: 'line-through' } : {}}>{text.length <= 30 ? text : `${text.substring(0, 31)}...`}</div>
                    <input id="checkbox" type="checkbox" onChange={this.checkComplete}></input>
                    <input type="hidden" value={id} ref={(input) => { this.idValue = input }} />
                    <button onClick={this.deleteList}>Delete</button>
                </li>
            </>
        );
    }


}

export default ToDoList;