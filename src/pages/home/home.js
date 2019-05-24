import React from 'react';
import logo from '../../img/logo.png';
import style from './home.module.css';

const HomePage = () => (
  <div className={style.wrapper}>
    <img src={logo} alt="logo" />
    <h2 className={style.head}>Welcome to Paws online store</h2>
  </div>
);

export default HomePage;
