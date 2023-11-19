import React from 'react'
import HeaderMain from '../../components/Headers/HeaderMain/HeaderMain'
import AccountName from '../../components/Headers/AccountName'
import Footer2 from '../../components/Footers/index2'
import IconSVG from '../../components/Icons/IconSVG'
import "./index.scss"
export default function Gateway() {
  return (
    <div className='Gateway'>
        <HeaderMain/>
        <AccountName/>
        <div className="logo--position">
        <IconSVG iconName="logohome" />
      </div>
      <div className="SwapMain--title">
        11.25 <span>LINK</span>
      </div>
    <div className='container'>
    <div className='address'>External Address</div>
      <div className='input'>
        <div className='icon--content'>
            <div className='next'><IconSVG iconName='444'/></div>
            <div className='content'>Public Address, saved account</div>
        </div>
        <div className='qr'><IconSVG iconName='icon44'/></div>
      </div>
    </div>
    <div className="ul--conntainer">
    <div className="arrow--container">
            <IconSVG iconName="arrow-1" />
          </div>
          <ul>
            <div className="box">
              <div className="dot">
                <IconSVG iconName="dot" width= {8} height={8}/>
                </div>
              <div className="box-container">
                
                <li>
                    Account 1
                </li>
                <span>0xBf54.....A940</span>
              </div>
            </div>
            <div className="box">
            <div className="dot">                <IconSVG iconName="dot" width= {8} height={8}/>
</div>

              {" "}
              <div className="box-container">
                <li>
                Account 2

                </li>{" "}
                <span>0xBf54.....A940</span>
              </div>
            </div>
            <div className="box3">
            <div className="dot">                <IconSVG iconName="dot" width= {8} height={8}/>
</div>

              {" "}
              <div className="box-container">
                <li>
                Account 3

                </li>{" "}
                <span>0xBf54.....A940</span>
              </div>
            </div>

          </ul>
          <div className="arrow--container--2">
            <IconSVG iconName="arrow-1" />
          </div>
          </div>
      <div className='submit'>
        <div className='button'>SEND</div>
      </div>
        <Footer2/>
    </div>
  )
}
