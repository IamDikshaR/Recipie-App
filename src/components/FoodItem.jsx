import styles from "../css/foodItem.module.css";

export default function FoodItem({ food, setFoodId }) {
  return (
    <>
      <div className={styles.itemContainer}>
        <img className={styles.itemImage} src={food.image} alt={food.title} />
        <div className={styles.itemContent}>
          <p className={styles.itemName}>{food.title}</p>
        </div>
        {/* <h1>{food.title}</h1> */}
        <div className={styles.buttonContainer}>
          <button
            onClick={() => {
              setFoodId(food.id);
            }}
            className={styles.itemButton}
          >
            View recipie
          </button>
        </div>
      </div>
    </>
  );
}
