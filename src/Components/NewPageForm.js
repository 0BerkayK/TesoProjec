import React from "react";

export default function NewPageForm() {
  return (
    <div>
      <text className="textName">Name Surname</text>
      <div className="rectangleName"></div>
      <input className="inputName" placeholder="Enter name and surname"></input>

      <text className="textCountry">Country</text>
      <div className="rectangleCountry"></div>
      <input className="inputCountry" placeholder="Enter a country"></input>

      <text className="textCity">City</text>
      <div className="rectangleCity"></div>
      <input className="inputCity" placeholder="Enter a city" required></input>

      <text className="textEmail">Email</text>
      <div className="rectangleEmail"></div>
      <input
        className="inputEmail"
        placeholder="Enter a e-mail (abc@xyz.com)"
        type="email"
      ></input>

    </div>
  );
}
