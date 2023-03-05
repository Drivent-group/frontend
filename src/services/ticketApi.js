import api from './api';

export async function getAvailableTickets(token) {
  const response = await api.get('/tickets/types', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  const ticketTipesWhithoutHotel = [];
  const ticketTipesWhithHotel = [];

  for (let i = 0; i < response.data.length; i++) {
    if (!response.data[i].includesHotel) {
      ticketTipesWhithoutHotel.push(response.data[i]);
    };
    if (response.data[i].includesHotel) {
      ticketTipesWhithHotel.push(response.data[i]);
    };  
  }

  return { ticketTipesWhithoutHotel, ticketTipesWhithHotel };
}
//
