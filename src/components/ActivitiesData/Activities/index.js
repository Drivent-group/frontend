import styled from 'styled-components';
import useActivitiesByDayId from '../../../hooks/api/useActivitiesByDayId';

export default function Activities({ dayId }) {
  let data = useActivitiesByDayId(dayId);
  const hashTable = {};
  data.activities?.forEach((current) => {
    if (!hashTable[current.venueId]) hashTable[current.venueId] = true;
  });
  console.log('🚀 ~ file: index.js:5 ~ Activities ~ data:', Object.keys(hashTable).length);
  return <ActivitiesTable gridLength={Object.keys(hashTable).length}>oi</ActivitiesTable>;
}

const ActivitiesTable = styled.div`
  ${({ gridLength }) => gridLength && `grid-template-columns: repeat(${gridLength}, 1fr);`}
  display: grid;
  border: 1px solid black;
  grid-gap: 1px;

  & > * {
    background-color: #ccc;
  }
`;
