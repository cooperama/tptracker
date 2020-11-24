import React from "react";

class Home extends React.Component {
  state = {
    search: "",
  };
  searchHandler = (e) => {
    console.log(e.target.value);
    this.setState({ search: e.target.value });
    // check whether input is number or words
    console.log(/\d/.test(this.state.search));
  };
  itemSearchHandler = (e) => {};
  submitClickHandler = (e) => {
    e.preventDefault();
    if (/\d/.test(this.state.search)) {
    }
  };
  render() {
    return (
      <div>
        <form action="">
          <div className="form-input">
            <label htmlFor="zipcode">Enter Zip Code</label>
            <input
              type="text"
              name="zipcode"
              id="zipcode"
              onChange={this.searchHandler}
            />
          </div>
          <p>or</p>
          <div className="form-input">
            <select name="item" id="item">
              <option value="">choose an item</option>
              <option value="Toilet Paper">Toilet Paper</option>
              <option value="Hand Sanitizer">Hand Sanitizer</option>
              <option value="Soap">Soap</option>
              <option value="Flour">Flour</option>
              <option value="Clorox Wipes">Clorox Wipes</option>
              <option value="Face Masks">Face Masks</option>
              <option value="Echinacea Tea">Echinacea Tea</option>
            </select>
          </div>
          <input
            type="submit"
            value="Continue"
            onClick={this.submitClickHandler}
          />
        </form>
      </div>
    );
  }
}

export default Home;
