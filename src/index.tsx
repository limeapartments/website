import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './Home';
import Amenities from './Amenities';
import Residents from './Residents';

Object.assign(document.body.style, {
  'margin': 'auto',
  'background-color': 'hsl(220, 13%, 18%)',
  'font-family': 'Helvetica',
});

ReactDOM.render(
  <Router>
    <>
      <Route path="/" component={Home} exact />
      <Route path="/amenities" component={Amenities} />
      <Route path="/residents" component={Residents} />
      <Route path="/apply-now" component={(): any => { window.location.replace('https://www.rhris.com/applynow.cfm?siteID=26756A'); return null; }} />
    </>
  </Router>,
  document.getElementById('app')
);
