import React from "react";
import user from "../images/user.png";

const ContactCard = (props) => {
  const { id, name, lastname, email, number} = props.contact;
  return (
    <div className="flex w-full items-center mb-3">
      <img className="ui tiny  image" src={user} alt="user" />
      <div className="content ml-4 mr-auto">
        <div className="header text-2xl font-bold capitalize">{name} {lastname}</div>
        <div><a className="" href={"mailto:"+email }>{email}</a></div>
        <div><a className="" href={"tel:"+ number}>{number}</a></div>

      </div>
      <i
        className="trash alternate  icon"
        style={{ color: "red" }}
        onClick={() => props.clickHander(id)}
      ></i>
    </div>
  );
};

export default ContactCard;
