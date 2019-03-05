import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import BlackStriped from './components/BlackStriped';
import { TitleDiv, HFlex, VFlex } from './components/Shared';

export default () => (
  <>
    <Header />
    <BlackStriped>
    </BlackStriped>
    <VFlex style={{ backgroundColor: 'white' }}>
      <TitleDiv style={{ color: 'black' }}>
        Studio alcoves
      </TitleDiv>
      <HFlex>
        <VFlex>
          <div>
            A1
          </div>
          <img src={require('../static/images/A1.png')} />
          <div style={{ textAlign: 'center', fontFamily: 'Open Sans, Muli' }}>
            One Bedroom, One Bath
            <br />
            541 Sq Ft
            <br />
            French Balcony
            <br />
            Washer/Dryer
            <br />
            Available on levels 2-6
          </div>
        </VFlex>
        <VFlex>
          <div>
            A2
          </div>
          <img src={require('../static/images/A2.png')} />
          <div style={{ textAlign: 'center', fontFamily: 'Open Sans, Muli' }}>
            One Bedroom, One Bath
            <br />
            565-589 Sq Ft
            <br />
            French Balcony
            <br />
            Washer/Dryer
            <br />
            Splash Deck Views
            <br />
            Available on levels 2-6
          </div>
        </VFlex>
        <VFlex>
          <div>
            A3
          </div>
          <img src={require('../static/images/A3.png')} />
          <div style={{ textAlign: 'center', fontFamily: 'Open Sans, Muli' }}>
            One Bedroom, One Bath
            <br />
            595 Sq Ft
            <br />
            French Balcony
            <br />
            Washer/Dryer
            <br />
            Available on levels 2-6
          </div>
        </VFlex>
      </HFlex>
    </VFlex>
    <VFlex style={{ backgroundColor: 'rgba(245, 245, 245, 1)' }}>
      <TitleDiv style={{ color: 'black' }}>
        One bedrooms
      </TitleDiv>
      <HFlex>
        <VFlex>
          <div>
            B1
          </div>
          <img src={require('../static/images/B1.png')} />
          <div style={{ textAlign: 'center', fontFamily: 'Open Sans, Muli' }}>
            One Bedroom, One Bath
            <br />
            721-727 Sq Ft
            <br />
            Balcony
            <br />
            Washer/Dryer
            <br />
            Available on levels 2-6
          </div>
        </VFlex>
        <VFlex>
          <div>
            B2
          </div>
          <img src={require('../static/images/B2.png')} />
          <div style={{ textAlign: 'center', fontFamily: 'Open Sans, Muli' }}>
            One Bedroom, One Bath
            <br />
            738-792 Sq Ft
            <br />
            Balcony
            <br />
            Washer/Dryer
            <br />
            Available on levels 2-6
          </div>
        </VFlex>
        <VFlex>
          <div>
            B3
          </div>
          <img src={require('../static/images/B3.png')} />
          <div style={{ textAlign: 'center', fontFamily: 'Open Sans, Muli' }}>
            One Bedroom, One Bath
            <br />
            701 Sq Ft
            <br />
            Balcony
            <br />
            Washer/Dryer
            <br />
            Downtown/Greenway views
            <br />
            Available on levels 2-5
          </div>
        </VFlex>
      </HFlex>
      <HFlex>
        <VFlex>
          <div>
            B4
          </div>
          <img src={require('../static/images/B4.png')} />
          <div style={{ textAlign: 'center', fontFamily: 'Open Sans, Muli' }}>
            One Bedroom, One Bath
            <br />
            749 Sq Ft
            <br />
            Balcony
            <br />
            Washer/Dryer
            <br />
            Downtown/Greenway views
            <br />
            Available on levels 2-5
          </div>
        </VFlex>
        <VFlex>
          <div>
            B5
          </div>
          <img src={require('../static/images/B5.png')} />
          <div style={{ textAlign: 'center', fontFamily: 'Open Sans, Muli' }}>
            One Bedroom, One Bath
            <br />
            753 Sq Ft
            <br />
            Washer/Dryer
            <br />
            Available on level 2
          </div>
        </VFlex>
        <VFlex>
          <div>
            B6
          </div>
          <img src={require('../static/images/B6.png')} />
          <div style={{ textAlign: 'center', fontFamily: 'Open Sans, Muli' }}>
            One Bedroom, One Bath
            <br />
            820 Sq Ft
            <br />
            Balcony
            <br />
            Washer/Dryer
            <br />
            Available on levels 3-6
          </div>
        </VFlex>
      </HFlex>
      <HFlex>
        <VFlex>
          <div>
            B7
          </div>
          <img src={require('../static/images/B7.png')} />
          <div style={{ textAlign: 'center', fontFamily: 'Open Sans, Muli' }}>
            One Bedroom, One Bath
            <br />
            898 Sq Ft
            <br />
            XL Balcony
            <br />
            Washer/Dryer
            <br />
            Downtown/Greenway views
            <br />
            Available on level 6
          </div>
        </VFlex>
        <VFlex>
          <div>
            B8
          </div>
          <img src={require('../static/images/B8.png')} />
          <div style={{ textAlign: 'center', fontFamily: 'Open Sans, Muli' }}>
            One Bedroom, One Bath
            <br />
            846 Sq Ft
            <br />
            XL Balcony
            <br />
            Washer/Dryer
            <br />
            Downtown/Greenway views
            <br />
            Available on level 5
          </div>
        </VFlex>
        <VFlex>
          <div>
            B+Den
          </div>
          <img src={require('../static/images/B+.png')} />
          <div style={{ textAlign: 'center', fontFamily: 'Open Sans, Muli' }}>
            One Bedroom, One Bath
            <br />
            Den
            <br />
            810-821 Sq Ft
            <br />
            Balcony
            <br />
            Washer/Dryer
            <br />
            Downtown/Greenway views
            <br />
            Available on levels 2-5
          </div>
        </VFlex>
      </HFlex>
    </VFlex>
    <VFlex style={{ backgroundColor: 'rgba(235, 235, 235, 1)' }}>
      <TitleDiv style={{ color: 'black' }}>
        Two bedrooms
      </TitleDiv>
      <HFlex>
        <VFlex>
          <div>
            C1
          </div>
          <img src={require('../static/images/C1.png')} />
          <div style={{ textAlign: 'center', fontFamily: 'Open Sans, Muli' }}>
            Two Bedroom, Two Bath
            <br />
            1278 Sq Ft
            <br />
            Balcony
            <br />
            Washer/Dryer
            <br />
            Downtown/Greenway views
            <br />
            Available on levels 2-4
          </div>
        </VFlex>
        <VFlex>
          <div>
            C2
          </div>
          <img src={require('../static/images/C2.png')} />
          <div style={{ textAlign: 'center', fontFamily: 'Open Sans, Muli' }}>
            Two Bedroom, Two Bath
            <br />
            1274 Sq Ft
            <br />
            Balcony
            <br />
            Washer/Dryer
            <br />
            Downtown/Greenway views
            <br />
            Available on levels 2-4
          </div>
        </VFlex>
        <VFlex>
          <div>
            C3
          </div>
          <img src={require('../static/images/C3.png')} />
          <div style={{ textAlign: 'center', fontFamily: 'Open Sans, Muli' }}>
            Two Bedroom, Two Bath
            <br />
            1055 Sq Ft
            <br />
            Balcony
            <br />
            Washer/Dryer
            <br />
            Downtown/Greenway views
            <br />
            Available on levels 3-4
          </div>
        </VFlex>
        <VFlex>
          <div>
            C4
          </div>
          <img src={require('../static/images/C4.png')} />
          <div style={{ textAlign: 'center', fontFamily: 'Open Sans, Muli' }}>
            Two Bedroom, Two Bath
            <br />
            1209 Sq Ft
            <br />
            Two Balconies
            <br />
            Washer/Dryer
            <br />
            Downtown/Lyndale Views
            <br />
            Available on levels 2-5
          </div>
        </VFlex>
      </HFlex>
      <HFlex>
        <VFlex>
          <div>
            C5
          </div>
          <img src={require('../static/images/C5.png')} />
          <div style={{ textAlign: 'center', fontFamily: 'Open Sans, Muli' }}>
            Two Bedroom, Two Bath
            <br />
            1210 Sq Ft
            <br />
            Balcony
            <br />
            Washer/Dryer
            <br />
            Splashdeck Views
            <br />
            Walk-in Closets
            <br />
            Available on levels 3-6
          </div>
        </VFlex>
        <VFlex>
          <div>
            C6
          </div>
          <img src={require('../static/images/C6.png')} />
          <div style={{ textAlign: 'center', fontFamily: 'Open Sans, Muli' }}>
            Two Bedroom, Two Bath
            <br />
            1094 Sq Ft
            <br />
            Balcony
            <br />
            Washer/Dryer
            <br />
            Splashdeck Views
            <br />
            Walk-in Closets
            <br />
            Available on levels 3-6
          </div>
        </VFlex>
        <VFlex>
          <div>
            C7
          </div>
          <img src={require('../static/images/C7.png')} />
          <div style={{ textAlign: 'center', fontFamily: 'Open Sans, Muli' }}>
            Two Bedroom, Two Bath
            <br />
            1067 Sq Ft
            <br />
            Balcony
            <br />
            Washer/Dryer
            <br />
            Walk-in Closets
            <br />
            Available on levels 2-6
          </div>
        </VFlex>
        <VFlex>
          <div>
            C8
          </div>
          <img src={require('../static/images/C8.png')} />
          <div style={{ textAlign: 'center', fontFamily: 'Open Sans, Muli' }}>
            Two Bedroom, Two Bath
            <br />
            1181 Sq Ft
            <br />
            Balcony
            <br />
            Washer/Dryer
            <br />
            Walk-in Closets
            <br />
            Available on levels 2-6
          </div>
        </VFlex>
      </HFlex>
      <HFlex>
        <VFlex>
          <div>
            C9
          </div>
          <img src={require('../static/images/C9.png')} />
          <div style={{ textAlign: 'center', fontFamily: 'Open Sans, Muli' }}>
            Two Bedroom, Two Bath
            <br />
            1093 Sq Ft
            <br />
            Balcony
            <br />
            Washer/Dryer
            <br />
            Walk-in Closets
            <br />
            Available on levels 2-6
          </div>
        </VFlex>
        <VFlex>
          <div>
            C10
          </div>
          <img src={require('../static/images/C10.png')} />
          <div style={{ textAlign: 'center', fontFamily: 'Open Sans, Muli' }}>
            Two Bedroom, Two Bath
            <br />
            1141 Sq Ft
            <br />
            XL Balcony + One
            <br />
            Washer/Dryer
            <br />
            Walk-in Closets
            <br />
            Available on level 6
          </div>
        </VFlex>
        <VFlex>
          <div>
            C11
          </div>
          <img src={require('../static/images/C11.png')} />
          <div style={{ textAlign: 'center', fontFamily: 'Open Sans, Muli' }}>
            Two Bedroom, Two Bath
            <br />
            1001 Sq Ft
            <br />
            XL Balcony
            <br />
            Washer/Dryer
            <br />
            Walk-in Closets
            <br />
            Available on level 5
          </div>
        </VFlex>
        <VFlex>
          <div>
            C12
          </div>
          <img src={require('../static/images/C12.png')} />
          <div style={{ textAlign: 'center', fontFamily: 'Open Sans, Muli' }}>
            Two Bedroom, Two Bath
            <br />
            1100 Sq Ft
            <br />
            XL Balcony
            <br />
            Washer/Dryer
            <br />
            Walk-in Closets
            <br />
            Available on level 2
          </div>
        </VFlex>
      </HFlex>
    </VFlex>
    <VFlex style={{ backgroundColor: 'rgba(223, 223, 223, 1)' }}>
      <TitleDiv style={{ color: 'black' }}>
        Penthouses
      </TitleDiv>
      <HFlex>
        <VFlex>
          <div>
            D1
          </div>
          <img src={require('../static/images/D1.png')} />
          <div style={{ textAlign: 'center', fontFamily: 'Open Sans, Muli' }}>
            Penthouse
            <br />
            Two Bedroom, Two Bath
            <br />
            XL Balcony
            <br />
            931 Sq Ft
            <br />
            Washer/Dryer
            <br />
            Walk-in Closets
            <br />
            Downtown/Greenway views
          </div>
        </VFlex>
        <VFlex>
          <div>
            D2
          </div>
          <img src={require('../static/images/D2.png')} />
          <div style={{ textAlign: 'center', fontFamily: 'Open Sans, Muli' }}>
            Penthouse
            <br />
            Two Bedroom, Two Bath
            <br />
            XL Balcony
            <br />
            1171 Sq Ft
            <br />
            Washer/Dryer
            <br />
            Walk-in Closets
            <br />
            Downtown/Greenway views
          </div>
        </VFlex>
        <VFlex>
          <div>
            D3
          </div>
          <img src={require('../static/images/D3.png')} />
          <div style={{ textAlign: 'center', fontFamily: 'Open Sans, Muli' }}>
            Penthouse
            <br />
            Two Bedroom, Two Bath
            <br />
            XL Balcony
            <br />
            1075 Sq Ft
            <br />
            Washer/Dryer
            <br />
            Walk-in Closets
          </div>
        </VFlex>
        <VFlex>
          <div>
            D4
          </div>
          <img src={require('../static/images/D4.png')} />
          <div style={{ textAlign: 'center', fontFamily: 'Open Sans, Muli' }}>
            Penthouse
            <br />
            Two Bedroom, Two Bath
            <br />
            XL Balcony
            <br />
            1204 Sq Ft
            <br />
            Washer/Dryer
            <br />
            Walk-in Closets
          </div>
        </VFlex>
      </HFlex>
    </VFlex>
    <VFlex style={{ backgroundColor: 'rgba(217, 217, 217, 1)' }}>
      <TitleDiv style={{ color: 'black' }}>
        Lofted townhomes
      </TitleDiv>
      <HFlex>
        <VFlex>
          <div>
            E1
          </div>
          <img src={require('../static/images/E1.png')} />
          <div style={{ textAlign: 'center', fontFamily: 'Open Sans, Muli' }}>
            1085 Sq Ft
            <br />
            Street Level Entry
            <br />
            Greeting Area & Office
            <br />
            Lofted Bedroom & Storage
            <br />
            Washer/Dryer
          </div>
        </VFlex>
        <VFlex>
          <div>
            E2
          </div>
          <img src={require('../static/images/E2.png')} />
          <div style={{ textAlign: 'center', fontFamily: 'Open Sans, Muli' }}>
            1135 Sq Ft
            <br />
            Street Level Entry
            <br />
            Greeting Area & Office
            <br />
            Lofted Bedroom & Storage
            <br />
            Washer/Dryer
          </div>
        </VFlex>
        <VFlex>
          <div>
            E3
          </div>
          <img src={require('../static/images/E3.png')} />
          <div style={{ textAlign: 'center', fontFamily: 'Open Sans, Muli' }}>
            1059 Sq Ft
            <br />
            Street Level Entry
            <br />
            Greeting Area & Office
            <br />
            Lofted Bedroom & Storage
            <br />
            Washer/Dryer
          </div>
        </VFlex>
        <VFlex>
          <div>
            E4
          </div>
          <img src={require('../static/images/E4.png')} />
          <div style={{ textAlign: 'center', fontFamily: 'Open Sans, Muli' }}>
            1258 Sq Ft
            <br />
            Street Level Entry
            <br />
            Greeting Area & Office
            <br />
            Lofted Bedroom & Storage
            <br />
            Washer/Dryer
          </div>
        </VFlex>
      </HFlex>
    </VFlex>
    <Footer />
  </>
);
