const url = `http://localhost:4000/api/v1/stores`;

class StoreModel {
  static all() {
    return fetch(url)
      .then((res) => res.json())
      .catch((err) => {
        console.log('Error fetching data in StoreModel.all', err);
        return { store: [] };
      })
  }

  static getOne(id) {
    return fetch(`${url}/${id}`)
      .then((res) => res.json())
      .catch((err) => {
        console.log('Error fetching data in StoreModel.getOne', err);
        return { store: {} };
      })
  }

  static create(newStore) {
    return fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newStore)
    })
    .then((res) => res.json())
    .catch((err) => {
      console.log('Error fetching data in StoreModel.create', err);
      return { game: {} };
    })
  }
  
  static update(storeId, updatedStore) {
    return fetch(`${url}/${storeId}`, {
      method: 'PUT',
      header: { 'Content-Type': 'application/json' },
      body: JSON.stringify(updatedStore)
    })
    .then((res) => res.json())
    .catch((err) => {
      console.log('Error fetching data in StoreModel.update', err);
    })
  }

  static delete(storeId) {
    return fetch(`${url}/${storeId}`, {
      method: 'DELETE',
    })
    .then((res) =>  res.json())
    .catch((err) => {
      console.log('Error fetching data in StoreModel.delete', err);
      return { store: {} };
    })
  }
}

export default StoreModel;