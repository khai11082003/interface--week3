import React from "react";
import HeaderMain from "../../components/Headers/HeaderMain/HeaderMain";
import AccountName from "../../components/Headers/AccountName";
import Footer from "../../components/Footers";
import TitleMain from "../../components/Headers/TitleMain";
import "./index.scss";
import IconSVG from "../../components/Icons/IconSVG";
export default function ChooseToken() {
  return (
    <div>
      <HeaderMain />
      <AccountName />
      <TitleMain />
      <div className="mainnav">
        <div className="input">
          <IconSVG iconName="iconfind" />
          <input placeholder="Search name or address" id="subinput" />
        </div>
        <div className="des--container">
          <div className="text--container">
            Token contract addresses can be found on corresponding blockchain
            scan <span>Website</span>
          </div>
          <div className="arrow--container">
            <IconSVG iconName="arrow-1" />
          </div>
        </div>
        <div className="ul--conntainer">
          <ul>
            <div className="box">
              <div className="dot"><IconSVG iconName="dot"/></div>
              <div className="box-container">
                
                <li>

                  ETH
                  <br />
                  <span>(Ethereum)</span>
                </li>
                <span>0</span>
              </div>
            </div>
            <div className="box">
            <div className="dot"><IconSVG iconName="dot"/></div>

              {" "}
              <div className="box-container">
                <li>
                  BNB
                  <br />
                  <span>(Binance)</span>
                </li>{" "}
                <span>0</span>
              </div>
            </div>
            <div className="box">
            <div className="dot"><IconSVG iconName="dot"/></div>

              {" "}
              <div className="box-container">
                <li>
                  DAI
                  <br />
                  <span>(DAI token)</span>
                </li>{" "}
                <span>0</span>
              </div>
            </div>

            <div className="box">
            <div className="dot"><IconSVG iconName="dot"/></div>

              {" "}
              <div className="box-container">
                <li>
                  USDT
                  <br />
                  <span>(USDT)</span>
                </li>{" "}
                <span>0</span>
              </div>

            </div>

          </ul>
          <div className="arrow--container--2">
            <IconSVG iconName="arrow-1" />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
