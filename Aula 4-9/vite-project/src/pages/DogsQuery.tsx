import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";

const DogsQuery = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [breedInput, setBreedInput] = useState("");
  const breed = searchParams.get("breed");
  const [dog, setDog] = useState(null);

  useEffect(() => {
    async function fetchDogImage() {
      const result = await fetch(
        `https://dog.ceo/api/breed/${breed}/images/random`
      );
      const data = await result.json();
      setDog(data.message);
    }
    fetchDogImage();
  }, [breed, searchParams]);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleBreedInput = (e: any) => {
    setBreedInput("breed=" + e.target.value);
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
      <img
        style={{ height: "500px", width: "500px", objectFit: "cover" }}
        src={dog ?? ""}
        alt=""
      />
      <input type="text" onChange={handleBreedInput} />
      <button onClick={() => setSearchParams(breedInput)}>Get breed</button>
    </div>
  );
};

export default DogsQuery;
