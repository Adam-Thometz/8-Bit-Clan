import React, { useState, useMemo } from 'react'
import useStyles from './styles/ArtMaker.styles'
import Canvas from './Canvas';
import { initialPixels } from '../utils/artDefaultSettings'
import ArtContext from '../utils/ArtContext';
import ToolContainer from './ToolContainer';
import StencilToolbar from './StencilToolbar'

const ArtMaker = ({workTitle = "Untitled", composition = initialPixels}) => {  
  // set state for the title of the art
  const [title, setTitle] = useState(workTitle);
  // set state for drawing (true for drawing, false for erasing)
  const [isDrawing, setIsDrawing] = useState(true);
  // set state for background stencil
  const [currStencil, setCurrStencil] = useState(null);
  // set toggle state for showing stencil
  const [isShowingStencil, setIsShowingStencil] = useState(true)
  // set state for color picker
  const [currColor, setCurrColor] = useState('#000000');
  // set the pixels; will be handy for saving and loading features
  const [pixels, setPixels] = useState(composition);
  // setting messages for art maker
  const [message, setMessage] = useState(null);
  
  const styles = useStyles();

  /** COLOR SWATCH FEATURE
   * Gets all unique colors on the canvas and creates a swatch.
   * Memoized so that the function only runs when a change is detected in the pixels.
   */
  const colorSwatch = useMemo(() => [...new Set(
    pixels
      .filter((pixel) => pixel.on)
      .map((pixel) => pixel.color)
    )], [pixels]
  );
  
  return (
    <ArtContext.Provider value={{
      currColor,
      setCurrColor,
      currStencil,
      setCurrStencil,
      isShowingStencil,
      setIsShowingStencil,
      pixels,
      setPixels,
      colorSwatch,
      isDrawing,
      setIsDrawing,
      title,
      setTitle,
      message,
      setMessage
    }}>
      <div className={styles.artMakerWrapper}>
        <div className={styles.artMaker}>
          <ToolContainer />
          <StencilToolbar />
          <Canvas />
        </div>
      </div>
    </ArtContext.Provider>
  );
};

export default ArtMaker;