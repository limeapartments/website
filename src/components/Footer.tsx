import React from 'react';
import styled, { keyframes } from 'styled-components';
import MouseoverA from './MouseoverA';

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
  padding: 20px;
`;

export default class Footer extends React.Component {
  render() {
    return (
      <Background>
        <div
          style={{ color: 'white', cursor: 'pointer', fontSize: 16 }}
          onClick={() => {
            window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
          }}
        >
          BACK TO TOP
        </div>
        <div style={{ height: 2, width: 300, backgroundColor: 'rgba(191, 55, 145, 1)'}} />
        <img style={{ height: 40 }} src={require('../../static/images/lime-logo.png')} />
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
          <div style={{ fontFamily: 'Open Sans, Muli', fontSize: 14, color: 'white', textAlign: 'center' }}>
            Lime Apartments | 2904 Lyndale Avenue South • Minneapolis, Minnesota 55408 | 855.246.1190 | refresh@limeapartments.com
          </div>
          <div style={{ fontFamily: 'Open Sans, Muli', fontSize: 14, color: 'white', textAlign: 'center', marginTop: 10 }}>
            ©2018
            <MouseoverA
              href="http://www.saturdayproperties.com/"
              target="_blank"
              activeStyle={{ color: 'black' }}
              inactiveStyle={{ color: 'white', textDecoration: 'none' }}
              style={{ marginLeft: 4 }}
            >
              Saturday Properties
            </MouseoverA> | Photography & Site Design:
            <MouseoverA
              href="http://www.carboncreative.com/"
              target="_blank"
              activeStyle={{ color: 'black' }}
              inactiveStyle={{ color: 'white', textDecoration: 'none' }}
              style={{ marginLeft: 4 }}
            >
              Carbon Creative
            </MouseoverA>
          </div>
        </div>
      </Background>
    );
  }
}
