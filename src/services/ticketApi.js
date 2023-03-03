import api from './api';

export async function getAvailableTickets(token) {
  const response = await api.get('/tickets/types', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  const ticketTipes = [];

  for (let i = 0; i < response.data.length; i++) {
    if (!response.data[i].includesHotel) {
      ticketTipes.push(response.data[i]);
    };   
  }

  return ticketTipes;
}
//
