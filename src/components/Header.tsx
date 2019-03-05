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

export default class Header extends React.Component<{
  images: any[]
}> {
  render() {
    return (
      <div style={{ height: 500, width: '100%', }}>
        <Carousel images={this.props.images}>
          <div style={{ height: '100%', width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-between'}}>
            <div style={{ height: '100%', width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-around'}}>
              <div>
                <a href="https://limeapartments.com">
                  <img src={require('../../static/images/lime-logo.png')} />
                </a>
                <TitleDiv style={{ paddingTop: 20 }}>
                  REFRESHING APARTMENTS
                </TitleDiv>
              </div>
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
                to="/redirect?url=https%3A%2F%2Fwww.rhris.com%2Fapplynow.cfm%3FsiteID%3D26756A"
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
  }
}
