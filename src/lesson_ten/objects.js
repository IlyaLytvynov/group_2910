function getObjects() {
  const products = [];
  let i = 0;
  let productCount = parseInt(prompt("enter product count"));

  while (isNaN(productCount)) {
    productCount = prompt("enter product count");
  }

  do {
    const product = {};
    product.title = prompt("Enter title");
    if (product.title === null) break;

    while (!product.title) {
      product.title = prompt("Enter title");
    }

    product.price = prompt("Enter price");
    if (product.price === null) break;

    while (!product.price || isNaN(parseInt(product.price))) {
      product.price = prompt("Enter price");
    }
    products.push(product);
    i++;
  } while (i < productCount);

  let total = 0;

  for (let i = 0; i < products.length; i++) {
    console.log(products[i]);
    total = total + parseInt(products[i].price);
  }

  console.log(total);
}

objectsButton.onclick = getObjects;
