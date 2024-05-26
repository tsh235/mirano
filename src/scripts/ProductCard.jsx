import { API_URL } from './API';
import { cartStore } from './Store';

export const ProductCard = (product) => (
  <article class="goods__card card">
    <img class="card__img" src={`${API_URL}${product.photoUrl}`} alt={product.name} />
    <div class="card__content">
      <h3 class="card__title">{product.name}</h3>
      <div class="card__footer">
        <p class="card__date-delivery">сегодня в 14:00</p>
        <button class="card__btn"
          onMouseLeave={(e) => e.target.innerHTML = `${product.price}&nbsp;₽`}  
          onMouseEnter={(e) => e.target.textContent = "В корзину"}
          onClick={() => cartStore.addProductCart(product.id)}
        >{product.price}&nbsp;₽</button>
      </div>
    </div>
  </article>
);