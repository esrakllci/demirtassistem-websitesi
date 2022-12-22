import React from 'react'
import './Contact.css'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import { AiFillLinkedin } from 'react-icons/ai'
import { AiOutlineInstagram } from 'react-icons/ai'
import { t } from 'i18next'

// Hakkımızda sayfası başlangıç
function Contact() {
  return (
    <div className='contact-base'>
      <Navbar />
      <div className='contact-container'>
        <div className='md:col-span-2 xl:col-span-3'></div> {/* containerı konumlandırabilmek için içi boş grid */}
        <div className='md:col-span-8 xl:col-span-6'>
          {/* Sayfa Başlığı BİZE ULAŞIN */}
          <div className='contact-us'>{t('Bize Ulaşın2')}</div>
          {/* İletişim Bilgileri ve İletişim Formunun bulunduğu ana container */}
          <div className='contact-container2'>
            {/* İletişim Bilgileri containerı */}
            <div className='contact-info myBg z-[10]'>
              <h2>{t('İletişim Bilgileri')}</h2>
              <hr />
              <div className='contact-social-media-logos'>
                <a href="https://www.linkedin.com/company/demirtassistem/" target="_blank" rel="noopener noreferrer" className='linkedin mr-5'>
                  <AiFillLinkedin className='w-5 h-5' />
                </a>
                <a href="https://www.instagram.com/demirtasistem/?hl=tr" target="_blank" rel="noopener noreferrer" className='instagram'>
                  <AiOutlineInstagram className='w-5 h-5' />
                </a>
              </div>
            </div>
            {/* İletişim Formu containerı */}
            <div className='contact-form md:col-span-4 myBg2 z-[10]'>
              <h2>{t('İletişim Formu')}</h2>
              <hr />
              <form action="">
                <input type="text" placeholder={t('İsminiz')} className='myBg2 contact-input1' />
                <br />
                <input type="text" placeholder={t('E-posta adresiniz')} className='myBg2 contact-input1' />
                <br />
                <input type="text" placeholder={t('Konu')} className='myBg2 contact-input1' />
                <br />
                <textarea name="" id="" cols="30" rows="10" placeholder={t('destek mesajı')} className='myBg2'></textarea>
                <br />
                <input type="submit" value={t('Gönder')} className='contact-submit' />
              </form>
            </div>
          </div>
          {/* Sayfanın belirli yerlerinde bulunan animasyonlu kutular */}
          {/* kutuların yukarı aşağı animasyonu sq classında tanımlı 'animate' animayonunda */}
          <div className='box'>
            <div className='square2 sq z-[15]'></div>
            <div className='square3 sq z-[5]'></div>
            <div className='square4 sq z-[15]'></div>
          </div>
        </div>
        <div className='col-span-2'></div>
      </div>
      <Footer />
    </div>
  )
}

export default Contact