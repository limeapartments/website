import styled from 'styled-components';

/**
 * The black striped background component
 **/
export const BlackStriped = styled.div`
  background-image: url(${require('../../static/images/blackstripes.jpg')});
  width: 100%;
`;

/**
 * Title text
 **/
export const TitleDiv = styled.div`
  margin-top: 50px;
  color: white;
  font-family: 'Amatic SC';
  font-size: 50px;
  text-align: center;
`;

/**
 * Subtitle text
 **/
export const SubtitleDiv = styled.div`
  color: white;
  font-family: 'Sanchez';
  font-size: 24px;
  padding-bottom: 20px;
  text-align: center;
  max-width: 900px;
`;

/**
 * Div with background image and color overlay (light black)
 **/
export const SectionImageDiv = styled.div<{ image: string, overlayOpacity?: number }>`
  background: linear-gradient(
    rgba(0, 0, 0, ${props => props.overlayOpacity === undefined ? 0.1 : props.overlayOpacity}),
    rgba(0, 0, 0, ${props => props.overlayOpacity === undefined ? 0.1 : props.overlayOpacity})
  ), url(${props => props.image});
  background-size: cover;
  background-position: left 0px top 50%;
  min-height: 600px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

/**
 * Vertically centered divs
 **/
export const VFlex = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 40px;
  padding-bottom: 40px;
`;

/**
 * Horizontally centered divs that wrap on line end
 **/
export const HFlex = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 40px;
  padding-bottom: 40px;
  width: 100%;
  flex-wrap: wrap;
`;
