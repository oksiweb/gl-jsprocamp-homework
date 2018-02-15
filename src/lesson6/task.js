// с помощью Fetch API и swapi.co API получить следующие данные
import fetch from 'isomorphic-fetch';

// function check status
const status = response => {
  if (response.status >= 200 && response.status < 300) {
    return Promise.resolve(response);
  }
  return Promise.reject(new Error(response.statusText));
};

// Климат на любой планете по её имени
// {planetName} – String
function getClimate(planetName) {
  fetch(`https://swapi.co/api/planets/?search=${planetName}`)
    .then(status)
    .then(response => response.json())
    .then(data => data.results[0].climate)
    .catch(error => error);
}

// Получить информацию (Object) о любом персонаже по имени
// {name} – String
function getProfile(name) {
  fetch(`https://swapi.co/api/people/?search=${name}`)
    .then(status)
    .then(response => response.json())
    .then(data => data.results[0])
    .catch(error => error);
}

// Получить список пилотов (имена в виде Array of Strings) космического корабля
// по его названию
// {starshipName} - String
const loadPilots = url => fetch(url)
  .then(status)
  .then(response => response.json());

function getPilots(starshipName) {
  fetch(`https://swapi.co/api/starships/?search=${starshipName}`)
    .then(status)
    .then(response => response.json())
    .then(data => data.results[0].pilots)
    .then(pilots => Promise.all(pilots.map(pilot => loadPilots(pilot))))
    .then(data => data.map(pilot => pilot.name))
    .catch(error => error);
}

export default {
  getClimate,
  getProfile,
  getPilots,
};
