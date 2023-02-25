import React from "react";
import "./CustomImage.css"

class CustomImage extends React.Component {
  render() {
    const { src, title, altText, href } = this.props;
    return (
    <div>
      <h3>{title}</h3>
      <a href={href} target="_blank" rel="noopener noreferrer">
        <img src={src} alt={altText} />
      </a>
    </div>
    );
  }
}

export default CustomImage;