import React from 'react';
import './Ctrl.css';

class SeshCtrl extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div id="session-container" className="ctrl-outer">
                <h3 id="session-label">Session Length</h3>
                <div id="session-controls" className="ctrl-inner">
                    <button id="session-decrement" className="btn btn-secondary adjustBtn" onClick={this.props.handleClick}>
                        <i className="fa fa-chevron-down"></i>
                    </button>
                    <h4 id="session-length">{this.props.sessionLength}</h4>
                    <button id="session-increment" className="btn btn-primary adjustBtn" onClick={this.props.handleClick}>
                        <i className="fa fa-chevron-up"></i>
                    </button>
                </div>
            </div>
        );
    }
}

export default SeshCtrl;