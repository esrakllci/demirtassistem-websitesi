import React from 'react'
import './About.css'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import { t } from 'i18next'

function About() {
  return (

    <div className='about-base'>
      <Navbar />
      <div className='container-about'>
        <div className='md:col-span-2'></div>
        <div className='md:col-span-8'>
          <h1 className='about-h'>{t('Hakkımızda2')}</h1>
          <div className='about-grid md:col-span-7'>
            <p className='about-p'>
              {t('HakkımızdaText1')}<br />
              {t('HakkımızdaText2')}<br />
              {t('HakkımızdaText3')}<br />
              {t('HakkımızdaText4')}<br />
              {t('HakkımızdaText5')}<br />
              {t('HakkımızdaText6')}<br />
              {t('HakkımızdaText7')}<br />
              {t('HakkımızdaText8')}<br />
              {t('HakkımızdaText9')}<br />
              {t('HakkımızdaText10')}<br />
              {t('HakkımızdaText11')}<br />
              {t('HakkımızdaText12')}<br />
              {t('HakkımızdaText13')}<br />
              {t('HakkımızdaText14')}<br />
            </p>
          </div>
        </div>
        <div className='h-[100px] md:h-0'></div>
      </div>
      <Footer />
    </div>
  )
}

export default About