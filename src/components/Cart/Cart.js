import React, { useContext } from 'react';

import { CartContext } from '../../store/cartContext';

import classes from './Cart.module.css';
import Modal from '../UI/Modal';

import CartItem from './CartItem';

const Cart = (props) => {
  const storeContext = useContext(CartContext);
  const totalAmount = `$${storeContext.totalAmount.toFixed(2)}`;
  const hasOrder = storeContext.items.length > 0;

  const removeAmountItemHandler = (id) => {
    storeContext.removeItem(id);
  };

  const addAmountItemHandler = (item) => {
    storeContext.addItem({...item, amount: 1})
  };

  const cartItems = (
    <ul className={classes['cart-items']}>
      {storeContext.items.map((item) => {
        return (
          <CartItem
            key={item.id}
            price={item.price}
            name={item.name}
            amount={item.amount}
            onRemove={removeAmountItemHandler.bind(null, item.id)}
            onAdd={addAmountItemHandler.bind(null, item)}
          />
        );
      })}
    </ul>
  );

  return (
    <Modal onClick={props.setCartVisibility}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className={classes.actions}>
        <button
          className={classes['button--alt']}
          onClick={props.setCartVisibility}
        >
          Close
        </button>
        {hasOrder && (
          <button className={classes.button} onClick={props.setCartVisibility}>
            Order
          </button>
        )}
      </div>
    </Modal>
  );
};

export default Cart;
