import React, { Component } from 'react';

class ZoomText extends Component {
setFontsize(value){
this.props.onChangeSize(value);
}
  render() {
    return (
      <div id='zoom_button'>
      <div>
        <h1>Size {this.props.fontSize}px</h1>

      </div>
      <button type="button" className="btn btn-dark" onClick={()=>this.setFontsize(1)}>Tăng</button>
      <button type="button" className="btn btn-dark" onClick={()=>this.setFontsize(-1)}>Giảm</button>
    </div>
    );
  }
}

export default ZoomText;