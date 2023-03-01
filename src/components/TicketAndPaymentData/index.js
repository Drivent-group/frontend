import { Typography } from '@material-ui/core';
import styled from 'styled-components';
import { display } from './Display';

export default function TicketAndPaymentData({ hasEnrollment }) {
  return (
    <>
      <StyledTypography variant="h4">Ingresso e Pagamento</StyledTypography>
      {display[hasEnrollment]}
    </>
  );
}

const StyledTypography = styled(Typography)`
  margin-bottom: 20px !important;
`;
