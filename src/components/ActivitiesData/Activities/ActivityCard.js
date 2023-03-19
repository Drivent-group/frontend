import styled from 'styled-components';
import Vacancies from './Vacancies';

export default function ActivityCard({ activity }) {
  console.log('🚀 ~ file: ActivityCard.js:5 ~ ActivityCard ~ activity:', activity);
  return (
    <Card>
      {activity.name}
      <Vacancies capacity={activity.Venue.capacity} occupiedSeats={activity._count.Seat} />
    </Card>
  );
}

const Card = styled.div``;
