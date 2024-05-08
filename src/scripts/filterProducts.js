import { fetchProducts } from "./API.js";

const filterType = type => {
  fetchProducts({type: type.value});
}

export const filterProducts = () => {
  const filterForm = document.querySelector('.filter__form');

  filterType(filterForm.type);

  filterForm.addEventListener('input', e => {
    const target = e.target;
    const goodsTitle = document.querySelector('.goods__title');
    goodsTitle.textContent = target.nextElementSibling.textContent;

    if (target.name === 'type') {
      filterType(filterForm.type);
    }
  });
};