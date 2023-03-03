import { Typography } from '@material-ui/core';
import styled from 'styled-components';

export default function Onlineticket() {
  return (
    <StyledTypography>
      <Sumary>
        <Sumarytext>
          <>{'Fechado! O total ficou em '}</><Boldspan>{'R$ 100'}</Boldspan><>{'. Agora é só confirmar:'}</>
        </Sumarytext>
        <Sumarybutton>
          <Sumarybuttontext>
            {'RESERVAR INGRESSO'}
          </Sumarybuttontext>
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
  color: #8E8E8E;
  size: 20px;
  margin-bottom: 17px;
`;

const Sumarybutton = styled.button`
  width: 180px;
  height: 37px;
  background: #E0E0E0;
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
