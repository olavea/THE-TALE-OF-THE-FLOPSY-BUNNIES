import React from "react";

class LilliansDrawing extends React.Component {
  imageRef = React.createRef();
  createLilliansDrawing = event => {
    event.preventDefault();
    const drawing = {
      image: this.imageRef.current.value
    };
    this.props.addColoringPage(drawing);
  };
  render() {
    return (
      <form
        className="LilliansDrawing-edit"
        onSubmit={this.createLilliansDrawing}
      >
        <input
          name="image"
          ref={this.imageRef}
          type="text"
          placeholder="Photo of LilliansDrawing"
        />
        <button type="submit">+ Add LilliansDrawing</button>
      </form>
    );
  }
}

export default LilliansDrawing;
