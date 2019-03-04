import React from 'react';
import styled from 'styled-components';
import Carousel from './components/Carousel';
import Footer from './components/Footer';
import ProgressBar from './components/ProgressBar';
import MouseoverLink from './components/MouseoverLink';
import ImageGrid from './components/ImageGrid';
import { Link } from 'react-router-dom';
import Header from './components/Header';
import WhiteButton from './components/WhiteButton';
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
  font-size: 24px;
  padding-bottom: 20px;
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

const GreenLink = styled(Link)`
  color: #00ff22;
  text-decoration: none;
`;

export default () => (
  <>
    <Header />
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
        <ImageGrid data={[
          {
            image: require('../static/images/home-grid1.jpg'),
            text: 'Steamy Sauna',
          },
          {
            image: require('../static/images/home-grid2.jpg'),
            text: 'Midtown Greenway',
          },
          {
            image: require('../static/images/home-grid3.jpg'),
            text: 'Gym-quality Fitness',
          },
          {
            image: require('../static/images/home-grid4.jpg'),
            text: 'Fun Events',
          },
          {
            image: require('../static/images/home-grid5.jpg'),
            text: 'Pool Anyone?',
          },
          {
            image: require('../static/images/home-grid6.jpg'),
            text: 'We Love Our Pups',
          },
          {
            image: require('../static/images/home-grid7.jpg'),
            text: 'Splash Deck',
          },
          {
            image: require('../static/images/home-grid8.jpg'),
            text: 'Outdoor Spaces',
          },
        ]} />
      </div>
      <div style={{ height: 100 }} />
    </BlackStriped>
    <SectionImageDiv image={require('../static/images/home-background-section1.jpg')}>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', paddingTop: 40 }}>
        <TitleDiv>
          GET SOCIAL
        </TitleDiv>
        <SubtitleDiv>
          CONNECT WITH LIME ON FACEBOOK
        </SubtitleDiv>
        <div className="fb-page" data-href="https://www.facebook.com/Lime-Apartments-389529864487875/" data-width="500" data-small-header="false" data-adapt-container-width="false" data-hide-cover="false" data-show-facepile="true">
          <blockquote cite="https://www.facebook.com/Lime-Apartments-389529864487875/" className="fb-xfbml-parse-ignore">
            <a href="https://www.facebook.com/Lime-Apartments-389529864487875/">
              Lime Apartments
            </a>
          </blockquote>
        </div>
      </div>
    </SectionImageDiv>
    <BlackStriped>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <TitleDiv>
          WANNA CHAT?
        </TitleDiv>
        <SubtitleDiv>
          DROP BY AND SAY HI...
        </SubtitleDiv>
        <div style={{ display: 'flex' }}>
          <iframe
            style={{ border: 'none', marginRight: 12 }}
            src="https://guestcard.ltsolutions.com/contactus.aspx?campaign=Lime005@myLTSMail.com&amp;csslink=https://gistcdn.githack.com/JChanceHud/17cb194ba9ae69814b6f5d5369bacf48/raw/024e7f82a9b07da68e6f5d3f31b6d1122de7685b/ContactUs.css&amp;comments=text"
            width="100%"
            height="600"
          />
          <iframe
            style={{ border: 'none' }}
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2823.699373434938!2d-93.28862300000003!3d44.949779!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87f62786279600b1%3A0x50632f6c436231c9!2sLime+Apartments!5e0!3m2!1sen!2sus!4v1402594082801"
            width="600"
            height="450"
          />
        </div>
      </div>
    </BlackStriped>
    <SectionImageDiv image={require('../static/images/home-background-section2.jpg')}>
      <TitleDiv>
        UPTOWN
      </TitleDiv>
      <SubtitleDiv>
        THE LYN-LAKE LYFESTYLE
      </SubtitleDiv>
      <ProgressBar color="#00ffcc" percent={0.5} title="shopping" />
      <ProgressBar color="#ff00ff" percent={0.63} title="arts & entertainment" />
      <ProgressBar color="#fffa61" percent={0.75} title="bars & restaurants" />
      <ProgressBar color="#ff612a" percent={0.87} title="lakes & bikes" />
      <ProgressBar color="#ffffff" percent={1} title="awesome!" />
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
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <TitleDiv>
          PUCKER UP
        </TitleDiv>
        <div style={{ margin: 20, textAlign: 'center', color: 'white', fontFamily: 'Open Sans, Muli', fontSize: 17 }}>
          <p>
            Looking for an apartment community offering valuable <GreenLink to="/amenities">amenities</GreenLink>? <strong><em>Check.</em></strong>
          </p>
          <p>
          In a prime Minneapolis <GreenLink to="/location">location</GreenLink>? <strong><em>Check.</em></strong>
          </p>
          <p>
            With open <GreenLink to="/floor-plans">floor plans</GreenLink> that maximize space, pay attention to detail and provide natural lighting? <strong><em>Check.</em></strong>
          </p>
          <p>
            Filled with fun-loving <GreenLink to="/residents">residents</GreenLink> you'd like to meet? <strong><em>Check.</em></strong>
          </p>
          <p>
            Scope out our <GreenLink to="/gallery">gallery</GreenLink> for some more eye-candy, then <GreenLink to="/contact">contact us</GreenLink> to find out more.
          </p>
        </div>
        <WhiteButton to="/contact">
          Schedule an appointment
        </WhiteButton>
      </div>
      <div style={{ height: 100 }} />
    </BlackStriped>
    <Footer />
  </>
);
