import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/styles';
import { styles } from '../AppStyle';
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'


class HomePage extends Component {
    constructor(props) {
        super()
    }
    render() {
        return (
            <div>
                <FullCalendar defaultView="dayGridMonth" plugins={[ dayGridPlugin ]} />
            </div>
        )
    }
}

HomePage.propTypes = {
    classes: PropTypes.object.isRequired
}
export default withStyles(styles)(HomePage)