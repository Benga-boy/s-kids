import React from 'react'
import { Route, BrowserRouter, Switch } from 'react-router-dom'

import Home from './components/common/Home'
import Navbar from './components/common/Navbar'
import About from './components/common/About'
import SchoolServices from './components/pages/SchoolServices'
import Footer from './components/common/Footer'
import WhatsOn from './components/pages/WhatsOn'
import EventEdit from './components/event/EventEdit'
import EventNew from './components/event/EventNew'
import Multisports from './components/pages/Multisports'
import ChildProtection from './components/pages/ChildProtection'
import PrivacyPolicy from './components/pages/PrivacyPolicy'
import Contact from './components/pages/Contact'
import Login from './components/authentication/Login'
import Error from './components/common/Error'
import SecureRoute from './components/common/SecureRoute'

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/schoolservices" component={SchoolServices} />
        <SecureRoute path="/whatson/:id/edit" component={EventEdit} />
        <SecureRoute path="/whatson/create" component={EventNew} />
        <Route path="/whatson" component={WhatsOn} />
        <Route path="/multisports" component={Multisports} />
        <Route path="/childprotection" component={ChildProtection} />
        <Route path="/privacypolicy" component={PrivacyPolicy} />
        <Route path="/contact" component={Contact} />
        <Route path='/admin' component={Login} />
        <Route path="/*" component={Error} />
      </Switch>
      <Footer />
    </BrowserRouter>
  )
}

export default App
