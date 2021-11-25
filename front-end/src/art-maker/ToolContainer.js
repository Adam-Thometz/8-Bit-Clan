import React from "react";
import PencilEraser from "./PencilEraser";
import ColorPicker from "./ColorPicker";
import ColorSwatch from "./ColorSwatch";
import useStyles from "./styles/ToolContainer.styles";
import Save from "./Save";

const ToolContainer = () => {
  const styles = useStyles();

  return (
    <div className={styles.toolContainer}>
      <div className={styles.toolContainerLeft}>  
        <PencilEraser />
        <ColorPicker />
      </div>
      <div className={styles.toolContainerCenter}>
        <ColorSwatch />
      </div>
      <div className={styles.toolContainerRight}>
        <Save />
      </div>
    </div>
  );
};

export default ToolContainer;