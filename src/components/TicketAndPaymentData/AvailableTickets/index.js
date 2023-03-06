import { Box, Typography } from '@material-ui/core';
import { useState } from 'react';
import styled from 'styled-components';
import Cards from './Cards';
import CreditCardComponent from './creditCardPage';

export default function AvailableTickets() {
  const [selectedTicket, setSelectedTicket] = useState(false);
  const [ticketData, setTicketData] = useState({});

  return (
    <>
      {!selectedTicket ? (
        <Box
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-start',
            height: 'calc(100% - 102px)',
          }}
        >
          <StyledTypography variant="body1" color="textSecondary">
            {'Primeiro, escolha sua modalidade de ingresso'}
          </StyledTypography>
          <Cards setSelectedTicket={setSelectedTicket} setTicketData={setTicketData} />
        </Box>
      ) : (
        <CreditCardComponent
          ticketData={ticketData}
          modality={''}
          hotelChoice={''}
          finalValue={''}
          userId={'userId'}
          ticketId={'ticketId'}
        ></CreditCardComponent>
      )}
    </>
  );
}
const StyledTypography = styled(Typography)`
  margin-bottom: 5px !important;
`;
