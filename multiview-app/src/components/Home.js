import React from 'react';

import Calendar from './Calendar';
import {Link} from 'react-router'

export default class Home extends React.Component {
    render() {

    	
        return (
            <div className='contain'>

                <h1>Title</h1>
                <Calendar
                    accentColor={'steelblue'}
                    orientation={'flex-row'}
                    showHeader={false}
                    onDatePicked={(d) => {
                      console.log(d)
                    }}/>

                

            </div>
        )
    }
}