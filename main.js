function render() {}

let catalog = [];

fetch("http://5d22b7fd4e05c600146ef4dd.mockapi.io/cupcake/books")
  .then((res) => res.json())
  .then((body) => {
    catalog = body;
    render();
  })
  .catch((error) => {
    console.log(error);
  });
