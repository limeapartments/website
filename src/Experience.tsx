import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import CallNow from './components/CallNow';
import { VFlex } from './components/Shared';

export default () => (
  <>
    <Header images={[
      require('../static/images/experience-header1.jpg'),
      require('../static/images/experience-header2.jpg'),
    ]} />
    <VFlex>
      <div style={{ width: '90%', textAlign: 'center', padding: 20 }}>
        <iframe
          src="https://player.vimeo.com/video/122110529?color=ffffff&title=0&byline=0&portrait=0"
          style={{
            width: '100%',
            maxWidth: 900,
            height: '40vw',
            maxHeight: 400
          }}
          frameBorder="0"
        />
      </div>
    </VFlex>
    <Footer />
    <CallNow />
  </>
);
