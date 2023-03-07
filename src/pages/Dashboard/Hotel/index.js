import HotelData from '../../../components/HotelData';
import useTicket from '../../../hooks/api/useTicket';

export default function Hotel() {
  const existingTicket = useTicket();

  return <HotelData hasEnrollment={isObject(existingTicket.ticket)} />;
}

function isObject(obj) {
  return obj === Object(obj);
}
