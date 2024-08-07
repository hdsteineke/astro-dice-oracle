import { client, checkError } from './client';

export async function createHoroscope(horoscope) {
  const response = await client
    .from('horoscopes')
    .insert([horoscope]);

  return checkError(response);
}


export async function getHoroscopes() {
  const response = await client
    .from('horoscopes')
    .select('*');

  return checkError(response);
}