import { Box, Typography } from '@material-ui/core';
import React from 'react';
import styled from 'styled-components';

function Card(props) {
  const [chosen, setChosen] = React.useState(false);
  function select() {
    setChosen(!chosen);
  }
  return (
    <TicketCard key={props.id} onClick={select} alignitems="center" className={chosen}>
      <StyledTypography alignitems="center" variant="body1" color="textSecondary" align="center">
        {props.name}
      </StyledTypography>
      <StyledTypography alignitems="center" variant="body1" color="textSecondary" align="center">
        {props.price}
      </StyledTypography>
    </TicketCard>
  );
}

export default function Cards() {
  const tickets =[
    {
      'id': 2,
      'name': 'Presencial',
      'price': 250,
      'isRemote': false,
      'includesHotel': false,
      'createdAt': '2023-03-02T02:29:06.818Z',
      'updatedAt': '2023-03-02T02:29:06.818Z'
    },
    {
      'id': 3,
      'name': 'Online',
      'price': 100,
      'isRemote': true,
      'includesHotel': false,
      'createdAt': '2023-03-02T02:30:13.856Z',
      'updatedAt': '2023-03-02T02:30:13.856Z'
    }
  ];
  
  return(
    <Tickets>
      {tickets.map((item) => (<Card key={item.id} name={item.name} price={item.price} />))}
    </Tickets>
  );
};

const StyledTypography = styled(Typography)`
  margin-bottom: 5px !important;
`;

const Tickets = styled(Box)`
  display: flex;
  justify-content: flexstart;

  margin-top: 17px;
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

