import React from "react";
import useStyles from './styles/Teammate.styles'

const Teammate = ({name, imgSrc, role, about, socialMedia}) => {
  const styles = useStyles();
  return (
    <div className={styles.teammate}>
      <img className={styles.pic} src={imgSrc} alt={name} />
      <h3 className={styles.name}>{name}</h3>
      <h5 className={styles.role}>{role}</h5>
      <p className={styles.about}>{about}</p>
      <div className={styles.iconWrapper}>
        {socialMedia.map(site => (
          <a href={site.link}><img className={styles.icon} src={site.img} alt={`a link to ${name}'s ${site.name}`} /></a>
        ))}
      </div>
    </div>
  );
};

export default Teammate;