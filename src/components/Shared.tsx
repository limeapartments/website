import styled from 'styled-components';

export const TitleDiv = styled.div`
  color: white;
  font-family: 'Amatic SC';
  font-size: 50px;
`;

export const SubtitleDiv = styled.div`
  color: white;
  font-family: 'Sanchez';
  font-size: 24px;
  padding-bottom: 20px;
`;

export const SectionImageDiv = styled.div<{ image: string}>`
  background: linear-gradient(
    rgba(0, 0, 0, 0.3),
    rgba(0, 0, 0, 0.3)
  ), url(${props => props.image});
  background-size: cover;
  background-position: bottom;
  height: 600px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const VFlex = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 40px;
  padding-bottom: 40px;
  width: 100%;
`;
