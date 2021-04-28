import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Inbox from './Inbox';

import Layout from '../../layouts/Layout';


class HomePage extends Component {

    list = [
      {text: 'Inbox', path: '/home/inbox'},
      {text: 'Starred', path: '/home/starred'},
    ];

    render() {
      return (
        <Layout list = {this.list}>
          <Switch>
            <Route path="/" exact render={ () => <h3>Welcome!</h3>}/>
            <Route path="/home/inbox" exact render={ () => <Inbox /> }/>
            <Route path="/home/starred" exact render={ () => <h3>Starred Component</h3>}/>
          </Switch>
        </Layout>
      );
    }
  }
  
  export default HomePage;