import StarshipCard from "./StarshipCard";

const StarshipList = (starshipsData) => {
  const starships = starshipsData.starships;
  console.log("StarshipList: starships: ", starships);
  console.log("StarshipList: starships.length: ", starships.length);
  if (!starships.length) {
    return <p>No starships found.</p>;
 }
  return (
    <>
      <h2>Starships</h2>
      <p>Results: {starships.length}</p>
      <ul>
        {starships.map((starship, index) => (
          <StarshipCard key={index} starship={starship} />
        ))}
      </ul>
    </>
  );
};

export default StarshipList;
