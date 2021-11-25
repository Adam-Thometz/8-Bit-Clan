import React, {useContext} from "react";
import { NavLink } from "react-router-dom";
import UserContext from "../utils/UserContext";
import useStyles from "./styles/Navbar.styles";
import LoggedOut from "./LoggedOut";
import LoggedIn from "./LoggedIn";
import logo from './images/logo.png'

const Navbar = ({login, signup, logout}) => {
  const {currUser} = useContext(UserContext);
  const styles = useStyles();

  return (
    <nav className={styles.navbar}>
      <NavLink className={styles.item} to='/about'>About Us</NavLink>
      <NavLink to='/'><img src={logo} alt="The logo for 8 Bit Clan" className={styles.logo} /></NavLink>
      {currUser ? <LoggedIn logout={logout} /> : <LoggedOut login={login} signup={signup} />}
    </nav>
  );
};

export default Navbar;