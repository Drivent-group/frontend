import useToken from '../useToken';

import * as ticketsApi from '../../services/ticketApi';
import { useEffect, useState } from 'react';

function useAsync(handler, immediate = true) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(immediate);
  const [error, setError] = useState(null);

  const act = async(...args) => {
    setLoading(true);
    setError(null);

    try {
      const data = await handler(...args);
      setData(data);
      setLoading(false);
      return data;
    } catch (err) {
      setError(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    if (immediate) {
      act();
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    data,
    loading,
    error,
    act
  };
}

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
