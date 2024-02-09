import React, { useState } from "react";

const FormF = () => {
  // const initialState = {
  //   title: "",
  //   abstract: "",
  // };

  const initialState = [
    {
      abstract: "",
      headlines: {
        main: "",
      },
    },
  ];

  const clearState = () => {
    setData({ ...initialState });
  };

  const [data, setData] = useState(initialState);
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [message, setMessage] = useState("");

  const [newsStorage, setNewsStorage] = useState(() => {
    const storedNews = JSON.parse(localStorage.getItem("newsCollection")) || [];
    return storedNews;
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`sending ${data.title} ${data.abstract}`);

    // const newPiece = {
    //   title: data.title,
    //   abstract: data.abstract,
    // };

    const newPiece = {
      abstract: data.abstract,
      headline: {
        main: data.title,
      },
    };

    // setting the piece of news to local storage
    localStorage.setItem("piece", JSON.stringify(newPiece));

    const updatedNewsStorage = [...newsStorage, newPiece];
    setNewsStorage(updatedNewsStorage);
    localStorage.setItem("newsCollection", JSON.stringify(updatedNewsStorage));

    //retrieving and logging the array wiht saved in local storage news
    let newsStorageRetrieved =
      JSON.parse(localStorage.getItem("newsCollection")) || [];
    console.log(newsStorageRetrieved);
    clearState();
  };

  const handleInputChange = (event) => {
    const updatedData = { ...data, [event.target.name]: event.target.value };

    if (updatedData.title.length < 3) {
      setMessage("Title must be at least 3 characters");
      setBtnDisabled(true);
    } else {
      setMessage(null);
      setBtnDisabled(false);
    }

    setData(updatedData);
  };
  return (
    <div>
      <h2>Post Your News</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="title"
          value={data.title}
          name="title"
          onChange={handleInputChange}
        />
        <input
          type="text"
          placeholder="abstract"
          value={data.abstract}
          name="abstract"
          onChange={handleInputChange}
        />
        <button type="submit" disabled={btnDisabled}>
          Post the news
        </button>
        <p className="{color:red}">{message}</p>
      </form>
    </div>
  );
};

export default FormF;
