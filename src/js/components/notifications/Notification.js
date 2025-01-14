import React from 'react';
import ClassNames from 'classnames';

export default class Notification extends React.Component {

  render() {
    let classes = ClassNames({
      'alert': true,
      'alert-danger': this.props.type === 'error',
      'alert-warning': this.props.type === 'warning',
      'alert-success': this.props.type === 'success',
      'alert-info': this.props.type === 'info',
      'alert-dismissable': this.props.dismissable
    });
    let iconClass = ClassNames({
      'pficon': true,
      'pficon-ok': this.props.type === 'success',
      'pficon-info': this.props.type === 'info',
      'pficon-warning-triangle-o': this.props.type === 'warning',
      'pficon-error-circle-o': this.props.type === 'error'
    });

    return (
      <div className={classes}
           role="alert"
           onMouseEnter={this.props.mouseOver}
           onMouseLeave={this.props.mouseOut}>
        <span className={iconClass} aria-hidden="true"></span>
        <button type="button"
                className="close"
                aria-label="Close"
                onClick={this.props.removeNotification}>
          <span className="pficon pficon-close" aria-hidden="true"></span>
        </button>
        <strong>{this.props.title}</strong> {this.props.message}
      </div>
    );
  }
}
Notification.propTypes = {
  dismissable: React.PropTypes.bool,
  message: React.PropTypes.string.isRequired,
  mouseOut: React.PropTypes.func,
  mouseOver: React.PropTypes.func,
  removeNotification: React.PropTypes.func,
  title: React.PropTypes.string,
  type: React.PropTypes.string
};
Notification.defaultProps = {
  dismissable: true,
  title: '',
  type: 'error'
};
