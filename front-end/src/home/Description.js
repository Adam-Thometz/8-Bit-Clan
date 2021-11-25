import React from "react";
import useStyles from "./styles/Description.styles";

// character icons
import donutNyanCat from './pixel-characters/description/donut-nyan-cat.png';
import bomb from './pixel-characters/description/bomb.png';
import pizza from './pixel-characters/description/pizza.png';
import people from './pixel-characters/description/people.png';

const Description = () => {
  const styles = useStyles();
  return (
    <div className={styles.descriptionWrapper}>
      <div className={styles.description}>
        <div className={styles.descriptionText}>
          <h3>What are NFTs?</h3>
          <p>They stand for <b>n</b>on-<b>f</b>ugible <b>t</b>okens. Think of a digital file with a unique identification code which can be sold, collected, or traded.</p>
        </div>
        <img className={styles.donutNyanCat} src={donutNyanCat} />
      </div>
      <div className={styles.description}>
        <img className={styles.bomb} src={bomb} />
        <img className={styles.pizza} src={pizza} />
        <div className={styles.descriptionText}>
          <h3>Why NFTs?</h3>
          <p>NFTs empower creators by financially supporting artists all while providing the buyer rights to an original digital piece they own.</p>
        </div>
      </div>
      <div className={styles.description}>
        <div className={styles.descriptionText}>
          <h3>How can 8.Bit Clan help?</h3>
          <p>Our mission is to make the process of creating digital art accessible to the general public. 8.Bit is an online supportive community of artists and digital painting app that helps you express your full creativity using a stencil.</p>
        </div>
        <img className={styles.people} src={people} />
      </div>
    </div>
  );
};

export default Description;