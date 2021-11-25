import React, { useContext } from "react";
import useStyles from './styles/Canvas.styles';
import { offPixel } from "../utils/artDefaultSettings";
import ArtContext from "../utils/ArtContext";

const Canvas = () => {
  const {currColor, pixels, setPixels, isShowingStencil, currStencil, isDrawing} = useContext(ArtContext);
  const styles = useStyles();

  const setColor = i => e => {
    e.preventDefault();
    if (e.buttons === 1 || e.buttons === 2) {
      setPixels(
        pixels.map((pixel, pixelIndex) => {
          if (pixelIndex === i) {
            if (e.buttons === 1 && isDrawing) {
              return {
                on: true,
                color: currColor,
              };
            };
            return offPixel;
          };
          return pixel;
        })
      );
    };
  };

  const showStencil = () => {
    if (isShowingStencil) return {backgroundImage: `url(${currStencil})`}
  }

  return (
    <div className={styles.canvas} style={showStencil()}>
      {pixels.map((pixel, i) => (
        <div
          key={i}
          style={{background: pixel.on ? pixel.color : offPixel.color}}
          className={styles.pixel}
          onMouseDown={setColor(i)}
          onMouseOver={setColor(i)}
          onContextMenu={e => e.preventDefault()}
        ></div>
      ))}
    </div>
  );
};

export default Canvas;