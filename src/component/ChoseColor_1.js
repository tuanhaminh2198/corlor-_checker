
import { extend } from "jquery";
import React, { Component } from "react";
import styled from "styled-components"

class ChoseColor_1 extends React.Component{
constructor(props){
super(props);
this.state = {colors : ['blue','red','green','#ccc']};
}
showColor(color){

  return{
backgroundColor: color
};
};
setActive(color){
this.props.onReciveColor(color)

}
resultColor(){
  return{
    color: this.props.color,
    fontSize: this.props.fontSize
  };
}

render(){
var elmColor = this.state.colors.map((color,index)=>{
       return <button  
                          key={index} 
                          style={this.showColor(color) }
                          className={this.props.color===color ? 'active':''}
                          onClick={()=>this.setActive(color)}
                          >
               </button>
})

  return(


      <div className="container">
        <h2>COLOR CHECKER</h2>
        <div className="panel panel-default">
          <div id ='chooseColor_box' className="panel-body" style={this.resultColor() }  >
                   <p > Chọn màu sắc và cỡ chữ mà bạn muốn !!!!</p>
                   <div>
                   {elmColor}
                      
                  </div> 
          </div>
        </div>
      </div>

  );
};


}
export  default ChoseColor_1;