import { CartElem } from "./CartElem.jsx";
import { cartStore } from "./Store.js";

export const renderCart = () => {
  const cartList = document.querySelector('.cart__list');
  const cartPriceTotal = document.querySelector('.cart__price_total');

  const updateList = () => {
    const cart = cartStore.getCart();
    cartList.textContent = '';

    if (!cart.length) {
      const messageItem = document.createElement('li');
      messageItem.classList.add('cart_no-product');
      messageItem.textContent = 'Тут пока ничего нет';
      cartList.append(messageItem);
      return;
    }

    const productCards = cart.map(CartElem);
    cartList.append(...productCards);

    const totalPriceValue = cart.reduce(
      (acc, product) => acc + product.price * product.quantity,
      0,
    );

    cartPriceTotal.innerHTML = `${totalPriceValue}&nbsp;₽`;
  };

  cartStore.subscribe(updateList);
  updateList();
};