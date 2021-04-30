import { Component } from 'react';
import MyPaper from '../../../UI/Paper';
import axios from 'axios';
import MyProgress from '../../../UI/Progress';
import Card from '../../../UI/Card';


interface IProps {
    loading: boolean;
    data: any;
    error: any;
}

class EmailDetail extends Component {

    state = {loading: true, data: null, error: null};

    render () { return <EmailDetailView {...this.state} />}

    componentDidMount() {

        const id = 1;

        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(response => this.setState({loading: false, data: response.data, error: null}))
        .catch(error => this.setState({loading: false, data: null, error: error}))
    }
    
}


class EmailDetailView extends Component<IProps> {

    renderLoading() {
        const dataJSX = <MyProgress/>;
        return dataJSX;
    }

    renderError() {
        const dataJSX = <h3>Sorry, an error ocurred!</h3>
        return dataJSX;
    }

    renderSuccess() {
        const dataJSX = <Card title={this.props.data.title} body={this.props.data.body}/>
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

export default EmailDetail;