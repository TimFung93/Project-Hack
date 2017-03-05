import React from 'react';

import {PropTypes} from 'react';
import {Link} from 'react-router';
import About from '../components/About';
import Home from '../components/Home';

export default class Header extends React.Component {

    render() {
        let style = {
            height: '139px',
            width: '154px',
            marginTop: '73px',  
            marginLeft: '461px'
        }
        return (
            <div className='container'>
            
                <img style={style} className='Main' src='img/LOGO.jpg'></img>
                <h3>You have a dinner at 6pm with Sarah at 101 College Street on March 8th, 2017.</h3>
                <h3>It is -3<img className='cloud'src="img/white_cloud.png"></img> right now, in Toronto, Ontario.</h3>
                <ul className="nav nav-pills pull-right title">

                    <li role="presentation" className="active"><Link to='/'>Calender</Link></li>
                    <li role="presentation"><Link to="/about">Videos</Link></li>
                    <li role="presentation"><Link to="/App">Todo</Link></li>
                </ul>
                {this.props.children} 
            </div>
        )   
    }
}
