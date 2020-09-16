import React from 'react';

const HousewillContext = React.createContext({
    categorys: [],
    items: [],
    deleteItem: () => { },
    addItem: () => { }
})

export default HousewillContext;