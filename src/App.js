// import './App.css';
// import React from 'react';
// import Header from './component/Header';
// import ChoseColor_1 from './component/ChoseColor_1';
// import ResetApp from './component/ResetApp';
// import ZoomText from './component/ZoomText';
// import { useState } from 'react';
// function App() {
// const [Color, setColor] = useState('red');
// const [FontSize, setFontSize] = useState(15);
//   return (
//     <div className="App">
              
//               <Header/> 
//               <ChoseColor_1 color=(Color)/>
//               <ZoomText/>
//               <ResetApp/>
              
//     </div>
//   );
// }
// export default App;
import React, { Component } from 'react';
import './App.css';
import Header from './component/Header';
import ChoseColor_1 from './component/ChoseColor_1';
import ResetApp from './component/ResetApp';
import ZoomText from './component/ZoomText';
import { useState } from 'react';
class App extends Component {
constructor(props){
    super(props);
    this.state={
        color:"red",
        fontSize:15
    };
    this.onSetColor= this.onSetColor.bind(this);
    this.onChangeSize= this.onChangeSize.bind(this);
    this.settingDefault= this.settingDefault.bind(this)
}
onSetColor(params){
this.setState({
      color: params
});
}
onChangeSize(value){
  if(this.state.fontSize + value>=8 && this.state.fontSize + value<=38){
         this.setState({
             fontSize: this.state.fontSize +value
         })
 }
 }
 settingDefault(value){
  if(value){
     this.setState({
      color:"red",
      fontSize:15

     })
   }}
  render() {
    return (
      <div className="App">
              
                   <Header/> 
                   <ChoseColor_1 color={this.state.color} onReciveColor={this.onSetColor}  fontSize={this.state.fontSize} onChangeSize={this.onChangeSize} settingDefault={this.settingDefault}/>
                   <ZoomText fontSize={this.state.fontSize} onChangeSize={this.onChangeSize}/>
                   <ResetApp settingDefault={this.settingDefault}/>
                    
          </div>
    );
  }
}

export default App;