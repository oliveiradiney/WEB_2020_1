import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import Home from './components/Home';
import Create from './components/Create';
import List from './components/List';
import Edit from './components/Edit';

export default class App extends Component{
  render(){
    return(
      <Router>
        <div className='container'>
          <nav className='navbar navbar-expand-lg navbar-dark bg-info'>
            <Link to={'/'} className='navbar-brand'>Disciplinas</Link>
              <div className='Collapse navbar-collapse' id='navbarSupportedContent'>
                <ul className='navbar-nav mr-auto'>
                  <li className='nav-item'><Link to={'/'} className='nav-link'>Home</Link></li>
                  <li className='nav-item'><Link to={'/create'} className='nav-link'>Inserir</Link></li>
                  <li className='nav-item'><Link to={'/list'} className='nav-link'>Listar</Link></li>
                </ul>
              </div>
          </nav>

         
          <Switch>
              <Route exact path='/' component={Home} />
              <Route path='/create' component={Create} />
              <Route path='/edit/:id' component={Edit} />
              <Route path='/list' component={List} />
  
          </Switch>
        </div>
      </Router>
    );
  }
}
