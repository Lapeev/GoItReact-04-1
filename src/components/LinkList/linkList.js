import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './linkList.module.css';

const Links = () => (
  <ul className={style.linkList}>
    <li className={style.linkItem}>
      <NavLink
        to="/"
        exact
        className={style.link}
        activeClassName={style.active}
      >
        Home
      </NavLink>
    </li>
    <li className={style.linkItem}>
      <NavLink to="/pets" className={style.link} activeClassName={style.active}>
        Pets
      </NavLink>
    </li>
    <li className={style.linkItem}>
      <NavLink
        to="/about"
        className={style.link}
        activeClassName={style.active}
      >
        About
      </NavLink>
    </li>
  </ul>
);

export default Links;
