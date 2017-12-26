import React from 'react';
import { Link } from 'react-router-dom';

class App extends React.Component {
  render() {
    return (
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
        <hr />
        {this.props.children}
      </div>
    );
  }
}

export default App;
