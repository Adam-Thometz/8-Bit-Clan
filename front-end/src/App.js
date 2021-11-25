import React, {useEffect, useState} from 'react';
import {Routes, Route} from 'react-router-dom';
import LandingPage from './home/LandingPage';
import ArtMaker from './art-maker/ArtMaker';
import UserContext from './utils/UserContext';
import useLocalStorage from './utils/useLocalStorage';
import Api from './api';
import jwt from 'jsonwebtoken'
import AboutUs from './about/AboutUs';
import Navbar  from './common/Navbar';

const App = () => {  
  const [currUser, setCurrUser] = useState(null);
  const [token, setToken] = useLocalStorage('user-token');
  
  useEffect(() => {
    async function getUserInfo() {
      if (token) {
        try {
          const {username} = jwt.decode(token);
          Api.token = token;
          const currUser = await Api.getUser(username);
          setCurrUser(currUser);
        } catch (e) {
          setCurrUser(null);
        };
      };
    };
    getUserInfo();
  }, [token]);

  const login = async loginData => {
    try {
      const token = await Api.login(loginData);
      setToken(token);
      return {success: true};
    } catch (errors) {
      return {success: false, errors};
    }
  };

  const signup = async signupData => {
    try {
      const token = await Api.register(signupData);
      setToken(token);
      return {success: true};
    } catch (errors) {
      return {success: false, errors};
    }
  };

  const logout = async () => {
    setCurrUser(null);
    setToken(null);
  };

  return (
    <div>
      <UserContext.Provider value={{currUser, setCurrUser}}>
        <Navbar login={login} signup={signup} logout={logout} />
        <Routes>
          <Route index element={<LandingPage />} />
          <Route path="/make" element={<ArtMaker />} />
          <Route path="/about" element={<AboutUs />} />
        </Routes>
      </UserContext.Provider>
    </div>
  );
};

export default App;