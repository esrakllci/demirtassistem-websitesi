/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useRef, useEffect, useState } from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import './Home.css'
import navbarLogo from '../../assets/img/Logo-neg.svg'
import Typical from 'react-typical'
import Modal from '../../components/Modal/Modal'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next';


function Home() {
  const { t, i18n } = useTranslation();
  const vidRef = useRef();
  useEffect(() => { vidRef.current.play(); }, []);

  // Projelerimiz kısmındaki Modalın açılıp kapanması için gereken değişkenler
  // Her yeni proje eklendiğinde açılıp kapatabilmek için yeni bir state oluşturulmalı
  const [state, setState] = useState(false)
  const [state2, setState2] = useState(false)
  const [state3, setState3] = useState(false)
  const [state4, setState4] = useState(false)
  // openModal projeyi görüntüle butonun hangi Modalı açacağını belirliyor
  function openModal() { setState(true) }
  function openModal2() { setState2(true) }
  function openModal3() { setState3(true) }
  function openModal4() { setState4(true) }
  function closeModal() {
    setState(false)
    setState2(false)
    setState3(false)
    setState4(false)
  }


  return (
    <div className='home-base overflow-hidden'>
      <Navbar />
      {/* Anasayfa videosu */}
      <div className='home-video overflow-hidden'>
        <video id='videoBG' muted autoPlay loop ref={vidRef} height="auto" width="100%" className='overflow-hidden' src={i18n.language === 'tr' ? require('../../assets/vid/Comp1-1.webm') : require('../../assets/vid/Comp1-1(en).m4v')} />
      </div>
      {/* MOBİL İÇİN ANASAYFA GİRİŞİ */}
      <div className='text-white md:hidden'>
        <img src={navbarLogo} alt="" className='h-6 w-48 mx-auto mt-16 mb-[50px]' />
        <div className='text-left ml-[25px]'>
          <h1 className='mobile-ds-title'>01</h1>
          <p className='mobile-ds-text mobile-text01'>{t('vid01.1')}<br />{t('vid01.2')}</p>
        </div>
        <div className='text-right mr-[25px]'>
          <h1 className='mobile-ds-title'>02</h1>
          <p className='mobile-ds-text mobile-text02'>{t('vid02.1')}<br />{t('vid02.2')}</p>
        </div>
        <div className='text-left ml-[25px]'>
          <h1 className='mobile-ds-title'>03</h1>
          <p className='mobile-ds-text mobile-text03'>{t('vid03.1')}<br />{t('vid03.2')}</p>
        </div>
      </div>

      <div className='xl:h-[930px] md:h-[630px]'></div>
      {/* Videonun altındaki açıklama kısmı */}
      <div className='home-text'>
        <div className='md:col-span-2'></div> {/* Konumlandırmak için içi boş grid divi */}
        <div className='home-text-container'>
          <p className='home-text-1'>{t("AnasayfaText1")}</p>
          <p className='home-text-2'>{t("AnasayfaText2")}</p>
        </div>
      </div>

      <div>
        <h1 className='home-h1'>{t('Son Çalışmalarımız')}</h1>
        <div id="permas" className='home-project-box flex flex-row overflow-hidden'>
          <div className='home-project-container-box-item1 flex'>
            <div className="home-project-box-picture-1"><img src={require('../../assets/img/asinbc.png')} alt='project' /></div>
            <div className='flex flex-col'>
              <div className='home-project-box-picture-2'><img src={require('../../assets/img/esg-am.png')} alt='project' /></div>
              <div className='home-project-box-mid flex flex-row'>
                <div className='home-project-box-picture-3'><img src={require('../../assets/img/ss3.png')} alt='project' /></div>
                <div className='home-project-box-picture-4'><img src={require('../../assets/img/ss6.png')} alt='project' /></div>
              </div>
            </div>
            <div className='home-project-box-picture-5'><img src={require('../../assets/img/inovcard.png')} alt='project' /></div>
          </div>

          <div className='home-project-container-box-item2 flex'>
            <div className="home-project-box-picture-1"><img src={require('../../assets/img/asinbc.png')} alt='project' /></div>
            <div className='flex flex-col'>
              <div className='home-project-box-picture-2 w-[300px] mb-[13px]'><img src={require('../../assets/img/esg-am.png')} alt='project' /></div>
              <div className='home-project-box-mid flex flex-row'>
                <div className='home-project-box-picture-3'><img src={require('../../assets/img/ss3.png')} alt='project' /></div>
                <div className='home-project-box-picture-4'><img src={require('../../assets/img/ss6.png')} alt='project' /></div>
              </div>
            </div>
            <div className='home-project-box-picture-5'><img src={require('../../assets/img/inovcard.png')} alt='project' /></div>
          </div>

          <div className='home-project-container-box-item2 flex'>
            <div className="home-project-box-picture-1"><img src={require('../../assets/img/asinbc.png')} alt='project' /></div>
            <div className='flex flex-col'>
              <div className='home-project-box-picture-2'><img src={require('../../assets/img/esg-am.png')} alt='project' /></div>
              <div className='home-project-box-mid flex flex-row'>
                <div className='home-project-box-picture-3'><img src={require('../../assets/img/ss3.png')} alt='project' /></div>
                <div className='home-project-box-picture-4'><img src={require('../../assets/img/ss6.png')} alt='project' /></div>
              </div>
            </div>
            <div className='home-project-box-picture-5'><img src={require('../../assets/img/inovcard.png')} alt='project' /></div>
          </div>
        </div>
      </div>

      <div className='home-bilisim'>
        {/* yaptığımız işlerin typical animasyonu */}
        <div className='col-span-2'></div> {/* Konumlandırmak için içi boş grid divi */}
        {
          i18n.language === 'tr' ? <p className='home-bilisim-content '>BİLİŞİM SEKTÖRÜNÜN HER ALANINDA EN KALİTELİ HİZMETİ SUNMAK <br />İÇİN&nbsp;
            <span>
              {/* typical animasyonunda gelecek olan textler stepsin içinde (TR) */}
              <Typical
                steps={['YAZILIM', 3000, 'TASARIM', 3000, 'İÇERİK ÜRETİCİLİĞİ', 3000, 'SOSYAL MEDYA YÖNETİMİ', 3000]}
                loop={Infinity}
                wrapper="p"
                className='inline'
              />
            </span>
            &nbsp;YAPIYORUZ
          </p> : <p className='home-bilisim-content '>WE &nbsp;
            <span>
              {/* typical animasyonunda gelecek olan textler stepsin içinde (EN) */}
              <Typical
                steps={['DEVELOP', 3000, 'DESIGN', 3000, 'PRODUCE CONTENT', 3000, 'MANAGE SOCIAL MEDIA', 3000]}
                loop={Infinity}
                wrapper="p"
                className='inline'
              />
            </span>
            &nbsp;TO <br />PROVIDE THE BEST QUALITY <br/>IT SERVICE FOR OUR CUSTOMERS.
          </p>
        }
        <div className='col-span-2'></div> {/* Konumlandırmak için içi boş grid divi */}
      </div>
      <p className='mt-[46px] text-2xl text-[#FCFCFC] text-center'>|</p>
      <Link to='/projects'>
        <p className='home-project-info'>{t('Bilgi Alın')}</p>
      </Link>

      <div className='projects'>
        {/* Anasayfada bulunan projelerimiz kısmı */}
        {/* text ve image'den oluşuyor, textin altında bulunan projeyi görüntüle butonuna bastığımzda bir modal açılıyor */}
        {/* Modal '../../components/Modal/Modal.jsx dosyasında tanımlanılmıştır. */}
        <h1 className='home-project'>{t('Projelerimiz')}</h1>
        {/* PROJE 1 (asinbc.com) */}
        <div className='projects-1 md:grid md:grid-cols-12'>
          <div className="md:col-span-2"></div> {/* Konumlandırmak için içi boş grid divi */}
          <div className='md:col-span-3 projects-1-content hidden md:flex md:flex-col'>
            <p className='projects-1-title'>{t('Otomasyon')}</p>
            <p className='projects-1-text'>{t('asinbc')}</p>
            <button type="button" onClick={openModal} className="projects-1-link">
              {t('Projeyi Görüntüle')}
            </button>
          </div>
          <div className='md:col-span-5 projects-1-img'>
            <img src={require('../../assets/img/asinbc.png')} alt="" className='w-full h-full' />
          </div>
          {/* mobil için olan kısım */}
          <div className='md:col-span-3 projects-1-content md:hidden'>
            <p className='projects-1-title'>{t('Otomasyon')}</p>
            <p className='projects-1-text'>{t('asinbc')}</p>
            <button type="button" className="projects-1-link md:flex">
              <a href="https://www.asinbc.com/" target="_blank" rel="noopener noreferrer">{t('Projeyi Görüntüle')}</a>
            </button>
          </div>
          <div className="col-span-2"></div> {/* Konumlandırmak için içi boş grid divi */}
        </div>
        <Modal state={state} closeModal={closeModal} src={require('../../assets/img/asinbc2.png')} link='https://www.asinbc.com/' />

        {/* PROJE 2 (inovcard.com) */}
        <div className='projects-2 md:grid md:grid-cols-12'>
          <div className="md:col-span-2"></div> {/* Konumlandırmak için içi boş grid divi */}
          <div className='md:col-span-5 projects-2-img'>
            <img src={require('../../assets/img/inovcard.png')} alt="" className='w-full h-full' />
          </div>
          <div className='md:col-span-3 projects-2-content hidden md:flex md:flex-col'>
            <p className='projects-2-title'>{t('Özelleştirilmiş')}</p>
            <p className='projects-2-text'>{t('inovcard')}</p>
            <button
              type="button"
              onClick={openModal2}
              className="projects-1-link"
            >
              {t('Projeyi Görüntüle')}
            </button>
          </div>
          {/* mobil için olan kısım */}
          <div className='md:col-span-3 projects-2-content md:hidden'>
            <p className='projects-2-title'>{t('Özelleştirilmiş')}</p>
            <p className='projects-2-text'>{t('inovcard')}</p>
            <button type="button" className="projects-1-link">
              <a href="https://inovcard.com/" target="_blank" rel="noopener noreferrer">{t('Projeyi Görüntüle')}</a>
            </button>
          </div>
          <div className="md:col-span-2"></div> {/* Konumlandırmak için içi boş grid divi */}
        </div>
        <Modal state={state2} closeModal={closeModal} src={require('../../assets/img/inovcard.png')} link='https://inovcard.com/' />

        {/* PROJE 3 (immobilien.com) */}
        <div className='projects-1 md:grid md:grid-cols-12'>
          <div className="md:col-span-2"></div> {/* Konumlandırmak için içi boş grid divi */}
          <div className='md:col-span-3 projects-1-content hidden md:flex md:flex-col'>
            <p className='projects-1-title'>{t('Gayrimenkul')}</p>
            <p className='projects-1-text'>{t('immobilien')}</p>
            <button type="button" onClick={openModal3} className="projects-1-link">
              {t('Projeyi Görüntüle')}
            </button>
          </div>
          <div className='md:col-span-5 projects-1-img'>
            <img src={require('../../assets/img/immobilien.png')} alt="" className='w-full h-full' />
          </div>
          {/* mobil için olan kısım */}
          <div className='md:col-span-3 projects-1-content md:hidden'>
            <p className='projects-1-title'>{t('Gayrimenkul')}</p>
            <p className='projects-1-text'>{t('immobilien')}</p>
            <button type="button" className="projects-1-link">
              <a href="https://toprey-immobilien.com/" target="_blank" rel="noopener noreferrer">{t('Projeyi Görüntüle')}</a>
            </button>
          </div>
          <div className="md:col-span-2"></div> {/* Konumlandırmak için içi boş grid divi */}
        </div>
        <Modal state={state3} closeModal={closeModal} src={require('../../assets/img/immobilien.png')} link='https://toprey-immobilien.com/' />

        {/* PROJE 4 (esg-am.com) */}
        <div className='projects-2 md:grid md:grid-cols-12'>
          <div className="md:col-span-2"></div> {/* Konumlandırmak için içi boş grid divi */}
          <div className='md:col-span-5 projects-2-img'>
            <img src={require('../../assets/img/esg-am.png')} alt="" className='w-full h-full' />
          </div>
          <div className='md:col-span-3 projects-2-content hidden md:flex md:flex-col'>
            <p className='projects-2-title'>{t('Finans')}</p>
            <p className='projects-2-text'>{t('esg-am')}</p>
            <button type="button" onClick={openModal4} className="projects-1-link">
              {t('Projeyi Görüntüle')}
            </button>
          </div>
          {/* mobil için olan kısım */}
          <div className='md:col-span-3 projects-2-content md:hidden'>
            <p className='projects-2-title'>{t('Finans')}</p>
            <p className='projects-2-text'>{t('esg-am')}</p>
            <button type="button" className="projects-1-link">
              <a href="#" target="_blank" rel="noopener noreferrer">{t('Projeyi Görüntüle')}</a>
            </button>
          </div>
          <div className="md:col-span-2"></div> {/* Konumlandırmak için içi boş grid divi */}
        </div>
        <Modal state={state4} closeModal={closeModal} src={require('../../assets/img/esg-am.png')} link='' />

        <div className='hidden md:flex'>
          <p className='border-b-2 w-[132px] text-center mx-auto mb-[194px] mt-[194px]'></p>
        </div>
        {/* Projelerimizden sonraki alan proje planlama ve bize ulaşın sayfasına yönlendirme */}
        <div className='md:grid md:grid-cols-12 md:mt-[0px] mt-[100px] flex flex-col'>
          <div className='md:col-span-6 bg-[#2C2C2C] plan-project'>
            <p className='plan-project-title'>{t('hayal')}</p>
            <p className='plan-project-text'>{t('projenizi planlayın')}</p>
          </div>
          <div className='md:col-span-6 bg-[#1A1A1A] plan-project'>
            <Link to="/contact">
              <p className='plan-project-title'>{t('takım')}</p>
              <p className='plan-project-text'>{t('bizimle çalışın')}</p>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Home