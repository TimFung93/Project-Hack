import React from 'react';

import ReactPlayer from '../../node_modules/react-player';
import {Link} from 'react-router';

export default class About extends React.Component {
    render() {
        return (
            <div className='videomargin'>
        
                <ReactPlayer 
                	url='https://www.youtube.com/watch?v=ysz5S6PUM-U' 
                    playing={true} 
                    controls={true}
                    width={300}
                    height={400}
                />
               
            </div>
        )
    }
}