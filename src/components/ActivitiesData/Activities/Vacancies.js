import styled from 'styled-components';

export default function Vacancies({ capacity, occupiedSeats }) {
  return (
    <Data>
      {capacity} e {occupiedSeats}
    </Data>
  );
}

const Data = styled.div``;
