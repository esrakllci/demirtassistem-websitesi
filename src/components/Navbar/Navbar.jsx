import React, { useState } from 'react'
import './Navbar.css'
import navbarLogo from '../../assets/img/Logo-neg.svg'
import TURKEY from '../../assets/img/Flag_of_the_United_Kingdom.svg'
import ENGLISH from '../../assets/img/Flag_of_Turkey.svg'
import { Link } from 'react-router-dom'
import { AiFillLinkedin, AiOutlineInstagram } from 'react-icons/ai'
import { HiOutlineMenuAlt2 } from 'react-icons/hi'
import { useTranslation } from 'react-i18next';

function Navbar() {
  const { t, i18n } = useTranslation();
  const [active, setActive] = useState(false)
  const handleClick = () => { setActive(!active) }
  const handleClick2 = () => {
    i18n.language === 'en' ? i18n.changeLanguage('tr') : i18n.changeLanguage('en')
  }
  return (
    <div className="navbar">
      <div className='navbar-pc'>
        <div className='navbar-logo'>
          <Link to="/">
            <img src={navbarLogo} alt="" className='h-8 w-48' /> {/* Navbar logo */}
          </Link>
        </div>
        {/* <div className='xl:col-span-6 col-span-5'></div> */}
        <div className='navbar-directions'>
          <ul> {/* Navbar yönlendirici butonlar */}
            <li>
              <Link to="/about">
                {t('Hakkımızda')}
              </Link>
            </li>
            <li>
              <Link to="/projects">
                {t('Projelerimiz')}
              </Link>
            </li>
            <li>
              <Link to="/contact">
                {t('Bize Ulaşın')}
              </Link>
            </li>
            <button onClick={handleClick2} className='flex'>
              {/* TR/EN */}
              {i18n.language === 'tr' ? <img src={TURKEY} alt="" className='h-8 w-10'/>:<img src={ENGLISH} alt="" className='h-8 w-10'/>}
              
              {/* <p className='text-[20px]'>/</p> */}
              
            </button>
          </ul>
        </div>
      </div>
      {/* MOBİL NAVBAR */}
      <div className={`sidebar ${active && "active"} z-[500] md:hidden`}>
        <div className="logo-content">
          <div className="logo">
            <div className="logo-name"></div>
          </div>
          <button id="btn" onClick={() => handleClick()}>
            <HiOutlineMenuAlt2 />
          </button>
        </div>
        <ul className="nav_list">
          <li><Link to="/">{t('AnaSayfa')}</Link></li>
          <li><Link to="/projects">{t('Projelerimiz')}</Link></li>
          <li><Link to="/about">{t('Hakkımızda')}</Link></li>
          <li><Link to="/contact">{t('Bize Ulaşın')}</Link></li>
          <li><button onClick={handleClick2} className='flex'>
              {/* TR/EN */}
              {i18n.language === 'tr' ? <img src={TURKEY} alt="" className='h-8 w-10'/>:<img src={ENGLISH} alt="" className='h-8 w-10'/>}
              
              {/* <p className='text-[20px]'>/</p> */}
              
            </button></li>
        </ul>
        <div className='social '>
          <div className='my-3'>
            <a href="https://www.instagram.com/demirtasistem/?hl=tr" target="_blank" rel="noopener noreferrer" className='instagram mr-[70px]'>
              <AiOutlineInstagram size='1.5em' />
            </a>
          </div>

          <div className='my-3'>
            <a href="https://www.linkedin.com/company/demirtassistem/" target="_blank" rel="noopener noreferrer" className='linkedin mr-[22px]'>
              <AiFillLinkedin size='1.5em' />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar