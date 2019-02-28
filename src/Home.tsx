import React from 'react';
import styled from 'styled-components';
import Carousel from './components/Carousel';
const BlackStripes = require('../static/images/blackstripes.jpg');

const BlackStriped = styled.div`
  background-image: url(${BlackStripes});
  width: 100%;
`;

const TitleDiv = styled.div`
  color: white;
  font-family: 'Amatic SC';
  font-size: 50px;
`;

const SubtitleDiv = styled.div`
  color: white;
  font-family: 'Sanchez';
  font-size: 20px;
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
              <div style={{ height: '100%', width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-around'}}>
                <a href="https://limeapartments.com">
                  <img src={require('../static/images/lime-logo.png')} />
                </a>
                <TitleDiv>
                  REFRESHING APARTMENTS
                </TitleDiv>
                <a href="https://www.facebook.com/pages/Lime-Apartments/389529864487875?skip_nax_wizard=true">
                  <img src={require('../static/images/facebook-icon.png')} />
                </a>
              </div>
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
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center'
        }}>
          <TitleDiv style={{ paddingTop: 100}}>
            LUXURY SCHMUXURY
          </TitleDiv>
          <SubtitleDiv>
            WHAT'S A NICE PROPERTY WITHOUT NICE PEOPLE?
          </SubtitleDiv>
        </div>
        <BlackStriped>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', paddingTop: 40 }}>
            <TitleDiv>
              LIME APARTMENTS
            </TitleDiv>
            <SubtitleDiv>
              A LITTLE TART. A LITTLE TANGY. NEVER BORING.
            </SubtitleDiv>
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
            <TitleDiv>
              WANNA CHAT?
            </TitleDiv>
            <SubtitleDiv>
              DROP BY AND SAY HI...
            </SubtitleDiv>
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
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center'
        }}>
          <TitleDiv>
            THE VIEW FROM THE LIME TERRACE
          </TitleDiv>
          <SubtitleDiv>
            DOWNTOWN MINNEAPOLIS
          </SubtitleDiv>
        </div>
        <BlackStriped>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', paddingTop: 40 }}>
            <TitleDiv>
              PUCKER UP
            </TitleDiv>
          </div>
        </BlackStriped>
      </>
    );
  }
}
