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