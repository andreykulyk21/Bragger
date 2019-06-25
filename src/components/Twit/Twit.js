import React from "react";

export const Twit = ({ date, author, message }) => (
  <div className="twit card">
    <p>
      {author} {date}
    </p>
    <hr />
    <ul>
      <li>{message}</li>
    </ul>
  </div>
);
