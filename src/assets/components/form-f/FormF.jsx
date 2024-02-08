import React, { useState } from "react";

const FormF = () => {
  const initialState = {
    title: "",
    abstract: "",
  };
  const clearState = () => {
    setData({ ...initialState });
  };

  const [data, setData] = useState([initialState]);
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [message, setMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`sending ${data.title} ${data.abstract}`);
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
