function render() {
  const productsStore = localStorageUtil.getProducts();

  headerPage.render(productsStore.length);
  productsPage.render();
}

let CATALOG = [];

//http://5d22b7fd4e05c600146ef4dd.mockapi.io/cupcake/books
// server/catalog.json;

fetch("./server/catalog.json")
  .then((res) => res.json())
  .then((body) => {
    CATALOG = body;
    render();
  })
  .catch((error) => {
    console.log(error);
  });
