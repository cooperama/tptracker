import React from 'react';
import StoreModel from '../models/store';
import StoreCard from '../components/StoreCard';

class StoreShow extends React.Component {
  state = {
    store: {}
  }

  componentDidMount() {
    const StoreId = this.props.match.params.id;

    StoreModel.getOne(StoreId)
      .then((data) => {
        this.setState({ store: data.store });
      });
  }

  render() {
    return(
      <div>
        <h1>see one Store</h1>
        <div className="StoreCardContainer">
          <StoreCard store={this.state.store} />
        </div>
      </div>
    )
  }
}

export default StoreShow;