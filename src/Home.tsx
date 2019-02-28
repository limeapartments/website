import React from 'react';
import styled from 'styled-components';
import Carousel from './components/Carousel';
const BlackStripes = require('../static/images/blackstripes.jpg');

const BlackStriped = styled.div`
  background-image: url(${BlackStripes});
  width: 100%;
`;

export default class Home extends React.Component {
  render() {
    return (
      <>
        <div style={{ height: 500, width: '100%', }}>
          <Carousel images={[
            require('../static/images/home-header0.jpg'),
            require('../static/images/home-header1.jpg'),
            require('../static/images/home-header2.jpg'),
            require('../static/images/home-header3.jpg'),
          ]}>
            <div style={{ height: '100%', width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-between'}}>
              <a href="https://limeapartments.com">
                <img src={require('../static/images/lime-logo.png')} />
              </a>
              <div>
                REFRESHING APARTMENTS
              </div>
              <a href="https://www.facebook.com/pages/Lime-Apartments/389529864487875?skip_nax_wizard=true">
                <img src={require('../static/images/facebook-icon.png')} />
              </a>
              <div style={{ height: 60, width: '100%', backgroundColor: '#DB3FA8', opacity: 0.6 }}>
              </div>
            </div>
          </Carousel>
        </div>
        <div style={{
          backgroundImage: `url(${require('../static/images/home-background-section0.jpg')})`,
          backgroundSize: 'cover',
          backgroundPosition: 'bottom',
          height: 500,
          width: '100%'
        }}>
          <div>
            LUXURY SCHMUXURY
          </div>
          <div>
            WHAT'S A NICE PROPERTY WITHOUT NICE PEOPLE?
          </div>
        </div>
        <BlackStriped>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', paddingTop: 40 }}>
            <div>
              LIME APARTMENTS
            </div>
            <div>
              A LITTLE TART. A LITTLE TANGY. NEVER BORING.
            </div>
          </div>
        </BlackStriped>
        <div style={{
          backgroundImage: `url(${require('../static/images/home-background-section1.jpg')})`,
          backgroundSize: 'cover',
          backgroundPosition: 'bottom',
          height: 500,
          width: '100%'
        }}>
        </div>
        <BlackStriped>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', paddingTop: 40 }}>
            <div>
              WANNA CHAT?
            </div>
            <div>
              DROP BY AND SAY HI...
            </div>
          </div>
        </BlackStriped>
        <div style={{
          backgroundImage: `url(${require('../static/images/home-background-section2.jpg')})`,
          backgroundSize: 'cover',
          backgroundPosition: 'bottom',
          height: 500,
          width: '100%'
        }}>
        </div>
        <div style={{
          backgroundImage: `url(${require('../static/images/home-background-section3.jpg')})`,
          backgroundSize: 'cover',
          backgroundPosition: 'bottom',
          height: 500,
          width: '100%'
        }}>
          <div>
            THE VIEW FROM THE LIME TERRACE
          </div>
          <div>
            DOWNTOWN MINNEAPOLIS
          </div>
        </div>
      </>
    );
  }
}
