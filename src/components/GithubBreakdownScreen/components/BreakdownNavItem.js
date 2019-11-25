import React from "react";
import { Link } from "@reach/router";

const NavItem = ({ title, description, path }) => {
  return (
    <div className="nav-item">
      <h2>{title}</h2>
      <p>{description}</p>
      <Link to={path}><button className="btn btn-primary" type="button">View</button></Link>
    </div>
  );
};

export default NavItem;
