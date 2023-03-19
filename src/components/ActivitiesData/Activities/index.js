import styled from 'styled-components';
import useActivitiesByDayId from '../../../hooks/api/useActivitiesByDayId';
import ActivityCard from './ActivityCard';

export default function Activities({ dayId }) {
  let data = useActivitiesByDayId(dayId);
  const hashTable = {};
  data.activities?.forEach((current) => {
    if (hashTable[current.venueId] === undefined) {
      hashTable[current.venueId] = [current];
    } else {
      hashTable[current.venueId].push(current);
    }
  });
  const hashTableKeys = Object.keys(hashTable);
  return (
    <>
      <ActivitiesTitle gridLength={hashTableKeys.length}>
        {hashTableKeys.map((currentKey) => {
          return <div key={currentKey}>{hashTable[currentKey][0].Venue.name}</div>;
        })}
      </ActivitiesTitle>
      <ActivitiesTable gridLength={hashTableKeys.length}>
        {hashTableKeys.map((currentKey) => {
          return (
            <div key={currentKey}>
              {hashTable[currentKey].map((currentActivity) => {
                return <ActivityCard key={currentActivity.id} activity={currentActivity} />;
              })}
            </div>
          );
        })}
      </ActivitiesTable>
    </>
  );
}
const ActivitiesTitle = styled.div`
  ${({ gridLength }) => gridLength && `grid-template-columns: repeat(${gridLength}, 1fr);`}
  grid-template-rows:  fill;
  display: grid;
  grid-gap: 1px;

  & > * {
    font-style: normal;
    font-weight: 400;
    font-size: 17px;
    line-height: 40px;
    text-align: center;
    color: #7b7b7b;
  }
`;
const ActivitiesTable = styled.div`
  ${({ gridLength }) => gridLength && `grid-template-columns: repeat(${gridLength}, 1fr);`}
  grid-template-rows:  fill;
  display: grid;
  background-color: #d7d7d7;
  border: 1px solid #d7d7d7;
  grid-gap: 1px;

  & > * {
    background-color: #fff;
    min-height: 100%;
  }
`;
