import React from "react";
import NavItem from "./BreakdownNavItem";

const BreakdownNav = ({ data }) => {
  return (
    <div id="wrapper">
      <h1 className="screen-title">View Your Projects</h1>
      <div id="nav-screen">

        <NavItem
          data={data}
          title="By Language"
          description="View by Language"
          path="language"/>

        <NavItem
          data={data}
          title="By Fork Count"
          description="View by Fork Count"
          path="forks"/>

        <NavItem
          data={data}
          title="By Subs"
          description="View by Sub Count"
          path="subs"/>
      
        <NavItem
          data={data}
          title="By Amount of Lines"
          description="View by Lines"
          path="code-lines"/>
          
      </div>
    </div>
  );
};

export default BreakdownNav;
