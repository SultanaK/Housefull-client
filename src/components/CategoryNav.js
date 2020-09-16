import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import HousewillContext from '../HousewillContext';
import PropTypes from 'prop-types';
import './categoryNav.css'
export default class CategoryNav extends React.Component {

    static contextType = HousewillContext;

    render() {

        const { categorys = [] } = this.context
        const categoryId = categorys.map(category => category.id)
        const findCategory = (categorys = [], categoryId) =>
            categorys.find(category => category.id == categoryId)

        const categoryDisplay = findCategory(categorys, categoryId);

        return (
            <nav className="nav">
                <div className="categoryList">
                    {categorys.map(category =>
                        <li key={category.id} >
                            <NavLink to={`/category/${category.id}`} className={category.id == categoryId ? ' active' : 'not-active'} >
                                <h3>{category.category_name}</h3>
                            </NavLink>
                            {categoryDisplay}
                        </li>)}
                   
                </div>
                <Link
                    id='add-category-link'
                    to='/add-category'>
                    
                    </Link>
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