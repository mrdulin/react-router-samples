import React from 'react';
import './style.css';
import { Link } from 'react-router-dom';
import Container from '../app/container';
import { Transition } from 'react-transition-group';

const duration = 300;
const defaultStyle = {
  transition: `transform ${duration}ms ease-in-out`,
  transform: `translate3d(0, 0, 0)`
};

const transitionStyles = {
  exiting: { transform: `translate3d(0, 0, 0)` },
  exited: { transform: `translate3d(-100%, 0, 0)` }
};

class Home extends React.Component {
  constructor() {
    super();
    this.state = { show: false };
  }
  componentDidMount() {
    this.setState({ show: true });
  }
  render() {
    return (
      <Transition in={this.state.show} timeout={duration}>
        {state => {
          const style = {
            ...defaultStyle,
            ...transitionStyles[state]
          };

          return (
            <Container
              className="home"
              header="home"
              footer="home footer"
              style={style}
            >
              <h2>Home</h2>
              <Link to="/about">about</Link>
            </Container>
          );
        }}
      </Transition>
    );
  }
}

export default Home;
