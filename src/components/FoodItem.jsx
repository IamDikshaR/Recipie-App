export default function FoodItem({ food }) {
  return (
    <>
      <h1>{food.title}</h1>
      <img src={food.image} alt={food.title} />
      <button>View recipie</button>
    </>
  );
}
