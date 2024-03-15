import { useEffect, useState } from "react";

const URL = "https://api.spoonacular.com/recipes/complexSearch";
const API_KEY = import.meta.env.VITE_FOOD_API_KEY;
// console.log(import.meta.env.VITE_FOOD_API_KEY);

export default function Search({ foodData, setFoodData }) {
  const [query, setQuery] = useState("");
  useEffect(() => {
    async function fetchFood() {
      const response = await fetch(`${URL}?query=${query}&apiKey=${API_KEY}`);
      const data = await response.json();
      //   console.log(data.results);
      setFoodData(data.results);
    }
    // fetchFood();
  }, [query]);
  return (
    <>
      <div>
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          type="text"
        />
      </div>
    </>
  );
}
