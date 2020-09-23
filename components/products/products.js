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
  }

  render() {
    const productsStore = localStorageUtil.getProducts();
    let htmlCatalog = "";
    catalog.forEach(({ title, subtitle, isbn13, price, image, url }) => {
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
          <span class="products-element__subtitle">${subtitle}</span>
          <img class="products-element__img" src="${image}" />
          <span class="products-element__price">🔥 ${price} USD</span>
          <a class="products-element__url" href="${url}" target="_blank">link to original</a>
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
productsPage.render();
