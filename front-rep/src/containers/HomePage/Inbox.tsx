import React from 'react';
import { Theme, withStyles, StyleRules } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { Component } from 'react';
import MyPaper from '../../UI/Paper';
import axios from 'axios';


interface IProps {
    loading: boolean;
    data: any;
    error: any;
}

class Inbox extends Component {

    state = {loading: true, data: null, error: null};

    render () { return <InboxView {...this.state} />}
    
}


class InboxView extends Component<IProps> {

    renderLoading() {
        const dataJSX = <h3>Loading...</h3>
        return dataJSX;
    }

    renderError() {
        const dataJSX = <h3>Sorry, an error ocurred!</h3>
        return dataJSX;
    }

    renderSuccess() {
        const dataJSX = <MyPaper />
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

export default Inbox;