import React from "react";
import useStyles from "./styles/Header.styles";
import cat from './pixel-characters/header/cat.png';
import coolBoy from './pixel-characters/header/cool-boy.png';
import bitCoins from './pixel-characters/header/bitcoins.png';
import artMaker from './pixel-characters/header/art-maker.png'

const Header = () => {
  const styles = useStyles();
  return (
    <div className={styles.header}>
      <div className={styles.subHeader}>
        <h1>It's never been easier to start making your own NFTs</h1>
        <h5>No artistic skill required</h5>
        <a className={styles.mainBtn} href="/make">Start creating</a>
      </div>
      <div className={styles.images1}>
        <img className={styles.artMaker} src={artMaker} />
      </div>
      <div className={styles.images2}>
        <img className={styles.cat} src={cat} /> 
        <img className={styles.coolBoy} src={coolBoy} />
        <img className={styles.bitCoins} src={bitCoins} />
      </div>
    </div>
  );
};

export default Header;