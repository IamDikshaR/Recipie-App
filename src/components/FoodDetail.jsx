import { useEffect, useState } from "react";
import styles from "../css/foodDetail.module.css";

export default function FoodDetail({ foodId }) {
  const [food, setFood] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const URL = `https://api.spoonacular.com/recipes/${foodId}/information`;
  const API_KEY = import.meta.env.VITE_FOOD_API_KEY;
  useEffect(() => {
    async function fetchFood() {
      const response = await fetch(`${URL}?apiKey=${API_KEY}`);
      const data = await response.json();
      setFood(data);
      setIsLoading(false);
    }
    fetchFood();
  }, [foodId]);
  return (
    <div className={styles.recipeCard}>
      <h5>Food Details </h5>
      <div>
        <h1 className={styles.recipeName}>{food.title}</h1>
        <img className={styles.recipeImg} src={food.image} alt="" />
      </div>
      <div className={styles.recipeDetails}>
        <span>
          <strong>{food.readyInMinutes} Minutes</strong>
        </span>
        <span>
          <strong>Serves {food.servings}</strong>
        </span>
        <span>{food.vegetarian ? "Vegetarian" : "Non-Vegeteraian"}</span>
        <span>{food.vegan ? "Vegan" : ""}</span>
      </div>
      <div>
        <span>$ {food.pricePerServing / 100} Per Serving</span>
      </div>
      <div>
        <h2>Instructions</h2>
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          <ol className={styles.recipeInstructions}>
            {food.analyzedInstructions[0].steps.map((step, index) => (
              <li key={index}>{step.step}</li>
            ))}
          </ol>
        )}
      </div>
    </div>
  );
}
