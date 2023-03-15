import { Box, Typography } from '@material-ui/core';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import DateCard from './DateCard';

export default function ActivitiesDates({ chosen, setChosen }) {
  const dates = [
    {
      'id': 1,
      'day': '2023-10-22',
    },
    {
      'id': 2,
      'day': '2023-10-23',
    },
    {
      'id': 3,
      'day': '2023-10-24',
    },
  ];

  const display = {
    true: <Title variant="h6" color="textSecondary" >Primeiro, filtre pelo dia do evento:</Title>,
    false: '',
  };
  
  /* useEffect(async() => {
    const data = await getDates();
    setDates(data.dates);
  }, []); */

  if (dates.length === 0) {
    return (
      <Dates>
        <StyledTypography alignitems="center" variant="body1" color="textSecondary" align="center">
          {'Carregando tickets'}
        </StyledTypography>
      </Dates>
    );
  } else {
    return (
      <>
        {display[chosen === null]}
        <Dates>
          {dates.map((item) => (
            <DateCard key={item.id} item={item} chosen={chosen} setChosen={setChosen}/>
          ))}
        </Dates>
      </>
    );
  }
}

const StyledTypography = styled(Typography)`
  line-height: 1 !important;
`;

const Dates = styled(Box)`
  display: flex;

  margin-top: 17px;
  margin-bottom: 46px;
`;

const Title = styled(Typography)`
  margin-top: 25px !important;
  margin-bottom: 10px !important;
`;

