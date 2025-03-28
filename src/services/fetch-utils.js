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

export async function getHoroscopeById(id) {
  const response = await client
    .from('horoscopes')
    .select('*, question(*), horoscope(*), dice(*)')
    .match({ id: id })
    .single();

  return checkError(response);
}

export async function deleteHoroscope(id) {
  const response = await client
    .from('horoscopes')
    .delete()
    .match({ id: id });

    return checkError(response);
}