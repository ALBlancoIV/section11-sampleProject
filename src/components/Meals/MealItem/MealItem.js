import React, { useContext } from 'react';

import { CartContext } from '../../../store/cartContext';

import classes from './MealItem.module.css';
import MealItemForm from './MealItemForm';

const MealItem = (props) => {
  const meal = props.meal;
  const price = `$${meal.price.toFixed(2)}`;

  const storeContext = useContext(CartContext);

  const onAddToCartHandler = (amount) => {
    storeContext.addItem({
      id: meal.id,
      name: meal.name,
      amount: amount,
      price: meal.price
    });
  };

  return (
    <li className={classes.meal}>
      <div>
        <h3>{meal.name}</h3>
        <div className={classes.description}>{meal.description}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <div>
        <MealItemForm id={meal.id} onAddToCart={onAddToCartHandler} />
      </div>
    </li>
  );
};

export default MealItem;
