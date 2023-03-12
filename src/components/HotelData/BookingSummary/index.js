import { styled, Typography } from '@material-ui/core';
import HotelIncluded from './HotelIncluded';

export default function BookingSummary({ hotelId }) {
  return(
    <>
      <StyledTypography color={'textSecondary'}>Você já escolheu seu quarto:</StyledTypography>
      <HotelIncluded hotelId = {hotelId}/>
    </>
  );
}

const StyledTypography = styled(Typography)`
  margin-bottom: 37px !important;
`;
