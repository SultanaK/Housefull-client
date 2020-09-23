import React from 'react';
import { NavLink } from 'react-router-dom';
import HousewillContext from '../HousewillContext';
import PropTypes from 'prop-types';
import './categoryNav.css'
export default class CategoryNav extends React.Component {

    static contextType = HousewillContext;

    render() {

        const { categorys = [] } = this.context
        const categoryId = categorys.map(category => category.id)
        const findCategory = (categorys = [], categoryId) =>
            categorys.find(category => category.id === Number(categoryId))

        const categoryDisplay = findCategory(categorys, categoryId);

        return (
            <nav className="nav">
                <div className="categoryList">
                <h2>Search Item by Categories</h2> 
                    <ul className="categoryListItem">                 
                    {categorys.map(category =>
                        <li className="category_title" key={category.id} >
                            <NavLink to={`/category/${category.id}`} className={category.id === Number(categoryId) ? ' active' : 'not-active'} >
                                <h3>{category.category_name}</h3>
                            </NavLink>
                            {categoryDisplay}
                        </li>
                    )}
                   </ul>
                </div>
                
            </nav>
        )
    }
}

CategoryNav.defaultProps = {
    categorys: [],
}

CategoryNav.propTypes = {
    categorys: PropTypes.array,
    id: PropTypes.string,
    name: PropTypes.string
}