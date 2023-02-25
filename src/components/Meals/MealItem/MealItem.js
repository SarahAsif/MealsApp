import { useContext } from "react";

import MealItemForm from "./MealItemForm";
import classes from "./MealItem.module.css";
import CartContext from "../../../store/cart-context";

const MealItem = ({ id, description, name, price, image }) => {
  const cartCtx = useContext(CartContext);
  const addToCartHandler = (amount) => {
    cartCtx.addItem({
      id: id,
      description: description,
      name: name,
      price: price,
      image: image,
      amount: amount,
    });
  };

  return (
    <li className={classes.meal} key={id}>
      <div className={classes.flex}>
        <div>
          <img className={classes.image} src={image} />
        </div>
        <div className={classes.marg}>
          <h3>{description}</h3>
          <div className={classes.description}>{description}</div>
          <div className={classes.price}>${price}</div>
        </div>
      </div>
      <div>
        <MealItemForm id={id} onAddToCart={addToCartHandler} />
      </div>
    </li>
  );
};

export default MealItem;
