import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import BlackStriped from './components/BlackStriped';
import { TitleDiv, SubtitleDiv, SectionImageDiv } from './components/Shared';
import WhiteButton from './components/WhiteButton';
import { VFlex } from './components/Shared';
import ImageGrid from './components/ImageGrid';

export default () => (
  <>
    <Header />
    <BlackStriped>
      <VFlex>
        <TitleDiv>
          Resident Portal
        </TitleDiv>
        <SubtitleDiv>
          Package Tracking • Repair Requests • Amenity Reservations • Surveys • Special Offers • Events Calendar • Bulletin Board
        </SubtitleDiv>
        <WhiteButton to="/elsewhere">
          Access account
        </WhiteButton>
      </VFlex>
    </BlackStriped>
    <SectionImageDiv image={require('../static/images/residents-yellow-background.jpg')} overlayOpacity={0}>
      <VFlex>
        <TitleDiv style={{ color: 'black' }}>
          Never lived in a saturday property?
        </TitleDiv>
        <SubtitleDiv style={{ color: 'black' }}>
          YOU'RE IN FOR A TREAT.
        </SubtitleDiv>
        <p style={{ textAlign: 'center', fontFamily: 'Open Sans, Muli', fontSize: 18, fontWeight: 400, padding: 20 }}>
          We don’t call our properties vibrant communities for nothing. And we don’t offer empty promises of a luxury lifestyle. What we do is foster thriving societies where residents make strong connections that can last a lifetime—from business to friendships to (b)romance. And we’re looking for fun-loving residents to help make Lime the pride of Lyn Lake.
        </p>
      </VFlex>
    </SectionImageDiv>
    <BlackStriped>
      <VFlex>
        <TitleDiv>
          Grab all the things!
        </TitleDiv>
        <ImageGrid data={[
          {
            image: require('../static/images/residents-grid1.jpg'),
            text: 'Choices'
          },
          {
            image: require('../static/images/residents-grid2.jpg'),
            text: 'Access'
          },
          {
            image: require('../static/images/residents-grid3.jpg'),
            text: 'Fun'
          },
          {
            image: require('../static/images/residents-grid4.jpg'),
            text: 'Swag!'
          },
        ]} />
        <WhiteButton to="/contact">
          Schedule an appointment
        </WhiteButton>
      </VFlex>
    </BlackStriped>
    <Footer />
  </>
);
