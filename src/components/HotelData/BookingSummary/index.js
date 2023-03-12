import { styled, Typography } from '@material-ui/core';

export default function BookingSummary() {
  return(
    <>
      <StyledTypography color={'textSecondary'}>Você já escolheu seu quarto:</StyledTypography>
      {/* CARD DO IGOR */}
    </>
  );
}

const StyledTypography = styled(Typography)`
  margin-bottom: 37px !important;
`;
