import React from 'react';
import logo from "../../logo.svg";
import s from './Header.module.css'
import {NavLink} from "react-router-dom";

const Header = (props) => {
  return (
    <header className={s.header}>
      <img src={logo} className="App-logo" alt="logo" />
      <div className={s.loginBlock}>
        { props.isAuth
          ? <div>
            {props.login} —
            <button onClick={props.logout}>Logout</button>

        </div>
          : <NavLink to={'/login'}>Login</NavLink> }
      </div>
    </header>
  );
}

export default Header;