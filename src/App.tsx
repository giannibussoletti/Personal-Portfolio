// FONTAWESOME
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { library } from "@fortawesome/fontawesome-svg-core"
import { fas } from "@fortawesome/free-solid-svg-icons"
import { far } from "@fortawesome/free-regular-svg-icons"
import { fab } from "@fortawesome/free-brands-svg-icons"
library.add(fas, far, fab)

import { Container, Row, Col, Image, Tooltip, OverlayTrigger } from "react-bootstrap"

import { useTranslation } from "react-i18next"

import { projectArray, socialIcon, stackIconBack, stackIconFront } from "./assets/arrays"
import { iconSize } from "./assets/variables"

import LangSwitcher from "./assets/components/LangSwitcher"
import StackWindow from "./assets/components/StackWindow"
import WindowButtons from "./assets/components/WindowButtons"
import Footer from "./assets/components/Footer"
import ProjectCard from "./assets/components/ProjectCard"

const renderTooltip = (value: string) => {
  return <Tooltip>{value}</Tooltip>
}

const App = () => {
  const { t } = useTranslation()
  return (
    <>
      <Container className="mt-5 px-3 mb-5">
        <Row>
          <Col className="d-flex justify-content-center mb-4">
            <Image
              roundedCircle
              className="border border-4 border-light"
              src="./proPic.png"
              style={{ maxWidth: "200px" }}
            />
          </Col>
          <LangSwitcher />
        </Row>
        <Row>
          <Col className="text-center text-light">
            <h1>Gianni Bussoletti</h1>
            <h2>Full-Stack Junior Developer</h2>
            {socialIcon.map((social, i) => {
              return (
                <OverlayTrigger
                  key={social.value + i}
                  overlay={renderTooltip(social.value)}
                  delay={{ show: 250, hide: 400 }}
                  placement="bottom">
                  <FontAwesomeIcon
                    onClick={() => window.open(social.url)}
                    className="mt-1 mb-4 hand-cursor"
                    size={iconSize}
                    icon={social.icon}
                  />
                </OverlayTrigger>
              )
            })}

            <Col className="window-style p-0">
              <Row className="window-title m-0">
                <Col className="d-flex align-items-center justify-content-between">
                  <h3>{t("profile.salute")}</h3>
                  <WindowButtons />
                </Col>
              </Row>
              <Row className="window-bg py-3 m-0">
                <p className="text-start">{t("profile.description")}</p>
                <p className="fst-italic">{t("profile.quote")}</p>
              </Row>
            </Col>
          </Col>
        </Row>

        <Row xs={1} md={2} className="mb-4 mt-3">
          <StackWindow array={stackIconFront} title="Front-End Stack" />
          <StackWindow array={stackIconBack} title="Back-End Stack" />
        </Row>

        <Col className="window-style p-0 mb-4">
          <Row className="window-title m-0">
            <Col className="d-flex align-items-center justify-content-between">
              <h3>{t("titles.project")}</h3>
              <WindowButtons />
            </Col>
          </Row>
          <Row className="window-bg px-1 pt-3 p-xl-3 m-0" style={{ backgroundColor: "#737373" }}>
            {projectArray.map((pr, i) => {
              return (
                <Col
                  xs={12}
                  lg={i === projectArray.length - 1 ? 12 : 6}
                  className={i === projectArray.length - 1 ? "mb-4 mb-lg-0 mt-3" : "mb-4 mb-lg-0"}>
                  <ProjectCard
                    key={i}
                    title={pr.title}
                    stack={pr.stack}
                    repoLink={pr.repoLink}
                    imgLink={pr.imgLink}
                    textBack={pr.textBack}
                    demoLink={pr.demoLink}
                  />
                </Col>
              )
            })}
          </Row>
        </Col>
        <Footer />
      </Container>
    </>
  )
}

export default App
