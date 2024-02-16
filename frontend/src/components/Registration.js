import React from "react";

const Registration = () => {
  return (
    <article className="section">
    <form className="registration">
      <label for="name">Name:</label>
      <input type="text" id="name" name="name" />
      <label for="email">Email:</label>
      <input type="text" id="email" name="email" />
      <label for="password">Password:</label>
      <input type="password" id="password" name="password" />
      <input type="submit" value="Submit" className="submit-btn"></input>
    </form>
    </article>
  );
};

export default Registration;
