/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react'
import asinbc from '../../assets/img/asinbc.png'
import asinbcApp from '../../assets/img/asinbc-app-ss.png'
import esgam from '../../assets/img/esg-am.png'
import inovcard from '../../assets/img/inovcard.png'
import inovcardApp from '../../assets/img/inovcard-app.png'
import immobilien from '../../assets/img/immobilien.png'
import ss6 from '../../assets/img/ss6.png'
import ss3 from '../../assets/img/ss3.png'
import ostello from '../../assets/img/ostello.png'
import './Projects.css'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai'
import { t } from 'i18next'

// Projelerimiz sayfası başlangıç
function Projects() {
  let [index, setIndex] = useState(0)
  // Resimlerin olduğu array
  const cards = [
    { id: "1", image: asinbc },
    { id: "2", image: asinbcApp },
    { id: "3", image: esgam },
    { id: "4", image: inovcard },
    { id: "5", image: inovcardApp },
    { id: "6", image: immobilien },
    { id: "7", image: ss3 },
    { id: "8", image: ss6 },
    // { id: "9", image: ostello }
  ]

  const mod = (n, m) => {
    let result = n % m;

    return result >= 0 ? result : result + m;
  }

  // Sağ ok tuşunun fonksiyonu: indexi bir artırarak sonraki resime geçmesini sağlıyor.
  const arrowRight = () => {
    return setIndex((index + 1) % cards.length);
  }

  // Sol ok tuşunun fonksiyonu: indexi bir azaltarak sonraki resime geçmesini sağlıyor.
  // Eğer index (0) ise (-1) olup hata vermemesi için indexi (cards.length - 1)'e eşitliyor.
  const arrowLeft = () => {
    return (index === 0) ? setIndex(cards.length - 1) : setIndex((index - 1) % cards.length);
  }

  // Projelerimiz sayfasının divleri
  return (
    <div className='projects-base'>
      <Navbar />
      <div className='hidden md:block'>
        <div className='project-main'>
          <p className='project-text-1'>{t('Projelerimiz2')}</p>
        </div>
        {/* buttona tıklandığında arrowLeft fonksiyonunu çalıştırır. */}
        <div className='grid grid-cols-12 carousel-container'>
          <div className="arrow-prev col-span-2 text-right z-10">
            <button type='button' onClick={arrowLeft}>
              <AiOutlineLeft size={'2.5em'} />
            </button>
          </div>

          <div className='carousel col-span-8 z-0'>
            {cards.map((item, i) => {
              const indexLeft = mod(index - 1, cards.length);
              const indexRight = mod(index + 1, cards.length);

              let className = '';

              if (i === index) {
                className = 'card card--active'
              } else if (i === indexRight) {
                className = 'card card--right'
              } else if (i === indexLeft) {
                className = 'card card--left'
              } else {
                className = 'card'
              }

              return (
                <img key={item.id} src={item.image} alt='deneme' className={className} />
              )
            })}
          </div>

          {/* buttona tıklandığında arrowRight fonksiyonunu çalıştırır. */}
          <div className="arrow-next col-span-2 z-10">
            <button type='button' onClick={arrowRight}>
              <AiOutlineRight size={'2.5em'} />
            </button>
          </div>
        </div>
        {/* Resmilerin konumları position: absolute olduğu için sayfada herhangi bir yükseklik gözükmüyor. Bu sebepten dolayı sayfaya yükseklik vermemiz gerekiyor. */}
        <div className='h-[750px]'></div>
      </div>
      {/* mobil için olan kısım */}
      <div className='md:hidden'>
        <div className='projects mb-[200px] md:mb-0'>
          <h1 className='mobile-projects-title'>{t('Projelerimiz2')}</h1>
          {/* PROJE 1 (asinbc.com) */}
          <div className='projects-1'>
            <div className='projects-1-img'>
              <img src={require('../../assets/img/asinbc.png')} alt="" className='w-full h-full' />
            </div>
            <div className='projects-1-content'>
              <p className='projects-1-title'>{t('Otomasyon')}</p>
              <p className='projects-1-text'>{t('asinbc')}</p>
              <button type="button" className="projects-1-link md:flex">
                <a href="https://www.asinbc.com/" target="_blank" rel="noopener noreferrer">{t('Projeyi Görüntüle')}</a>
              </button>
            </div>
          </div>

          {/* PROJE 2 (inovcard.com) */}
          <div className='projects-2'>
            <div className='projects-2-img'>
              <img src={require('../../assets/img/inovcard.png')} alt="" className='w-full h-full' />
            </div>
            <div className='projects-2-content'>
              <p className='projects-2-title'>{t('Özelleştirilmiş')}</p>
              <p className='projects-2-text'>{t('inovcard')}</p>
              <button type="button" className="projects-1-link">
                <a href="https://inovcard.com/" target="_blank" rel="noopener noreferrer">{t('Projeyi Görüntüle')}</a>
              </button>
            </div>
          </div>

          {/* PROJE 3 (immobilien.com) */}
          <div className='projects-1'>
            <div className='md:col-span-5 projects-1-img'>
              <img src={require('../../assets/img/immobilien.png')} alt="" className='w-full h-full' />
            </div>
            <div className='projects-1-content'>
              <p className='projects-1-title'>{t('Gayrimenkul')}</p>
              <p className='projects-1-text'>{t('immobilien')}</p>
              <button type="button" className="projects-1-link">
                <a href="https://toprey-immobilien.com/" target="_blank" rel="noopener noreferrer">{t('Projeyi Görüntüle')}</a>
              </button>
            </div>
          </div>

          {/* PROJE 4 (esg-am.com) */}
          <div className='projects-2'>
            <div className='projects-2-img'>
              <img src={require('../../assets/img/esg-am.png')} alt="" className='w-full h-full' />
            </div>
            <div className='projects-2-content'>
              <p className='projects-2-title'>{t('Finans')}</p>
              <p className='projects-2-text'>{t('esg-am')}</p>
              <button type="button" className="projects-1-link">
                <a href="#" target="_blank" rel="noopener noreferrer">{t('Projeyi Görüntüle')}</a>
              </button>
            </div>
          </div>

          {/* PROJE 3 (immobilien.com) */}
          <div className='projects-1'>
            <div className='md:col-span-5 projects-1-img'>
              <img src={require('../../assets/img/ss6.png')} alt="" className='w-full h-full' />
            </div>
            <div className='projects-1-content'>
              <p className='projects-1-title'>{t('demirtas')}</p>
              <p className='projects-1-text'>{t('telefonDonanım')}</p>
              <button type="button" className="projects-1-link">
                <a href="https://toprey-immobilien.com/" target="_blank" rel="noopener noreferrer">{t('Projeyi Görüntüle')}</a>
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Projects