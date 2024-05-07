import { API_URL } from "./API.js";

export const ProductCard = (product) => (
    <article class="goods__card card">
      <img class="card__img" src={`${API_URL}${product.photoUrl}`} alt={product.name} />
      <div class="card__content">
        <h3 class="card__title">{product.name}</h3>
        <div class="card__footer">
          <p class="card__date-delivery">сегодня в 14:00</p>
          <button class="card__btn">
            <span class="card__price">{product.price}&nbsp;₽</span>
            <span class="card__btn-text">в&nbsp;корзину</span>
          </button>
        </div>
      </div>
    </article>
);