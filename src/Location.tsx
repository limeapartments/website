import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import { SectionImageDiv, VFlex, TitleDiv } from './components/Shared';
import BlackStriped from './components/BlackStriped';
import WhiteButton from './components/WhiteButton';
import ImageGrid from './components/ImageGrid';
import styled from 'styled-components';

const ContentP = styled.p`
  max-width: 900px;
  text-align: center;
  color: white;
  font-family: Open Sans, Muli;
`;

export default () => (
  <>
    <Header />
    <SectionImageDiv image={require('../static/images/location-blue-background.jpg')} overlayOpacity={0}>
      <VFlex>
        <TitleDiv>
          Uptown, lyn lake, midtown and beyond
        </TitleDiv>
        <div style={{
          textTransform: 'uppercase',
          color: 'white',
          fontSize: 36,
          fontWeight: 600,
          padding: 20
        }}>
        Moving to minneapolis?
        </div>
        <ContentP>
          The Lime community thrives both inside and out. Situated in Lyn Lake proper, our excellent walk, transit and bike scores mean you’ll live right in the thick of it, with immediate access to just about anything you need.
        </ContentP>
        <ContentP>
          Looking to explore? Take a walk or hop on Metro Transit. To your west awaits Uptown nightlife, the beaches and waterways of Lake Calhoun, Harriet and Isles. To your north, lies the Downtown business district and to your east, Midtown Global Market.
        </ContentP>
        <ContentP>
          With Nice Ride bike rentals, numerous bike shops and miles of paved trails right outside your door, there’s little reason to use a car. Ease traffic and stay healthy at Lime.
        </ContentP>
      </VFlex>
    </SectionImageDiv>
    <BlackStriped>
      <VFlex>
        <TitleDiv>
          Sample the neighborhood
        </TitleDiv>
        <ImageGrid
          style={{ padding: 20 }}
          data={[
            {
              image: require('../static/images/location-grid1.jpg'),
              text: 'World Street Kitchen',
              link: 'http://www.eatwsk.com/'
            },
            {
              image: require('../static/images/location-grid2.jpg'),
              text: 'Wedge Food Co-op',
              link: 'http://www.wedge.coop/'
            },
            {
              image: require('../static/images/location-grid3.jpg'),
              text: 'The Alt Bike & Board',
              link: 'http://www.altbikeboard.com/'
            },
            {
              image: require('../static/images/location-grid4.jpg'),
              text: 'Tatters Clothing',
              link: 'http://www.tattersvintageclothing.com/'
            },
            {
              image: require('../static/images/location-grid5.jpg'),
              text: 'Moto-i & The Herkimer Pub',
              link: 'http://www.theherkimer.com/'
            },
            {
              image: require('../static/images/location-grid6.png'),
              text: 'Mercado',
              link: 'http://www.mercadompls.com/'
            },
            {
              image: require('../static/images/location-grid7.jpg'),
              text: 'Jungle Theater',
              link: 'http://www.jungletheater.com/'
            },
            {
              image: require('../static/images/location-grid8.jpg'),
              text: 'Galactic Pizza',
              link: 'http://www.galacticpizza.com/'
            }
          ]}
        />
        <WhiteButton to="/contact">
          I want to live here!
        </WhiteButton>
      </VFlex>
    </BlackStriped>
    <Footer />
  </>
);
