// с помощью Fetch API и swapi.co API получить следующие данные
import fetch from 'isomorphic-fetch';

// Климат на любой планете по её имени
// {planetName} – String

const fetchAsync = async url => {
  const data = await (await fetch(url)).json();
  return data;
};

async function getClimate(planetName) {
  try {
    const planetInfo = await fetchAsync(`https://swapi.co/api/planets/?search=${planetName}`);
    return planetInfo.results && planetInfo.results.length && planetInfo.results[0].climate;
  } catch (error) {
    console.error('Не удалось получить данные о погоде');
  }
}

// Получить информацию (Object) о любом персонаже по имени
// {name} – String
async function getProfile(name) {
  try {
    const personInfo = await fetchAsync(`https://swapi.co/api/people/?search=${name}`);
    return personInfo.results[0];
  } catch (error) {
    console.error('Не удалось получить данные о персонаже');
  }
}

// Получить список пилотов (имена в виде Array of Strings) космического корабля
// по его названию
// {starshipName} - String

async function getPilots(starshipName) {
  try {
    const starshipInfo = await fetchAsync(`https://swapi.co/api/starships/?search=${starshipName}`);
    const pilotsUrls = starshipInfo.results[0].pilots;
    const pilots = await Promise.all(pilotsUrls.map(async pilotUrl => {
      const pilot = await fetchAsync(pilotUrl);
      return pilot;
    }));
    const pilotsNames = pilots.map(pilot => pilot.name);
    return pilotsNames;
  } catch (error) {
    console.error('Не удалось получить данные об именах пилотов');
  }
}

export default {
  getClimate,
  getProfile,
  getPilots,
};
