export const OrderSuccess = (id) => (
  <div class="order__wrapper">
    <h2 class="order__title">Заказ оформлен</h2>
    <p class="order__success">Номер заказа: {id}</p>
    <button class="order__close" type="button">&times;</button>
  </div>
);