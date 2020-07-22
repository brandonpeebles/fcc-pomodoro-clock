import React from 'react';
import './Clock.css';

class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            timeRemaining: this.props.sessionLength * 60000
        }
    }

    resetTimer(time=(this.props.sessionLength * 60000)) {
        this.setState({
            timeRemaining: time
        });
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        if (this.props.timerState === 'running') {
            this.setState({
                timeRemaining: this.state.timeRemaining - 1000
            });
        }
    }

    render() {
        var start_stop_icon;
        if (this.props.timerState === 'paused') {
            start_stop_icon = <i className="fa fa-play-circle fa-2x"></i>
        } else {
            start_stop_icon = <i className="fa fa-pause-circle fa-2x"></i>
        }
        return(
            <div id="clock-container" className="rounded">
                <h3 id="timer-label">{this.props.label}</h3>
                <h2 id="time-left">{this.state.timeRemaining}</h2>
                <div id="clock-controls">
                    <button id="start_stop" className="btn btn-success clockBtn" onClick={this.props.handleStartStopClick}>
                        {start_stop_icon}
                    </button>
                    <button id="reset" className="btn btn-danger clockBtn" onClick={this.props.handleResetClick}>
                        <i className="fa fa-undo fa-2x"></i>
                    </button>
                </div>
            </div>
        );
    }
}

export default Clock;