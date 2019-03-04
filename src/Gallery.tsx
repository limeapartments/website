import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import BlackStriped from './components/BlackStriped';
import { VFlex } from './components/Shared';
import ImageGrid from './components/ImageGrid';

export default () => (
  <>
    <Header />
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
  </>
);
