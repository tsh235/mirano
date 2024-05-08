import { ProductCard } from "./ProductCard.jsx";
import { store } from "./Store.js";


export const renderProducts = async () => {
  const goodsList = document.querySelector('.goods__list');

  const updateList = () => {
    const products = store.getProducts();
    goodsList.innerHTML = '';

    const productsCards = products.map(product => {
      const li = document.createElement('li');
      li.classList.add('goods__item');
      li.append(ProductCard(product));
      return li;
    });

    goodsList.append(...productsCards);
  };

  store.subscribe(updateList);
  updateList();
};