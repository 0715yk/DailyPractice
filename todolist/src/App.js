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
        <div className="Nav" >
          <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAATYAAACjCAMAAAA3vsLfAAAAeFBMVEX///8AAAA4ODju7u6FhYVDQ0PCwsL5+fmrq6umpqbFxcX8/Pz19fW2traLi4ubm5vh4eFxcXHn5+eBgYGioqLY2NhoaGjMzMweHh6Ojo53d3dlZWVKSkrc3NxZWVk1NTUMDAwWFhYlJSUtLS1JSUk/Pz9cXFyVlZW/OQ4eAAAEZUlEQVR4nO3a2XqiShiGUUAUBxCHII4YNYn3f4e7BqAKWmxjp7fQz7sODEKJ+OWvARPHAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPCgyasvoKN6r76ADpo4V3f26ovooNh1T4tXX0S3TFRqKjdGuO9QqVFv35SnRm7fUqb2ZG7p+nhcN07E+/NlvXGcwfAfm6qt1IQnchvL1zWGchQHl85WPP5TU/VbJbX5E2e4H5snDvo92WT6B1fZNtXUts+c4tHY/Oev8tXqK4ym1KbiWf/Bcz4Q261OqqIcPPgerzXxlpXnjbXm/3BsThrVW3QntqAvh2ejuYfKavt48KwPxfYrFdv4wfd4peCjOsQ0pxZ+iR2XoRCIZ5No93ncbw6104XDzDvu/VlaxhaOMs/bx5XZWMcmzjQ66Bb9XRzKAyrtpdif/pUP+2N0aia35tR8s1vEMTgX02xony56z3dnRWyj4kUbq5mOTe59E101f83YmXnlW1THjbaZfBTXqXO7s/I42rGNzJOL1RVHlZfL2Lbm2ZdpZ2IbOUnZIElN41bPsCY1faH31msXcyAc283MLJG6Vb3qsnlbztl2bHv5QxVc3zptq6vt0/5Ufq1YaqvcUSw73jkWQtVDV7Oe7pOjyun2STjL0+ot1I/poqd/H0nR0IotkI/XycJ7Xyaz60bFG8fXVs+m00pO2b3UHGsmjcp6WMjcznkRJeZlB12Vajwcyh2qEMtuamIbLvI8A3WSUD5r/0y6cZvcuKMq120rsbEO1L6RVUVXsXkKdU9cqmqTHTvTB+cqx/xMdieVj6d4rA91Zd3WlNut+9AytqNpoIol0tsrq6BUQR50MIoat4rlih3bvKh1ueboSmwNud28ey9im5zERqz3BWU3dJzMNUP5QO5PrS53sMqyElvYL9502qHYbuZ2+zuPsto8k0/Pqra56ZK68x6sTNOmahPzd7FcG3Qottq8IK1uNyxjk/kc9T7VGfP7cTV/5ncDO7kdeuZk8sXvQX6mamwi/MFKv2+HYvslt4bUVDv1yVUPVKv+3lpseflxVVyZikal6YbXMgVrlnXqsamkV+p3omK7/q0P+sOmtdQa/lalqmm1CNNA9arVOBmerD6qBzf3HCW6dsRMqlJwp2miF3Llt0R2bLOtuxXnlCuZnR4q3SicJbcvoV3s3JpqLS8yVUWJ1V582MKsVra9vOpycdmwvm7LDcwCvNV3CSWTW3NqeSmoOAbms2aBaWHt1u3suysrCbvalmUD2YeLG5VW35MaRW53UsvXXjqOwz7frg5ESV4tn+X3beP8XnYdWc0uKkW5+83cCOuvSL66VG1FbndTE71w2z97WazGvuS6+tpGYb1JOt3t/LH85jaKdB2m/m63HFTGy4E4mDjiIZLDXRD5u+2o+CJlmB3P/XnLv28zpr9PTfo//rWhU/8+4VuDOx43fPUFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4K7/AF1FK5H6gDCeAAAAAElFTkSuQmCC" alt="logo" />
          <Nav />
        </div>
        <div className="toDoLists">
          <ToDoLists />
        </div>
      </>
    );
  }
}

export default App;
