import { useEffect, useState } from 'react';
import styled from 'styled-components';

export default function Vacancies({ capacity, occupiedSeats }) {
  const [occupied, setOcuppied] = useState(null);
  const vacancies = capacity - occupiedSeats;
  console.log(vacancies);
  
  useEffect(() => {
    if (occupiedSeats === capacity) {
      setOcuppied(false);
    } else {
      setOcuppied(true);
    }
  });

  return (

    occupied ?
      <Data>
        <img src='https://i.ibb.co/6ycWSy7/pepicons-enter.png' />
        <TextVacancie> {vacancies} vagas </TextVacancie> 
      </Data>
      :

      <Data>
        <img src='https://i.ibb.co/kGX6pVX/ant-design-close-circle-outlined.png' />
        <TextOcuppied> Esgotado </TextOcuppied> 
      </Data>
  );
}

const Data = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 40%;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  margin-top: 6px;
`;

const TextVacancie = styled.p`
  color: #078632;
  margin-top: 6px;
`;

const TextOcuppied = styled.p`
  color:#CC6666;
  margin-top: 6px;
`;
