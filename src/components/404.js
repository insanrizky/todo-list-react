import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class NotFound extends Component {
    render(){
        return (
            <div className="App">
                <h2>404</h2>
                <h4>Not Found</h4>
                <Link to="/">Kembali</Link>
            </div>
        )
    }
}

export default NotFound;