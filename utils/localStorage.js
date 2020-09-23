class LocalStorageUtil {
  constructor() {
    this.keyName = "products";
  }

  getProducts() {
    const productsLocalStorage = localStorage.getItem(this.keyName);
    if (productsLocalStorage !== null) {
      return JSON.parse(productsLocalStorage);
    }
    return [];
  }

  putProducts(isbn13) {
    let products = this.getProducts();
    let pushProduct = false;

    const index = products.indexOf(isbn13);

    if (index === -1) {
      products.push(isbn13);
      pushProduct = true;
    } else {
      products.splice(index, 1);
    }

    localStorage.setItem(this.keyName, JSON.stringify(products));
    return { pushProduct, products };
  }
}

const localStorageUtil = new LocalStorageUtil();
