// src/App.jsx


import { useEffect, useState } from "react";
import "./App.css";
import * as starshipService from "./services/starshipService";
import StarshipList from "./components/StarshipList";
import StarshipSearch from "./components/StarshipSearch";

function App() {
  const [starships, setStarships] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDefaultStarships = async () => {
      try {
        const data = await starshipService.fetchStarships();
        setStarships(data);
        setLoading(false);
        console.log("fetchDefaultStarships...");
      } catch (error) {
        console.error("Error: useEffect, Fetch/Load...", error);
      } 
    };
    fetchDefaultStarships();
  }, []);

  const fetchData = async (starship) => {
    setLoading(true);
    try {
      const data = await starshipService.findStarship(starship);
      console.log("fetchData: data", data)
      setStarships(data);
      setLoading(false);
    } catch (error) {
      console.error("Error: fetchData, Fetching Specific Starship...", error);
    }
  };

  console.log("State:", starships);
  return (
    <>
      <h1>Star Wars API</h1>
      <StarshipSearch fetchData={fetchData} />
      {loading ? <p>Loading...</p> : <StarshipList starships={starships} />}
    </>
  );
}

export default App;
