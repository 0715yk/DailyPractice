import React from 'react'
import './Nav.css'
import { appendList } from '../actions'
import { store } from '../index'

class Nav extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: 0,
            completed: false,
            date: null
        }
        this.onsubmit = this.onsubmit.bind(this);
    }
    onsubmit() {
        if (this.text.value.trim().length === 0) {
            alert('Must write some text on input field');
        } else {
            let date = new Date().toLocaleDateString();
            date = date.substring(0, date.length - 1);
            store.dispatch(appendList([this.state.id, date, this.text.value, this.state.completed]))
            this.text.value = '';
            this.setState(prev => ({ id: prev.id++ }));
        }

    }
    componentDidMount() {
        setInterval(() => {
            let date = new Date().toLocaleDateString();
            date = date.substring(0, date.length - 1);
            let time = new Date().toLocaleTimeString();
            let weeklist = [null, '월', '화', '수', '목', '금', '토', '일'];
            let weekday = new Date().getDay();
            this.setState({ date: `${date} / ${time} (${weeklist[weekday]})` })
        }, 10);
    }

    render() {
        return (
            <>
                {this.state.date ? (<div id="clockPart">{this.state.date}</div>)
                    :
                    (<div id="clockPart">Loading...</div>)}
                <div id="inputArea">
                    <input ref={(input) => { this.text = input }} placeholder="write your ToDoList" type="text"></input>
                    <button onClick={this.onsubmit}>등록</button>
                </div>
            </>
        )
    }
}

export default Nav;