import React from 'react'
import Footer from '../../../components/Footers'
import "./index.scss"
import HeaderMain from '../../../components/Headers/HeaderMain/HeaderMain'
import IconSVG from '../../../components/Icons/IconSVG'
export default function SettingDeposit() {
  return (
    <div className='SettingDeposit'>
        <HeaderMain/>
        <div className='Titile--Deposit'>Setting</div>
        <div className="arrow--SwapMain">
        <IconSVG iconName="arr"/>
      </div>
      <div className='Line'>
        <div className='Line--Content'>
          <div className='Logo'><IconSVG iconName='1'/></div>
          <div className='Text'>Staking</div>
        </div>
        <div className='arrow'><IconSVG iconName='5'/></div>
      </div>
      <div className='line--1'>
      <div className='Line--Content'>
      <div className='Logo'><IconSVG iconName='2'/></div>
          <div className='Text'>Lock Liquidity Pool</div>
      </div>
      <div className='arrow'><IconSVG iconName='5'/></div>
      </div>
      <div className='line--1'>
      <div className='Line--Content'>
      <div className='Logo'><IconSVG iconName='3'/></div>
          <div className='Text'>Pair Create/ Deposit</div>
      </div>
      <div className='arrow'><IconSVG iconName='5'/></div>
      </div>
      <div className='line--1'>
      <div className='Line--Content'>
      <div className='Logo'><IconSVG iconName='4'/></div>
          <div className='Text'>Withdraw</div>
      </div>
      <div className='arrow'><IconSVG iconName='5'/></div>
      </div>
      <div className="arrow--SwapMain--2"> <IconSVG iconName="arr"/>
</div>
        <Footer/>
    </div>
    )
}
