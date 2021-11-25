import React from "react";
import useStyles from "./styles/Footer.styles";
import zombieIceCream from './pixel-characters/footer/zombie-icecream.png'

const Footer = () => {
  const styles = useStyles();
  return (
    <div className={styles.footer}>
      <p className={styles.text}>@ 2021 Mintbean.io Hiring Hackathon submission. <a href="/about">Click here to meet the engineer and designer.</a></p>
      <img className={styles.icon} src={zombieIceCream} />
    </div>
  )
};

export default Footer;