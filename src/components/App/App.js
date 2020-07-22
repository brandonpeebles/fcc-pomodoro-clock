import React from 'react';
import './App.css';
import Clock from '../Clock/Clock';
import SeshCtrl from '../Controls/SeshCtrl';
import BreakCtrl from '../Controls/BreakCtrl';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      label: 'Session',
      timerState: 'paused',
      sessionLength: 25,
      breakLength: 5
      //test on feature/clock
    }
    this.handleStartStopClick = this.handleStartStopClick.bind(this);
    this.handleResetClick = this.handleResetClick.bind(this);
    this.handleUpDownClick = this.handleUpDownClick.bind(this);
    this.handleTimerEnd = this.handleTimerEnd.bind(this);
    this.clockElement = React.createRef();
  }

  handleStartStopClick() {
    if (this.state.timerState === 'paused') {
      this.setState({
        timerState: 'running'
      });
    } else {
      this.setState({
        timerState: 'paused'
      });
    }
  }

  handleResetClick() {
    this.setState({
      label: 'Session',
      timerState: 'paused'
    });
    this.clockElement.current.resetTimer();
  }

  handleTimerEnd() {
    if (this.state.label === 'Session') {
      return this.setState({
        label: 'Break'
      });
    } else {
      return this.setState({
        label: 'Session'
      });
    }
  }

  handleUpDownClick(e) {
    if (this.state.timerState === 'paused') {
      var clickedBtn = e.currentTarget.id;
      // increment break
      if (clickedBtn === 'break-increment') {
        if (this.state.breakLength < 60) {
          return this.setState({
            breakLength: this.state.breakLength + 1
          })
        }
      } 
      // decrement break
      if (clickedBtn === 'break-decrement') {
        if (this.state.breakLength > 1) {
          return this.setState({
            breakLength: this.state.breakLength - 1
          })
        }
      } 
      // increment session
      if (clickedBtn === 'session-increment') {
        if (this.state.sessionLength < 60) {
          return this.setState({
            sessionLength: this.state.sessionLength + 1
          })
        }
      }
      // decrement session
      if (clickedBtn === 'session-decrement') {
        if (this.state.sessionLength > 1) {
          return this.setState({
            sessionLength: this.state.sessionLength - 1
          })
        }
      } 
    }
  } 

  render() {
    return (
      <div id="container" className="shadow-lg bg-white rounded">
        <h1>Pomodoro Clock</h1>
        <div id="controls-container">
          <BreakCtrl breakLength={this.state.breakLength} handleClick={this.handleUpDownClick} />
          <SeshCtrl sessionLength={this.state.sessionLength} handleClick={this.handleUpDownClick} />
        </div>
        <Clock ref={this.clockElement}
          label={this.state.label}
          toggleLabel={this.handleTimerEnd}
          timerState={this.state.timerState} 
          sessionLength={this.state.sessionLength}
          breakLength={this.state.breakLength}
          handleStartStopClick={this.handleStartStopClick} 
          handleResetClick={this.handleResetClick} 
        />
      </div>
    );
  }
}

export default App;
