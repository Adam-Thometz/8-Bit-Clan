import React, {useContext} from "react";
import ArtContext from "../utils/ArtContext";
import pencil from './icons/pencil.png'
import eraser from './icons/eraser.png'
import useStyles from "./styles/PencilEraser.styles";

const PencilEraser = () => {
  const { isDrawing, setIsDrawing } = useContext(ArtContext);
  const styles = useStyles();

  const toggle = () => {
    setIsDrawing(drawing => !drawing);
  }

  return (
    <div>
      <img className={isDrawing ? styles.selectedIcon : styles.icon} src={pencil} onClick={toggle} />
      <img className={!isDrawing ? styles.selectedIcon : styles.icon} src={eraser} onClick={toggle} />
    </div>
  );
};

export default PencilEraser;