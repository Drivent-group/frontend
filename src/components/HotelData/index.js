import { Typography } from '@material-ui/core';
import { useState } from 'react';
import styled from 'styled-components';
import useBooking from '../../hooks/api/useBooking';
import useTicket from '../../hooks/api/useTicket';
import HotelBox from '../../pages/Dashboard/Hotel/HotelBox';
import BookingSummary from './BookingSummary/index.js';
import ChangeBookingButton from './BookingSummary/ChangeBookingButton.js';
import HotelNotIncluded from './HotelNotIncluded';
import NoPayment from './NoPayment';
import RoomCards from './RoomCards';

export default function HotelData() {
  const [booked, setBooked] = useState(false);
  const { ticket } = useTicket();
  const { booking } = useBooking();
  const [hotelId, setHotelId] = useState(null);
  if (!ticket || ticket.status !== 'PAID') {
    return (
      <>
        <StyledTypography variant="h4">Escolha de hotel e quarto</StyledTypography>
        <NoPayment />
      </>
    );
  }

  if (!ticket.TicketType.includesHotel) {
    return (
      <>
        <StyledTypography variant="h4">Escolha de hotel e quarto</StyledTypography>
        <HotelNotIncluded />
      </>
    );
  }

  if (booking !== null) {
    /* if(booking === booked) {
      return (
        <>
          <StyledTypography variant="h4">Escolha de hotel e quarto</StyledTypography>
          <HotelBox/>
          <RoomCards booked={booked}/>
        </>
      );
    }
    return(
      <>
        <StyledTypography variant="h4">Escolha de hotel e quarto</StyledTypography>
        <BookingSummary/>
        <ChangeBookingButton booked={booked} booking={booking} setBooked={setBooked}/>
      </>
    ); */
  }

  return (
    <>
      <StyledTypography variant="h4">Escolha de hotel e quarto</StyledTypography>
      <HotelBox setHotelId = {setHotelId} hotelId = {hotelId}/>
      <RoomCards booked={booked} hotelId = {hotelId}/>
    </>
  );
}

const StyledTypography = styled(Typography)`
  margin-bottom: 37px !important;
 
`;
