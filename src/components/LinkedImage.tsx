import React from 'react';

export default class LinkedImage extends React.Component<{
  src: string,
  link: string
}> {
  render() {
    return (
      <div
        onClick={() => window.open(this.props.link, '_blank')}
        style={{ cursor: 'pointer' }}
      >
        <img src={this.props.src} />
      </div>
    );
  }
}
