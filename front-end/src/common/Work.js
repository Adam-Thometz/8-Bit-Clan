import React from "react";
import { offPixel } from "../utils/artDefaultSettings";
import useStyles from "./styles/Work.styles";

const Work = ({id, title, author, composition, loadWork}) => {
  const styles = useStyles();

  // Potential loading feature
  // const handleLoad = () => {
  //   loadWork(id);
  // };

  return (
    <div id={id}>
      <h3 className={styles.title}>{title}</h3>
      <div className={styles.canvas}>
        {composition.map(pixel => (
          <div className={styles.pixel}
          style={{background: pixel.on ? pixel.color : offPixel.color}}
          ></div>
        ))}
      </div>
      {author ? (
        <div className={styles.author}>
          <p>by <em>{author}</em></p>
        </div>
      ) : null}
    </div>
  );
};

export default Work;