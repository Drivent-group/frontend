import { useEffect, useState } from 'react';
import AvailableTickets from '.';
import useTicket from '../../../hooks/api/useTicket';
import CreditCardComponent from './creditCardPage';

export default function Payment() {
  const [ticket, setTicket] = useState(false);
  const existingTicket = useTicket();
  useEffect(() => {
    try{
      setTicket(existingTicket.ticket);
    }catch (err) {
      
    }
  },);

  if(!ticket) {
    return (
      <AvailableTickets/>
    );
  }
  return (
    <CreditCardComponent
      ticketData={ticket}
    ></CreditCardComponent>
  );
}
