import React, { Component } from 'react';
import Gif from './gif.jsx';

// class GifList extends Component {


//   renderList = () => {
//     return this.props.gifs.map(gif => {
//       return <Gif id={gif.id} key={gif.id} onClick={this.props.handleClick}/>
//     })
//   }


//   render() {
//     return <div className="gif-list">
//       {this.renderList()}
//     </div>
//   }
// }

const GifList = (props) => { // Possible to restructure using gifs and select instead of props - no need to use props.id/select afterwards
  return (
    <div className="gif-list">
      {props.gifs.map(gif => <Gif key={gif.id} id={gif.id} select={props.select} />)}
    </div>
  );
};

export default GifList;
