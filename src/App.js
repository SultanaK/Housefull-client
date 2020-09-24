import React, { Component } from 'react'
import './App.css';
import Nav from './components/Nav'
import Header from './components/Header'
import Footer from './components/Footer'
import { Route} from 'react-router-dom'
import Logo from './components/Logo'
import Error from './backup/Error'
import ItemPage from './components/ItemPage'
import AddItem from './components/AddItem'
import config from './config'
import Main from './components/Main'
import CategoryNav from './components/CategoryNav'
import HousewillContext from './HousewillContext'
import HousewillError from './HousewillError'
import SearchItem from './components/SearchItemList'
export default class App extends Component {
  state = {
    items: [],
    categorys: [],
    searchItems:[]
    
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
      searchItems:this.state.searchItems
    }
    return (
      <HousewillContext.Provider value={contextValue}>
        <div className="App">
          <Logo />
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
                  {this.renderMain()}
                </HousewillError>
              </div>
              <div className="main">
                <HousewillError>
                  {this.renderSearch()}
                </HousewillError>
              </div>
            </main>           
        </div>
        <Footer />
      </HousewillContext.Provider>
    )
  }
}


