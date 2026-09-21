// FONTAWESOME
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { library } from "@fortawesome/fontawesome-svg-core"
import { fas } from "@fortawesome/free-solid-svg-icons"
import { far } from "@fortawesome/free-regular-svg-icons"
import { fab } from "@fortawesome/free-brands-svg-icons"
library.add(fas, far, fab)

import "./assets/css/style.scss"

import { Container, Row, Col, Image, Tooltip, OverlayTrigger, Button, Card } from "react-bootstrap"

import { useTranslation } from "react-i18next"

import { socialIcon, stackIconBack, stackIconFront } from "./assets/arrays"
import { iconSize } from "./assets/variables"

import LangSwitcher from "./assets/components/LangSwitcher"

const renderTooltip = (value: string) => {
  return <Tooltip>{value}</Tooltip>
}

const App = () => {
  const { t } = useTranslation()
  return (
    <>
      <LangSwitcher />
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
                <Col key={stackIcon.value + i} className="mb-3">
                  <FontAwesomeIcon size={iconSize} icon={stackIcon.icon} />
                  {stackIcon.value}
                </Col>
              )
            })}
            <p className="text-start">{t("profile.description")}</p>
            <p className="fst-italic">{t("profile.quote")}</p>
          </Col>
        </Row>

        <Row xs={1} sm={2} className="mb-4 mt-3">
          <Col className="mb-4 mb-sm-0 window-style">
            <Row className="window-title">
              <Col>
                <h3>Front-End Stack</h3>
              </Col>
            </Row>
            <Row xs={2}>
              {stackIconFront.map((stackIcon, i) => {
                return (
                  <Col key={stackIcon.value + i} className="mb-3">
                    <FontAwesomeIcon size={iconSize} icon={stackIcon.icon} flip="horizontal" />
                    {stackIcon.value}
                  </Col>
                ) : (
                  <Col key={stackIcon.value + i} className="mb-3">
                    <FontAwesomeIcon size={iconSize} icon={stackIcon.icon} />
                    {stackIcon.value}
                  </Col>
                )
              })}
            </Row>
          </Col>
        </Row>

        <Row className="mt-3">
          <h3 className="project-title">{t("titles.project")}</h3>
          {stackIconBack.map((pr, i) => {
            return (
              <Col xs={12} md={4} className="mb-4" key={i}>
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
    </>
  )
}

export default App
