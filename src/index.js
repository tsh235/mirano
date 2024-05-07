import '@/scss/index.scss';
import { initHeaderFixer } from '@/scripts/headerFixer.js';
import { initChoices } from '@/scripts/choices.js';
import { initCart } from '@/scripts/cart.js';
import { renderProducts } from '@/scripts/renderProducts.js';

const init = () => {
  initHeaderFixer();
  initChoices();
  initCart();
  renderProducts();
};

document.addEventListener('DOMContentLoaded', init);