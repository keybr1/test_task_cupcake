class Shopping {
  handleClear() {
    root_shopping.innerHTML = "";
  }

  render() {
    const productsStore = localStorageUtil.getProducts();
    let htmlCatalog = "";
    let sumCatalog = 0;

    catalog.forEach(({ title, isbn13, price }) => {
      if (productsStore.indexOf(isbn13) !== -1) {
        htmlCatalog += `
            <tr>
              <td class="shopping-element__title">📚 ${title}</td>
              <td class="shopping-element__price">${price.toLocaleString()} USD</td>
            </tr>
          `;
        sumCatalog += price;
      }
    });

    const html = `
      <div class="shopping-container">
        <div class="shopping__close" onclick="shoppingPage.handleClear();"></div> 
        <table>
          ${htmlCatalog}
            <tr>
              <td class="shopping-element__title">✨ Sum:</td>
              <td class="shopping-element__price">${sumCatalog.toLocaleString()} USD</td>
            </tr>
        </table>
      </div>
    `;
    root_shopping.innerHTML = html;
  }
}

const shoppingPage = new Shopping();
