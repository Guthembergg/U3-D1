import { Component } from "react";

class ImageComponent extends Component {
  render() {
    return <img alt={this.props.alt} src={this.props.src}></img>;
  }
}

export default ImageComponent;
