import styled from 'styled-components';

export default function Vacancies({ capacity, occupiedSeats }) {
  return (
    <Data>
      {occupiedSeats} de {capacity}
    </Data>
  );
}

const Data = styled.div``;
