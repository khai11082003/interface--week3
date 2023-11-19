import React from "react";
import HeaderMain from "../../components/Headers/HeaderMain/HeaderMain";
import Footer from "../../components/Footers";
import CannotTokenText from "../../components/Footers/CannotTokenText";
import "./index.scss";
import AccountName from "../../components/Headers/AccountName";
import IconSVG from "../../components/Icons/IconSVG";
import Footer2 from "../../components/Footers/index2";

export default function SwapMain2() {
  return (
    <div className="SwapMain">
      <HeaderMain />
      <AccountName />
      <div className="logo--position">
        <IconSVG iconName="logohome" />
      </div>
      <div className="SwapMain--title">
        11.25 <span>LINK</span>
      </div>
      <div className="SwapMain__Button--Container">
        <div className="Button--container">
          <div className="button">BUY</div>
          <div className="button">SEND</div>
          <div className="button">SWAP</div>
        </div>
      </div>
      <div className="arrow--SwapMain">
        <IconSVG iconName="arr"/>
      </div>
      <div className="SwapMain__content--container">
        <div className="Content">
          <div className="icon">
            <IconSVG iconName="eth" />
            <span>0.1115</span>
          </div>
          <div className="coinName">ETH</div>
          <div className="elipse">
            <IconSVG iconName="Ellipse" />
          </div>
        </div>
        <div className="Content">
          <div className="icon">
            <IconSVG iconName="logohome" />
            <span>2,224.76</span>
          </div>
          <div className="coinName">AAVE</div>
          <div className="elipse">
            <div>
              {" "}
              <IconSVG iconName="Ellipse" />
            </div>
            <div className="remove">
            <IconSVG iconName="remove" />
            </div>
          </div>
        </div>
        <div className="Content">
          <div className="icon">
            <IconSVG iconName="ttt" />
            <span>2,22476999</span>
          </div>
          <div className="coinName">TTT</div>
          <div className="elipse">
            <div>
              {" "}
              <IconSVG iconName="Ellipse" />
            </div>
            <div className="remove">
            <IconSVG iconName="remove" />
            </div>
          </div>
        </div>
      </div>
        <div className="arrow--SwapMain--2"> <IconSVG iconName="arr"/>
</div>
      <CannotTokenText />
      <Footer2 />
    </div>
  );
}
