import { Typography } from '@material-ui/core';
import { useState } from 'react';
import styled from 'styled-components';
import CreditCardComponent from '../creditCardPage';
import { display } from './Display';

export default function TicketAndPaymentData({ hasEnrollment }) {
  const [isPayed, setIsPayed] = useState(false);
  
  return (
    <>
      <StyledTypography variant="h4">Ingresso e Pagamento</StyledTypography>
      {/*  {display[hasEnrollment]} */}

      {isPayed?
        <>
          {/* parte da larissa, pode aproveitar o css do topo do credit card component */}
        </> 
        :
        <CreditCardComponent 
          modality = {''} 
          hotelChoice = {''} 
          finalValue = {''} 
          setIsPayed = {setIsPayed}
          userId = {'userId'}
          ticketId = {'ticketId'} 
        ></CreditCardComponent> }
    </>
  );
}

const StyledTypography = styled(Typography)`
  margin-bottom: 37px !important;
`;
