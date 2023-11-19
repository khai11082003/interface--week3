import React from 'react'
import BackToHomeText from './BackToHomeText'
import IconSVG from '../Icons/IconSVG'
import ButtonSubmit from './ButtonSubmit'

export default function Footer() {
  return (
      <div className='footer--component'>
        <ButtonSubmit />
          <BackToHomeText/>
        <div className='footer--position'>
        <div className='line'></div>
        <div className='footer--icon'>
            <IconSVG iconName='icon1'/>
            <IconSVG iconName='icon2'/>
            <IconSVG iconName='icon3'/>
            <IconSVG iconName='icon4'/>
            <IconSVG iconName='icon5'/>
          </div>
        </div>
      </div>
    )
}
