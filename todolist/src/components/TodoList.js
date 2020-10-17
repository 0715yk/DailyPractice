import React from 'react';
import { store } from '../index';
import './ToDoList.css'
import { completedList, deleteList } from '../actions';

class ToDoList extends React.Component {
    constructor(props) {
        super(props);
        this.checkComplete = this.checkComplete.bind(this);
        this.deleteList = this.deleteList.bind(this);
        this.state = {
            button: '포기'
        }
        this.buttonMouseOver = this.buttonMouseOver.bind(this);
        this.buttonMouseOut = this.buttonMouseOut.bind(this);
    }
    checkComplete() {
        store.dispatch(completedList(this.idValue.value));
    }

    deleteList() {
        store.dispatch(deleteList(this.idValue.value));
    }

    buttonMouseOver() {
        this.setState({ button: '포기하지 말자!' });
    }

    buttonMouseOut() {
        this.setState({ button: '포기' });
    }

    render() {
        const { id, date, text, completed } = this.props;
        return (
            <>
                <div className="list">
                    <div id="date">{date}</div>
                    <div id="text" style={completed ? { textDecorationLine: 'line-through' } : {}}>{text.length <= 15 ? text : `${text.substring(0, 16)}...`}</div>
                    <input id="checkbox" type="checkbox" onChange={this.checkComplete}></input>
                    <input type="hidden" value={id} ref={(input) => { this.idValue = input }} />
                    <button onMouseOver={this.buttonMouseOver} onMouseOut={this.buttonMouseOut} onClick={this.deleteList}>{this.state.button}</button>
                </div>
            </>
        );
    }


}

export default ToDoList;