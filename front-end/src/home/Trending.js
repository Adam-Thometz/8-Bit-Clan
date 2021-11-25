import React from "react";
import Work from "../common/Work";
import { fromDbToPixels } from "../utils/convertPixelData";
import useStyles from "./styles/Trending.styles";

const Trending = ({displayedWorks}) => {
  const styles = useStyles();
  return (
    <div className={styles.trending}>
      <h5 className={styles.subTitle}>Straight from the clan community</h5>
      <h4 className={styles.title}>Trending NFTs</h4>
      <div className={styles.trendingList}>
        {displayedWorks.map(work => (
          <Work title={work.title} author={work.author} composition={fromDbToPixels(work.composition)} />
        ))}
      </div>
    </div>
  );
};

export default Trending;