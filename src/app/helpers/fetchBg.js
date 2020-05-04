export const fetchBg = async (rundomParam) => {
  try {
    const response = await fetch(`https://swapi.dev/api/planets/${rundomParam}`);
    const data = await response.json();
    console.log(data);
  } catch (error) {
    
  }
};