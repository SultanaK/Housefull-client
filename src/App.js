import React from 'react';
import './App.css';
import Contact from './components/Contact'
import About from './components/About'
import Nav from './components/Nav'
import Registration from './components/Registration'
import Footer from './components/Footer'
import { Route, Switch } from 'react-router-dom'
import LandingPage from './components/LandingPage'
import Login from './components/Login';
import Logo from './components/Logo'
import Error from './components/Error'
import Logout from './components/Logout';
import ItemPage from './components/ItemPage'
import AddItem from './components/AddItem'
function App() {
  return (

    <div className="App">
    <Logo />     
    <Nav />
      <main>
        <Switch>
          <Route exact path='/' component={LandingPage} />
          <Route exact path='/item/:itemId' component={ItemPage} />
          <Route exact path='/registration' component={Registration} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/logout' component={Logout} />
          <Route exact path='/contact' component={Contact} />
          <Route exact path='/about' component={About} />
          <Route exact path='/additem' component={AddItem} /> 
          <Route component={Error} />
        </Switch>
        </main>
        <Footer />
      
      
    </div>


  );
}

export default App;
