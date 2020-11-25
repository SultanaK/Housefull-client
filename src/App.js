import React from 'react';
import { Route, Switch } from 'react-router-dom';
import ItemPage from '../Item/ItemPage'
import AddItem from '../AddItem/AddItem'
import Nav from './components/Nav/Nav';
import NotFound from './components/NotFound/NotFound';
import SearchItem from './components/Search/SearchItemList'
import UpdateItem from '../Update/UpdateItem'
import ContactPage from './components/Contact/Contact';
import MainApp from './components/MainApp/MainApp';
import HousewillContext from './HousewillContext';
import HowToUse from './components/HowToUse/HowToUse'
import LandinglPagege from './components/LandingPage.js/LandingPage';
import './App.css';

class App extends React.Component {
	static contextType = HousewillContext;
state = {
    items: [],
    categorys: [],
    searchItems: [],
    updateItem:[], 
		hasError: false,
		loggedIn: false,
	};

	static getDerivedStateFromError(error) {
		console.error(error);
		return { hasError: true };
	}
	
  render() {
    
		return (
			<div className='App'>		
				<main id='main__container' className='main__container'>
					{this.state.hasError && (
						<p className='red'>There was an error! Oh no!</p>
					)}
          <Switch>      
						<Route exact path={'/'} component={LandinglPagege} />
						<Route exact path={'/contact'} component={ContactPage} />
						<Route exact path={'/how-to-use'} component={HowToUse}/>
            <Route exact path={'/main-app'} component={MainApp} />
            <Route 
          path="/item/:itemId"
          render={routeProps => <ItemPage {...routeProps} onDelete={this.handleDeleteItem} />}
        />
        <Route path="/add-item" component={AddItem} />
          <Route path="/update-item/:itemId" component={UpdateItem} /> 
          <Route path="/update-item/:itemId" component={UpdateItem} /> 
        
						<Route component={NotFound} />
					</Switch>
				</main>
			</div>
		);
	}
}

export default App;
