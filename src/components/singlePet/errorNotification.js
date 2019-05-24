import React from 'react';
import { Link } from 'react-router-dom';
import style from './singlePet.module.css';

const ErrorNotification = () => (
  <div className={style.wrapper}>
    <Link className={style.link} to="/pets">
      <i className="material-icons">arrow_back</i>Return
    </Link>
    <h2>Sorry, there is no such pet now</h2>
  </div>
);

export default ErrorNotification;
