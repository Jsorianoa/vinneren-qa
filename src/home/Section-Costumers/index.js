import { useIntl } from 'react-intl'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Carrousel from '../../components/Carrousel-Costumers'
import Slider from 'react-slick'

import costu1 from '../../img/Chedraui.png'
import costu2 from '../../img/logoHeb.png'
import costu3 from '../../img/Cemaco.png'
import costu4 from '../../img/Speedo-Logo.png'
import costu5 from '../../img/elektra.png' /* Tork 1.png */
import costu6 from '../../img/Atlas.png'
import costu7 from '../../img/Riskified.png'
import costu9 from '../../img/coppel-pay.png' /* Alebripets.png */
import costu10 from '../../img/Tork 1.png'
import costu12 from '../../img/niubiz.png' /* Maraga_Logo.png */
import costu13 from '../../img/Flywire.png' /* Jobst_logo.png */
import costu14 from '../../img/Digital River.png' /* GoJiraf.png */
import costu15 from '../../img/PayPal.png'
import costu16 from '../../img/retrypay_logo.png'
import costu18 from '../../img/Jobst_logo.png'
import costu19 from '../../img/champion-logo 1.png'
import costu22 from '../../img/Walmart.png'
import costu23 from '../../img/La Comer.png'
import costu24 from '../../img/Xiaomi.png'
import costu25 from '../../img/Farmavita.png'
import costu26 from '../../img/Saba.png'
import costu27 from '../../img/Old Navy.png'
import costu28 from '../../img/Madisa.png'
import costu29 from '../../img/Nadro.png'
import costu30 from '../../img/BAC.png'
import costu31 from '../../img/Elektra-gt.png'
import costu32 from '../../img/Vesta.png'
import costu33 from '../../img/City Market.png'
import costu34 from '../../img/Ekt Honduras.png'
import costu35 from '../../img/Sunglasshut.png'
import costu36 from '../../img/la marina.png'
import costu37 from '../../img/El Bodegón.png'
import costu38 from '../../img/KueskiPay.png'
import costu39 from '../../img/Office Max.png'
import costu40 from '../../img/VS.png'
import costu41 from '../../img/Signifyd.png'
import costu42 from '../../img/Fresko.png'
import costu43 from '../../img/Party City.png'
import costu44 from '../../img/Ta-Da.png'
import costu45 from '../../img/B&O.png'
import costu46 from '../../img/RadioShack.png'
import costu47 from '../../img/essity.png'
import costu48 from '../../img/Sumesa.png'
import costu49 from '../../img/Zucarmex.png'
import costu50 from '../../img/Yuno.png'
import costu51 from '../../img/Mi tienda del ahorro.png'
import costu52 from '../../img/Gandhi.png'
import costu53 from '../../img/Zenkipay.png'

const Technologies = () => {
  const intl = useIntl()
  AOS.init()
  const images = [
    'Casos-de-exito_Nadro.png',
    'Casos-de-exito_Modelorama.png',
    'Casos-de-exito_Ekt.png',
    'Casos-de-exito_Xiaomi.png',
    'Casos-de-exito_LaMarina.png',
    'Casos-de-exito_Essity.png',
  ]
  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 4000,
    autoplaySpeed: 3000,
    cssEase: 'linear',
    slidesToShow: 6,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  }
  const settings2 = {
    rtl: true,
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 4000,
    autoplaySpeed: 3000,
    cssEase: 'linear',
    slidesToShow: 6,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  }
  return (
    <div className="sec-costumers">
      <div id="costumers" style={{height:'100px'}}></div>
      <div className="sec-title">
        <h2 data-aos="slide-up" data-aos-duration="1000" data-aos-once="true">
          {intl.formatMessage({
            id: 'app.pages.home.sectionCostumers.label.title',
          })}
        </h2>
        <h3>
          {intl.formatMessage({
            id: 'app.pages.home.sectionCostumers.label.subtitle',
          })}
        </h3>
      </div>
      <div className="sec-content costumers">
        <Carrousel images={images} autoPlay={true} showButtons={true} />
      </div>
      <div className="sec-more-costumers">
        <h3>
          {intl.formatMessage({
            id: 'app.pages.home.sectionCostumers.label.subtitle2',
          })}
        </h3>
        {window.screen.width > 1080 ? (
          <>
            <div className="costumers1">
              <img src={costu2} alt="costu2" style={{ maxWidth: '173px' }} />
              <img src={costu1} alt="costu1" style={{ maxWidth: '90px' }} />
              <img src={costu22} alt="costu3" style={{ maxWidth: '185px' }} />
              <img src={costu23} alt="costu4" style={{ maxWidth: '158px' }} />
              <img src={costu24} alt="costu5" style={{ maxWidth: '158px' }} />
              <img src={costu5} alt="costu6" style={{ maxWidth: '158px' }} />
              <img src={costu7} alt="costu7" style={{ maxWidth: '160px' }} />
            </div>

            <div className="costumers2">
              <img src={costu9} alt="costu8" style={{ maxWidth: '162px' }} />
              <img src={costu34} alt="costu9" style={{ maxWidth: '158px' }} />
              <img src={costu10} alt="costu10" style={{ maxWidth: '146px' }} />
              <img src={costu25} alt="costu11" style={{ maxWidth: '183px' }} />
              <img src={costu26} alt="costu12" style={{ maxWidth: '100px' }} />
              <img
                src={costu27}
                alt="costu13"
                style={{ maxWidth: '160px', height: '50px' }}
              />
              <img src={costu14} alt="costu14" style={{ maxWidth: '150px' }} />
            </div>

            <div className="costumers2">
              <img src={costu28} alt="costu8" style={{ maxWidth: '162px' }} />
              <img src={costu3} alt="costu9" style={{ maxWidth: '158px' }} />
              <img src={costu29} alt="costu10" style={{ maxWidth: '146px' }} />
              <img src={costu30} alt="costu11" style={{ maxWidth: '183px' }} />
              <img src={costu31} alt="costu12" style={{ maxWidth: '155px' }} />
              <img src={costu19} alt="costu13" style={{ maxWidth: '160px' }} />
              <img src={costu32} alt="costu14" style={{ maxWidth: '150px' }} />
            </div>

            <div className="costumers2">
              <img src={costu33} alt="costu8" style={{ maxWidth: '162px' }} />
              <img src={costu15} alt="costu9" style={{ maxWidth: '158px' }} />
              <img src={costu16} alt="costu10" style={{ maxWidth: '146px' }} />
              <img src={costu18} alt="costu11" style={{ maxWidth: '183px' }} />
              <img src={costu35} alt="costu12" style={{ maxWidth: '155px' }} />
              <img src={costu36} alt="costu13" style={{ maxWidth: '160px' }} />
              <img src={costu37} alt="costu14" style={{ maxWidth: '150px' }} />
            </div>

            <div className="costumers2">
              <img src={costu13} alt="costu8" style={{ maxWidth: '162px' }} />
              <img src={costu39} alt="costu9" style={{ maxWidth: '158px' }} />
              <img src={costu40} alt="costu10" style={{ maxWidth: '146px' }} />
              <img src={costu41} alt="costu11" style={{ maxWidth: '183px' }} />
              <img src={costu6} alt="costu12" style={{ maxWidth: '155px' }} />
              <img src={costu42} alt="costu13" style={{ maxWidth: '160px' }} />
              <img src={costu38} alt="costu14" style={{ maxWidth: '150px' }} />
            </div>

            <div className="costumers2">
              <img src={costu43} alt="costu8" style={{ maxWidth: '162px' }} />
              <img src={costu15} alt="costu9" style={{ maxWidth: '158px' }} />
              <img src={costu4} alt="costu10" style={{ maxWidth: '146px' }} />
              <img src={costu44} alt="costu11" style={{ maxWidth: '183px' }} />
              <img src={costu45} alt="costu12" style={{ maxWidth: '155px' }} />
              <img src={costu46} alt="costu13" style={{ maxWidth: '160px' }} />
              <img src={costu47} alt="costu14" style={{ maxWidth: '150px' }} />
            </div>

            <div className="costumers2">
              <img src={costu48} alt="costu8" style={{ maxWidth: '162px' }} />
              <img src={costu49} alt="costu9" style={{ maxWidth: '158px' }} />
              <img src={costu12} alt="costu10" style={{ maxWidth: '146px' }} />
              <img src={costu50} alt="costu11" style={{ maxWidth: '163px' }} />
              <img src={costu51} alt="costu12" style={{ maxWidth: '155px' }} />
              <img src={costu52} alt="costu13" style={{ maxWidth: '160px' }} />
              <img src={costu53} alt="costu14" style={{ maxWidth: '150px' }} />
            </div>
          </>
        ) : (
          <>
            <div className="container" style={{ width: '93%' }}>
              <br />
              <Slider {...settings}>
                <div className="carousel-slide">
                  <img
                    src={costu2}
                    alt="costu2"
                    style={{ maxWidth: '135px' }}
                  />
                </div>
                <div className="carousel-slide">
                  <img src={costu1} alt="costu1" style={{ maxWidth: '75px' }} />
                </div>
                <div className="carousel-slide">
                  <img
                    src={costu22}
                    alt="costu3"
                    style={{ maxWidth: '135px' }}
                  />
                </div>
                <div className="carousel-slide">
                  <img
                    src={costu23}
                    alt="costu4"
                    style={{ maxWidth: '135px' }}
                  />
                </div>
                <div className="carousel-slide">
                  <img
                    src={costu24}
                    alt="costu5"
                    style={{ maxWidth: '135px' }}
                  />
                </div>
                <div className="carousel-slide">
                  <img
                    src={costu5}
                    alt="costu6"
                    style={{ maxWidth: '135px' }}
                  />
                </div>
                <div className="carousel-slide">
                  <img
                    src={costu7}
                    alt="costu7"
                    style={{ maxWidth: '135px' }}
                  />
                </div>
                <div className="carousel-slide">
                  <img
                    src={costu9}
                    alt="costu8"
                    style={{ maxWidth: '135px' }}
                  />
                </div>
                <div className="carousel-slide">
                  <img
                    src={costu34}
                    alt="costu9"
                    style={{ maxWidth: '135px' }}
                  />
                </div>
                <div className="carousel-slide">
                  <img
                    src={costu10}
                    alt="costu10"
                    style={{ maxWidth: '100px' }}
                  />
                </div>
                <div className="carousel-slide">
                  <img
                    src={costu25}
                    alt="costu11"
                    style={{ maxWidth: '135px' }}
                  />
                </div>
                <div className="carousel-slide">
                  <img
                    src={costu26}
                    alt="costu12"
                    style={{ maxWidth: '90px' }}
                  />
                </div>
                <div className="carousel-slide">
                  <img
                    src={costu27}
                    alt="costu13"
                    style={{ maxWidth: '135px' }}
                  />
                </div>
                <div className="carousel-slide">
                  <img
                    src={costu14}
                    alt="costu14"
                    style={{ maxWidth: '135px' }}
                  />
                </div>
                <div className="carousel-slide">
                  <img
                    src={costu28}
                    alt="costu8"
                    style={{ maxWidth: '135px' }}
                  />
                </div>
                <div className="carousel-slide">
                  <img
                    src={costu3}
                    alt="costu9"
                    style={{ maxWidth: '135px' }}
                  />
                </div>
                <div className="carousel-slide">
                  <img
                    src={costu29}
                    alt="costu10"
                    style={{ maxWidth: '135px' }}
                  />
                </div>
                <div className="carousel-slide">
                  <img
                    src={costu30}
                    alt="costu11"
                    style={{ maxWidth: '135px' }}
                  />
                </div>
                <div className="carousel-slide">
                  <img
                    src={costu31}
                    alt="costu12"
                    style={{ maxWidth: '135px' }}
                  />
                </div>
                <div className="carousel-slide">
                  <img
                    src={costu19}
                    alt="costu13"
                    style={{ maxWidth: '135px' }}
                  />
                </div>
                <div className="carousel-slide">
                  <img
                    src={costu32}
                    alt="costu14"
                    style={{ maxWidth: '135px' }}
                  />
                </div>
                <div className="carousel-slide">
                  <img
                    src={costu33}
                    alt="costu8"
                    style={{ maxWidth: '135px' }}
                  />
                </div>
                <div className="carousel-slide">
                  <img
                    src={costu15}
                    alt="costu9"
                    style={{ maxWidth: '135px' }}
                  />
                </div>
                <div className="carousel-slide">
                  <img
                    src={costu16}
                    alt="costu10"
                    style={{ maxWidth: '100px' }}
                  />
                </div>
              </Slider>
              <br />
              <Slider {...settings2}>
                <div className="carousel-slide">
                  <img
                    src={costu18}
                    alt="costu11"
                    style={{ maxWidth: '135px' }}
                  />
                </div>
                <div className="carousel-slide">
                  <img
                    src={costu35}
                    alt="costu12"
                    style={{ maxWidth: '135px' }}
                  />
                </div>
                <div className="carousel-slide">
                  <img
                    src={costu36}
                    alt="costu13"
                    style={{ maxWidth: '135px' }}
                  />
                </div>
                <div className="carousel-slide">
                  <img
                    src={costu37}
                    alt="costu14"
                    style={{ maxWidth: '135px' }}
                  />
                </div>
                <div className="carousel-slide">
                  <img
                    src={costu13}
                    alt="costu8"
                    style={{ maxWidth: '135px' }}
                  />
                </div>
                <div className="carousel-slide">
                  <img
                    src={costu39}
                    alt="costu9"
                    style={{ maxWidth: '135px' }}
                  />
                </div>
                <div className="carousel-slide">
                  <img
                    src={costu40}
                    alt="costu10"
                    style={{ maxWidth: '135px' }}
                  />
                </div>
                <div className="carousel-slide">
                  <img
                    src={costu41}
                    alt="costu11"
                    style={{ maxWidth: '135px' }}
                  />
                </div>
                <div className="carousel-slide">
                  <img
                    src={costu6}
                    alt="costu12"
                    style={{ maxWidth: '135px' }}
                  />
                </div>
                <div className="carousel-slide">
                  <img
                    src={costu42}
                    alt="costu13"
                    style={{ maxWidth: '135px' }}
                  />
                </div>
                <div className="carousel-slide">
                  <img
                    src={costu38}
                    alt="costu14"
                    style={{ maxWidth: '135px' }}
                  />
                </div>
                <div className="carousel-slide">
                  <img
                    src={costu43}
                    alt="costu8"
                    style={{ maxWidth: '135px' }}
                  />
                </div>
                <div className="carousel-slide">
                  <img
                    src={costu15}
                    alt="costu9"
                    style={{ maxWidth: '135px' }}
                  />
                </div>
                <div className="carousel-slide">
                  <img
                    src={costu4}
                    alt="costu10"
                    style={{ maxWidth: '135px' }}
                  />
                </div>
                <div className="carousel-slide">
                  <img
                    src={costu44}
                    alt="costu11"
                    style={{ maxWidth: '135px' }}
                  />
                </div>
                <div className="carousel-slide">
                  <img
                    src={costu45}
                    alt="costu12"
                    style={{ maxWidth: '135px' }}
                  />
                </div>
                <div className="carousel-slide">
                  <img
                    src={costu46}
                    alt="costu13"
                    style={{ maxWidth: '135px' }}
                  />
                </div>
                <div className="carousel-slide">
                  <img
                    src={costu47}
                    alt="costu14"
                    style={{ maxWidth: '135px' }}
                  />
                </div>
                <div className="carousel-slide">
                  <img
                    src={costu48}
                    alt="costu8"
                    style={{ maxWidth: '135px' }}
                  />
                </div>
                <div className="carousel-slide">
                  <img
                    src={costu49}
                    alt="costu9"
                    style={{ maxWidth: '135px' }}
                  />
                </div>
                <div className="carousel-slide">
                  <img
                    src={costu12}
                    alt="costu10"
                    style={{ maxWidth: '135px' }}
                  />
                </div>
                <div className="carousel-slide">
                  <img
                    src={costu50}
                    alt="costu11"
                    style={{ maxWidth: '135px' }}
                  />
                </div>
                <div className="carousel-slide">
                  <img
                    src={costu51}
                    alt="costu12"
                    style={{ maxWidth: '135px' }}
                  />
                </div>
                <div className="carousel-slide">
                  <img
                    src={costu52}
                    alt="costu13"
                    style={{ maxWidth: '135px' }}
                  />
                </div>
                <div className="carousel-slide">
                  <img
                    src={costu53}
                    alt="costu14"
                    style={{ maxWidth: '135px' }}
                  />
                </div>
              </Slider>
            </div>
          </>
        )}
      </div>
    </div>
  )
}

export default Technologies
