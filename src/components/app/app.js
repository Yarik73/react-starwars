import React, { Component } from 'react';

import Header from '../header';
import RandomPlanet from '../random-planet';
import ErrorIndicator from "../error-indicator";
import SwapiService from "../../services/swapi-service";
import ErrorBoundry from "../error-boundry";
import Row from "../row";

import { SwapiServiceProvaider } from "../swapi-service-context";
import {
    PersonDetails,
    PlanetDetails,
    StarshipDetails,
    PersonList,
    PlanetList,
    StarshipList
} from '../sw-components';

import './app.css';


export default class App extends Component {

  swapiService = new SwapiService();

  state = {
    showRandomPlanet: true,
    hasError: false
  };

  componentDidCatch(error, errorInfo) {
    this.setState({hasError: true});
  }

  render() {

    if (this.state.hasError) {
      return <ErrorIndicator />
    }

    const planet = this.state.showRandomPlanet ? <RandomPlanet/> : null;

    return (
        <ErrorBoundry>
            <SwapiServiceProvaider value={this.swapiService}>
                <div className="stardb-app">
                    <Header />

                    { planet }

                    <Row left={<PersonList />} right={<PersonDetails itemId={11} />} />

                    <Row left={<PlanetList />} right={<PlanetDetails itemId={5} />} />

                    <Row left={<StarshipList />} right={<StarshipDetails itemId={9} />} />

                </div>
            </SwapiServiceProvaider>
        </ErrorBoundry>
    );
  }
}
