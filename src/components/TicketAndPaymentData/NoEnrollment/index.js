import { Box, Typography } from '@material-ui/core';
import styled from 'styled-components';

export default function NoEnrollment() {
  return (
    <Box style={{ display: 'flex', alignitems: 'center', justifyContent: 'center', height: 'calc(100% - 70px)' }}>
      <StyledTypography alignitems="center" variant="body1" color="textSecondary" align="center">
        {`Você precisa completar sua inscrição antes 
          de prosseguir pra escolha de ingresso`}
      </StyledTypography>
    </Box>
  );
}

const StyledTypography = styled(Typography)`
  max-width: 330px;
  line-height: 1.15rem !important;
`;
