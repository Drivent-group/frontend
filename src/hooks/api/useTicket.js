import useAsync from '../useAsync';
import useToken from '../useToken';

import * as ticketsApi from '../../services/ticketApi';

export default function getATicket() {
  const token = useToken();
  
  const {
    data: ticket,
    loading: ticketLoading,
    error: ticketError,
    act: getTicket
  } = useAsync(() => ticketsApi.getTicket(token));
  
  return {
    ticket,
    ticketLoading,
    ticketError,
    getTicket
  };
}
