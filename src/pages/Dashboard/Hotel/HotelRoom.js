import { useEffect, useState } from 'react';
import styled from 'styled-components';
import useHotelRooms from '../../../hooks/api/useHotelRooms';
import { Box, Typography } from '@material-ui/core';
import useBookingByRoomId from '../../../hooks/api/useBookingByRoomId';
import useBooking from '../../../hooks/api/useBooking';

export default function HotelRooms(props) {
  const { id, user } = props;

  let [capacity, setCapacity] = useState(0);
  const room =  useHotelRooms(user, id).rooms;
  const booking = useBookingByRoomId(id).booking;

  let count=0;
  let bookingNumber;
  const capacityArray = [];

  let single; 
  let double; 
  let triple;

  if(room && booking) {
    room.Rooms.forEach(room => {
      count = count + room.capacity;
      capacityArray.push(room.capacity);
    });
    
    bookingNumber = booking.length;
  }

  function descriptionString(single, double, triple)  {
    single = capacityArray.includes(1);
    double = capacityArray.includes(2);
    triple = capacityArray.includes(3);
    
    if(single && double && triple) {
      return('Single, Double and Triple');
    }

    if(single && double && !triple) {
      return('Single and Double');
    }

    if(single && !double && !triple) {
      return('Single');
    }
  }

  useEffect(() => {
    setCapacity(count - bookingNumber);
  }, [room]);

  if(room && booking) {
    return (
      <>
        <GrandLetter variant='h6'>{room.name}</GrandLetter>
        <BoldLetter variant='subtitle' > Tipos de Acomodação:</BoldLetter>
        <NormalLetter>
          {
            descriptionString(single, double, triple)
          }

        </NormalLetter>
        <BoldLetter variant='subtitle'>Vagas Disponíveis:</BoldLetter>
        <NormalLetter>
          {capacity}
        </NormalLetter>
      </>
    );
  }
  return(
    <BoldLetter>Carregando quartos</BoldLetter>
  );
}
const BoldLetter = styled(Typography)`
font-family: 'Roboto';
font-style: normal;
font-weight: 700;
font-size: 12px;
line-height: 14px;
color: #343434;
margin-bottom: 5px !important;
`;

const GrandLetter = styled(Typography)`
font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 20px;
line-height: 23px;
color: #343434;
margin-bottom: 10px;
margin-top: 10px
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
