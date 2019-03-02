import React from 'react';
import Carousel from './Carousel';
import MouseoverLink from './MouseoverLink';
import styled from 'styled-components';

const TitleDiv = styled.div`
  color: white;
  font-family: 'Amatic SC';
  font-size: 50px;
  padding-top: 100px;
`;

export default () => (
  <div style={{ height: 500, width: '100%', }}>
    <Carousel images={[
      require('../../static/images/home-header0.jpg'),
      require('../../static/images/home-header1.jpg'),
      require('../../static/images/home-header2.jpg'),
      require('../../static/images/home-header3.jpg'),
    ]}>
      <div style={{ height: '100%', width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-between'}}>
        <div style={{ height: '100%', width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-around'}}>
          <a href="https://limeapartments.com">
            <img src={require('../../static/images/lime-logo.png')} />
          </a>
          <TitleDiv>
            REFRESHING APARTMENTS
          </TitleDiv>
          <a href="https://www.facebook.com/pages/Lime-Apartments/389529864487875?skip_nax_wizard=true">
            <img src={require('../../static/images/facebook-icon.png')} />
          </a>
        </div>
        <div style={{
          height: 60,
          width: '100%',
          backgroundColor: 'rgba(219, 63, 168, 0.7)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-around',
          paddingHorizontal: 200
        }}>
          <MouseoverLink
            to="/amenities"
            activeColor="black"
            inactiveColor="white"
          >
            Amenities
          </MouseoverLink>
          <MouseoverLink
            to="/experience"
            activeColor="black"
            inactiveColor="white"
          >
            Experience
          </MouseoverLink>
          <MouseoverLink
            to="/location"
            activeColor="black"
            inactiveColor="white"
          >
            Location
          </MouseoverLink>
          <MouseoverLink
            to="/floor-plans"
            activeColor="black"
            inactiveColor="white"
          >
            Floor Plans
          </MouseoverLink>
          <MouseoverLink
            to="/gallery"
            activeColor="black"
            inactiveColor="white"
          >
            Gallery
          </MouseoverLink>
          <MouseoverLink
            to="/residents"
            activeColor="black"
            inactiveColor="white"
          >
            Residents
          </MouseoverLink>
          <MouseoverLink
            to="/contact"
            activeColor="black"
            inactiveColor="white"
          >
            Contact
          </MouseoverLink>
          <MouseoverLink
            to="/apply-now"
            activeColor="black"
            inactiveColor="white"
          >
            Apply Now
          </MouseoverLink>
        </div>
      </div>
    </Carousel>
  </div>
);
