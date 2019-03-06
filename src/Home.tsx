import React from 'react';
import styled from 'styled-components';
import Footer from './components/Footer';
import ProgressBar from './components/ProgressBar';
import ImageGrid from './components/ImageGrid';
import { Link } from 'react-router-dom';
import Header from './components/Header';
import WhiteButton from './components/WhiteButton';
import BlackStriped from './components/BlackStriped';
import { TitleDiv, SubtitleDiv, SectionImageDiv, VFlex } from './components/Shared';
import CallNow from './components/CallNow';

const GreenLink = styled(Link)`
  color: #00ff22;
  text-decoration: none;
`;

export default () => (
  <>
    <Header images={[
      require('../static/images/home-header1.jpg'),
      require('../static/images/home-header2.jpg'),
      require('../static/images/home-header3.jpg'),
      require('../static/images/home-header4.jpg'),
    ]} />
    <SectionImageDiv image={require('../static/images/home-background-section0.jpg')}>
      <VFlex>
        <TitleDiv>
          LUXURY SCHMUXURY
        </TitleDiv>
        <SubtitleDiv>
          WHAT'S A NICE PROPERTY WITHOUT NICE PEOPLE?
        </SubtitleDiv>
      </VFlex>
    </SectionImageDiv>
    <BlackStriped>
      <VFlex>
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
      </VFlex>
    </BlackStriped>
    <SectionImageDiv image={require('../static/images/home-background-section1.jpg')}>
      <VFlex>
        <TitleDiv>
          GET SOCIAL
        </TitleDiv>
        <SubtitleDiv>
          CONNECT WITH LIME ON FACEBOOK
        </SubtitleDiv>
        <div
          style={{
            maxWidth: 500
          }}
          className="fb-page"
          data-href="https://www.facebook.com/Lime-Apartments-389529864487875/"
          data-small-header="false"
          data-adapt-container-width="false"
          data-hide-cover="false"
          data-show-facepile="true"
        >
          <blockquote cite="https://www.facebook.com/Lime-Apartments-389529864487875/" className="fb-xfbml-parse-ignore">
            <a href="https://www.facebook.com/Lime-Apartments-389529864487875/">
              Lime Apartments
            </a>
          </blockquote>
        </div>
      </VFlex>
    </SectionImageDiv>
    <BlackStriped>
      <VFlex>
        <TitleDiv>
          WANNA CHAT?
        </TitleDiv>
        <SubtitleDiv>
          DROP BY AND SAY HI...
        </SubtitleDiv>
        <div style={{ width: '100%', display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
          <iframe
            style={{
              border: 'none',
              marginLeft: 12,
              marginRight: 12,
              flex: 1,
              maxWidth: 500,
              height: 600
            }}
            src="https://guestcard.ltsolutions.com/contactus.aspx?campaign=Lime005@myLTSMail.com&amp;csslink=https://gistcdn.githack.com/JChanceHud/17cb194ba9ae69814b6f5d5369bacf48/raw/024e7f82a9b07da68e6f5d3f31b6d1122de7685b/ContactUs.css&amp;comments=text"
          />
          <iframe
            style={{
              flex: 1,
              border: 'none',
              maxWidth: 500,
              height: 450,
              marginLeft: 12,
              marginRight: 12
            }}
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2823.699373434938!2d-93.28862300000003!3d44.949779!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87f62786279600b1%3A0x50632f6c436231c9!2sLime+Apartments!5e0!3m2!1sen!2sus!4v1402594082801"
          />
        </div>
      </VFlex>
    </BlackStriped>
    <SectionImageDiv image={require('../static/images/home-background-section2.jpg')}>
      <div style={{ width: '80%' }}>
        <VFlex>
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
        </VFlex>
      </div>
    </SectionImageDiv>
    <SectionImageDiv image={require('../static/images/home-background-section3.jpg')}>
      <VFlex>
        <TitleDiv>
          THE VIEW FROM THE LIME TERRACE
        </TitleDiv>
        <SubtitleDiv>
          DOWNTOWN MINNEAPOLIS
        </SubtitleDiv>
      </VFlex>
    </SectionImageDiv>
    <BlackStriped>
      <VFlex>
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
      </VFlex>
    </BlackStriped>
    <Footer />
    <CallNow />
  </>
);
