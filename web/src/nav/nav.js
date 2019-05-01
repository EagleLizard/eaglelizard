import React from 'react';
import { Link } from 'react-router-dom';

import { sections } from './section-service';

import './nav.scss';

export class Nav extends React.Component {
  render() {
    return (
      <div className="nav">
        {
          sections.map(section => navButton(section))
        }
      </div>
    );
  }
}

function doRoute(routeStr) {
  console.log(routeStr);
}

function navButton(section) {
  return (
    <Link to={section.route}
      key={section.key}>
      <div className="nav-button">
        {
          section.label
        }
      </div>
    </Link>
  );
}
