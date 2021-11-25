import React, { useContext, useRef } from "react";
import Popup from "reactjs-popup";
import ArtContext from "../utils/ArtContext";
import UserContext from "../utils/UserContext";
import save from './icons/save.png'
import { fromPixelsToDb } from "../utils/convertPixelData";
import Api from "../api";
import useStyles from "./styles/Save.styles";

const Save = () => {
  const {currUser} = useContext(UserContext)
  const {title, setTitle, message, setMessage, pixels} = useContext(ArtContext)
  const styles = useStyles();
  const titleField = useRef();

  /** saveWork
   * This function takes the data of the pixels and stores it in the database under the user's name.
   */
   const saveWork = async () => {
    if (!currUser) {
      setMessage(['You must have an account to save!', 'fail']);
      return;
    };
    const pixelColorData = fromPixelsToDb(pixels);
    const username = currUser.username;
    await Api.saveWork({title, username, pixelColorData});
    setMessage(['Saved successfully! Check it out in your collection!', 'success'])
  };

  // Change handler for typing a title
  const handleChange = e => {
    const {value} = e.target;
    setTitle(value);
  };

  return (
    <Popup trigger={<img src={save} className={styles.save} />} modal>
      <div className={styles.popup}>
        <label className={styles.saveItem} htmlFor="title">Name your masterpiece!</label>
        <input
          className={styles.saveItem}
          name="title"
          ref={titleField}
          value={title}
          onChange={handleChange} />
        <button className={styles.saveBtn} onClick={saveWork}>Save</button>
        <div className={(message && message[1] === 'success') ? styles.messageSuccess : styles.messageFail}>
          {message ? message[0] : null}
        </div>
      </div>
    </Popup>
  );
};

export default Save;