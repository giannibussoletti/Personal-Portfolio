import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Row, Col, Button, Image } from "react-bootstrap"
import { socialIcon } from "../arrays"
import WindowButtons from "./WindowButtons"

const Footer = () => {
  return (
    <Row className="m-0 mb-4 mb-lg-0">
      <Col className="window-style p-0">
        <Row className="window-title m-0">
          <Col className="d-flex align-items-center justify-content-between">
            <h3>Footer</h3>
            <WindowButtons />
          </Col>
        </Row>
        <Row className="window-bg py-3 m-0">
          <Col xs={12} sm={6} className="mb-3 d-xl-flex align-items-center">
            <p className="m-0 me-xl-3 mb-2 mb-xl-0">Hai un progetto in mente?</p>
            <Button
              variant="light"
              className="btn-projects"
              onClick={() => window.open(socialIcon[2].url)}>
              <Image className="me-2" src="./contact.png" style={{ maxWidth: "35px" }} />
              <span>Contattami!</span>
            </Button>
          </Col>
          <Col xs={12} sm={6} className="mb-3 my-sm-0">
            {socialIcon.slice(0, 2).map((social) => {
              return (
                <div>
                  <FontAwesomeIcon icon={social.icon} />
                  <a href={social.url}>{social.value} </a>
                </div>
              )
            })}
          </Col>
          <Col xs={12}>
            <p className="mb-0">
              Gianni Bussoletti — Portfolio realizzato con <strong>React</strong>,
              <strong>TypeScript</strong> e <strong>Bootstrap</strong>.
            </p>
          </Col>
        </Row>
      </Col>
    </Row>
  )
}

export default Footer
