import React from 'react';
import HousewillContext from '../HousewillContext'
import PropTypes from 'prop-types';

export default class CategorybarNav extends React.Component {
    static defaultProps = {
        history: {
            goBack: () => { }
        },
        match: {
            params: {}
        }
    }

    static contextType = HousewillContext;

    render() {
        const { items = [], categorys = [] } = this.context

        const { itemId } = this.props.match.params;

        const itemCategoryId = items.filter(item => item.id == itemId)

        const idForCategory = categorys.filter(category => category.id == 2)

        const getCategoryName = (itemId, categorys = []) => (
            (itemCategoryId.category_id === idForCategory.id)
                ? idForCategory.map(category => category.category_name)
                : categorys.filter(category => category.id)
        )
        const nameYet = getCategoryName(itemId, categorys)

        return (
            <div className="CategorybarNav">
                {nameYet}
                <li id="go-back">
                    <button
                        type="button"
                        id="go-back-link"
                        onClick={() => this.props.history.goBack()}>
                        Go back
                </button>
                </li>
            </div>
        )
    }
}
CategorybarNav.defaultProps = {
    items: [],
    categorys: [],
    name: ""
}

CategorybarNav.propTypes = {
    items: PropTypes.array,
    categorys: PropTypes.array,
    name: PropTypes.string,
    itemId: PropTypes.number
}