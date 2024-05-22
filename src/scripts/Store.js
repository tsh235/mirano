import { API_URL } from './API';

// Хранилище
class Store {
  constructor() {
    this.observers = [];
  }

  // метод для добавления новых наблюдателей функций, которые добавляются при изменении состояния
  subscribe(observerFunction) {
    this.observers.push(observerFunction)
  }

  // метод для уведомления всех наблюдателей об изменениях в хранилище
  notifyObsrvers() {
    this.observers.forEach(observer => observer())
  }
}

class ProductStore extends Store {
  constructor() {
    super();
    this.products = [];
    this.categories = new Set();
  }

  getProducts() {
    return this.products;
  }

  setProducts(newProducts) {
    this.products = newProducts;
    this.updateCategories(newProducts)
    this.notifyObsrvers();
  }

  getCategories() {
    return this.categories;
  }

  updateCategories(products) {
    this.categories.clear();
    
    products.forEach(product => {
      if (product.categories) {
        product.categories.forEach(category => {
          this.categories.add(category);
        })
      }
    })
    this.notifyObsrvers();
  }
}

class CartStore extends Store {
  constructor() {
    super();
    this.cart = [];
  }

  async init() {
    await this.registerCart();
    await this.fetchCart();
  }

  async registerCart() {
    try {
      const response = await fetch(`${API_URL}/api/cart/register`, {
        method: 'POST',
        credentials: 'include',
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`)
      }
    } catch (error) {
      console.error(error);
    }
  }

  getCart() {
    return this.cart;
  }

  async fetchCart() {
    try {
      const response = await fetch(`${API_URL}/api/cart`, {
        method: 'GET',
        credentials: 'include'
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`)
      }

      const data = await response.json();
      this.cart = data;
      this.notifyObsrvers();
    } catch (error) {
      console.error(error);
    }
  }

  async postCart({id, quantity}) {
    try {
      const response = await fetch(`${API_URL}/api/cart/items`, {
        method: 'POST',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({productId: id, quantity}),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`)
      }

      const data = await response.json();
      this.cart = data;
      this.notifyObsrvers();
    } catch (error) {
      console.error(error);
    }
  }

  async addProductCart(id) {
    await this.postCart({id, quantity: 1});
  }

  clearCart() {
    this.cart = [];
    this.notifyObsrvers();
  }
}

export const productStore = new ProductStore();
export const cartStore = new CartStore();