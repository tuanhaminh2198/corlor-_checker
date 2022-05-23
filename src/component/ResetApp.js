import React, { Component } from 'react';

class ResetApp extends Component {
  resetApp=()=>{
      this.props.settingDefault();

  }

  render() {
    return (
      <div  id ="reset_button">  
      {/* <button type="button" className="btn btn-default bg-black text-white" onClick={this.resetApp()}>RESET</button> */}
        </div>
    );
  }
}

export default ResetApp;