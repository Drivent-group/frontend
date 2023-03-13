import { Box, Typography } from '@material-ui/core';
import { da } from 'date-fns/locale';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import useBooking from '../../../hooks/api/useBooking';
import useHotel from '../../../hooks/api/useHotel';
import useToken from '../../../hooks/useToken';
import useHotelRooms from '../../../hooks/api/useHotelRooms';
import { set } from 'date-fns';

export default function HotelIncluded({ booking }) {
  const [data, setData] = useState(null);
  const [amount, setAmount] = useState(null);
  const user = useToken();
  const hotelId = booking.Room.hotelId;
  console.log(booking);
  const hotel = useHotelRooms(user, hotelId);

  useEffect(() => {
    if (hotel.RoomsLoading === false) {
      setData(hotel.rooms);
      if (booking.Room.capacity === 1) {
        setAmount('Single');
      } else if (booking.Room.capacity === 2) {
        setAmount('Double');
      } else if (booking.Room.capacity === 3) {
        setAmount('Triple');
      };
    }
  }, [hotel.RoomsLoading]);

  return (
    data ? <>
      <HotelBoxContainer>
        <OuterContainer>
          <InnerContainer>
            <figure >
              <img className="hotelFigure" src={data.image} alt={'Hotel Image'} ></img>
            </figure>
          </InnerContainer>
          <StyledTypography variant="body1">
            <ContainerTextArea>
              <ContainerText>{data.name}</ContainerText>
              <Roominfos>{'Quarto reservado'}</Roominfos>
              <Roominfossubtext>{booking.Room.name + ' ' + '(' + amount + ')'}</Roominfossubtext>
              <Roominfos>{'Pessoas no seu quarto'}</Roominfos>
              <Roominfossubtext>{booking.Room.capacity}</Roominfossubtext>
            </ContainerTextArea>
          </StyledTypography>
        </OuterContainer>
      </HotelBoxContainer>
    </> :
      <>
        <HotelBoxContainer>
          <OuterContainer>
            <InnerContainer>
              <figure >
                <img className="hotelFigure" src={'https://pix10.agoda.net/hotelImages/124/1246280/1246280_16061017110043391702.jpg?ca=6&ce=1&s=1024x768'} alt={'hotel'} ></img>
              </figure>
            </InnerContainer>
            <StyledTypography variant="body1">
              <ContainerTextArea>
                <ContainerText>{''}</ContainerText>
                <Roominfos>{'Quarto reservado'}</Roominfos>
                <Roominfossubtext>{'000 (Single)'}</Roominfossubtext>
                <Roominfos>{'Pessoas no seu quarto'}</Roominfos>
                <Roominfossubtext>{'0'}</Roominfossubtext>
              </ContainerTextArea>
            </StyledTypography>
          </OuterContainer>
        </HotelBoxContainer>
      </>
  );
}

const StyledTypography = styled(Typography)`
  max-width: 330px;
  line-height: 1.15rem !important;
`;

const ChoosenRoomText = styled.h2`
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    margin-top: -5px;
    color: #8E8E8E;
`;

const HotelBoxContainer = styled.div`
border: 1px solid black;
display: flex;
justify-content: row;
width: 100%;
flex-wrap: wrap;
border: none;
margin-top: 14px;
`;

const OuterContainer = styled.div`
width: 196px;
height: 264px;
background-color: #FFEED2;
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

const ContainerTextArea = styled.div`
color: #3C3C3C;
`;

const ContainerText = styled.h3`
font-size: 20px;
`;

const Roominfos = styled.h4`
font-weight: 700;
font-size: 12px;
margin-top: 10px;
`;

const Roominfossubtext = styled.p`
font-size: 12px;
`;

