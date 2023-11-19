import React from 'react'
import IconSVG from '../../../components/Icons/IconSVG'
import "./index.scss"
export default function QRpage1() {
  return (
    <div className='QRpage1'>
        <div className='fixed'>
            <IconSVG iconName='220' color='#ECBF04'/>
        </div>

        <div className='payment'>
        Payment Gateway

        </div>
        <div className='position--screen'>
        <div className='screen'></div>
        </div>
        <div className='content-qr'>
            <div className='text'>Share Your QR Code</div>
            <div className='icon'>
                <IconSVG iconName='222'/>
            </div>
        </div>
        <div className='qr'>
            <IconSVG iconName='221'/>
        </div>
    </div>
  )
}
