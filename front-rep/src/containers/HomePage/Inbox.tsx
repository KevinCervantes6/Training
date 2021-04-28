import React from 'react';
import { Theme, withStyles, StyleRules } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { Component } from 'react';



const useStyles = (theme: Theme):StyleRules  => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        '& > *': {
            margin: theme.spacing(1),
            height: theme.spacing(16),
        },
    },
})

interface IProps {
    classes: any;
}

class Inbox extends Component<IProps> {

    render () {
        return(
            <div className={this.props.classes.root}>
                <Paper elevation={3}>
                    <Typography variant="subtitle2" gutterBottom>
                        subtitle2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
                    </Typography>
                    <Typography variant="subtitle1" gutterBottom>
                        body1. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec est vel elit tincidunt condimentum. 
                        Sed vitae dolor quam. Donec efficitur porta ornare. Etiam luctus mauris nec diam scelerisque porttitor. 
                        Integer eget semper massa. Duis id leo vehicula, vulputate felis quis, mattis mi. Sed bibendum tellus a eros ullamcorper dictum. 
                    </Typography>
                </Paper>
            </div>
        );
    }
    
}

export default withStyles(useStyles) (Inbox);