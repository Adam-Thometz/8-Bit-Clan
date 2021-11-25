import React, { useContext } from "react";
import ArtContext from "../utils/ArtContext";
import useStyles from "./styles/ColorPicker.styles";

const ColorPicker = () => {
  const {currColor, setCurrColor} = useContext(ArtContext)
  const styles = useStyles();
  
  const colorChange = e => {
    setCurrColor(e.target.value)
  };

  return (
    <input 
      className={styles.colorPicker}
      type="color"
      value={currColor}
      onChange={colorChange}
    />
  );
};

export default ColorPicker;