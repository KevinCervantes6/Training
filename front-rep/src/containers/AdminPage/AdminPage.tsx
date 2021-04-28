import React, { Component } from 'react'; 
import { Switch, Route } from 'react-router-dom';

import Layout from '../../layouts/Layout';



class AdminPage extends Component {

  list = [
    {text: 'Users', path: '/admin/users'},
    {text: 'Component2', path: '/admin/comp2'},
  ];

    render() {
      return (
        <Layout list= {this.list}>
          <Switch>
            <Route path="/admin" exact render={ () => <h3>Admin Component</h3>}/>
            <Route path="/admin/users" exact render={ () => <h3>Users Component</h3>}/>
            <Route path="/admin/comp2" exact render={ () => <h3>Admin Component Number 2</h3>}/>
          </Switch>
        </Layout>
          
        
      );
    }
  }
  
  export default AdminPage;