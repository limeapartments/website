import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import CallNow from './components/CallNow';

export default () => (
  <>
    <Header images={[
      require('../static/images/experience-header1.jpg'),
    ]} />
    <div style={{ width: '90%', textAlign: 'center', padding: 20 }}>
      <iframe
        src="https://player.vimeo.com/video/122110529?color=ffffff&title=0&byline=0&portrait=0"
        style={{
          width: '70%',
          maxWidth: 900,
          height: 600
        }}
        frameBorder="0"
      />
    </div>
    <Footer />
    <CallNow />
  </>
);
