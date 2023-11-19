import React from "react";
import "./index.scss";
import IconSVG from "../../Icons/IconSVG";
export default function AccountName() {
  return (
    <div className="content--container">
      <div className="account--container">Account Name</div>
      <div className="token--container">
        <div className="user--id">0xBf54.....</div>
        <div className="user--logo">
          <IconSVG iconName="IconLogo"/>
        </div>
      </div>
    </div>
  );
}
