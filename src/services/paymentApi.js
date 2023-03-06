import api from './api';

export async function createPayment(ticketId
  , token) {
  const body = {
    'ticketId': ticketId,
    'cardData': {
      'issuer': 'Miss Darin OKon',
      'number': '236415953352116',
      'name': 'Kari Steuber',
      'expirationDate': '5/2023',
      'cvv': '372'
    }
  };

  await api.post('/payments/process', body, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return window.location.reload();
}
