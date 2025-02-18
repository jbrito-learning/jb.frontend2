/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const DogsPage = () => {
  const [dog, setDog] = useState(null);

  const { breed } = useParams();

  useEffect(() => {
    async function fetchDogImage() {
      const result = await fetch(
        `https://dog.ceo/api/breed/${breed}/images/random`
      );
      const data = await result.json();
      setDog(data.message);
    }
    fetchDogImage();
  }, []);

  return (
    <div>
      <img src={dog ?? ""} alt="" />
    </div>
  );
};

export default DogsPage;
