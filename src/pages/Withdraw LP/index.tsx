import React from 'react'
import HeaderMain from '../../components/Headers/HeaderMain/HeaderMain'
import AccountName from '../../components/Headers/AccountName'
import Footer from '../../components/Footers'
import IconSVG from '../../components/Icons/IconSVG'
import "./index.scss"
export default function Withdraw() {
  return (
    <div className='Withdraw'>
        <HeaderMain/>
        <AccountName/>
        <div className='title'>Withdraw LP</div>
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
                
                <li className='windraw'>

                0xBf54....1a6      
                </li>
                <span>3321.7</span>
              </div>
            </div>
            <div className="box">
            <div className="dot"><IconSVG iconName="dot"/></div>

              {" "}
              <div className="box-container">
                <li className='windraw'>
                0xBf54....1a7      
                </li>{" "}
                <span>10</span>
              </div>
            </div>
            <div className="box">
            <div className="dot"><IconSVG iconName="dot"/></div>

              {" "}
              <div className="box-container">
                <li className='windraw'>
                0xH4av....t81      
                </li>{" "}
                <span>6657.7</span>

              </div>
            </div>

            <div className="box">
            <span className="dot"><IconSVG iconName="dot"/></span>

              {" "}
              <div className="box-container">
                <li className='windraw'>
                0xH4av....t82
                </li>{" "}
                <span>20.7</span>

              </div>

            </div>

          </ul>
          <div className="arrow--container--2">
            <IconSVG iconName="arrow-1" />
          </div>
        </div>
      </div>
        <Footer/>
    </div>
  )
}
