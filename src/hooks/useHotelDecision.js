import useGetPayment from '../../hooks/api/useGetPayment';
import useTicket from '../../hooks/api/useTicket';
import HotelNotIncluded from './HotelNotIncluded';
import NoPayment from './NoPayment';

const useHotelDisplay = () => {
  const { ticket } = useTicket();

  if (!ticket) return <NoPayment />;

  const { payment } = useGetPayment(ticket.id);

  if (!payment) return <NoPayment />;

  if (!ticket.includesHotel) return <HotelNotIncluded />;

  return 'oi';
};
