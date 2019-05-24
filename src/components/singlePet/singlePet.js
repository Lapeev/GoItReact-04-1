import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import style from './singlePet.module.css';

const SinglePet = ({ name, age, breed, gender, color, image, description }) => (
  <div className={style.wrapper}>
    <Link className={style.link} to="/pets">
      <i className="material-icons">arrow_back</i>Return
    </Link>
    <h2 className={style.head}>All about {name}</h2>
    <div className={style.infoWrapper}>
      <img className={style.img} src={image} alt="pet foto" />
      <div className={style.info}>
        <p>Age: {age}</p>
        <p>Color: {color}</p>
        <p>Gender: {gender}</p>
        <p>Breed: {breed}</p>
      </div>
    </div>
    <p className={style.descr}>{description}</p>
  </div>
);

SinglePet.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
  breed: PropTypes.string.isRequired,
  gender: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default SinglePet;
