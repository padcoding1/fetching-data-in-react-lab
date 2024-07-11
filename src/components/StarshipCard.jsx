const StarshipCard = (starshipData) => {
  const starship = starshipData.starship;
  console.log("StarshipCard: starship.name",starship.name);
  return (
    <>
      <div className="card">
        <h2>{starship.name}</h2>
        <p>Model: {starship.model}</p>
        <p>Class: {starship.starship_class}</p>
        <p>Manufacturer: {starship.manufacturer}</p>
      </div>
    </>
  );
};

export default StarshipCard;
