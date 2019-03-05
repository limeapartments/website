import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import queryString from 'query-string';
import Home from './Home';
import Amenities from './Amenities';
import Residents from './Residents';
import Gallery from './Gallery';
import Experience from './Experience';
import Contact from './Contact';

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
      <Route path="/gallery" component={Gallery} />
      <Route path="/experience" component={Experience} />
      <Route path="/contact" component={Contact} />
      <Route path="/redirect" component={(props: any): any => {
        const { url } = queryString.parse(props.location.search);
        window.location.replace(url as string);
        return null;
      }} />
    </>
  </Router>,
  document.getElementById('app')
);
