import React from 'react'
import './Nav.css'
import { appendList } from '../actions'
import { store } from '../index'

class Nav extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: 0,
            completed: false
        }
        this.onsubmit = this.onsubmit.bind(this);
    }
    onsubmit() {
        if (this.text.value.trim().length === 0) {
            alert('Must write some text on input field');
        } else {
            store.dispatch(appendList([this.state.id, new Date().toDateString(), this.text.value, this.state.completed]))
            this.text.value = '';
            this.setState(prev => ({ id: prev.id++ }));
        }

    }
    render() {
        return (
            <div className="appendBar">
                <input ref={(input) => { this.text = input }} placeholder="write your ToDoList" type="text"></input>
                <button onClick={this.onsubmit}>register</button>
            </div>
        )
    }
}

export default Nav;