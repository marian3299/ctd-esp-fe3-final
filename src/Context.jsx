import axios from "axios";
import { createContext, useContext, useEffect, useReducer } from "react";
import { reducer } from "./reducers/reducer";

const ContextGlobal = createContext();

const lsFavs = JSON.parse(localStorage.getItem("favs")) || [];

const initialState = {
  theme: true,
  data: {
    odonts: [],
    favs: lsFavs,
  },
};

const ContextProvider = ({ children }) => {
  //Aqui deberan implementar la logica propia del Context, utilizando el hook useMemo
  const url = "https://jsonplaceholder.typicode.com/users";

  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    axios(url).then((res) => {
      dispatch({ type: "GET_ODONTS", payload: res.data });
    });
  }, []);

  useEffect(() => {
    localStorage.setItem("favs", JSON.stringify(state.data.favs));
    //alert("Dentist added successfully to favs");
  }, [state.data.favs]);

  useEffect(() => {
    if (state.data.favs.length > lsFavs.length) {
      alert("Dentist added successfully to favs");
    }
  }, [state.data.favs]);

  return (
    <ContextGlobal.Provider value={{ state, dispatch }}>
      {children}
    </ContextGlobal.Provider>
  );
};

export default ContextProvider;

export const useContextGlobal = () => {
  return useContext(ContextGlobal);
};
