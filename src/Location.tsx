import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import { SectionImageDiv, VFlex } from './components/Shared';

export default () => (
  <>
    <Header />
    <SectionImageDiv image={require('../static/images/location-blue-background.jpg')} overlayOpacity={0}>
      <VFlex>
      </VFlex>
    </SectionImageDiv>
    <Footer />
  </>
);
