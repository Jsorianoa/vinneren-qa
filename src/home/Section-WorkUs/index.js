import { useState } from 'react'
import { useIntl } from 'react-intl'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { Card, CardImg, CardBody, CardTitle, CardText, Modal } from 'reactstrap'
import ModalWork from '../../components/Modals/Modal-Work-With-Us'
import { jobsObj } from '../../components/Modals/Modal-Work-With-Us/jobs'

const Work = () => {
  const intl = useIntl()
  AOS.init()
  const [open, setOpen] = useState(false)
  const [work, setWork] = useState('')

  const handleClick = value => {
    setOpen(!open)
    setWork(value)
  }
  return (
    <div className="sec-workUs">
      <div id="work-with-us" style={{height:'100px'}}></div>
      <div
        className="sec-title"
        data-aos="slide-up"
        data-aos-duration="1000"
        data-aos-once="true"
      >
        <h2>
          {intl.formatMessage({
            id: 'app.pages.home.sectionWorkUs.label.title',
          })}
        </h2>
      </div>
      <div className="sec-content">
        {jobsObj.map(({ name, image }, i) => {
          return (
            <div key={i}>
              <Card
                onClick={() => handleClick(name)}
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-once="true"
              >
                <CardBody>
                  <CardTitle>{name}</CardTitle>
                  <CardImg
                    alt="card-pmo"
                    src={require(`../../img/${image}`)}
                    style={{ maxWidth: '166px' }}
                  />
                  <CardText>
                    {intl.formatMessage({
                      id: 'app.pages.home.sectionWorkUs.label.view-profile',
                    })}
                  </CardText>
                </CardBody>
              </Card>
            </div>
          )
        })}
      </div>
      <Modal centered fullscreen="xl" scrollable size="md" isOpen={open}>
        <ModalWork open={open} handleClick={handleClick} work={work} />
      </Modal>
    </div>
  )
}

export default Work
