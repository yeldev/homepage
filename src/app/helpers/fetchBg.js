export const fetchPlanet = async (rundomParam, type) => {
  try {
    const response = await fetch(`https://swapi.dev/api/${type}/${rundomParam + 1}/`);
    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
};