import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";
import axios from "axios";

// import dotenv from "dotenv";
// dotenv.config();
// const APIKEY = process.env.APIKEY;

const initialState = {
  news: [],
};

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  const getNews = async () => {
    const response = await axios.get(
      `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=xxx`
    );
    dispatch({
      type: "GET_NEWS",
      payload: response.data.response.docs,
    });
  };

  return (
    <GlobalContext.Provider value={{ news: state.news, getNews }}>
      {children}
    </GlobalContext.Provider>
  );
};

export const GlobalContext = createContext(initialState);
