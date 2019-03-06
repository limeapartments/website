import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import BlackStriped from './components/BlackStriped';
import { VFlex } from './components/Shared';
import ImageGrid from './components/ImageGrid';
import CallNow from './components/CallNow';

export default () => (
  <>
    <Header images={[
      require('../static/images/gallery-header1.jpg'),
    ]} />
    <BlackStriped>
      <VFlex>
        <ImageGrid data={Array(18).fill(0).map((_, index) => {
          return {
            image: require(`../static/images/gallery-grid${index+1}.jpg`),
          };
        })} />
      </VFlex>
    </BlackStriped>
    <Footer />
    <CallNow />
  </>
);
