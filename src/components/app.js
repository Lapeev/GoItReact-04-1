import React, { Component, Suspense, lazy } from 'react';
import { Route, Switch } from 'react-router-dom';
import Spinner from 'react-spinkit';
import Links from './LinkList/linkList';
import style from './mainApp.module.css';

const HomePage = lazy(() => import('../pages/home/home'));
const About = lazy(() => import('../pages/about/about'));
const Pets = lazy(() => import('../pages/pets/pets-list'));
const PetPage = lazy(() => import('../pages/pet/petPage'));

export default class App extends Component {
  state = {};

  render() {
    return (
      <div>
        <Links />
        <Suspense
          fallback={
            <div className={style.spinner}>
              <Spinner name="circle" />
            </div>
          }
        >
          <Switch>
            <Route path="/" exact component={HomePage} />
            <Route path="/pets/:id" component={PetPage} />
            <Route path="/pets" exact component={Pets} />
            <Route path="/about" component={About} />
            <Route component={HomePage} />
          </Switch>
        </Suspense>
      </div>
    );
  }
}
