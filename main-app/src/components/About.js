import React from 'react';

import ReactPlayer from '../../node_modules/react-player';
import {Link} from 'react-router';

export default class About extends React.Component {
    render() {
        return (
            <div className='videomargin'>

                <ReactPlayer 
                	url="https://youtu.be/fTpdtOF-IYU" 
                    playing={true} 
                    controls={true}
                    width={1144}
                    height={549}
                />
               
            </div>
        )
    }
}