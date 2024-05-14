import { renderCart } from "./renderCart.js";
import { cartStore } from "./Store.js";

const headerCartBtn = document.querySelector('.header__cart-btn');
const goods = document.querySelector('.goods');
const cart = document.querySelector('.cart');
const cartClose = document.querySelector('.cart__close');

const toggleCart = () => {
  cart.classList.toggle('cart_open');

  if (cart.classList.contains('cart_open') && window.innerWidth > 1360) {
    goods.scrollIntoView({behavior: 'smooth'});
  }
};

export const initCart = async () => {
  await cartStore.init();

  headerCartBtn.textContent = cartStore.getCart().length;
  headerCartBtn.addEventListener('click', toggleCart);
  
  renderCart();

  cartStore.subscribe(() => {
    headerCartBtn.textContent = cartStore.getCart().length;
  });

  cartClose.addEventListener('click', () => {
    cart.classList.remove('cart_open');
  });
};