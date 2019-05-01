
import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Switch } from 'react-router-dom';

import { Nav } from './nav/nav';
import { sections, section_map } from './nav/section-service';

import './main.scss';
import { SECTIONS_ENUM } from './shared/sections-enum';

export class App extends React.Component {
  constructor() {
    super();
    this.state = {
      currentRoute: '/',
    };
    this.currentRoute = this.state.currentRoute;
  }
  render() {
    // if(this.state)
    return (
      <div className="react-app">
        <Nav/>
        <div className="page-container">
          { this.getSections() }
        </div>
      </div>
    );
  }

  getSections() {
    return sections.map(section => {
      return (
        <Route
          path={section.route}
          exact={ section.key === SECTIONS_ENUM.HOME }
          component={section.component}
          key={section.key}
        />
      );
    });
  }

  onNavClick(routeStr) {
    this.setState({
      currentRoute: routeStr,
    });
  }
}

