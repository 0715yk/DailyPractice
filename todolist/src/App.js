import React from 'react';
import './App.css';
import Nav from './components/Nav';
import ToDoLists from './containers/appendList'

class App extends React.Component {
  // eslint-disable-next-line
  constructor(props) {
    super(props);
    this.state = {
      id: 0,
      completed: false,
    }
  }

  render() {
    return (
      <>
        <div className="Nav">
          <Nav />
        </div>
        <ToDoLists />
      </>
    );
  }
}

export default App;
