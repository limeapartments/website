import React from 'react';
import styled, { keyframes } from 'styled-components';

const PulseKeyframes = keyframes`
  0% {
    background-color: #db3fa7;
  }
  25% {
    background-color: #ae00ff
  }
  50% {
    background-color: #009afc
  }
  75% {
    background-color: #10d881
  }
  100% {
    background-color: #ffc000
  }
`;

const Background = styled.div`
  height: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  animation: ${PulseKeyframes} 40s ease-in 0s infinite alternate;
`;

export default class Footer extends React.Component {
  render() {
    return (
      <Background>
        <img style={{ height: 40 }} src={require('../../static/images/lime-logo.png')} />
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <div style={{ fontFamily: 'Open Sans', fontSize: 13, color: 'white' }}>
            Lime Apartments | 2904 Lyndale Avenue South • Minneapolis, Minnesota 55408 | 855.246.1190 | refresh@limeapartments.com
          </div>
          <div style={{ fontFamily: 'Open Sans', fontSize: 13, color: 'white' }}>
            ©2018 Saturday Properties | Photography & Site Design: Carbon Creative
          </div>
        </div>
      </Background>
    );
  }
}
