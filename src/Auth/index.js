import React from 'react'
import LoginForm from './pages/LoginForm'
import LandingPage from "./pages/LandingPage/index"
import Registration from './pages/Registration/index.js'
import Riverside from './pages/Riverside'
import WildCamping from './pages/WildCamping'
import HomePage from './pages/HomePage'
import Header from './components/Header'
import ProtectedRoutes from './protectedRoutes/ProtectedRoutes'
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
          <Route exact path="/homepage"> <ProtectedRoutes Cmp={HomePage}/> </Route>
          <Route exact path="/wildcamping"> <ProtectedRoutes Cmp={WildCamping}/> </Route>
          <Route exact path="/riverside"> <ProtectedRoutes Cmp={Riverside}/> </Route>

        </Switch>
    </Router>
    )
}

export default Auth
        
        

            
