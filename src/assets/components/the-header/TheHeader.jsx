import React from "react";

const TheHeader = () => {
  return (
    <div>
      <h2>Welcome to the News API project</h2>
      <p>
        In this project, I use the API from NY Time to GET 10 pieces of news of
        Retail thematic.
      </p>
      <p>
        Additionally, it is possible to write your own piece of news. Go to
        "/form" or click "Go To Form" link, fill the form and submit your news.
      </p>
      <p>
        Once news are submited, it is saved in local storage, the page is
        redirected to "/list", where the news added via the Form are added as
        well.
      </p>
    </div>
  );
};

export default TheHeader;
