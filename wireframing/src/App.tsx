// FONTAWESOME
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { library } from "@fortawesome/fontawesome-svg-core"
import { fas } from "@fortawesome/free-solid-svg-icons"
import { far } from "@fortawesome/free-regular-svg-icons"
import { fab } from "@fortawesome/free-brands-svg-icons"
library.add(fas, far, fab)

import "./assets/css/style.scss"

import { Container, Row, Col, Image, Tooltip, OverlayTrigger, Button, Card } from "react-bootstrap"

import { socialIcon, stackIconBack, stackIconFront } from "./assets/arrays"
import { iconSize } from "./assets/variables"

const renderTooltip = (value: string) => {
  return <Tooltip>{value}</Tooltip>
}

const App = () => {
  return (
    <Container className="mt-5 px-3">
      <Row>
        <Col className="d-flex justify-content-center mb-4">
          <Image roundedCircle src="./proPic.png" style={{ maxWidth: "200px" }} />
        </Col>
      </Row>
      <Row>
        <Col className="text-center">
          <h1>Gianni Bussoletti</h1>
          <h2>Full-Stack Junior Developer</h2>
          {socialIcon.map((social, i) => {
            return (
              <OverlayTrigger
                key={social.value + i}
                overlay={renderTooltip(social.value)}
                delay={{ show: 250, hide: 400 }}
                placement="bottom">
                <FontAwesomeIcon className="mt-1 mb-4" size={iconSize} icon={social.icon} />
              </OverlayTrigger>
            )
          })}
          <p className="text-start">
            Ciao, sono Gianni, sviluppatore full-stack junior di Roma. Vengo dal mondo della grafica
            e del video e dal 2018 sviluppo anche siti WordPress. Oggi creo applicazioni web con
            React, TypeScript, Java e Spring Boot. Il design mi ha insegnato a curare le interfacce
            e ad ascoltare chi commissiona un lavoro.
          </p>
          <p className="fst-italic">Amo le storie ben raccontate, sullo schermo come nel codice.</p>
        </Col>
      </Row>

      <Row xs={1} sm={2} className="mb-4 mt-3">
        <Col className="mb-4 mb-sm-0">
          <h3>Front-End Stack</h3>
          <Row xs={2}>
            {stackIconFront.map((stackIcon, i) => {
              return (
                <Col key={stackIcon.value + i} className="mb-3">
                  <FontAwesomeIcon size={iconSize} icon={stackIcon.icon} />
                  {stackIcon.value}
                </Col>
              )
            })}
          </Row>
        </Col>
        <Col>
          <h3>Back-End Stack</h3>
          {stackIconBack.map((stackIcon, i) => {
            return (
              <>
                {stackIcon.value === "Spring Boot" ? (
                  <Col key={stackIcon.value + i} className="mb-3">
                    <FontAwesomeIcon size={iconSize} icon={stackIcon.icon} flip="horizontal" />
                    {stackIcon.value}
                  </Col>
                ) : (
                  <Col key={stackIcon.value + i} className="mb-3">
                    <FontAwesomeIcon size={iconSize} icon={stackIcon.icon} />
                    {stackIcon.value}
                  </Col>
                )}
              </>
            )
          })}
        </Col>
      </Row>

      <Row className="mt-3">
        <h3 className="project-title">Progetti</h3>
        {stackIconBack.map(() => {
          return (
            <Col xs={12} md={4} className="mb-4">
              <Card>
                <Card.Header className="py-2">Card Header</Card.Header>
                <Card.Img src="https://placehold.co/160x90" />
                <Card.Footer>
                  <Row xs={2} className=" justify-content-center">
                    <Col className="my-2 p-0 px-1">
                      <Button className="w-100" variant="primary">
                        Repo
                      </Button>
                    </Col>
                    <Col className="my-2 p-0 px-1">
                      <Button className="w-100" variant="primary">
                        Demo
                      </Button>
                    </Col>
                  </Row>
                </Card.Footer>
              </Card>
            </Col>
          )
        })}
      </Row>
    </Container>
  )
}

export default App
