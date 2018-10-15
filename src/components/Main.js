import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './home/Home';
import Registration from './registration/Registration';
import Contact from './contact/Contact';

const Main = () => (
    <main>
      <Switch>
        <Route exact path='/Home' component={Home}/>
        <Route exact path='/Registration' component={Registration}/>
        <Route exact path='/Contact' component={Contact}/>
      </Switch>
    </main>
  )
  
  export default Main