import React, { Component } from 'react'
import './App.css';
import Nav from './components/Nav/Nav'
import { Route, Switch } from 'react-router-dom'
import Header from './components/Header/Header'
import Error from './components/Error/Error'
import ItemPage from './components/Item/ItemPage'
import AddItem from './components/AddItem/AddItem'
import config from './config'
import Main from './components/Main/Main'
import CategoryNav from './components/Category/CategoryNav'
import HousewillContext from './HousewillContext'
import HousewillError from './HousewillError'
import SearchItem from './components/Search/SearchItemList'
import UpdateItem from './components/Update/UpdateItem'
import Contact from './components/Contact/Contact'
import About from './components/About/About'
import NotFound from './components/NotFound/NotFound'
import HowTo from './components/HowToUse/HowToUse'
export default class App extends Component {
  state = {
    items: [],
    categorys: [],
    searchItems: [],
    updateItem:[]
    
  };

  componentDidMount() {
    Promise.all([
      fetch(`${config.API_ENDPOINT}/items`),
      fetch(`${config.API_ENDPOINT}/categorys`)
    ])
      .then(([itemsRes, categorysRes]) => {
        if (!itemsRes.ok)
          return itemsRes.json().then(e => Promise.reject(e));
        if (!categorysRes.ok)
          return categorysRes.json().then(e => Promise.reject(e));

        return Promise.all([itemsRes.json(), categorysRes.json()]);
      })
      .then(([items, categorys]) => {
        this.setState({ items, categorys });
      })
      .catch(error => {
        console.error({ error })
      });
  }

  addCategory = category => {
    this.setState({
      categorys: [...this.state.categorys, category],
    })
  }

  addItem = item => {
    this.setState({
      items: [...this.state.items, item],
    })
  }
  setSearchItems = searchItems => {
     this.setState({
     searchItems: searchItems
   })
  }
  setUpdateItem = updateItem => {
    const newItems = this.state.items.map(itm =>
      (itm.id === updateItem.id)
        ? updateItem
               : itm
           )
       this.setState({
 items: newItems
         })

 } 
  handleDeleteItem = itemId => {
    const newItems = this.state.items.filter(item => {
      return item.id !== itemId;
    });

    this.setState({
      items: newItems
    })
  }

  addErrorItems = error => {
    this.setState(error);
  };

  setCategorys = categorys => {
    this.setState({
      categorys,
      error: null
    });
  };

  setItems = items => {
    this.setState({
      items,
      error: null
    });
  };

  getCategorys = () => {
    fetch(config.API_CATEGORYS, {
      method: 'GET',
      headers: {
        'content-type': 'application/json'
      }
    })
      .then(res => {
        if (!res.ok) {
          throw new Error(res.status);
        }
        return res.json();
      })
      .then(this.setCategorys)
      .catch(error => this.setState({ categorysError: error }));
  };
  renderSearch() {
    return (
      <>
        <Route exact path="/search" component={SearchItem}
        />
      </>
    )
  }
  
  renderError() {
    return (
      <>
        <Route  path="*" component={Error}
        />
      </>
    )
  }
  renderNotFound() {
    return (
      <>
        <Route  component={NotFound}
        />
      </>
    )
  }
  renderMain() {
    return (
      <>

        {['/', '/category/:categoryId'].map(path => (
          <Route
            exact
            key={path}
            path={path}
            component={Main}
          />
        ))}
        
        <Route 
          path="/item/:itemId"
          render={routeProps => <ItemPage {...routeProps} onDelete={this.handleDeleteItem} />}
        />
        <Route path="/add-item" component={AddItem} />
          <Route path="/update-item/:itemId" component={UpdateItem} /> 
          <Route path="/update-item/:itemId" component={UpdateItem} /> 
        <Route path="/contact" component={Contact} />
        <Route path="/about" component={About} />
        <Route path="/how-to" component={HowTo} />
       
        
        
      </>
    );
  }
  renderCategorybar() {
    return (
      <>

        {['/', '/category/:categoryId'].map(path => (
          <Route
            exact
            key={path}
            path={path}
            component={CategoryNav}
          />
        ))}
      </>
    )
  }
  render() {
    const contextValue = {
      items: this.state.items,
      categorys: this.state.categorys,
      deleteItem: this.handleDeleteItem,
      addCategory: this.addCategory,
      addItem: this.addItem,
      addErrorItems: this.addErrorItems,
      itemsError: this.itemsError,
      setSearchItems: this.setSearchItems,
      searchItems: this.state.searchItems,
      setUpdateItem: this.setUpdateItem,
      updateItem: this.state.updateItem,
      updateItemId:this.state.updateItemId
    }
    return (
      
      <HousewillContext.Provider value={contextValue}>
    
        <div className="App">
          
          <Nav />
          <Route exact path="/" component={Header} />
          <main className="mainpage">
          <div className="categorybar">
          <HousewillError>
          {this.renderCategorybar()}
          </HousewillError>
          </div>
          <div className="main">
          <HousewillError>
                 <Switch>
                 {['/', '/category/:categoryId'].map(path => (
          <Route
            exact
            key={path}
            path={path}
            component={Main}
          />
        ))}
        
        <Route 
          path="/item/:itemId"
          render={routeProps => <ItemPage {...routeProps} onDelete={this.handleDeleteItem} />}
        />
        <Route path="/add-item" component={AddItem} />
          <Route path="/update-item/:itemId" component={UpdateItem} /> 
          <Route path="/update-item/:itemId" component={UpdateItem} /> 
        <Route path="/contact" component={Contact} />
        <Route path="/about" component={About} />
                  <Route path="/how-to" component={HowTo} />
                    <Route exact path="/search" component={SearchItem}/>
                  <Route component={NotFound} />
                  </Switch> 
                </HousewillError>
              </div> 
            </main>  
          </div>
         
        </HousewillContext.Provider>
        
    )
  }
}


