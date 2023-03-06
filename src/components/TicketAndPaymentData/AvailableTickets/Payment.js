import { useEffect, useState } from 'react';
import AvailableTickets from '.';
import useTicket from '../../../hooks/api/useTicket';
import CreditCard from './CreditCard';

export default function Payment() {
  const [ticket, setTicket] = useState(false);
  const existingTicket = useTicket();
  useEffect(() => {
    if( existingTicket.ticket !== false) {
      setTicket(existingTicket.ticket);
    }
  }, [existingTicket.ticketLoading]);

  if(!ticket) {
    return (
      <AvailableTickets/>
    );
  }
  return (
    <CreditCard
      ticketData={ticket}
    ></CreditCard>
  );
}
