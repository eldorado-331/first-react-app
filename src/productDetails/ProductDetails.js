import React from "react";
import classes from "./ProductDetails.module.css";

const ProductData = {
  title: "FitBit 19 - The Smartest Watch",
  description:
    "Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor.",
  colorOptions: [
    {
      styleName: "Black Strap",
      imageUrl: "https://imgur.com/iOeUBV7.png",
    },
    {
      styleName: "Red Strap",
      imageUrl: "https://imgur.com/PTgQlim.png",
    },
    {
      styleName: "Blue Strap",
      imageUrl: "https://imgur.com/Mplj1YR.png",
    },
    {
      styleName: "Purple Strap",
      imageUrl: "https://imgur.com/xSIK4M8.png",
    },
  ],
  featureList: ["Time", "Heart Rate"],
};

Object.freeze(ProductData); //This line of code just makes your object as a constant. No values can be updated.

const ProductDetails = (props) => {
  const ColorOptions = props.data.colorOptions.map((item, pos) => {
    const classArr = [classes.ProductImage];
    if (pos === props.currentPreviewImagePos) {
      classArr.push(classes.SelectedProductImage);
    }
    return (
      <img
        key={pos}
        src={item.imageUrl}
        alt={item.styleName}
        className={classArr.join(" ")}
        onClick={() => props.onColorOptionClick(pos)}
      />
    );
  });

  const featureList = props.data.featureList.map((item, pos) => {
    const classArr = [classes.FeatureItem];
    if (pos === props.currentSelectedFeature) {
      classArr.push(classes.SelectedFeatureItem);
    }

    return (
      <button
        onClick={() => props.onFeatureItemClick(pos)}
        className={classArr.join(" ")}
        key={pos}
      >
        {item}
      </button>
    );
  });

  return (
    <div className={classes.ProductData}>
      <h1 className={classes.ProductTitle}>{props.data.title}</h1>
      <p className={classes.ProductDescription}>{props.data.description}</p>

      <h3 className={classes.SectionHeader}>Select Color</h3>
      <div>{ColorOptions}</div>
      <h3 className={classes.SectionHeader}>Features</h3>
      <div>{featureList}</div>
      <button className={classes.PrimaryButton}>Buy Now</button>
    </div>
  );
};

export { ProductDetails, ProductData };
