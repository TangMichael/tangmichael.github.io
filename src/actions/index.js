
export const addFavorites = element => ({
  type: 'ADD_FAVORITES',
  body: element.body,
  title: element.title
})

export const deleteFavorites = element => ({
  type: 'DELETE_FAVORITES',
  title: element.title
})