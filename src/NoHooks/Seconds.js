import { Component } from 'react';

class Seconds extends Component {
  
  state = { seconds: 0 };

  componentDidMount() {
    this.intervalId = setInterval(() => {
        this.setState(state => ({ seconds: state.seconds + 1 }));
       }, 1000)  
  }

  componentWillMount() {
    clearInterval(this.intervalId);
  }
  
  render() {
    const { seconds } = this.state;
    return seconds;
  }
}

export default Seconds;