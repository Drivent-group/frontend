import api from './api';
export async function getHotelRooms(token, hotelId) {
  const response = await api.get(`/hotels/${hotelId}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    } 
  });
  return response.data;
}
