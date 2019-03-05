import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import { TitleDiv, SubtitleDiv, SectionImageDiv, VFlex } from './components/Shared';
import BlackStriped from './components/BlackStriped';
import ImageGrid from './components/ImageGrid';

export default () => (
  <>
    <Header />
    <SectionImageDiv
      image={require('../static/images/amenities-yellow-background.jpg')}
      overlayOpacity={0}
    >
      <VFlex>
        <TitleDiv style={{ color: 'black' }}>
          Morning, sunshine
        </TitleDiv>
        <div style={{ display: 'flex', padding: 30 }}>
          <div style={{ fontSize: 18, fontFamily: 'Open Sans, Muli', padding: 30 }}>
            <p>
              Time to recharge in the spacious, open <strong>floor plan</strong> of a pet-friendly Lime apartment.
            </p>
            <p>
              All units feature floor-to-ceiling windows, a balcony or patio, full laundry, real wood cabinetry, striped bath flooring, stainless appliances, dishwasher and sink disposal.
            </p>
            <p>
              Then hop the elevator down to <strong>Mercado</strong>, pick up coffee, lunch or dinner with your friends.
            </p>
          </div>
          <iframe
            style={{ border: 'none', marginRight: 12 }}
            src="https://guestcard.ltsolutions.com/contactus.aspx?campaign=Lime005@myLTSMail.com&amp;csslink=https://gistcdn.githack.com/JChanceHud/ddf6c54f0340a1d3a731816222feb386/raw/4df49d20c43e5657eee923f59f3b49d0e84313a6/ContactUs2.css&amp;comments=text"
            width="80%"
            height="600"
          />
        </div>
      </VFlex>
    </SectionImageDiv>
    <VFlex style={{ backgroundColor: 'rgba(255, 254, 214, 1)' }}>
      <TitleDiv style={{ color: 'black' }}>
        Facts is facts
      </TitleDiv>
      <SubtitleDiv style={{ color: 'black' }}>
        AND LIME APARTMENT AMENITIES STACK UP.
      </SubtitleDiv>
      <div style={{ display: 'flex', fontFamily: 'Open Sans, Muli', fontSize: 18 }}>
        <div>
          <strong>Unit Goodness</strong>
          <ul>
            <li>
              Full-Size Washer & Dryer
            </li>
            <li>
              Stainless Steel Appliances
            </li>
            <li>
              Balconies & Patios
            </li>
            <li>
              Large Windows
            </li>
            <li>
              Dishwasher & Garbage Disposal
            </li>
            <li>
              Quartz Countertops**
            </li>
            <li>
              Gas Ranges**
            </li>
            <li>
              Custom Paint Accent Walls**
            </li>
          </ul>
        </div>
        <div>
          <strong>Property Shock-n-Awe</strong>
          <ul>
            <li>
              City-view Roof Deck & Clubhouse
            </li>
            <li>
              Pool Table
            </li>
            <li>
              Double-sided Roof Deck Fireplace
            </li>
            <li>
              Industrial-Size Grilling
            </li>
            <li>
              Pool, Spa and Lawn Games
            </li>
            <li>
              Gym-Quality Fitness with Sauna
            </li>
            <li>
              Guest Suite Rental
            </li>
            <li>
              Mercado Restaurant
            </li>
          </ul>
        </div>
        <div>
          <strong>Concierge Wonderfulness</strong>
          <ul>
            <li>
              Concierge and Courtesy Officer
            </li>
            <li>
              Dry Cleaning Services/Delivery
            </li>
            <li>
              Package Acceptance/Delivery
            </li>
            <li>
              Full-Time Maintenance Staff
            </li>
            <li>
              Housekeeping Available
            </li>
            <li>
              Continental Breakfast Weekly
            </li>
            <li>
              Resident Events
            </li>
          </ul>
        </div>
      </div>
      <div style={{ display: 'flex', flex: 1, textAlign: 'right' }}>
        ** Select Units
      </div>
    </VFlex>
    <SectionImageDiv image={require('../static/images/amenities-purple-background.jpg')}>
      <VFlex>
        <TitleDiv>
          And goodnight
        </TitleDiv>
        <div style={{ textAlign: 'center', color: 'white', fontFamily: 'Open Sans, Muli' }}>
        <p>
          Every Lime apartment makes a sweet suite to come home to and a haute haven before your night on the town.
        </p>
        <p>
          Lime is a controlled-access building with underground parking, full concierge and keyless entry.
        </p>
        <p>
          For busy residents we offer our own private car service and housekeeping.
        </p>
        </div>
      </VFlex>
    </SectionImageDiv>
    <BlackStriped>
      <VFlex>
        <TitleDiv>
          Don't forget the details
        </TitleDiv>
        <ImageGrid
          data={[
            {
              image: require('../static/images/amenities-grid1.jpg'),
              text: 'Entry Sconce'
            },
            {
              image: require('../static/images/amenities-grid2.jpg'),
              text: 'Striped Bath'
            },
            {
              image: require('../static/images/amenities-grid3.jpg'),
              text: 'Solid Fixtures'
            },
            {
              image: require('../static/images/amenities-grid4.jpg'),
              text: 'Sink Disposal'
            },
            {
              image: require('../static/images/amenities-grid5.jpg'),
              text: 'Quality Cooking'
            },
            {
              image: require('../static/images/amenities-grid6.jpg'),
              text: 'Quartz Countertops'
            },
            {
              image: require('../static/images/amenities-grid7.jpg'),
              text: 'Stainless Appliances'
            },
            {
              image: require('../static/images/amenities-grid8.jpg'),
              text: 'Cool Lighting'
            },
            {
              image: require('../static/images/amenities-grid9.jpg'),
              text: 'Wood Cabinetry'
            },
            {
              image: require('../static/images/amenities-grid10.jpg'),
              text: 'Digital Thermostats'
            },
            {
              image: require('../static/images/amenities-grid11.jpg'),
              text: 'Full Size Laundry'
            },
            {
              image: require('../static/images/amenities-grid12.jpg'),
              text: 'Gorgeous Flooring'
            },
          ]}
        />
      </VFlex>
    </BlackStriped>
    <Footer />
  </>
);
