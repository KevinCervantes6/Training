import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'; 

import Layout from '../../layouts/Layout';



class Users extends Component {

    render() {
      return (
        <Layout list= {['Users', 'Component2']}>
            <Switch>
              <Route path='/admin/users' render={ () => <h3>Users Component</h3>}/>
              <Route path='/admin/comp2' render={ () => <h3>Admin Component Number 2</h3>}/>
          </Switch>
        </Layout>
          
        
      );
    }
  }
  
  export default Users;