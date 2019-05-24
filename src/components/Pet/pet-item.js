import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import style from './petItem.module.css';

const PetItem = ({ id, name, image }) => (
  <li className={style.petItem}>
    <Link
      className={style.link}
      to={{
        pathname: `pets/${id}`,
        state: { fromDashboard: true },
      }}
    />
    <div className={style.imgWrapper}>
      <img className={style.img} src={image} alt="pet foto" />
    </div>
    <h3 className={style.name}>{name}</h3>
  </li>
);

PetItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default PetItem;
