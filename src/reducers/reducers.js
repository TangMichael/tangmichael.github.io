const initialState = {
    favorites: []
  };
  const reducers = (state = initialState, action) => {
    switch (action.type) {
      case "ADD_FAVORITES":
        var favorite = { title: action.title, body: action.body };
        return {
          ...state,
          favorites: [...state.favorites, favorite]
        };
      case "DELETE_FAVORITES":
        state.favorites = state.favorites.filter(element => action.title !== element.title)
        return {...state, favorites: [...state.favorites]};
      default:
        return state;
    }
  };
  
  export default reducers;
  