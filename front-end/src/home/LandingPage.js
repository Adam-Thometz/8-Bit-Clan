import React, { useEffect, useState } from "react";
import Api from "../api";
import useStyles from "./styles/LandingPage.styles";
import Header from "./Header";
import Description from "./Description";
import Icons from "./Icons";
import Trending from "./Trending";
import Instructions from "./Instructions";
import Conclusion from "./Conclusion";
import Footer from "./Footer";

const LandingPage = () => {
  const [displayedWorks, setDisplayedWorks] = useState([]);
  const styles = useStyles();

  useEffect(() => {
    const getRecentWorks = async () => {
      const recentWorks = await Api.getLatestWorks();
      setDisplayedWorks(recentWorks);
    };
    getRecentWorks();
  });

  return (
    <div className={styles.landingPage}>
      <Header />
      <Description />
      <Icons />
      <Trending displayedWorks={displayedWorks} />
      <Instructions />
      <Conclusion />
      <Footer />
    </div>
  )
};

export default LandingPage;