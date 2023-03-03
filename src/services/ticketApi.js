import api from './api';

export async function getAvailableTickets(token) {
  const response = await api.get('/tickets/types', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  const ticketTipes = [];

  for (let i = 0; i < 2; i++) {
    ticketTipes.push(response.data[i]);    
  }

  return ticketTipes;
}
//
