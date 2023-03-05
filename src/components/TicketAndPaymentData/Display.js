import NoEnrollment from './NoEnrollment';
import AvailableTickets from './AvailableTickets';

export const display = {
  true: <AvailableTickets />,
  false: <NoEnrollment />,
};
