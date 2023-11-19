import React from 'react'
import HeaderMain from '../../components/Headers/HeaderMain/HeaderMain'
import AccountName from '../../components/Headers/AccountName'
import TitleMain from '../../components/Headers/TitleMain'
import Footer from '../../components/Footers'
import "./index.scss"
import IconSVG from '../../components/Icons/IconSVG'

export default function SwapTest() {
  return (
    <div>
        <HeaderMain/>
        <AccountName/>
        <TitleMain/>
        <div className='mainnav2'>
          <div className='swapfrom--container'>
            <div className='swapfrom--text'>Swap from</div>
            <div className='swapfrom--box'>
              <div className='box--text'>11.25</div>
              <div className='box--button'>
                <span className='button--1'>Max</span>
                <div className='button--2'>LINK</div>
            </div>
          </div>
        </div>
        <div className='swapto--container'>
            <div className='box--swapto'>
            <div className='swapfrom--text text2'>Swap to</div>
            <div><IconSVG iconName='swap'/></div>
            </div>
            <div className='swapfrom--box'>
              <div className='box--text'>2,224.76</div>
              <div className='box--button'>
                <div className='button--2'>AAVE</div>
            </div>
          </div>
        </div>
        <div className='desc--container'>
          <div className='price--box'>1 AAVE = 0.04495 LINK</div>
          <div className='icon--box'>
            <IconSVG iconName='petrol'/>
            <span>              16,95 $
</span>
          </div>
        </div>
        <div className='desc2--container'>
          <div className='content'>Slippage tolerance <div className='dot'>!</div></div>
          <div className='button'>
            <div className='button--1'>2%</div>
            <div className='button--2'>3%</div>
            <div className='button--3'>custom</div>
          </div>
        </div>
        <div className='descfinal'>Increase Slippage !</div>
        </div>

        <Footer/>
    </div>
  )
}
