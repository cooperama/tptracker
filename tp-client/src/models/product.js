const url = `http://localhost:4000/api/v1/products`;

class ProductModel {
  static all() {
    return fetch(`${url}/`)
      .then((res) => res.json())
      .catch((err) => {
        console.log("error fetching data boo", err);
        return { product: [] };
      });
  }

  static getOne(id) {
    return fetch(`${url}/${id}`)
      .then((res) => res.json())
      .catch((err) => {
        console.log("error fetching one data mehh", err);
        return { product: {} };
      });
  }

  static create(newItem) {
    return fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newItem),
    })
      .then((res) => res.json())
      .catch((err) => {
        console.log("Error creating data", err);
        return { product: {} };
      });
  }

  static update(productId, updatedProduct) {
    return fetch(`${url}/${productId}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedProduct),
    })
      .then((res) => res.json())
      .catch((err) => {
        console.log("Error updating data", err);
        return { product: {} };
      });
  }

  static delete(productId) {
    return fetch(`${url}/${productId}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .catch((err) => {
        console.log("Error deleting data", err);
        return { product: {} };
      });
  }
}

export default ProductModel;
