import styled from 'styled-components';
import HotelBox from './HotelBox';

export default function Hotel() {
  return(
    <>
      <H1>Escolha de hotel e quarto</H1>
      <H2>Primeiro, escolha seu hotel</H2>
      <HotelBox></HotelBox>
    </>
  );
}

const H1 = styled.h1`
font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 34px;
line-height: 40px;
color: #000000;
margin-bottom: 35px;
`;

const H2 = styled.h2`
font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 20px;
line-height: 23px;
color: #8E8E8E;
margin-bottom: 18px;
`;

