import React from "react";
import Teammate from "./Teammate";
import team from "./team";
import useStyles from "./styles/AboutUs.styles";

const AboutUs = () => {
  const styles = useStyles();
  return (
    <div className={styles.aboutUsWrapper}>
      <h1 className={styles.header}>Meet the engineers!</h1>
      <div className={styles.aboutUs}>
        {team.map(teammate => (
          <Teammate name={teammate.name} imgSrc={teammate.img} role={teammate.role} about={teammate.about} socialMedia={teammate.socialMedia} />
        ))}
      </div>
    </div>
  )
};

export default AboutUs;