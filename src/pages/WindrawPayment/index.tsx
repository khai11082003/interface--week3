import React from 'react'
import HeaderMain from '../../components/Headers/HeaderMain/HeaderMain'
import Footer from '../../components/Footers'
import "./index.scss"
import IconSVG from '../../components/Icons/IconSVG'
export default function WindrawPayment() {
  return (
    <div className='WindrawPayment'>
        <HeaderMain/>
        <div className='title'>Windraw</div>
        <div className='container'>
        <div className='sstitle'>Send To Address</div>
        <div className='Payment--box'>0xb98Ef0896C9f1A175B97078f40097ea9fdf18588</div>
        <div className='status'>Correct EVM address</div>
        <div className='title--form'>
        Transaction Information
        </div>

        </div>
        <div className='form'>
        <div className='form--content'>
            <div className='nav--left'>
                <div className='h2'>Form</div>
                <div className='h2'>Balance</div>
                <div className='h2--button'><div>Amount</div> <div className='Amount--button'>Max</div></div>
                <div className='h2--icon'>Transaction Speed<span className='position'><IconSVG iconName='10'/></span></div>
                <div className='p'>
                    <div className='p1'>Slow</div>
                    <div className='p1'>Moderate</div>
                </div>
            </div>
            <div className='nav--right'>
                <div className='title--account'>
                    <div className='account--1'>Account 1</div>
                    <div className='id--container'>
                        <div className='id--position'>0xb98E.....8588</div>
                        <div>100.11 ETH</div>
                    </div>
                </div>
                <div className='box--submit'>100.0 ETH</div>
                <div className='result'>
                    <div className='Fast'>Fast<br/><span>Likely {"<"} 15 seconds</span></div>
                    <div className='Max--fee'>Max fee</div>
                </div>
                <div className='gas--result gas'>
                    <div>Gas Estimation:</div>
                    <div>0.0000315 ETH</div>
                </div>
                <div className='gas--result gas2'>
                    <div>Total: </div>
                    <div>100.0000315 ETH</div>
                </div>
            </div>
        </div>
        <div className='button--form--position'>
            <div className='inner--button'>
                <div className='button button1'>Back</div>
                <div className='button'>Confirm</div>
            </div>
        </div>
        </div>
        <Footer/>
    </div>
  )
}
