import React from 'react';
import './Ctrl.css';

class BreakCtrl extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div id="break-container" className="ctrl-outer">
                <h3 id="break-label">Break Length</h3>
                <div id="break-controls" className="ctrl-inner">
                    <button id="break-decrement" className="btn btn-secondary adjustBtn" onClick={this.props.handleClick}>
                        <i className="fa fa-chevron-down"></i>
                    </button>
                    <h4 id="break-length">{this.props.breakLength}</h4>
                    <button id="break-increment" className="btn btn-primary adjustBtn" onClick={this.props.handleClick}>
                        <i className="fa fa-chevron-up"></i>
                    </button>
                </div>
            </div>
        );
    }
}

export default BreakCtrl;