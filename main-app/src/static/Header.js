import React from 'react';

import {PropTypes} from 'react';

import {Link} from 'react-router'

import About from '../components/About'
import Home from '../components/Home'

export default class Header extends React.Component {
    render() {
        return (
            <div className='container'>
                <ul className="nav nav-pills pull-right title">
                    <li role="presentation" className="active"><Link to='/'>Home</Link></li>
                    <li role="presentation"><Link to="/about">About</Link></li>
                    <li role="presentation"><Link to="/App">App</Link></li>
                </ul>
                {this.props.children} 
            </div>
        )
    }
}
