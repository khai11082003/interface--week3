import React from 'react'
import HeaderMain from '../../components/Headers/HeaderMain/HeaderMain'
import AccountName from '../../components/Headers/AccountName'
import TitleMain from '../../components/Headers/TitleMain'
import Footer from '../../components/Footers'
import "./style.scss"
import IconSVG from '../../components/Icons/IconSVG'
export default function SwapInfor() {
  return (
    <div className='infor'>
<HeaderMain />
      <AccountName />
      <TitleMain />
        <div className='mainnav3'>
        <div className='infor--container'>
        <div className='swapinfor--container'>
            <div className='title--container'>Swap from</div>
            <div className='box--container'>Warning</div>
        </div>
        <div className='infocontent--container'>
            <div className='subtitle--container'>Contract Security</div>
            <li><IconSVG iconName='tickgreen'/>Verified Contract source code</li>
            <li><IconSVG iconName='tickwarning22'/>No Proxy found</li>
            <li><IconSVG iconName='tickgreen'/>Mint function is transparent or non-existent</li>
            <li><IconSVG iconName='tickgreen'/>No retrievable ownership function found</li>
            <li><IconSVG iconName='tickgreen'/>Contract owner cannot modify balance</li>
            <li><IconSVG iconName='tickgreen'/>No hidden owner address</li>
            <li><IconSVG iconName='tickgreen'/>This token cannot self-destruct</li>
            <li><IconSVG iconName='tickgreen'/>No external call risk</li>
            <div className='subtitle--container--2'>
                <div className='titleinfor'>Honeypot risks</div>
                <div className='subtitle'>
                    <div className='sub1'>Buy tax: <span>1.00%</span></div>
                    <div className='sub2'>Sell tax: <span>1.00%</span></div>         
                </div>
            </div>
            <li><IconSVG iconName='tickgreen'/>Code for suspending trading found</li>
            <li><IconSVG iconName='tickwarning22'/>This token has a cooldown period function</li>
            <li><IconSVG iconName='tickgreen'/>Holders can sell all of their tokens</li>
            <li><IconSVG iconName='tickgreen'/>This token can be bought</li>
            <li><IconSVG iconName='tickgreen'/>Anti-whale function found</li>
            <li><IconSVG iconName='tickgreen'/>Anti-whale modifiable function found</li>
            <li><IconSVG iconName='tickgreen'/>Transaction tax can be modified</li>
            <li><IconSVG iconName='tickgreen'/>Blacklist function found</li>
        </div>
      </div>
        </div>
        <Footer/>

    </div>
  )
}
