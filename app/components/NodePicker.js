import React from 'react';
import NodeStack from './NodeStack';

export default class NodePicker extends React.Component {
  /*
    Component that implements Node Count Picker expects onIncrement function
    (that expects increment parameter) passed through props from owner.
  */
  increment(increment) {
    this.props.onIncrement(increment);
  }

  render() {
    return (
      <div className="node-picker">
        <PickerArrow direction="left" increment={this.increment.bind(this, -this.props.incrementValue)}/>
        <NodeStack count={this.props.nodeCount}/>
        <PickerArrow direction="right" increment={this.increment.bind(this, this.props.incrementValue)}/>
      </div>
    );
  }
}

NodePicker.propTypes = {
  onIncrement: React.PropTypes.func.isRequired,
  nodeCount: React.PropTypes.number.isRequired,
  incrementValue: React.PropTypes.number
};
NodePicker.defaultProps = { incrementValue: 1 };


export class PickerArrow extends React.Component {
  render() {
    return (
      <button className="picker-arrow" onClick={this.props.increment}>
        <span className={"glyphicon glyphicon-chevron-"+this.props.direction} aria-hidden="true"></span>
      </button>
    );
  }
}

PickerArrow.propTypes = {
  increment: React.PropTypes.func.isRequired,
  direction: React.PropTypes.oneOf(['left', 'right']).isRequired
};