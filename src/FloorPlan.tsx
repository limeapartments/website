import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import BlackStriped from './components/BlackStriped';
import { TitleDiv, HFlex, VFlex } from './components/Shared';
import LinkedImage from './components/LinkedImage';
import styled from 'styled-components';

const TextDiv = styled.div`
  text-align: center;
  font-family: Open Sans, Muli;
`;

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
          <TextDiv>
            A1
          </TextDiv>
          <LinkedImage link={require("../static/images/PDFFloorPlans/A1.pdf")} src={require('../static/images/A1.png')} />
          <TextDiv>
            One Bedroom, One Bath
            <br />
            541 Sq Ft
            <br />
            French Balcony
            <br />
            Washer/Dryer
            <br />
            Available on levels 2-6
          </TextDiv>
        </VFlex>
        <VFlex>
          <TextDiv>
            A2
          </TextDiv>
          <LinkedImage link={require("../static/images/PDFFloorPlans/A2.pdf")} src={require('../static/images/A2.png')} />
          <TextDiv>
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
          </TextDiv>
        </VFlex>
        <VFlex>
          <TextDiv>
            A3
          </TextDiv>
          <LinkedImage link={require("../static/images/PDFFloorPlans/A3.pdf")} src={require('../static/images/A3.png')} />
          <TextDiv>
            One Bedroom, One Bath
            <br />
            595 Sq Ft
            <br />
            French Balcony
            <br />
            Washer/Dryer
            <br />
            Available on levels 2-6
          </TextDiv>
        </VFlex>
      </HFlex>
    </VFlex>
    <VFlex style={{ backgroundColor: 'rgba(245, 245, 245, 1)' }}>
      <TitleDiv style={{ color: 'black' }}>
        One bedrooms
      </TitleDiv>
      <HFlex>
        <VFlex>
          <TextDiv>
            B1
          </TextDiv>
          <LinkedImage link={require("../static/images/PDFFloorPlans/B1.pdf")} src={require('../static/images/B1.png')} />
          <TextDiv>
            One Bedroom, One Bath
            <br />
            721-727 Sq Ft
            <br />
            Balcony
            <br />
            Washer/Dryer
            <br />
            Available on levels 2-6
          </TextDiv>
        </VFlex>
        <VFlex>
          <TextDiv>
            B2
          </TextDiv>
          <LinkedImage link={require("../static/images/PDFFloorPlans/B2.pdf")} src={require('../static/images/B2.png')} />
          <TextDiv>
            One Bedroom, One Bath
            <br />
            738-792 Sq Ft
            <br />
            Balcony
            <br />
            Washer/Dryer
            <br />
            Available on levels 2-6
          </TextDiv>
        </VFlex>
        <VFlex>
          <TextDiv>
            B3
          </TextDiv>
          <LinkedImage link={require("../static/images/PDFFloorPlans/B3.pdf")} src={require('../static/images/B3.png')} />
          <TextDiv>
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
          </TextDiv>
        </VFlex>
      </HFlex>
      <HFlex>
        <VFlex>
          <TextDiv>
            B4
          </TextDiv>
          <LinkedImage link={require("../static/images/PDFFloorPlans/B4.pdf")} src={require('../static/images/B4.png')} />
          <TextDiv>
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
          </TextDiv>
        </VFlex>
        <VFlex>
          <TextDiv>
            B5
          </TextDiv>
          <LinkedImage link={require("../static/images/PDFFloorPlans/B5.pdf")} src={require('../static/images/B5.png')} />
          <TextDiv>
            One Bedroom, One Bath
            <br />
            753 Sq Ft
            <br />
            Washer/Dryer
            <br />
            Available on level 2
          </TextDiv>
        </VFlex>
        <VFlex>
          <TextDiv>
            B6
          </TextDiv>
          <LinkedImage link={require("../static/images/PDFFloorPlans/B6.pdf")} src={require('../static/images/B6.png')} />
          <TextDiv>
            One Bedroom, One Bath
            <br />
            820 Sq Ft
            <br />
            Balcony
            <br />
            Washer/Dryer
            <br />
            Available on levels 3-6
          </TextDiv>
        </VFlex>
      </HFlex>
      <HFlex>
        <VFlex>
          <TextDiv>
            B7
          </TextDiv>
          <LinkedImage link={require("../static/images/PDFFloorPlans/B7.pdf")} src={require('../static/images/B7.png')} />
          <TextDiv>
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
          </TextDiv>
        </VFlex>
        <VFlex>
          <TextDiv>
            B8
          </TextDiv>
          <LinkedImage link={require("../static/images/PDFFloorPlans/B8.pdf")} src={require('../static/images/B8.png')} />
          <TextDiv>
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
          </TextDiv>
        </VFlex>
        <VFlex>
          <TextDiv>
            B+Den
          </TextDiv>
          <LinkedImage link={require("../static/images/PDFFloorPlans/B+.pdf")} src={require('../static/images/B+.png')} />
          <TextDiv>
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
          </TextDiv>
        </VFlex>
      </HFlex>
    </VFlex>
    <VFlex style={{ backgroundColor: 'rgba(235, 235, 235, 1)' }}>
      <TitleDiv style={{ color: 'black' }}>
        Two bedrooms
      </TitleDiv>
      <HFlex>
        <VFlex>
          <TextDiv>
            C1
          </TextDiv>
          <LinkedImage link={require("../static/images/PDFFloorPlans/C1.pdf")} src={require('../static/images/C1.png')} />
          <TextDiv>
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
          </TextDiv>
        </VFlex>
        <VFlex>
          <TextDiv>
            C2
          </TextDiv>
          <LinkedImage link={require("../static/images/PDFFloorPlans/C2.pdf")} src={require('../static/images/C2.png')} />
          <TextDiv>
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
          </TextDiv>
        </VFlex>
        <VFlex>
          <TextDiv>
            C3
          </TextDiv>
          <LinkedImage link={require("../static/images/PDFFloorPlans/C3.pdf")} src={require('../static/images/C3.png')} />
          <TextDiv>
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
          </TextDiv>
        </VFlex>
        <VFlex>
          <TextDiv>
            C4
          </TextDiv>
          <LinkedImage link={require("../static/images/PDFFloorPlans/C4.pdf")} src={require('../static/images/C4.png')} />
          <TextDiv>
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
          </TextDiv>
        </VFlex>
      </HFlex>
      <HFlex>
        <VFlex>
          <TextDiv>
            C5
          </TextDiv>
          <LinkedImage link={require("../static/images/PDFFloorPlans/C5.pdf")} src={require('../static/images/C5.png')} />
          <TextDiv>
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
          </TextDiv>
        </VFlex>
        <VFlex>
          <TextDiv>
            C6
          </TextDiv>
          <LinkedImage link={require("../static/images/PDFFloorPlans/C6.pdf")} src={require('../static/images/C6.png')} />
          <TextDiv>
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
          </TextDiv>
        </VFlex>
        <VFlex>
          <TextDiv>
            C7
          </TextDiv>
          <LinkedImage link={require("../static/images/PDFFloorPlans/C7.pdf")} src={require('../static/images/C7.png')} />
          <TextDiv>
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
          </TextDiv>
        </VFlex>
        <VFlex>
          <TextDiv>
            C8
          </TextDiv>
          <LinkedImage link={require("../static/images/PDFFloorPlans/C8.pdf")} src={require('../static/images/C8.png')} />
          <TextDiv>
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
          </TextDiv>
        </VFlex>
      </HFlex>
      <HFlex>
        <VFlex>
          <TextDiv>
            C9
          </TextDiv>
          <LinkedImage link={require("../static/images/PDFFloorPlans/C9.pdf")} src={require('../static/images/C9.png')} />
          <TextDiv>
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
          </TextDiv>
        </VFlex>
        <VFlex>
          <TextDiv>
            C10
          </TextDiv>
          <LinkedImage link={require("../static/images/PDFFloorPlans/C10.pdf")} src={require('../static/images/C10.png')} />
          <TextDiv>
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
          </TextDiv>
        </VFlex>
        <VFlex>
          <TextDiv>
            C11
          </TextDiv>
          <LinkedImage link={require("../static/images/PDFFloorPlans/C11.pdf")} src={require('../static/images/C11.png')} />
          <TextDiv>
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
          </TextDiv>
        </VFlex>
        <VFlex>
          <TextDiv>
            C12
          </TextDiv>
          <LinkedImage link={require("../static/images/PDFFloorPlans/C12.pdf")} src={require('../static/images/C12.png')} />
          <TextDiv>
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
          </TextDiv>
        </VFlex>
      </HFlex>
    </VFlex>
    <VFlex style={{ backgroundColor: 'rgba(223, 223, 223, 1)' }}>
      <TitleDiv style={{ color: 'black' }}>
        Penthouses
      </TitleDiv>
      <HFlex>
        <VFlex>
          <TextDiv>
            D1
          </TextDiv>
          <LinkedImage link={require("../static/images/PDFFloorPlans/D1.pdf")} src={require('../static/images/D1.png')} />
          <TextDiv>
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
          </TextDiv>
        </VFlex>
        <VFlex>
          <TextDiv>
            D2
          </TextDiv>
          <LinkedImage link={require("../static/images/PDFFloorPlans/D2.pdf")} src={require('../static/images/D2.png')} />
          <TextDiv>
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
          </TextDiv>
        </VFlex>
        <VFlex>
          <TextDiv>
            D3
          </TextDiv>
          <LinkedImage link={require("../static/images/PDFFloorPlans/D3.pdf")} src={require('../static/images/D3.png')} />
          <TextDiv>
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
          </TextDiv>
        </VFlex>
        <VFlex>
          <TextDiv>
            D4
          </TextDiv>
          <LinkedImage link={require("../static/images/PDFFloorPlans/D4.pdf")} src={require('../static/images/D4.png')} />
          <TextDiv>
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
          </TextDiv>
        </VFlex>
      </HFlex>
    </VFlex>
    <VFlex style={{ backgroundColor: 'rgba(217, 217, 217, 1)' }}>
      <TitleDiv style={{ color: 'black' }}>
        Lofted townhomes
      </TitleDiv>
      <HFlex>
        <VFlex>
          <TextDiv>
            E1
          </TextDiv>
          <LinkedImage link={require("../static/images/PDFFloorPlans/E1.pdf")} src={require('../static/images/E1.png')} />
          <TextDiv>
            1085 Sq Ft
            <br />
            Street Level Entry
            <br />
            Greeting Area & Office
            <br />
            Lofted Bedroom & Storage
            <br />
            Washer/Dryer
          </TextDiv>
        </VFlex>
        <VFlex>
          <TextDiv>
            E2
          </TextDiv>
          <LinkedImage link={require("../static/images/PDFFloorPlans/E2.pdf")} src={require('../static/images/E2.png')} />
          <TextDiv>
            1135 Sq Ft
            <br />
            Street Level Entry
            <br />
            Greeting Area & Office
            <br />
            Lofted Bedroom & Storage
            <br />
            Washer/Dryer
          </TextDiv>
        </VFlex>
        <VFlex>
          <TextDiv>
            E3
          </TextDiv>
          <LinkedImage link={require("../static/images/PDFFloorPlans/E3.pdf")} src={require('../static/images/E3.png')} />
          <TextDiv>
            1059 Sq Ft
            <br />
            Street Level Entry
            <br />
            Greeting Area & Office
            <br />
            Lofted Bedroom & Storage
            <br />
            Washer/Dryer
          </TextDiv>
        </VFlex>
        <VFlex>
          <TextDiv>
            E4
          </TextDiv>
          <LinkedImage link={require("../static/images/PDFFloorPlans/E4.pdf")} src={require('../static/images/E4.png')} />
          <TextDiv>
            1258 Sq Ft
            <br />
            Street Level Entry
            <br />
            Greeting Area & Office
            <br />
            Lofted Bedroom & Storage
            <br />
            Washer/Dryer
          </TextDiv>
        </VFlex>
      </HFlex>
    </VFlex>
    <Footer />
  </>
);
