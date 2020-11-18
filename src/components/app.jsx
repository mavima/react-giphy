import React, { Component } from 'react';
import giphy from 'giphy-api';
import SearchBar from './search-bar.jsx';
import Gif from './gif.jsx';
import GifList from './gif_list.jsx';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      gifs: [],
      selectedGifId: null
    };
  }

  search = (query) => {
    // get giphy package from npmjs.com: yarn add giphy-api
    giphy('dIFgh43iQWFFeAu2sMPbE7l4AhusKllX').search({
      q: query,
      rating: 'g',
      limit: 12
    }, (error, result) => {
      this.setState({
        gifs: result.data
      });
    });
  }

  select = (id) => {
    this.setState({
      selectedGifId: id
    });
    // console.log(id);
  }


  render() {
    const gifs = [];
    // Search: passing search function as props from App to Search-bar
    return (
      <div>
        <div className="left-scene">
          <SearchBar search={this.search} />
          <div className="selected-gif">
            <Gif id={this.state.selectedGifId} />
          </div>
        </div>
        <div className="right-scene">
          <GifList gifs={this.state.gifs} select={this.select}/>
        </div>
      </div>
    );
  }
}

export default App;
