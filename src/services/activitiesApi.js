import api from './api';

export async function getActivitiesByDayId(token, dayId) {
  try {
    const response = await api.get(`/activities/day/${dayId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (errors) {
    return null;
  }
}
