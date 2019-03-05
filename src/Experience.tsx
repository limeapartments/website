import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';

export default () => (
  <>
    <Header images={[
      require('../static/images/experience-header1.jpg'),
    ]} />
      <div style={{ textAlign: 'center', padding: 20 }}>
        <iframe
          src="https://player.vimeo.com/video/122110529?color=ffffff&title=0&byline=0&portrait=0"
          width="1165"
          height="498"
          frameBorder="0"
        />
      </div>
    <Footer />
  </>
);
