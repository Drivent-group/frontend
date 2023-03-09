import { Typography } from '@material-ui/core';
import styled from 'styled-components';
import useTicket from '../../hooks/api/useTicket';
import HotelBox from '../../pages/Dashboard/Hotel/HotelBox';
import HotelNotIncluded from './HotelNotIncluded';
import NoPayment from './NoPayment';

export default function HotelData() {
  const { ticket } = useTicket();

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

  return (
    <>
      <StyledTypography variant="h4">Escolha de hotel e quarto</StyledTypography>
      <HotelBox></HotelBox>
    </>
  );
}

const StyledTypography = styled(Typography)`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 34px;
  line-height: 40px;
  color: #000000;
  margin-bottom: 35px;
`;
