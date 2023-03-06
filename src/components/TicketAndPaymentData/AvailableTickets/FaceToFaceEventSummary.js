import { Typography } from '@material-ui/core';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import useEnrollment from '../../../hooks/api/useEnrollment';
import useToken from '../../../hooks/useToken';
import { saveTicket } from '../../../services/ticketApi';

export default function FaceToFaceEventSummary({ setSelectedTicket, ticketData }) {
  const token = useToken();
  const [enrollment, setEnrollment] = useState({});
  const info = useEnrollment();
  useEffect(() => {
    if(info.enrollment !== null) {
      setEnrollment(info.enrollment);
    }
  }, [info.enrollmentLoading]);
  return (
    <StyledTypography>
      <Sumary>
        <Sumarytext>
          <>{'Fechado! O total ficou em '}</>
          <Boldspan>{`R$ ${ticketData.price}`}</Boldspan>
          <>{'. Agora é só confirmar:'}</>
        </Sumarytext>
        <Sumarybutton onClick={() => saveTicket(enrollment?.id, ticketData.id, token)}>
          <Sumarybuttontext>{'RESERVAR INGRESSO'}</Sumarybuttontext>
        </Sumarybutton>
      </Sumary>
    </StyledTypography>
  );
}

const StyledTypography = styled(Typography)`
  margin-bottom: 5px !important;
`;

const Sumary = styled.div`
  margin-top: 44px;
  height: 23px;
  font-weight: 200;
  font-size: 16px;
`;

const Sumarytext = styled.p`
  color: #8e8e8e;
  size: 20px;
  margin-bottom: 17px;
`;

const Sumarybutton = styled.button`
  width: 180px;
  height: 37px;
  background: #e0e0e0;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.25);
  border-radius: 4px;
  border-color: none;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Sumarybuttontext = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  text-align: center;
  color: #000000;
`;

const Boldspan = styled.span`
  font-weight: 600;
`;
