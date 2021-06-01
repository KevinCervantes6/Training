import { Component } from 'react';
import MyPaper from '../../UI/Paper';
import axios from '../../axios';
import MyProgress from '../../UI/Progress';
import MyTable from '../../UI/Table';


interface IProps {
    loading: boolean;
    data: any;
    error: any;
}

class Users extends Component {

    state = {loading: true, data: null, error: null};

    render () { return <UsersView {...this.state} />}

    componentDidMount() {
        axios.get(`/api/users`)
        .then(response => {
          const users: any[] = response.data;
          const modUsers = users.map( (user: any) => {
            return {User: user.name, Email: user.email, City: user.address.city, Phone: user.phone, Company: user.company.name};
          });

          this.setState({loading: false, data: modUsers, error: null})
        })
        .catch(error => this.setState({loading: false, data: null, error: error}))
    }
    
}


class UsersView extends Component<IProps> {

    renderLoading() {
        const dataJSX = <MyProgress/>;
        return dataJSX;
    }

    renderError() {
        const dataJSX = <h3>Sorry, an error ocurred!</h3>
        return dataJSX;
    }

    renderSuccess() {
        const dataJSX = <MyTable rows = {this.props.data} />
        return dataJSX;
    }

    render () {
        if(this.props.loading) {
            return this.renderLoading();
        } else if(this.props.data) {
            return this.renderSuccess();
        } else {
            return this.renderError();
        }
    }
    
}

export default Users;