import { Box, Typography } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import useAvailableTickets from '../../../hooks/api/useAvailableTickets';

function Card({ item, counter, setCounter }) {
  const [chosen, setChosen] = React.useState(false);
  const click = () => {
    if(counter === 0 && chosen === false) {
      setChosen(true);
      setCounter(counter + 1);
    }else if(counter === 1 && chosen === true) {
      setChosen(false);
      setCounter(0);
    };
  };
  return (
    <TicketCard key={item.id} onClick={click} alignitems="center" className={chosen}>
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
  const [counter, setCounter] = useState(0);
  const cards = useAvailableTickets();
  console.log(counter);
  
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
          counter={counter}
          setCounter={setCounter}
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

