import React from 'react'
import './Footer.css'
import { AiFillLinkedin } from 'react-icons/ai'
import { AiOutlineInstagram } from 'react-icons/ai'
import navbarLogo from '../../assets/img/Logo-neg.svg'
import { t } from 'i18next'

function Footer() {
  return (
    <div className='footer'>
      <div className='mail-input'>
        <img src={navbarLogo} alt="" className='h-8 w-48' /> {/* footer logo */}
        <div className='border-b border-[#FD7700]'></div> {/* logonun altındaki turuncu çizgi */}
        <div>
          <p className='footer-copyright'>Copyright © Demirtas Group. All Rights Reserved.</p>
        </div>
      </div>
      <div className='col-span-6'></div> {/* Konumlandırmak için içi boş div */}
      <div className='footer-sociail-media'>
        <p>{t('bizi takip edin')}</p>
        <div className='footer-social-media-logos'>
          <a href="https://www.linkedin.com/company/demirtassistem/" target="_blank" rel="noopener noreferrer" className='linkedin mr-[22px]'>
            <AiFillLinkedin />
          </a>
          <a href="https://www.instagram.com/demirtasistem/?hl=tr" target="_blank" rel="noopener noreferrer" className='instagram'>
            <AiOutlineInstagram />
          </a>
        </div>
      </div>
    </div>
  )
}

export default Footer