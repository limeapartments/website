import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import BlackStriped from './components/BlackStriped';
import { VFlex } from './components/Shared';

export default () => (
  <>
    <Header />
    <BlackStriped>
      <VFlex>
      </VFlex>
    </BlackStriped>
    <Footer />
  </>
);
