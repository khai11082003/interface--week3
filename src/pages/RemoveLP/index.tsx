import React from 'react'
import HeaderMain from '../../components/Headers/HeaderMain/HeaderMain'
import Footer from '../../components/Footers'
import "./index.scss"
import AccountName from '../../components/Headers/AccountName'
import IconSVG from '../../components/Icons/IconSVG'
export default function RemoveLP() {
  return (
    <div className='RemoveLP'>
        <HeaderMain/>
        <AccountName/>
        <div className='title'>Withdraw LP</div>
        <div className='subtile'>0xBf54....1a7</div>
        <div className='mainnav2'>
          <div className='swapfrom--container'>
          <div className='swapfrom--text'>
          Amount of LP Token
</div>
            <div className='swapfrom--box'>
              <div className='box--text'>10</div>
              <div className='box--button'>
                <span className='button--1'>Max</span>
            </div>
          </div>
        </div>
        <div className='swapto--container'>
            <div className='box--swapto'>
            <div className='swapfrom--text text2'>Address To</div>
            </div>
            <div className='swapfrom--box'>
              <div className='box--button'>
                <IconSVG iconName='0'/>
            </div>
          </div>
        </div>
        <div className='desc--container'>
          <div className='price--box'>1 AAVE = 0.04495 WETH</div>
          <div className='icon--box'>
            <IconSVG iconName='petrol'/>
            <span>              16,95 $
</span>
          </div>
        </div>
        <div className='desc2--container-swap2'>
          <div className='content'>Slippage tolerance <div className='dot'>!</div></div>
          <div className='button'>
            <div className='button--1'>2%</div>
            <div className='button--2'>3%</div>
            <div className='button--3'>custom</div>
          </div>
        </div>
        </div>
        <Footer/>
    </div>
  )
}
