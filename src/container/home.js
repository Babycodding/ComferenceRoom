import React,{ Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/styles';
import { styles } from '../styles/style';

class HomePage extends Component{
    constructor(props){
        super()
    }
    render(){
        // const {classes} = this.props
        return(
            <div>
               
            </div>
        )
    }
}

HomePage.propTypes ={
    classes:PropTypes.object.isRequired
}
export default withStyles(styles)(HomePage)