import React, { Component } from "react";
import ColorPicker from "./components/ColorPicker";
import Reset from "./components/Reset";
import Result from "./components/Result";
import SizeSetting from "./components/SizeSetting";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: "red",
      fontsize: 12,
    };
  }

  onSetColor = (params) => {
    this.setState({
      color: params,
    });
  };

  onChangeSize = (value) => {
    // 8 <= fontsize => 36
    if (this.state.fontsize + value >= 8 && this.state.fontsize + value <= 36) {
      this.setState({
        fontsize: this.state.fontsize + value,
      });
    }
  };

  onSettingDefault = (value) => {
    if (value) {
      this.setState({
        color: "red",
        fontsize: 12,
      });
    }
  };

  render() {
    return (
      <div className="App">
        <div className="container mt-50">
          <div className="row">
            <ColorPicker
              color={this.state.color}
              onReceiveColor={this.onSetColor}
            />
            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
              <SizeSetting
                fontSize={this.state.fontsize}
                onChangeSize={this.onChangeSize}
              />
              <Reset onSettingDefault={this.onSettingDefault} />
            </div>
            <Result color={this.state.color} fontSize={this.state.fontsize} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
