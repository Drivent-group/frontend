import styled from 'styled-components';
import useHotel from '../../../hooks/api/useHotel';
import useToken from '../../../hooks/useToken';

export default function HotelBox() {
  const user = useToken();
  const data = useHotel(user).hotel;
  console.log(data);

  return (
    <>
      <H2>Primeiro, escolha seu hotel</H2>
      <HotelBoxContainer>
        
        {data.map((hotel) => {
          return (
          
            <OuterContainer>

              <InnerContainer >
                <figure >
                  <img className="hotelFigure" src={hotel.image} alt={hotel.name} ></img>
                </figure>
              </InnerContainer>

              <GrandLetter>{hotel.name}</GrandLetter>
              <BoldLetter>Tipos de Acomodação:</BoldLetter>
              <NormalLetter>Single e Double</NormalLetter>
              <BoldLetter>Vagas Disponíveis:</BoldLetter>
              <NormalLetter>103</NormalLetter>
            </OuterContainer>
          );
        })} 
       
      </HotelBoxContainer>
        
    </>
  );
};

const BoldLetter = styled.h2`
font-family: 'Roboto';
font-style: normal;
font-weight: 700;
font-size: 12px;
line-height: 14px;
color: #3C3C3C;
margin-bottom: 5px;
`;

const GrandLetter = styled.h1`
font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 20px;
line-height: 23px;
color: #343434;
margin-bottom: 10px;
`;

const NormalLetter = styled.h3`
font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 12px;
line-height: 14px;
color: #3C3C3C;
margin-bottom: 14px;
`;

const HotelBoxContainer = styled.div`
display: flex;
flex-direction: row;
width: 100%;
flex-wrap: wrap;
`;

const OuterContainer = styled.div`
width: 196px;
height: 264px;
background-color: #E5E5E5;
border-radius: 8px;
margin-right: 20px;
padding-left: 15px;
padding-top: 15px;
padding-right: 15px;
margin-bottom: 15px;
`;

const InnerContainer = styled.div`
width: 168px;
height: 109px;
background-color: #E5E5E5;
margin-right: 20px;
border: 1px solid black;
border-radius: 5px;
margin-bottom: 10px;

img {
  width: 166px;
  height: 107px;
  overflow: hidden;
  border-radius: 5px;
}

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

