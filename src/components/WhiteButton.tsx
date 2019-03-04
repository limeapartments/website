import React from 'react';
import { Link } from 'react-router-dom';

export default class WhiteButton extends React.Component<{ to: string, style?: any }> {
  render() {
    return (
      <Link
        to={this.props.to}
        style={{
          backgroundColor: 'white',
          borderRadius: 20,
          paddingLeft: 16,
          paddingRight: 16,
          paddingTop: 8,
          paddingBottom: 8,
          margin: 8,
          fontFamily: 'Poppins',
          fontWeight: 600,
          fontSize: 20,
          color: 'black',
          textDecoration: 'none',
          textTransform: 'uppercase',
          ...(this.props.style || {})
        }}
      >
        {this.props.children}
      </Link>
    );
  }
}
