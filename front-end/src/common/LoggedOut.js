import React, {useState} from "react";
import useStyles from "./styles/Navbar.styles";
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

const LoggedOut = ({login, signup}) => {
  const styles = useStyles();
  
  const init = {
    username: '',
    password: ''
  };
  const [isLogin, setIsLogin] = useState(true)
  const [formData, setFormData] = useState(init);
  const [errors, setErrors] = useState([])

  const handleChange = e => {
    const {name, value} = e.target;
    setFormData(d => ({...d, [name]: value}));
  }

  const handleLogin = async e => {
    try {
      e.preventDefault();
      const res = await login(formData);
      if (!res.success) setErrors(res.errors);
      setFormData(init);
    } catch (errors) {
      setErrors(errors.map(e => e.message));
    }
  }

  const handleSignup = async e => {
    try {
      e.preventDefault();
      const res = await signup(formData);
      if (!res.success) setErrors(res.errors);
      setFormData(init);
    } catch (errors) {
      setErrors(errors.map(e => e.message));
    }
  }

  const handleSwitch = e => {
    e.preventDefault();
    setIsLogin(formType => !formType)
  }

  return (
    <div>
      <Popup trigger={<button className={styles.mainBtn}>Sign in</button>} position="bottom right">  
        <form className={styles.dropDown} onSubmit={isLogin ? handleLogin : handleSignup}>
          <div className={styles.formGroup}>  
            <label htmlFor="username">Username</label>
            <input
              className={styles.formInput}
              type="text"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleChange}
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="password">Password</label>
            <input
              className={styles.formInput}
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
            />
          </div>
          {isLogin ? (
            <div>
              <button className={styles.authBtn} type="submit">Log in</button>
              <p className={styles.or}>-- or --</p>
              <button className={styles.changeAuthBtn} onClick={handleSwitch}>Register new account</button>
            </div>
          ) : (
            <div>
              <button className={styles.authBtn} type="submit">Register</button>
              <p className={styles.or}>-- or --</p>
              <button className={styles.changeAuthBtn} onClick={handleSwitch}>Have an account? Log in.</button>
            </div>
          )}
        </form>
        <div className={styles.loginInfo}>
          <p>To try this app:</p>
          <p>Username: abc</p>
          <p>Password: 123</p>
          {(errors && errors.length) ? errors.map(e => (<p>{e}</p>)) : null}
        </div>
      </Popup>
    </div>
  );
};

export default LoggedOut;