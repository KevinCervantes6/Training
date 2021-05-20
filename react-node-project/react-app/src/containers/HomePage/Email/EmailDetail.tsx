import { Component } from 'react';
import MyPaper from '../../../UI/Paper';
import axios from '../../../axios';
import MyProgress from '../../../UI/Progress';
import MyCard from '../../../UI/Card';
import { RouteComponentProps } from 'react-router-dom';

interface MatchParams {
    id: string;
  }

interface IProps extends RouteComponentProps<MatchParams> {
}

interface IState {
  loading: boolean;
  data: {title: string, body: string} | null;
  error: any;
}


class EmailDetail extends Component<IProps> {

    state: IState = {loading: true, data: null, error: null};

    render () { return <EmailDetailView {...this.state} {...this.props} />}

    componentDidMount() {

        const id = this.props.match.params.id;

        axios.get(`/posts/${id}`)
        .then(response => this.setState({loading: false, data: response.data, error: null}))
        .catch(error => this.setState({loading: false, data: null, error: error}))
    }
    
}

interface IProps2 extends RouteComponentProps {
    loading: boolean;
    data: {title: string, body: string} | null;
    error: any;
  }


class EmailDetailView extends Component<IProps2> {

    backButtonSelectedHandler = () => { 
        this.props.history.goBack();
      }

    renderLoading() {
        const dataJSX = <MyProgress/>;
        return dataJSX;
    }

    renderError() {
        const dataJSX = <h3>Sorry, an error ocurred!</h3>
        return dataJSX;
    }

    renderSuccess() {
        const dataJSX = <MyCard title={this.props.data?.title} body={this.props.data?.body} clicked = {this.backButtonSelectedHandler}/>
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