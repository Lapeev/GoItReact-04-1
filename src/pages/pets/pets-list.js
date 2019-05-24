import React, { Fragment } from 'react';
import petList from '../../bd/pets.json';
import Pet from '../../components/Pet/pet-item';
import style from './petList.module.css';

const PetsList = () => (
  <Fragment>
    <h2 className={style.listHead}>Available pets</h2>
    <ul className={style.list}>
      {petList.map(pet => (
        <Pet key={pet.id} {...pet} />
      ))}
    </ul>
  </Fragment>
);

export default PetsList;
