/** offPixel: default 'off' state
 * 
 * offPixel.color is in a different format from hex to achieve low opacity.
 */
const offPixel = {
  on: false,
  color: 'rgba(255, 255, 255, 0.2)'
};

/** initialPixels: default pixels
 * Manipulate the grid by multiplying the height and width of grid. Default dimensions are 50x50
 */
const initialPixels = Array.from({ length: 2500 }, () => (offPixel));

export {offPixel, initialPixels}