import React from 'react'
import HeaderMain from '../../components/Headers/HeaderMain/HeaderMain'
import TitleMain from '../../components/Headers/TitleMain'
import "./style.scss"
import Footer from '../../components/Footers'
import BackToHomeText from '../../components/Footers/BackToHomeText'
export default function Page7() {
  return (
    <div className='page'>
                <HeaderMain/>

        <div className='mainnav4'>

        <div className='opacity'>
            <TitleMain/>
            <div className='send--container'>
                <div className='sendtitle--container'>Send To Address</div>
                <div className='sendinput--container'>0xb98Ef0896C9f1A175B97078f40097ea9fdf18588</div>
                <div className='sendstatus--container'>Correct EVM address</div>
            </div>
        </div>
        <div className='disable--opacity'>
            <div className='maintitle'>Transaction PIN Verification</div>
            <div className='subtitle'>Maximum 3 trials otherwise your wallet will be locked</div>
        </div>
       
        </div>
        <div className='form--container'>
            <div className='titleform--container'>Confirm your swap address</div>
            <div className='contentform--container-3'>**************</div>
            <div className='status'>Your PIN is not correct</div>
            <div className='position--button'>
            <div className='buttonform--container'>
            <div className='cancelform'>Cancel</div>
                <div className='confirmform'>Confirm</div>
            </div>
            </div>
        </div>
        <BackToHomeText/>
        <Footer/>

    </div>
  )
}
