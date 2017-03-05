import React from 'react';
import ReactPlayer from '../../node_modules/react-player';
import {Link} from 'react-router';

export default class About extends React.Component {
    render() {
        return (
            <div className='videomargin'>

                <ReactPlayer 
                	url="https://youtu.be/r-PRJ_clGuU" 
                    playing={true} 
                    controls={true}
                    width={1144}
                    height={500}
                />
               
            </div>
        )
    }
}