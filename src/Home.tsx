import React from 'react';
import styled from 'styled-components';
import Carousel from './components/Carousel';
import Footer from './components/Footer';
const BlackStripes = require('../static/images/blackstripes.jpg');

const BlackStriped = styled.div`
  background-image: url(${BlackStripes});
  width: 100%;
`;

const TitleDiv = styled.div`
  color: white;
  font-family: 'Amatic SC';
  font-size: 50px;
  padding-top: 100px;
`;

const SubtitleDiv = styled.div`
  color: white;
  font-family: 'Sanchez';
  font-size: 20px;
`;

const SectionImageDiv = styled.div<{ image: string}>`
  background: linear-gradient(
    rgba(0, 0, 0, 0.3),
    rgba(0, 0, 0, 0.3)
  ), url(${props => props.image});
  background-size: cover;
  background-position: bottom;
  height: 600px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
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
        <SectionImageDiv image={require('../static/images/home-background-section0.jpg')}>
          <TitleDiv>
            LUXURY SCHMUXURY
          </TitleDiv>
          <SubtitleDiv>
            WHAT'S A NICE PROPERTY WITHOUT NICE PEOPLE?
          </SubtitleDiv>
        </SectionImageDiv>
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
        <SectionImageDiv image={require('../static/images/home-background-section1.jpg')}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', paddingTop: 40 }}>
            <TitleDiv>
              GET SOCIAL
            </TitleDiv>
            <SubtitleDiv>
              CONNECT WITH LIME ON FACEBOOK
            </SubtitleDiv>
          </div>
        </SectionImageDiv>
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
        <SectionImageDiv image={require('../static/images/home-background-section2.jpg')}>
        </SectionImageDiv>
        <SectionImageDiv image={require('../static/images/home-background-section3.jpg')}>
          <TitleDiv>
            THE VIEW FROM THE LIME TERRACE
          </TitleDiv>
          <SubtitleDiv>
            DOWNTOWN MINNEAPOLIS
          </SubtitleDiv>
        </SectionImageDiv>
        <BlackStriped>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', paddingTop: 40 }}>
            <TitleDiv>
              PUCKER UP
            </TitleDiv>
          </div>
        </BlackStriped>
        <Footer />
      </>
    );
  }
}
