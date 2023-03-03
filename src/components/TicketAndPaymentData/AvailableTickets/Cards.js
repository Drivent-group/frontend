import { Box, Typography } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import useAvailableTickets from '../../../hooks/api/useAvailableTickets';

function Card({ item, chosen, setChosen }) {
  const [color, setColor] = useState(false);
  const click = () => {
    if(chosen === false && color === false) {
      setChosen(true);
      setColor(true);
    }else if(chosen === true && color === true) {
      setChosen(false);
      setColor(false);      
    };
  };
  return (
    <TicketCard key={item.id} onClick={click} alignitems="center" className={color}>
      <StyledTypography  alignitems="center" variant="body1" color="textSecondary" align="center">
        {item.name}
      </StyledTypography>
      <StyledTypography alignitems="center" variant="body2" color="textSecondary" align="center">
        {`R$ ${item.price}`}
      </StyledTypography>
    </TicketCard>
  );
}

export default function Cards() {
  const [tickets, setTickets] = useState([]);
  const [chosen, setChosen] = React.useState(false);
  const cards = useAvailableTickets();
  
  useEffect(() => {
    if(cards.availableTickets) {
      setTickets(cards.availableTickets);
    }
  }, [cards.availableTicketsLoading]);

  if (tickets.length === 0) {
    return(
      <Tickets>
        <StyledTypography alignitems="center" variant="body1" color="textSecondary" align="center">
          {'carregando Tickets'}
        </StyledTypography>
      </Tickets>
    );
  } else {
    return(
      <Tickets>
        {tickets.map((item) => (<Card 
          key={item.id} 
          item={item} 
          chosen={chosen}
          setChosen={setChosen}
        />))}
      </Tickets>
    );
  };
};

const StyledTypography = styled(Typography)`
line-height: 1 !important;
`;

const Tickets = styled(Box)`
  display: flex;
  justify-content: flexstart;

  margin-top: 17px;

  .true {
  background-color: #FFEED2;
  }
`;

const TicketCard = styled(Box)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 145px;
  height: 145px;
  left: 341px;
  top: 323px;

  border: 1px solid #CECECE;
  border-radius: 20px;

  margin-right: 24px;

`;

