import { useState } from "react";

function Animal() {
  const [animal, setAnimal] = useState("");
  const [data, setData] = useState(null);
  const [error, setError] = useState("");

  const getAnimalInfo = async () => {
    const apiUrl = `https://api.api-ninjas.com/v1/animals?name=${animal}`;
    const apiKey = "c4N0gXW1zyrSkuVUWCdRuQ==52IOjUi1WsDoQgNp";
    try {
      const response = await fetch(apiUrl, {
        method: "GET",
        headers: {
          "X-Api-Key": apiKey,
          "Content-Type": "application/json",
        },
      });
      if (!response.ok) {
        throw new Error("Error fetching data");
      }
      const data = await response.json();
      setData(data);
      setError("");
    } catch (error) {
      setError(error.message);
    }
  };

  const handleSubmit = () => {
    getAnimalInfo();
  };

  const handleReset = () => {
    setAnimal("");
    setData(null);
    setError("");
  };

  return (
    <div>
      <h1>Animal Facts Api Project</h1>
      <input
        type="text"
        placeholder="Enter Animal/Bird Name"
        value={animal}
        onChange={(e) => {
          setAnimal(e.target.value);
        }}
      />
      <br />
      <br />
      <button onClick={handleSubmit}>Get Information</button>
      <button onClick={handleReset}>Clear</button>
      {error && <p>{error}</p>}
      {data && data.length > 0 && (
        <div className="container">
          <div className="type-1">
            <p className="name">Name : {data[0].name}</p>
            <p className="type">Type : {data[0].characteristics.type}</p>
            <p className="kingdom">Kingdom : {data[0].taxonomy.kingdom}</p>
            <p className="phylum">Phylum : {data[0].taxonomy.phylum}</p>
            <p className="class">Class : {data[0].taxonomy.class}</p>
            <p className="order">Order : {data[0].taxonomy.order}</p>
            <p className="family">Family : {data[0].taxonomy.family}</p>
            <p className="genus">Genus : {data[0].taxonomygenus}</p>
            <p className="scientific_name">
              Scientific Name : {data[0].taxonomy.scientific_name}
            </p>
            <p className="locations">Location : {data[0].locations[0]}</p>
            <p className="main_prey">
              Prey : {data[0].characteristics.main_prey}
            </p>
            <p className="distinctive_features">
              Features : {data[0].characteristics.distinctive_feature}
            </p>
            <p className="most_distinctive_features">
              Features : {data[0].characteristics.most_distinctive_feature}
            </p>
            <p className="habitat">
              Habitat : {data[0].characteristics.habitat}
            </p>
            <p className="predators">
              Predators : {data[0].characteristics.predators}
            </p>
            <p className="diet">Diet : {data[0].characteristics.diet}</p>
            <p className="venomous">
              Venomous : {data[0].characteristics.venomous}
            </p>
            <p className="aggression">
              Aggression : {data[0].characteristics.aggression}
            </p>
            <p className="lifestyle">
              Lifestyle : {data[0].characteristics.lifestyle}
            </p>
            <p className="favorite_food">
              Favorite Food : {data[0].characteristics.favorite_food}
            </p>
            <p className="lifespan">
              Lifespan : {data[0].characteristics.lifestyle}
            </p>
          </div>
          <div className="type-2">
            <p className="name">Name : {data[1].name}</p>
            <p className="type">Type : {data[1].characteristics.type}</p>
            <p className="kingdom">Kingdom : {data[1].taxonomy.kingdom}</p>
            <p className="phylum">Phylum : {data[1].taxonomy.phylum}</p>
            <p className="class">Class : {data[1].taxonomy.class}</p>
            <p className="order">Order : {data[1].taxonomy.order}</p>
            <p className="family">Family : {data[1].taxonomy.family}</p>
            <p className="genus">Genus : {data[1].taxonomygenus}</p>
            <p className="scientific_name">
              Scientific Name : {data[1].taxonomy.scientific_name}
            </p>
            <p className="locations">Location : {data[1].locations[0]}</p>
            <p className="main_prey">
              Prey : {data[1].characteristics.main_prey}
            </p>
            <p className="distinctive_features">
              Features : {data[1].characteristics.distinctive_feature}
            </p>
            <p className="most_distinctive_features">
              Features : {data[1].characteristics.most_distinctive_feature}
            </p>
            <p className="habitat">
              Habitat : {data[1].characteristics.habitat}
            </p>
            <p className="predators">
              Predators : {data[1].characteristics.predators}
            </p>
            <p className="diet">Diet : {data[1].characteristics.diet}</p>
            <p className="venomous">
              Venomous : {data[1].characteristics.venomous}
            </p>
            <p className="aggression">
              Aggression : {data[1].characteristics.aggression}
            </p>
            <p className="lifestyle">
              Lifestyle : {data[1].characteristics.lifestyle}
            </p>
            <p className="favorite_food">
              Favorite Food : {data[1].characteristics.favorite_food}
            </p>
            <p className="lifespan">
              Lifespan : {data[1].characteristics.lifestyle}
            </p>
          </div>
          <div className="type-3">
            <p className="name">Name : {data[2].name}</p>
            <p className="type">Type : {data[2].characteristics.type}</p>
            <p className="kingdom">Kingdom : {data[2].taxonomy.kingdom}</p>
            <p className="phylum">Phylum : {data[2].taxonomy.phylum}</p>
            <p className="class">Class : {data[2].taxonomy.class}</p>
            <p className="order">Order : {data[2].taxonomy.order}</p>
            <p className="family">Family : {data[2].taxonomy.family}</p>
            <p className="genus">Genus : {data[2].taxonomygenus}</p>
            <p className="scientific_name">
              Scientific Name : {data[2].taxonomy.scientific_name}
            </p>
            <p className="locations">Location : {data[2].locations[0]}</p>
            <p className="main_prey">
              Prey : {data[2].characteristics.main_prey}
            </p>
            <p className="distinctive_features">
              Features : {data[2].characteristics.distinctive_feature}
            </p>
            <p className="most_distinctive_features">
              Features : {data[2].characteristics.most_distinctive_feature}
            </p>
            <p className="habitat">
              Habitat : {data[2].characteristics.habitat}
            </p>
            <p className="predators">
              Predators : {data[2].characteristics.predators}
            </p>
            <p className="diet">Diet : {data[2].characteristics.diet}</p>
            <p className="venomous">
              Venomous : {data[2].characteristics.venomous}
            </p>
            <p className="aggression">
              Aggression : {data[2].characteristics.aggression}
            </p>
            <p className="lifestyle">
              Lifestyle : {data[2].characteristics.lifestyle}
            </p>
            <p className="favorite_food">
              Favorite Food : {data[2].characteristics.favorite_food}
            </p>
            <p className="lifespan">
              Lifespan : {data[2].characteristics.lifestyle}
            </p>
          </div>
          <div className="type-4">
            <p className="name">Name : {data[3].name}</p>
            <p className="type">Type : {data[3].characteristics.type}</p>
            <p className="kingdom">Kingdom : {data[3].taxonomy.kingdom}</p>
            <p className="phylum">Phylum : {data[3].taxonomy.phylum}</p>
            <p className="class">Class : {data[3].taxonomy.class}</p>
            <p className="order">Order : {data[3].taxonomy.order}</p>
            <p className="family">Family : {data[3].taxonomy.family}</p>
            <p className="genus">Genus : {data[3].taxonomygenus}</p>
            <p className="scientific_name">
              Scientific Name : {data[3].taxonomy.scientific_name}
            </p>
            <p className="locations">Location : {data[3].locations[0]}</p>
            <p className="main_prey">
              Prey : {data[3].characteristics.main_prey}
            </p>
            <p className="distinctive_features">
              Features : {data[3].characteristics.distinctive_feature}
            </p>
            <p className="most_distinctive_features">
              Features : {data[3].characteristics.most_distinctive_feature}
            </p>
            <p className="habitat">
              Habitat : {data[3].characteristics.habitat}
            </p>
            <p className="predators">
              Predators : {data[3].characteristics.predators}
            </p>
            <p className="diet">Diet : {data[3].characteristics.diet}</p>
            <p className="venomous">
              Venomous : {data[3].characteristics.venomous}
            </p>
            <p className="aggression">
              Aggression : {data[3].characteristics.aggression}
            </p>
            <p className="lifestyle">
              Lifestyle : {data[3].characteristics.lifestyle}
            </p>
            <p className="favorite_food">
              Favorite Food : {data[3].characteristics.favorite_food}
            </p>
            <p className="lifespan">
              Lifespan : {data[3].characteristics.lifestyle}
            </p>
          </div>
          <div className="type-5">
            <p className="name">Name : {data[4].name}</p>
            <p className="type">Type : {data[4].characteristics.type}</p>
            <p className="kingdom">Kingdom : {data[4].taxonomy.kingdom}</p>
            <p className="phylum">Phylum : {data[4].taxonomy.phylum}</p>
            <p className="class">Class : {data[4].taxonomy.class}</p>
            <p className="order">Order : {data[4].taxonomy.order}</p>
            <p className="family">Family : {data[4].taxonomy.family}</p>
            <p className="genus">Genus : {data[4].taxonomygenus}</p>
            <p className="scientific_name">
              Scientific Name : {data[4].taxonomy.scientific_name}
            </p>
            <p className="locations">Location : {data[4].locations[0]}</p>
            <p className="main_prey">
              Prey : {data[4].characteristics.main_prey}
            </p>
            <p className="distinctive_features">
              Features : {data[4].characteristics.distinctive_feature}
            </p>
            <p className="most_distinctive_features">
              Features : {data[4].characteristics.most_distinctive_feature}
            </p>
            <p className="habitat">
              Habitat : {data[4].characteristics.habitat}
            </p>
            <p className="predators">
              Predators : {data[4].characteristics.predators}
            </p>
            <p className="diet">Diet : {data[4].characteristics.diet}</p>
            <p className="venomous">
              Venomous : {data[4].characteristics.venomous}
            </p>
            <p className="aggression">
              Aggression : {data[4].characteristics.aggression}
            </p>
            <p className="lifestyle">
              Lifestyle : {data[4].characteristics.lifestyle}
            </p>
            <p className="favorite_food">
              Favorite Food : {data[4].characteristics.favorite_food}
            </p>
            <p className="lifespan">
              Lifespan : {data[4].characteristics.lifestyle}
            </p>
          </div>
          <div className="type-6">
            <p className="name">Name : {data[5].name}</p>
            <p className="type">Type : {data[5].characteristics.type}</p>
            <p className="kingdom">Kingdom : {data[5].taxonomy.kingdom}</p>
            <p className="phylum">Phylum : {data[5].taxonomy.phylum}</p>
            <p className="class">Class : {data[5].taxonomy.class}</p>
            <p className="order">Order : {data[5].taxonomy.order}</p>
            <p className="family">Family : {data[5].taxonomy.family}</p>
            <p className="genus">Genus : {data[5].taxonomygenus}</p>
            <p className="scientific_name">
              Scientific Name : {data[5].taxonomy.scientific_name}
            </p>
            <p className="locations">Location : {data[5].locations[0]}</p>
            <p className="main_prey">
              Prey : {data[5].characteristics.main_prey}
            </p>
            <p className="distinctive_features">
              Features : {data[5].characteristics.distinctive_feature}
            </p>
            <p className="most_distinctive_features">
              Features : {data[5].characteristics.most_distinctive_feature}
            </p>
            <p className="habitat">
              Habitat : {data[5].characteristics.habitat}
            </p>
            <p className="predators">
              Predators : {data[5].characteristics.predators}
            </p>
            <p className="diet">Diet : {data[5].characteristics.diet}</p>
            <p className="venomous">
              Venomous : {data[5].characteristics.venomous}
            </p>
            <p className="aggression">
              Aggression : {data[5].characteristics.aggression}
            </p>
            <p className="lifestyle">
              Lifestyle : {data[5].characteristics.lifestyle}
            </p>
            <p className="favorite_food">
              Favorite Food : {data[5].characteristics.favorite_food}
            </p>
            <p className="lifespan">
              Lifespan : {data[5].characteristics.lifestyle}
            </p>
          </div>
          <div className="type-7">
            <p className="name">Name : {data[6].name}</p>
            <p className="type">Type : {data[6].characteristics.type}</p>
            <p className="kingdom">Kingdom : {data[6].taxonomy.kingdom}</p>
            <p className="phylum">Phylum : {data[6].taxonomy.phylum}</p>
            <p className="class">Class : {data[6].taxonomy.class}</p>
            <p className="order">Order : {data[6].taxonomy.order}</p>
            <p className="family">Family : {data[6].taxonomy.family}</p>
            <p className="genus">Genus : {data[6].taxonomygenus}</p>
            <p className="scientific_name">
              Scientific Name : {data[6].taxonomy.scientific_name}
            </p>
            <p className="locations">Location : {data[6].locations[0]}</p>
            <p className="main_prey">
              Prey : {data[6].characteristics.main_prey}
            </p>
            <p className="distinctive_features">
              Features : {data[6].characteristics.distinctive_feature}
            </p>
            <p className="most_distinctive_features">
              Features : {data[6].characteristics.most_distinctive_feature}
            </p>
            <p className="habitat">
              Habitat : {data[6].characteristics.habitat}
            </p>
            <p className="predators">
              Predators : {data[6].characteristics.predators}
            </p>
            <p className="diet">Diet : {data[6].characteristics.diet}</p>
            <p className="venomous">
              Venomous : {data[6].characteristics.venomous}
            </p>
            <p className="aggression">
              Aggression : {data[6].characteristics.aggression}
            </p>
            <p className="lifestyle">
              Lifestyle : {data[6].characteristics.lifestyle}
            </p>
            <p className="favorite_food">
              Favorite Food : {data[6].characteristics.favorite_food}
            </p>
            <p className="lifespan">
              Lifespan : {data[6].characteristics.lifestyle}
            </p>
          </div>
          <div className="type-8">
            <p className="name">Name : {data[7].name}</p>
            <p className="type">Type : {data[7].characteristics.type}</p>
            <p className="kingdom">Kingdom : {data[7].taxonomy.kingdom}</p>
            <p className="phylum">Phylum : {data[7].taxonomy.phylum}</p>
            <p className="class">Class : {data[7].taxonomy.class}</p>
            <p className="order">Order : {data[7].taxonomy.order}</p>
            <p className="family">Family : {data[7].taxonomy.family}</p>
            <p className="genus">Genus : {data[7].taxonomygenus}</p>
            <p className="scientific_name">
              Scientific Name : {data[7].taxonomy.scientific_name}
            </p>
            <p className="locations">Location : {data[7].locations[0]}</p>
            <p className="main_prey">
              Prey : {data[7].characteristics.main_prey}
            </p>
            <p className="distinctive_features">
              Features : {data[7].characteristics.distinctive_feature}
            </p>
            <p className="most_distinctive_features">
              Features : {data[7].characteristics.most_distinctive_feature}
            </p>
            <p className="habitat">
              Habitat : {data[7].characteristics.habitat}
            </p>
            <p className="predators">
              Predators : {data[7].characteristics.predators}
            </p>
            <p className="diet">Diet : {data[7].characteristics.diet}</p>
            <p className="venomous">
              Venomous : {data[7].characteristics.venomous}
            </p>
            <p className="aggression">
              Aggression : {data[7].characteristics.aggression}
            </p>
            <p className="lifestyle">
              Lifestyle : {data[7].characteristics.lifestyle}
            </p>
            <p className="favorite_food">
              Favorite Food : {data[7].characteristics.favorite_food}
            </p>
            <p className="lifespan">
              Lifespan : {data[7].characteristics.lifestyle}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default Animal;
