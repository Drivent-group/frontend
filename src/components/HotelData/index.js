import { Typography } from '@material-ui/core';
import styled from 'styled-components';
import useBooking from '../../hooks/api/useBooking';
import useTicket from '../../hooks/api/useTicket';
import HotelBox from '../../pages/Dashboard/Hotel/HotelBox';
import BookingSummary from './BookingSummary.js';
import HotelNotIncluded from './HotelNotIncluded';
import NoPayment from './NoPayment';
import RoomCards from './RoomCards';

export default function HotelData() {
  const { ticket } = useTicket();
  const { booking } = useBooking();

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
    return(
      <>
        <StyledTypography variant="h4">Escolha de hotel e quarto</StyledTypography>
        <BookingSummary/>
      </>
    );
  }

  return (
    <>
      <StyledTypography variant="h4">Escolha de hotel e quarto</StyledTypography>
      <HotelBox/>
      <RoomCards/>
    </>
  );
}

const StyledTypography = styled(Typography)`
  margin-bottom: 37px !important;
`;
