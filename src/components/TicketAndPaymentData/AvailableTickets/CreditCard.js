import { Typography } from '@material-ui/core';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import ConfirmedPayment from './ConfirmedPayment';
import CreditCardComponent from './creditCardPage';

export default function CreditCard({ ticketData }) {
  const [includesHotel, setIncludesHotel] = useState('');
  const [paid, setPaid] = useState(false);

  const display = {
    true: < ConfirmedPayment/>,
    false: <CreditCardComponent ticketData={ ticketData }/>,
  };
  
  useEffect(() => {
    if(ticketData.TicketType.includesHotel === true) { 
      setIncludesHotel(' + Com Hotel');
    };
  
    if(ticketData.TicketType.isRemote === false && ticketData.TicketType.includesHotel === false) { 
      setIncludesHotel(' + Sem Hotel');
    };
  }, []);

  useEffect(() => {
    if(ticketData.status === 'PAID') { 
      setPaid(true);
    }
  }, []);

  return(
    <>
      <Title variant="h6" color="textSecondary">
        {'Ingresso Escolhido'}
      </Title>

      <TicketCard>
        <StyledTypography variant="body1" color="textPrimary">
          {`${ticketData.TicketType.name}${includesHotel}`}
        </StyledTypography>
        <StyledTypography color="textSecondary">
          {`R$ ${ticketData.TicketType.price}`}
        </StyledTypography>
      </TicketCard>
      <Title variant="h6" color="textSecondary">
        {'Pagamento'}
      </Title>
      
      {display[paid]}

    </>
  );
}

const StyledTypography = styled(Typography)`
`;

const Title = styled(Typography)`
  margin-top: 30px !important;
  margin-bottom: 10px !important;
`;

const TicketCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 290px;
  height: 108px;
  border: 1px solid #cecece;
  border-radius: 20px;
  background-color: #ffeed2;

`;
