import { fetchProducts } from "./API.js";
import { ProductCard } from "./ProductCard.jsx";


export const renderProducts = async () => {
  const goodsList = document.querySelector('.goods__list');
  const products = await fetchProducts();
  
  goodsList.innerHTML = '';

  const productsCards = products.map(product => {
    const li = document.createElement('li');
    li.classList.add('goods__item');
    li.append(ProductCard(product));
    return li;
  });

  goodsList.append(...productsCards);
};