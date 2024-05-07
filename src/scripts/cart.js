export const initCart = () => {
  const headerCartBtn = document.querySelector('.header__cart-btn');
  const cart = document.querySelector('.cart');
  const cartClose = document.querySelector('.cart__close');

  const toggleCart = () => {
    cart.classList.toggle('cart_open');

    if (cart.classList.contains('cart_open') && window.innerWidth > 1360) {
      cart.scrollIntoView({behavior: 'smooth'});
    }
  };

  headerCartBtn.addEventListener('click', toggleCart);

  cartClose.addEventListener('click', () => {
    cart.classList.remove('cart_open');
  });
};