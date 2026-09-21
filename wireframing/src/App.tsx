import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { library } from "@fortawesome/fontawesome-svg-core"
import { fas } from "@fortawesome/free-solid-svg-icons"
import { far } from "@fortawesome/free-regular-svg-icons"

library.add(fas, far, fab)

import "bootstrap/dist/css/bootstrap.min.css"
import {
  Container,
  Row,
  Col,
  Image,
  Tooltip,
  OverlayTrigger,
  Button,
  Card,
  Modal,
} from "react-bootstrap"
import { socialIcon, stackIconBack, stackIconFront } from "./assets/arrays"
import { fab, faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons"
import { iconSize } from "./assets/variables"
import { useState } from "react"

const renderTooltip = (value: string) => {
  return <Tooltip>{value}</Tooltip>
}

const App = () => {
  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  return (
    <Container className="mt-5">
      <Row>
        <Col className="d-flex justify-content-center">
          <Image roundedCircle src="https://placehold.co/150" />
        </Col>
      </Row>
      <Row>
        <Col className="text-center">
          <h1>Gianni Bussoletti</h1>
          <h2>Full-Stack Developer Jr.</h2>
          {socialIcon.map((social, i) => {
            return (
              <OverlayTrigger
                key={social.value + i}
                overlay={renderTooltip(social.value)}
                delay={{ show: 250, hide: 400 }}
                placement="bottom">
                <FontAwesomeIcon size={iconSize} icon={social.icon} />
              </OverlayTrigger>
            )
          })}
        </Col>
      </Row>

      <Row>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi minima rerum laboriosam
          quod rem? Ut quisquam iste eaque suscipit aliquid cumque! Aliquam earum inventore
          asperiores ut illum ipsum architecto quasi?
        </p>
      </Row>
      <Row xs={1} sm={2}>
        <Col>
          <h3>Front-End Stack</h3>
          {stackIconFront.map((stackIcon, i) => {
            return (
              <OverlayTrigger
                key={stackIcon.value + i}
                overlay={renderTooltip(stackIcon.value)}
                delay={{ show: 250, hide: 400 }}
                placement="bottom">
                <FontAwesomeIcon size={iconSize} icon={stackIcon.icon} />
              </OverlayTrigger>
            )
          })}
        </Col>
        <Col>
          <h3>Back-End Stack</h3>
          {stackIconBack.map((stackIcon, i) => {
            return (
              <OverlayTrigger
                key={stackIcon.value + i}
                overlay={renderTooltip(stackIcon.value)}
                delay={{ show: 250, hide: 400 }}
                placement="bottom">
                {stackIcon.value === "Spring Boot" ? (
                  <FontAwesomeIcon size={iconSize} icon={stackIcon.icon} flip="horizontal" />
                ) : (
                  <FontAwesomeIcon size={iconSize} icon={stackIcon.icon} />
                )}
              </OverlayTrigger>
            )
          })}
        </Col>
      </Row>
      <Row>
        <h3>Progetti</h3>
        {stackIconBack.map(() => {
          return (
            <Col xs={12} md={4} className="mb-4">
              <Card>
                <Card.Img variant="top" src="https://placehold.co/160x90" />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Row xs={3} md={1} lg={3}>
                    <Col className="mb-3 p-0 px-1">
                      <Button className="w-100" variant="primary">
                        Repo
                      </Button>
                    </Col>
                    <Col className="mb-3 p-0 px-1">
                      <Button className="w-100" variant="primary">
                        Demo
                      </Button>
                    </Col>
                    <Col className="mb-3 p-0 px-1">
                      <Button className="w-100" variant="primary" onClick={handleShow}>
                        info
                      </Button>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            </Col>
          )
        })}
      </Row>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  )
}

export default App
