import React from 'react';

const HousewillContext = React.createContext({
    categorys: [],
    items: [],
    deleteItem: () => { },
    addItem: () => { },
    setSearchItems:()=>{} ,
    searchItems: [],
    updateItems: [],
   setUpdateItems:()=>{}
})

export default HousewillContext;