const url = `https://localhost:4000/api/v1/products`;

class ProductModel {
  static all() {
    return fetch(url)
    .then((res) => res.json())
    .catch((err) => {
      console.log("error fetching data boo", err);
      return { product: []}
    });
  }

  static getOne(id) {
    return fetch(`${url}/${id}`)
      .then((res) => res.json())
      .catch((err) => {
        console.log("error fetching one data mehh", err);
        return { product: {}}
      })
  }
}

export default ProductModel;