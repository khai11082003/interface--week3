import React from 'react'
import HeaderMain from '../../components/Headers/HeaderMain/HeaderMain'
import AccountName from '../../components/Headers/AccountName'
import Footer from '../../components/Footers'
import "./index.scss"
export default function LockLp() {
  return (
    <div className='LockLp'>
        <HeaderMain/>
        <AccountName/>
        <div className='title'>Lock LP</div>
        <div className='Lock--Component'>
            <div className='h1'>LP Token</div>
            <div className='Lock--box--1'>
                <div className='buttonLP'>Choose LP</div>
            </div>
            <div className='h1'>Amount Locking</div>
            <div className='Lock--box'>0</div>
            <div className='h1'>Time Locking</div>
            <div className='Lock--box'>0</div>
        </div>
        <Footer/>
    </div>
  )
}
