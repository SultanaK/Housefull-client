export const findCategory = (categorys, categoryId) =>
    categorys.find(category => category.id === categoryId)

export const findItem = (items = [], itemId) =>
    items.find(item => item.id === itemId)

export const getItemsForCategory = (items = [], categoryId) => (
    (!categoryId)
        ? items
        : items.filter(item => item.categoryId === categoryId)
)

export const countItemsForCategory = (items = [], categoryId) =>
    items.filter(item => item.categoryId === categoryId).length

export const displayCategory = (categoryId, itemId) =>
    categoryId.find(categoryId => categoryId === itemId) 