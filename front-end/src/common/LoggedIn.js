import React, { useContext, useEffect, useState } from "react";
import UserContext from "../utils/UserContext";
import useStyles from "./styles/Navbar.styles";
import Popup from "reactjs-popup";
import Api from "../api";
import { fromDbToPixels } from "../utils/convertPixelData";
import Collection from "./Collection";

const LoggedIn = ({logout}) => {
  const styles = useStyles();
  const {currUser} = useContext(UserContext);
  const [works, setWorks] = useState([])

  useEffect(() => {
    async function getWorks() {
      const workRes = await Api.getUserWorks(currUser.username);
      const worksConverted = workRes.map(w => (
        {
          ...w,
          composition: fromDbToPixels(w.composition)
        }));
      setWorks(worksConverted);
    }
    getWorks();
  }, []);


  return (
    <Popup trigger={<button className={styles.mainBtn}>My Stuff</button>} position="bottom right"> 
      <div className={styles.dropDown}>
        <Popup trigger={<div className={styles.menuItem}>My Collection</div>} modal>
          <Collection works={works} />
        </Popup>
        <div className={styles.menuItem} onClick={logout}>Log out</div>
      </div>
    </Popup>
  );
};

export default LoggedIn;