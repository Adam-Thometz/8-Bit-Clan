import React from "react";
import Work from "./Work";
import useStyles from "./styles/Collection.styles";
// import Api from "../api";
// import ArtMaker from "../art-maker/ArtMaker";
// import { fromDbToPixels } from "../utils/convertPixelData";

const Collection = ({works}) => {
  const styles = useStyles();
  // Potential loading feature
  // const loadWork = async id => {
  //   const work = await Api.loadWork(id);
  //   const {title, composition} = work;
  //   const pixels = fromDbToPixels(composition);
  //   return (<ArtMaker workTitle={title} composition={pixels} />);
  // };

  return (
    <div className={styles.collectionWrapper}>
      <h1 className={styles.header}>My collection!</h1>
      <div className={styles.collectionWindow}>
        {works.map(work => (
          <div className={styles.work}>
            <Work id={work.id} title={work.title} composition={work.composition} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Collection;