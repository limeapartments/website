import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, withRouter } from 'react-router-dom';
import queryString from 'query-string';
import Home from './Home';
import Amenities from './Amenities';
import Residents from './Residents';
import Gallery from './Gallery';
import Experience from './Experience';
import Contact from './Contact';
import Location from './Location';
import FloorPlan from './FloorPlan';
import ScrollToTop from './components/ScrollToTop';

Object.assign(document.body.style, {
  'margin': 'auto',
  'background-color': 'hsl(220, 13%, 18%)',
  'font-family': 'Helvetica',
});

ReactDOM.render(
  <Router>
    <ScrollToTop>
      <Route path="/" component={Home} exact />
      <Route path="/amenities" component={Amenities} />
      <Route path="/residents" component={Residents} />
      <Route path="/gallery" component={Gallery} />
      <Route path="/experience" component={Experience} />
      <Route path="/contact" component={Contact} />
      <Route path="/location" component={Location} />
      <Route path="/floor-plans" component={FloorPlan} />
      <Route path="/redirect" component={(props: any): any => {
        const { url } = queryString.parse(props.location.search);
        window.location.replace(url as string);
        return null;
      }} />
    </ScrollToTop>
  </Router>,
  document.getElementById('app')
);
