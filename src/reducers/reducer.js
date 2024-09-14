export const reducer = (state, action) => {
  switch (action.type) {
    case "GET_ODONTS":
      return { ...state, data: { ...state.data, odonts: action.payload } };
    case "ADD_FAVS":
      return {
        ...state,
        data: { ...state.data, favs: [...state.data.favs, action.payload] },
      };
    case "CHANGE_THEME":
      return { ...state, theme: !state.theme };
    default:
      return new Error("Accion no existente");
  }
};
