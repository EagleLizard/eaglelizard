
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import { App } from './App';
import { sections, section_map } from './nav/section-service';

import './main.scss';
import { SECTIONS_ENUM } from './shared/sections-enum';
console.log(document.getElementById('react-root'));
ReactDOM.render(
  (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  ),
  document.getElementById('react-root')
);
