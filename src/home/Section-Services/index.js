import { useIntl } from 'react-intl'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { Card, CardImg, CardBody, CardTitle, CardText } from 'reactstrap'

import card1 from '../../img/ecommerce.png'
import card2 from '../../img/Soporte.png'
import card3 from '../../img/Consultoria y Planeacion.png'
import card4 from '../../img/Payment Providers.png'
import card5 from '../../img/UXUI.png'
import card6 from '../../img/Staff.png'
import card7 from '../../img/hunting.png'
/* import scrollreveal from "scrollreveal"; */

const Services = () => {
  AOS.init({ once: true })
  const intl = useIntl()

  return (
      <div className="sec-services">
        <div id="services" style={{height: '100px'}}></div>
        <div className="sec-title" data-aos="slide-up" data-aos-duration="1000">
          <h2>
            {intl.formatMessage({
              id: 'app.pages.home.seccionServices.label.title',
            })}
          </h2>
        </div>

        <div className="sec-content">
          <div className="card-grid">
            <Card className="scroll-card">
              <CardImg alt="Card image cap" src={card3} top width="100%" />
              <CardBody>
                <CardTitle
                  style={{
                    maxWidth: '200px',
                    fontSize: '24px',
                    fontWeight: '700',
                  }}
                >
                  {intl.formatMessage({
                    id: 'app.pages.home.seccionServices.label.cart-title3',
                  })}
                </CardTitle>

                <CardText style={{ maxWidth: '200px' }}>
                  {intl.formatMessage({
                    id: 'app.pages.home.seccionServices.label.cart-text3',
                  })}
                </CardText>
              </CardBody>
            </Card>

            <Card className="scroll-card">
              <CardImg alt="Card image cap" src={card1} top width="76px" />
              <CardBody>
                <CardTitle
                  style={{
                    maxWidth: '200px',
                    fontSize: '24px',
                    fontWeight: '700',
                  }}
                >
                  {intl.formatMessage({
                    id: 'app.pages.home.seccionServices.label.cart-title1',
                  })}
                </CardTitle>

                <CardText style={{ maxWidth: '200px' }}>
                  {intl.formatMessage({
                    id: 'app.pages.home.seccionServices.label.cart-text1',
                  })}
                </CardText>
              </CardBody>
            </Card>

            <Card className="scroll-card">
              <CardImg alt="Card image cap" src={card2} top width="100%" />
              <CardBody>
                <CardTitle
                  style={{
                    maxWidth: '200px',
                    fontSize: '24px',
                    fontWeight: '700',
                  }}
                >
                  {intl.formatMessage({
                    id: 'app.pages.home.seccionServices.label.cart-title2',
                  })}
                </CardTitle>

                <CardText style={{ maxWidth: '200px' }}>
                  {intl.formatMessage({
                    id: 'app.pages.home.seccionServices.label.cart-text2',
                  })}
                </CardText>
              </CardBody>
            </Card>

            <Card className="scroll-card">
              <CardImg alt="Card image cap" src={card4} top width="100%" />
              <CardBody>
                <CardTitle
                  style={{
                    maxWidth: '200px',
                    fontSize: '24px',
                    fontWeight: '700',
                  }}
                >
                  {intl.formatMessage({
                    id: 'app.pages.home.seccionServices.label.cart-title4',
                  })}
                </CardTitle>

                <CardText style={{ maxWidth: '200px' }}>
                  {intl.formatMessage({
                    id: 'app.pages.home.seccionServices.label.cart-text4',
                  })}
                </CardText>
              </CardBody>
            </Card>

            <Card className="scroll-card">
              <CardImg alt="Card image cap" src={card5} top width="100%" />
              <CardBody>
                <CardTitle
                  style={{
                    maxWidth: '130px',
                    fontSize: '24px',
                    fontWeight: '700',
                  }}
                >
                  {intl.formatMessage({
                    id: 'app.pages.home.seccionServices.label.cart-title5',
                  })}
                </CardTitle>

                <CardText style={{ maxWidth: '200px' }}>
                  {intl.formatMessage({
                    id: 'app.pages.home.seccionServices.label.cart-text5',
                  })}
                </CardText>
              </CardBody>
            </Card>

            <Card className="scroll-card">
              <CardImg alt="Card image cap" src={card6} top width="100%" />
              <CardBody>
                <CardTitle
                  style={{
                    maxWidth: '160px',
                    fontSize: '24px',
                    fontWeight: '700',
                  }}
                >
                  {intl.formatMessage({
                    id: 'app.pages.home.seccionServices.label.cart-title6',
                  })}
                </CardTitle>

                <CardText style={{ maxWidth: '200px' }}>
                  {intl.formatMessage({
                    id: 'app.pages.home.seccionServices.label.cart-text6',
                  })}
                </CardText>
              </CardBody>
            </Card>

            <Card className="scroll-card">
              <CardImg alt="Card image cap" src={card7} top width="100%" />
              <CardBody>
                <CardTitle
                  style={{
                    maxWidth: '150px',
                    fontSize: '24px',
                    fontWeight: '700',
                  }}
                >
                  {intl.formatMessage({
                    id: 'app.pages.home.seccionServices.label.cart-title7',
                  })}
                </CardTitle>

                <CardText style={{ maxWidth: '200px' }}>
                  {intl.formatMessage({
                    id: 'app.pages.home.seccionServices.label.cart-text7',
                  })}
                </CardText>
              </CardBody>
            </Card>
            {window.screen.width > 768 && (
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <div
                  style={{
                    maxWidth: '230px',
                    fontSize: '20px',
                    fontWeight: '600',
                  }}
                >
                  {intl.formatMessage({
                    id: 'app.pages.home.seccionServices.label.cart-title8-1',
                  })}{' '}
                  <span style={{ color: '#005DFF' }}>
                    {intl.formatMessage({
                      id: 'app.pages.home.seccionServices.label.cart-title8-2',
                    })}
                  </span>
                  {intl.formatMessage({
                    id: 'app.pages.home.seccionServices.label.cart-title8-3',
                  })}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    
  )
}

export default Services
