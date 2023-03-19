import dayjs from 'dayjs';
import styled from 'styled-components';
import Vacancies from './Vacancies';

export default function ActivityCard({ activity }) {
  const duration = dayjs(activity.endTime).diff(activity.startTime, 'hour', true);
  const startHour = dayjs(activity.startTime).get('hour') + 3 + ':00';
  const endHour = dayjs(activity.endTime).get('hour') + 3 + ':00';
  return (
    <Card duration={duration}>
      <ActivityNameAndTime>
        <ActivityName>{activity.name}</ActivityName>
        <ActivityTime>{startHour + ' - ' + endHour}</ActivityTime>
      </ActivityNameAndTime>
      <Vacancies capacity={activity.Venue.capacity} occupiedSeats={activity._count.Seat} />
    </Card>
  );
}

const Card = styled.div`
  cursor: pointer;
  ${({ duration }) => `height: calc(${duration} * 80px + ${duration - 1} * 10px);`}
  display: flex;
  justify-content: space-between;
  background-color: #f1f1f1;
  border-radius: 5px;
  padding: 12px 10px;
`;

const ActivityNameAndTime = styled.div`
  border-right: 2px solid #cfcfcf;
  width: 100%;
`;
const ActivityName = styled.div`
  width: 100%;
  font-weight: 700;
  font-size: 12px;
  line-height: 14px;
`;
const ActivityTime = styled.div`
  width: 100%;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  margin-top: 6px;
`;
