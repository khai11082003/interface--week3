import React from 'react'
import HeaderMain from '../../../components/Headers/HeaderMain/HeaderMain'
import AccountName from '../../../components/Headers/AccountName'
import TitleMain from '../../../components/Headers/TitleMain'
import IconSVG from '../../../components/Icons/IconSVG'
import Footer from '../../../components/Footers'
import "./index.scss"
export default function UserDeposit() {
  return (
    <div className='UserDeposit'>
        <HeaderMain/>
        <AccountName/>
        <div className='title'>
        Deposit LP
        </div>
        <div className='mainnav2'>
          <div className='swapfrom--container'>
            <div className='swapfrom--text'>1st Token</div>
            <div className='swapfrom--box'>
              <div className='box--text'>0</div>
              <div className='box--button'>
                <div className='button'>Choose Token</div>
            </div>
          </div>
        </div>
        <div className='swapto--container'>
            <div className='box--swapto'>
            <div className='swapfrom--text text2'>2nd Token</div>
            </div>
            <div className='swapfrom--box'>
              <div className='box--text'>0</div>
              <div className='box--button'>
                <div className='button'>Choose Token</div>
            </div>
          </div>
        </div>
        </div>
        <div className='des'>
        Any Order, please note that if this LP Token is created first time
at least 95% of Total Supply of at least one of them is deposited
and all LP token will be locked for at least 1 year
        </div>
        <div className='subdes'>More Information</div>
        <Footer/>
    </div>
  )
}
