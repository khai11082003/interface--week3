import React from 'react'
import Footer from '../../../components/Footers'
import HeaderMain from '../../../components/Headers/HeaderMain/HeaderMain'
import "./index.scss"
import AccountName from '../../../components/Headers/AccountName'
export default function FinalDeposit() {
  return (
    <div className='FinalDeposit'>
        <HeaderMain/>
        <AccountName/>
        <div className='title'>Deposit LP</div>
        <div className='component'>
            <div className='subTitle-1'>Your LP Token</div>
            <div className='FinalContent'>0xb98Ef0896C9f1A175B97078f40097ea9fdf18588</div>
            <div className='SubTitle'>Amount</div>
            <div className='FinalContent-2'>35754</div>
        </div>
        <div className='de'>Your LP Token is updated to your ERC20 list</div>
        <div className='buttton'>
            <div className='button'>Confirm</div>
        </div>
        <Footer/>
    </div>
  )
}
