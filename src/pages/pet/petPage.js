import React, { Component } from 'react';
import SinglePet from '../../components/singlePet/singlePet';
import pets from '../../bd/pets.json';
import Error from '../../components/singlePet/errorNotification';

const getIdFromProps = props => props.match.params.id;

export default class PetPage extends Component {
  state = { pet: null };

  componentDidMount() {
    const id = getIdFromProps(this.props);
    if (id) this.setState({ pet: pets.find(pet => pet.id === id) });
  }

  render() {
    const { pet } = this.state;
    return pet ? <SinglePet {...pet} /> : <Error />;
  }
}
