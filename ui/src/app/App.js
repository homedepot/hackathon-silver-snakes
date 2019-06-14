import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css'
import Login from '../login/Login'
import Landing from '../landing/Landing'
import WishCreation from '../wishCreation/WishCreation'
import WatchAuth from '../auth/WatchAuth'
import WishSponsorShip from '../wishSponsorship/WishSponsorship'
import WishCuration from '../wishCuration/WishCuration'
import Admin from '../admin/Admin'

function App() {
  return (
    <Router>
      <WatchAuth>
        <Switch>
          <Route exact path="/landing" component={Landing} />
          <Route exact path="/wish-creation" component={WishCreation} />
          <Route exact path="/wish-curation" component={WishCuration} />
          <Route exact path="/wish-sponsorship" component={WishSponsorShip} />
          <Route exact path="/admin" component={Admin} />
          <Route exact path="/" component={Login} />
        </Switch>
      </WatchAuth>
    </Router>
  )
}

export default App
