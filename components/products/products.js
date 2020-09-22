class Products {
  render() {
    let htmlCatalog = "";
    catalog.forEach(({ title, subtitle, isbn13, price, image, url }) => {
      htmlCatalog += `
        <li>
          <span>${title}</span>
          <span>${subtitle}</span>
          <img src="${image}" />
          <span>${price}</span>
          <span>${url}</span>
          <button>Add to Shopping Cart</button>
        </li>
      `;
    });

    const html = `
      <ul>
        ${htmlCatalog}
      </ul>
    `;

    root_products.innerHTML = html;
  }
}

const productsPage = new Products();
productsPage.render();
