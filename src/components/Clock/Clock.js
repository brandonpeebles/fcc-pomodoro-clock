import React from 'react';
import './Clock.css';

class Clock extends React.Component {
    constructor(props) {
        super(props);
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
                <h2 id="time-left">00:00</h2>
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