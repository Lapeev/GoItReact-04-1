import React, { Component, Suspense, lazy } from 'react';
import { Route } from 'react-router-dom';
import { spring, AnimatedSwitch } from 'react-router-transition';
import Spinner from 'react-spinkit';
import Links from './LinkList/linkList';
import style from './mainApp.module.css';

const HomePage = lazy(() => import('../pages/home/home'));
const About = lazy(() => import('../pages/about/about'));
const Pets = lazy(() => import('../pages/pets/pets-list'));
const PetPage = lazy(() => import('../pages/pet/petPage'));

function mapStyles(styles) {
  return {
    opacity: styles.opacity,
    transform: `scale(${styles.scale})`,
  };
}

function bounce(val) {
  return spring(val, {
    stiffness: 330,
    damping: 22,
  });
}

const bounceTransition = {
  atEnter: {
    opacity: 0,
    scale: 1.5,
  },
  atLeave: {
    opacity: bounce(0),
    scale: bounce(0.5),
  },
  atActive: {
    opacity: bounce(1),
    scale: bounce(1),
  },
};

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
          <AnimatedSwitch
            atEnter={bounceTransition.atEnter}
            atLeave={bounceTransition.atLeave}
            atActive={bounceTransition.atActive}
            mapStyles={mapStyles}
            className={style.routeWrapper}
          >
            <Route path="/" exact component={HomePage} />
            <Route path="/pets/:id" component={PetPage} />
            <Route path="/pets" exact component={Pets} />
            <Route path="/about" component={About} />
            <Route component={HomePage} />
          </AnimatedSwitch>
        </Suspense>
      </div>
    );
  }
}
