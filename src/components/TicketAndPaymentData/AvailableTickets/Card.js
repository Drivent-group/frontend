import { Box, Typography } from '@material-ui/core';
import React from 'react';
import styled from 'styled-components';

export default function Card({ item, chosen, setChosen, basicPrice = 0 }) {
  const click = () => {
    if (chosen === null) {
      setChosen(item);
    } else if (chosen === item) {
      setChosen(null);
    } else if (chosen !== item && chosen !== null) {
      setChosen(null);
      setChosen(item);
    }
  };
  return (
    <TicketCard key={item.id} onClick={click} alignitems="center" className={chosen === item ? true : false}>
      <StyledTypography alignitems="center" variant="body1" color="textPrimary" align="center">
        {basicPrice ? (item.price - basicPrice ? 'Com Hotel' : 'Sem Hotel') : item.name}
      </StyledTypography>
      <StyledTypography alignitems="center" variant="body2" color="textSecondary" align="center">
        {`${basicPrice ? '+' : ''} R$ ${item.price - basicPrice}`}
      </StyledTypography>
    </TicketCard>
  );
}

const StyledTypography = styled(Typography)`
  line-height: 1 !important;
  margin-bottom: 5px !important;
`;

const TicketCard = styled(Box)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 145px;
  height: 145px;
  left: 341px;
  top: 323px;

  border: 1px solid #cecece;
  border-radius: 20px;

  margin-right: 24px;
`;
