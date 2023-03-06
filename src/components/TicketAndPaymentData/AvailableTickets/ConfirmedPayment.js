import { Box, styled, Typography } from '@material-ui/core';
import { AiFillCheckCircle } from 'react-icons/ai';

export default function ConfirmedPayment() {
  return (
    <Paid display={'flex'} alignItems={'center'} justifyContent={'rigth'}>
      <Check paddingRight={'5px'}>
        <AiFillCheckCircle color='#36B853' fontSize={'2.5em'} width={'45px' } height={'45px'}/>
      </Check>
      <Message>
        <StyledTypography variant="bold" color="textPrimary">
          {'Pagamento confirmado!'}
        </StyledTypography>
        <StyledTypography variant="body2" color="textPrimary">
          {'Prossiga para escolha de hospedagem e atividades'}
        </StyledTypography>
      </Message>
    </Paid>
  );
};

const StyledTypography = styled(Typography)`
`;

const Paid = styled(Box)`
  display: flex;
  flex-direction: row !important; 
  justify-content: center;
  align-items: center;

`;
const Check = styled(Box)`
  width: 45px !important;
`;
const Message = styled(Box)`
display: flex;
flex-direction: column;

`;
