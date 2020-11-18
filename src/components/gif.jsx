import React, { Component } from 'react';

class Gif extends Component {

  handleClick = () => {
    if (this.props.select) {
      this.props.select(this.props.id);
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    return nextProps.id !== this.props.id;
    // re-render only if id changes, not e.g. on search bar typing
  }


  render() {
    if (!this.props.id) {
      return null;
    }

    const src = `https://media.giphy.com/media/${this.props.id}/200.gif`;

    return (
      <img
      src = {src}
      className="gif"
      onClick={this.handleClick}
       />
    );
  }
}

export default Gif;
