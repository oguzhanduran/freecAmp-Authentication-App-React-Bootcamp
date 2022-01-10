import React from 'react'
import LoginForm from './components/LoginForm'
import LandingPage from "./components/LandingPage/index"
import Registration from './components/Registration/index.js'
import ProductPage from './components/ProductPage'
import Riverside from './components/Riverside'
import WildCamping from './components/WildCamping'
import Header from './components/Header'
import "./index.css"
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";


function Auth() {
    return (
    <Router>
      <Header/>
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/loginform" component={LoginForm} />
          <Route exact path="/registration" component={Registration} />
          <Route exact path="/productpage" component={ProductPage} />
          <Route exact path="/riverside" component={Riverside} />
          <Route exact path="/wildcamping" component={WildCamping} />
        </Switch>
    </Router>
    )
}

export default Auth
        
        

            
