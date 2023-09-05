import Slider from 'react-slick'

import pay1 from '../../../img/Contentful.png'
import pay2 from '../../../img/Stripe-01.png'
import pay3 from '../../../img/Commercetools.png'
import pay4 from '../../../img/VTEX.png'
import pay5 from '../../../img/Frontastic.png'
import pay6 from '../../../img/BigCommerce-logo.png'
import pay7 from '../../../img/Styrk_Original.png'
import pay8 from '../../../img/GCP.png'
import pay9 from '../../../img/Netlify_logo.png'
import pay10 from '../../../img/emarsys.png'
import pay11 from '../../../img/Janis-logo.png'
import pay12 from '../../../img/AWSAMplify.png'
import pay13 from '../../../img/SAP.png'
import pay14 from '../../../img/SALESmanago.png'
import pay15 from '../../../img/Signifyd_logo 1.png'
import pay16 from '../../../img/vercel.png'
import pay17 from '../../../img/Algolia.png'
import pay18 from '../../../img/Amazon_Web_Services_Logo 1.png'
import pay19 from '../../../img/PayPal.png'
import pay20 from '../../../img/MailUp.png'

const SliderPartner = () => {
  const settings = {
    infinite: true,
    autoplay: true,
    speed: 4000,
    draggable: true,
    autoplaySpeed: 3000,
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
    <div className="container" style={{ width: '93%' }}>
      <Slider {...settings}>
        <div className="carousel-slide">
          <img src={pay2} alt="pay2" className="img-partner" />
        </div>

        <div className="carousel-slide">
          <img src={pay1} alt="pay1" className="img-partner" />
        </div>

        <div className="carousel-slide">
          <img src={pay3} alt="pay3" className="img-partner" />
        </div>

        <div className="carousel-slide">
          <img src={pay4} alt="pay4" className="img-partner" />
        </div>

        <div className="carousel-slide">
          <img src={pay5} alt="pay5" className="img-partner" />
        </div>

        <div className="carousel-slide">
          <img src={pay6} alt="pay6" className="img-partner" />
        </div>

        <div className="carousel-slide">
          <img src={pay7} alt="pay7" className="img-partner" />
        </div>

        <div className="carousel-slide">
          <img src={pay8} alt="pay8" className="img-partner" />
        </div>

        <div className="carousel-slide">
          <img src={pay9} alt="pay9" className="img-partner" />
        </div>

        <div className="carousel-slide">
          <img src={pay10} alt="pay10" className="img-partner" />
        </div>

        <div className="carousel-slide">
          <img src={pay11} alt="pay11" className="img-partner" />
        </div>

        <div className="carousel-slide">
          <img src={pay12} alt="pay12" className="img-partner" />
        </div>

        <div className="carousel-slide">
          <img src={pay13} alt="pay13" className="img-partner" />
        </div>

        <div className="carousel-slide">
          <img src={pay14} alt="pay14" className="img-partner" />
        </div>

        <div className="carousel-slide">
          <img src={pay15} alt="pay15" className="img-partner" />
        </div>

        <div className="carousel-slide">
          <img src={pay16} alt="pay16" className="img-partner" />
        </div>

        <div className="carousel-slide">
          <img src={pay17} alt="pay17" className="img-partner" />
        </div>

        <div className="carousel-slide">
          <img src={pay18} alt="pay18" className="img-partner" />
        </div>

        <div className="carousel-slide">
          <img src={pay19} alt="pay19" className="img-partner" />
        </div>

        <div className="carousel-slide">
          <img src={pay20} alt="pay20" className="img-partner" />
        </div>
      </Slider>
    </div>
  )
}
export default SliderPartner
