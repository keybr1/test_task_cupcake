class Products {
  constructor() {
    this.classNameActive = "products-element__btn_active";
    this.labelAdd = "Add to 🛒";
    this.labelRemove = "Delete from 🛒";
  }
  handleSetLocationStorage(element, isbn13) {
    const { pushProduct, products } = localStorageUtil.putProducts(isbn13);

    if (pushProduct) {
      element.classList.add(this.classNameActive);
      element.innerHTML = this.labelRemove;
    } else {
      element.classList.remove(this.classNameActive);
      element.innerHTML = this.labelAdd;
    }

    headerPage.render(products.length);
  }

  handlerOpenModalPage() {
    modalPage.render();
  }

  render() {
    const productsStore = localStorageUtil.getProducts();
    let htmlCatalog = "";

    CATALOG.forEach(({ isbn13, title, price, image }) => {
      let activeClass = "";
      let activeText = "";

      if (productsStore.indexOf(isbn13) === -1) {
        activeText = this.labelAdd;
      } else {
        activeClass = " " + this.classNameActive;
        activeText = this.labelRemove;
      }

      htmlCatalog += `
        <li class="products-element">
          <span class="products-element__title">${title}</span>
          <img class="products-element__img" src="${image}" />
          <a href="#" class="products-element__modal" onclick="productsPage.handlerOpenModalPage();">More details</a>
          <div class="products-element__wrapper">
          <span class="products-element__price">🔥 ${price.toLocaleString()} USD</span> 
          <input type="number" class="products-element__count" name="qty" placeholder="qty"/> 
          </div>
          <button class="products-element__btn${activeClass}" onclick="productsPage.handleSetLocationStorage(this, '${isbn13}');">
          ${activeText}</button>
        </li>
      `;
    });

    const html = `
      <ul class="products-container">
        ${htmlCatalog}
      </ul>
    `;

    root_products.innerHTML = html;
  }
}

const productsPage = new Products();
