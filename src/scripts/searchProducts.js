import { fetchProducts } from './API';
import { callbackWithPreload } from './preload';

export const initSearchProducts = () => {
  const headerForm = document.querySelector('.header__form');
  const goodsTitle = document.querySelector('.goods__title');
  const goodsSection = document.querySelector('.goods');

  headerForm.addEventListener('submit', async e => {
    e.preventDefault();

    const formData = new FormData(headerForm);
    const searchQuery = formData.get('search').trim();

    if (searchQuery) {
      callbackWithPreload(goodsSection, fetchProducts, {search: searchQuery});
      goodsTitle.textContent = 'Результат поиска';
      headerForm.reset();
    }
  });
}