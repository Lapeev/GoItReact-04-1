import React, { Component } from 'react';
import { Redirect } from 'react-router';
import SinglePet from '../../components/singlePet/singlePet';
import pets from '../../bd/pets.json';

const getIdFromProps = props => props.match.params.id;

export default class PetPage extends Component {
  state = { pet: null };

  componentDidMount() {
    if (this.redirect()) this.setState({ pet: this.redirect() });
  }

  redirect() {
    const id = getIdFromProps(this.props);
    return pets.find(pet => pet.id === id);
  }

  render() {
    const { pet } = this.state;
    const bool = this.redirect();
    return bool ? <SinglePet {...pet} /> : <Redirect to="/" />;
  }
}
