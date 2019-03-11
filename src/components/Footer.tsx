import React from 'react';
import styled, { keyframes } from 'styled-components';
import MouseoverA from './MouseoverA';
import MouseoverLink from './MouseoverLink';

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

const CallNowSpacer = styled.div`
  display: none;
  @media (max-width: 600px) {
    display: block;
    height: 60px;
  }
`;

export default () => (
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
    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around' }}>
      <MouseoverLink to="/amenities" activeColor="black" inactiveColor="white" style={{ textTransform: 'none' }}>
        Amenities
      </MouseoverLink>
      <MouseoverLink to="/experience" activeColor="black" inactiveColor="white" style={{ textTransform: 'none' }}>
        Experience
      </MouseoverLink>
      <MouseoverLink to="/location" activeColor="black" inactiveColor="white" style={{ textTransform: 'none' }}>
        Location
      </MouseoverLink>
      <MouseoverLink to="/floor-plans" activeColor="black" inactiveColor="white" style={{ textTransform: 'none' }}>
        Floor Plans
      </MouseoverLink>
      <MouseoverLink to="/gallery" activeColor="black" inactiveColor="white" style={{ textTransform: 'none' }}>
        Gallery
      </MouseoverLink>
      <MouseoverLink to="/residents" activeColor="black" inactiveColor="white" style={{ textTransform: 'none' }}>
        Residents
      </MouseoverLink>
      <MouseoverLink to="/contact" activeColor="black" inactiveColor="white" style={{ textTransform: 'none' }}>
        Contact
      </MouseoverLink>
      <MouseoverLink to="/redirect?url=https%3A%2F%2Fwww.rhris.com%2Fapplynow.cfm%3FsiteID%3D26756A" activeColor="black" inactiveColor="white" style={{ textTransform: 'none' }}>
        Apply Now
      </MouseoverLink>
    </div>
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
    <CallNowSpacer />
  </Background>
);
