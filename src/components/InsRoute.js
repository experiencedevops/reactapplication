import {BrowserRouter as Router,Route, Link } from 'react-router-dom'
import { Register } from './Register'
import { Home } from './Home'
import { Login } from './Login'
import { ChangeAddress } from './ChangeAddress'
import { PageNotFound } from './PageNotFound'


export const InsRoute = () => (
  <Router>
    <div> 
      <Route exact path="/" component={Login}/>
      <Route path="/register" component={Register}/>
      <Route path="/home" component={Home}/>
      <Route path="/changeaddress" component={ChangeAddress}/>
    </div>
  </Router>
)



