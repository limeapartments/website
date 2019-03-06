import React from 'react';

export default class LinkedImage extends React.Component<{
  src: string,
  link: string,
  width?: number,
  height?: number,
  style?: any
}> {
  render() {
    return (
      <div
        onClick={() => window.open(this.props.link, '_blank')}
        style={{ cursor: 'pointer', ...(this.props.style || {} )}}
      >
        <img
          width={this.props.width}
          height={this.props.height}
          src={this.props.src}
        />
      </div>
    );
  }
}
