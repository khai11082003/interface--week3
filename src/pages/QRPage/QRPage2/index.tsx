import React from 'react'
import IconSVG from '../../../components/Icons/IconSVG'
import "./index.scss"
export default function QRpage2() {
  return (
    <div className='QRpage2'>
        <div className='fixed'> <IconSVG iconName='220' color='#fff'/></div>
        <div className='titleQR'>fidec payment</div>
        <div className='position-qr2'>
            <div className='qr2'>
                <IconSVG iconName='333'/>
            </div>
        </div>
        <div className='account'>Account 1</div>
    </div>
  )
}
