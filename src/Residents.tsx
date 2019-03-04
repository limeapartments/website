import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import BlackStriped from './components/BlackStriped';
import { TitleDiv, SubtitleDiv, SectionImageDiv } from './components/Shared';
import WhiteButton from './components/WhiteButton';
import { VFlex } from './components/Shared';

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
    <Footer />
  </>
);
