// Хранилище
class Store {
  constructor() {
    this.observers = [];
    this.products = [];
    this.categories = new Set();
  }

  // метод для добавления новых наблюдателей функций, которые добавляются при изменении состояния
  subscribe(observerFunction) {
    this.observers.push(observerFunction)
  }

  // метод для уведомления всех наблюдателей об изменениях в хранилище
  notifyObsrvers() {
    this.observers.forEach(observer => observer())
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
};

export const store = new Store();