import React from 'react';

export default class Carousel extends React.Component<{
  images: any[]
}> {
  state = {
    imageIndex: 0,
  };

  timer: any;

  componentDidMount() {
    this.timer = setInterval(() => {
      this.setState({
        imageIndex: (this.state.imageIndex + 1) % this.props.images.length
      });
    }, 5000);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
    this.timer = undefined;
  }

  render() {
    return (
      <div style={{
        backgroundImage: `url(${this.props.images[this.state.imageIndex]})`,
        backgroundSize: 'cover',
        backgroundPosition: 'bottom',
        height: 'inherit',
        width: '100%',
        objectFit: 'cover',
      }}>
        {this.props.children}
      </div>
    );
  }
}
