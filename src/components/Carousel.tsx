import React from 'react';
import styled, { keyframes } from 'styled-components';

/**
 * An auto scrolling image carousel
 **/

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const fadeOut = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`;

const ImageDiv = styled.div<{
  image: any,
  index: number,
  activeIndex: number,
  nextIndex: number,
  lastIndex: number
}>`
  background-image: url(${props => props.image});
  background-size: cover;
  background-position: bottom;
  background-repeat: no-repeat;
  z-index: ${props => -50 + props.index};
  position: absolute;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: ${props => props.index === props.lastIndex ? 1 : 0};
  animation: ${props => props.index === props.lastIndex ? fadeOut : (props.index === props.activeIndex ? fadeIn : '')};
  animation-duration: 2s;
  animation-delay: 3s;
  animation-timing: linear;
  animation-fill-mode: forwards;
`;

export default class Carousel extends React.Component<{
  images: any[]
}> {
  state = {
    imageIndex: 0,
  };

  timer: any;

  lastImageIndex = () => {
    return ((this.state.imageIndex - 1) + this.props.images.length) % this.props.images.length;
  }

  nextImageIndex = () => {
    return (this.state.imageIndex + 1) % this.props.images.length;
  };

  componentDidMount() {
    this.timer = setInterval(() => {
      this.setState({
        imageIndex: this.nextImageIndex()
      });
    }, 6000);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
    this.timer = undefined;
  }

  render() {
    return (
      <div style={{ height: 'inherit', width: '100%' }}>
        <div style={{
          position: 'relative',
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.3)'
        }}>
          {this.props.images.map((image: any, index: number) => (
            <ImageDiv
              key={index}
              image={image}
              index={index}
              activeIndex={this.state.imageIndex}
              nextIndex={this.nextImageIndex()}
              lastIndex={this.lastImageIndex()}
            />
          ))}
          {this.props.children}
        </div>
      </div>
    );
  }
}
