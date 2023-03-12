import api from './api';

export async function getBooking(token) {
  const response = await api.get('/booking', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
}

export async function getBookingByRoomId(token, roomId) {
  const response = await api.get(`/booking/${roomId}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
}

export async function saveBooking(userId, roomId, token) {
  const booked = await getBooking(token);
  const body = {
    'userId': userId,
    'roomId': roomId,
  };

  if (!booked) {
    await api.post('/booking', body, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  }else{
    await api.put(`/booking/${booked.id}`, body, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  }  

  return  window.location.reload();
}
