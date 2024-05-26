import { API_URL } from './API';
import { debounce } from './debounce';
import { cartStore } from './Store';

export const CartElem = (product) => (
  <li class="cart__item">
    <img class="cart__img" src={`${API_URL}${product.photoUrl}`} alt={product.name} />

    <h4 class="cart__item-title">{product.name}</h4>

    <div class="cart__counter">
      <button class="cart__counter-btn"
        onClick={() => {
          cartStore.postCart({
            id: product.id, 
            quantity: product.quantity - 1,
          });
        }}
      >-</button>
      <input class="cart__counter-input" type="number" name="count" min="0" max="99"
        value={product.quantity}
        onInput={debounce(({target}) => {
          cartStore.postCart({
            id: product.id,
            quantity: !isNaN(parseInt(target.value))
              ? parseInt(target.value)
              : product.quantity,
          });
        }, 500)}
       />
      <button class="cart__counter-btn"
        onClick={() => {
          cartStore.postCart({
            id: product.id,
            quantity: product.quantity + 1,
          });
        }}
      >+</button>
    </div>

    <p class="cart__price">{product.quantity * product.price}&nbsp;₽</p>
  </li>
);
