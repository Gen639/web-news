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
  //   const [state, dispatch] = useReducer(AppReducer, initialState);
  const [state, dispatch] = useReducer(AppReducer, initialState);

  const getNews = async () => {
    try {
      const response = await axios.get(
        `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=retail&api-key=sWMost9WQwGwn1pHQo9mXGxvksyhUsDu`
      );

      const locallyStoredNews =
        JSON.parse(localStorage.getItem("newsCollection")) || [];
      const combinedNews = [
        ...response.data.response.docs,
        ...locallyStoredNews,
      ];

      dispatch({
        type: "GET_NEWS",
        payload: combinedNews,
      });
    } catch (error) {
      // Handle error if needed
      console.error("Error fetching news:", error);
    }
  };

  return (
    <GlobalContext.Provider value={{ news: state.news, getNews }}>
      {children}
    </GlobalContext.Provider>
  );
};

export const GlobalContext = createContext(initialState);
