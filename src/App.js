import React, { Component } from "react";
import classes from "./App.module.css";
import { ProductDetails, ProductData } from "./productDetails/ProductDetails";
import ProductPreview from "./productPreview/ProductPreview";
import TopBar from "./topBar/TopBar.js";

class App extends Component {
  state = {
    ProductData: ProductData,
    currentPreviewImagePos: 0,
    currentSelectedFeature: 0,
  };

  onColorOptionClick = (pos) => {
    this.setState({ currentPreviewImagePos: pos });
  };

  onFeatureItemClick = (pos) => {
    
    this.setState({currentSelectedFeature: pos})
  };
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <TopBar />
        </header>

        <div className={classes.MainContainer}>
          <ProductPreview
            currentPreviewImage={
              this.state.ProductData.colorOptions[
                this.state.currentPreviewImagePos
              ].imageUrl
            }
            currentSelectedFeature={this.state.currentSelectedFeature}
          />
          <ProductDetails
            data={this.state.ProductData}
            onColorOptionClick={this.onColorOptionClick}
            currentPreviewImagePos={this.state.currentPreviewImagePos}
            onFeatureItemClick={this.onFeatureItemClick}
            currentSelectedFeature={this.state.currentSelectedFeature}
          />
        </div>
      </div>
    );
  }
}

export default App;
