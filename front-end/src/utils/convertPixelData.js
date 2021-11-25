import {offPixel} from './artDefaultSettings';

/** fromDbToPixels(pixelData) => array of pixel data
 * This function takes a string of pixel data from the database and converts it into an array for use in the art maker
 * 
 * fromDbToPixels(',,,#426fd3,') => [offPixel, offPixel, offPixel, {on: true, color: '#426fd3}, offPixel])
 */
function fromDbToPixels(pixelStr) {
  return pixelStr
           .split(',')
           .map(color => !color ? offPixel : {on: true, color});
}

/** fromPixelsToDb(pixelArray) => a string of pixel data
 * This function takes an array of pixel data from the art maker and converts it into a string for storage in the database
 * 
 * fromDbToPixels([offPixel, offPixel, offPixel, {on: true, color: '#426fd3}, offPixel]) => ',,,#426fd3,'
 */
function fromPixelsToDb(pixels) {
  return pixels
           .map(pixel => !pixel.on ? null : pixel.color)
           .toString();
}

export {fromDbToPixels, fromPixelsToDb};