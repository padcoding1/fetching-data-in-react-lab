const BASE_URL = "https://swapi.dev/api/starships/";

const fetchStarships = async () => {
  try {
    const response = await fetch(BASE_URL);
    console.log("fetchStarships response: ", response)
    const data = await response.json();
    console.log("fetchStarships data: ", data)
    return data.results;
  } catch (error) {
    console.error("Error: fetchStarships, Fetching All Starships...", error);
    throw error;
  }
};

const findStarship = async (starship) => {
  try {
    console.log("findStarship: starship:", starship);
    const queryString = `${starship}`;
    const response = await fetch(BASE_URL + `?search=${queryString}`);
    
    console.log("findStarship: response: ", response)
    const data = await response.json();
    
    console.log("findStarship: data.results:", data.results);
    return data.results;
  } catch (error) {
    console.error("Error: starshipService/findStarship, Fetching Specific Starship...", error);
    throw error;
  }
};

export { fetchStarships, findStarship };
