import { Box, Typography } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import useAvailableTickets from '../../../hooks/api/useAvailableTickets';
import { display } from './Display';

function Card({ item, chosen, setChosen }) {
  const click = () => {
    if(chosen === null) {
      setChosen(item);
    }else if(chosen === item) {
      setChosen(null);      
    }else if(chosen !== item && chosen !== null) {
      setChosen(null);
      setChosen(item);      
    };
  };
  return (
    <TicketCard key={item.id} onClick={click} alignitems="center" className={chosen === item ? true : false}>
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
  const [chosen, setChosen] = React.useState(null);
  const cards = useAvailableTickets();
  
  console.log(chosen);
  console.log(display);

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
      <>
        <Tickets >
          {tickets.map((item) => (<Card 
            key={item.id} 
            item={item}
            chosen={chosen}
            setChosen={setChosen}
          />))}
        </Tickets>
        {display[chosen?.isRemote]}
      </>
      
    );
  };
}

function isObject(obj) {
  return obj === Object(obj);
}

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

