import React, { Component } from 'react'; // import the component feature from react
import './index.css';
import { Form, FormControl, Button } from 'react-bootstrap';

class Countdown extends Component {

  constructor(props) {
    super(props);
    this.state = {
      countnumber: 0,
      newCountnumber: 0,
      timer: 0 
    }
  }
  
  startCountdown(countnumber) {
    // minus 1 every 1 second
    if(this.state.timer == 0) {
      this.setState({
        newCountnumber: countnumber, 
        timer: setInterval(() => this.countToZero(), 1000)
      });
    }
  }
  
  countToZero() {

    if(this.state.newCountnumber > 1 ) {
      this.setState({newCountnumber: this.state.newCountnumber - 1});
    } else {
      this.cancelTimer();
    }
  }

  cancelTimer() {
    clearInterval(this.state.timer);
    this.setState({timer:0, newCountnumber: 0});
  }

  render() {
    return (
      <div className="Countdown">
        <div className="Countdown-title">Countdown {this.state.newCountnumber}</div>
        <Form inline>
          <FormControl className="Countdown-input" placeholder='new number' onChange={event=>this.setState({countnumber: event.target.value})}/>
          <Button onClick={() => this.startCountdown(this.state.countnumber)}>Submit</Button> <Button onClick={() => this.cancelTimer()}>Cancel</Button>
        </Form>
      </div>
    )
  }
}

export default Countdown;
