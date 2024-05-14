import { ProductCard } from "./ProductCard.jsx";
import { productStore } from "./Store.js";


export const renderProducts = async () => {
  const goodsList = document.querySelector('.goods__list');

  const updateList = () => {
    const products = productStore.getProducts();
    goodsList.innerHTML = '';

    if (!products.length) {
      const messageItem = document.createElement('li');
      messageItem.textContent = 'Нет товаров, соответствующих запросу';
      messageItem.classList.add('goods__no-product');
      goodsList.append(messageItem);
      return;
    }

    const productsCards = products.map(product => {
      const li = document.createElement('li');
      li.classList.add('goods__item');
      li.append(ProductCard(product));
      return li;
    });

    goodsList.append(...productsCards);
  };

  productStore.subscribe(updateList);
  updateList();
};