import { useState } from "react";

const StarshipSearch = (props) => {
  const [starship, setStarship] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    props.fetchData(starship);
    setStarship("");
  };

  return (
    <>
      <h2>Starship Search</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="starship">Search: </label>
        <input
          id="starship"
          name="starship"
          placeholder="a-wing, death star, etc"
          value={starship}
          onChange={(event) => setStarship(event.target.value)}
        />
        <button type="submit">Search</button>
      </form>
    </>
  );
};

export default StarshipSearch;
