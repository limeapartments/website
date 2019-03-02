import React from 'react';
import { Link } from 'react-router-dom';

export default class MouseoverLink extends React.Component<{
  activeColor: string,
  inactiveColor: string,
  to: string,
  style?: any
}> {
  state = {
    active: false
  };
  render() {
    const { activeColor, inactiveColor, to } = this.props;
    return (
      <Link
        to={to}
        style={{
          color: this.state.active ? activeColor : inactiveColor,
          textDecoration: 'none',
          textTransform: 'uppercase',
          fontFamily: 'Abel',
          fontSize: 20,
          marginLeft: 4,
          marginRight: 4,
          ...(this.props.style || {})
        }}
        onMouseEnter={() => this.setState({ active: true })}
        onMouseLeave={() => this.setState({ active: false })}
      >
        {this.props.children}
      </Link>
    );
  }
}
