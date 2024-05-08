import { store } from "./Store.js";

export const initChoicesType = () => {
  const typeChoices = document.querySelector('.filter__choices_type');
  const typeList = document.querySelector('.filter__type-list');

  const updateTypeChoicesVisibility = () => {
    const categories = store.getCategories();

    if (categories.size) {
      typeList.textContent = '';

      categories.forEach(category => {
        const li = document.createElement('li');
        li.classList.add('filter__type-item');
        li.insertAdjacentHTML('beforeend', `
          <button class="filter__type-btn" type="button">${category}</button>
        `);

        typeList.append(li);
      });

      typeChoices.style.display = '';
    } else {
      typeChoices.style.display = 'none';
    }
  };

  store.subscribe(updateTypeChoicesVisibility);
  updateTypeChoicesVisibility();
};