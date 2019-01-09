import React, { Component } from 'react';
import Deep from './components/Deep';
import Deep2 from './components/Deep2';
import {
  NavLink,
  Link,
  Route,
} from 'react-router-dom';

const activeLink = {
    color: 'red'
};

class App extends Component {
  handleActive(path){
      if (this.props.route.location.pathname === path) {
          return 'red';
      }
      return '';
  }
  render() {
      console.log(this.props);
    return (
        <div className="App">
            <h3>Sub</h3>
            <Link to="">Home</Link> - &nbsp;
            <NavLink exact to="/sub" activeStyle={activeLink}>Sub</NavLink> - &nbsp;
            <Link to="/sub/deep" className={this.handleActive('/sub/deep')}>Deep</Link> - &nbsp;
            <NavLink to="/sub/deep-2" activeClassName={'red'}>Deep 2</NavLink>
            <hr/>
            <Route path="/sub/deep" component={(match) => <Deep route={match}/>}></Route>
            <Route path="/sub/deep-2" component={(match) => <Deep2 route={match}/>}></Route>
        </div>
    );
  }
}

export default App;
