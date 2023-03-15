import { Typography } from '@material-ui/core';
import { useState } from 'react';
import styled from 'styled-components';
import useTicket from '../../hooks/api/useTicket';
import ActivitiesDates from './ActivitiesDates';
import HotelNotIncluded from './HotelNotIncluded';
import NoPayment from './NoPayment';

export default function ActivitiesData() {
  const [chosenDate, setChosenDate] = useState(null);
  const { ticket } = useTicket();

  const display = {
    true: <StyledTypography dateId={chosenDate?.id}>lista de atividades aqui</StyledTypography>,
    false: '',
  };

  if (!ticket || ticket.status !== 'PAID') {
    return (
      <>
        <StyledTypography variant="h4">Escolha de atividades</StyledTypography>
        <NoPayment/>
      </>
    );
  }

  if (ticket.TicketType.isRemote) {
    return (
      <>
        <StyledTypography variant="h4">Escolha de atividades</StyledTypography>
        <HotelNotIncluded/>
      </>
    );
  }
  return (
    <>
      <StyledTypography variant="h4">Escolha de atividades</StyledTypography>
      <ActivitiesDates chosen={chosenDate} setChosen={setChosenDate}/>
      {display[chosenDate !== null]}
    </>    
  );
}

const StyledTypography = styled(Typography)`
  margin-bottom: 37px !important;
 
`;
