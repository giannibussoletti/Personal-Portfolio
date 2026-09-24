// FONTAWESOME
import { library } from "@fortawesome/fontawesome-svg-core"
import { fas } from "@fortawesome/free-solid-svg-icons"
import { far } from "@fortawesome/free-regular-svg-icons"
import { fab } from "@fortawesome/free-brands-svg-icons"
library.add(fas, far, fab)

import { Container, Row, Col } from "react-bootstrap"

import { useTranslation } from "react-i18next"

import { projectArray, stackIconBack, stackIconFront } from "./assets/arrays"

import StackWindow from "./assets/components/StackWindow"
import WindowButtons from "./assets/components/WindowButtons"
import Footer from "./assets/components/Footer"
import ProjectCard from "./assets/components/ProjectCard"
import PresentationHeader from "./assets/components/PresentationHeader"

const App = () => {
  const { t } = useTranslation()

  return (
    <Container className="mt-5 px-3 mb-5">
      <PresentationHeader />

      <Row xs={1} md={2} className="mb-4 mt-3">
        <StackWindow array={stackIconFront} title="Front-End Stack" />
        <StackWindow array={stackIconBack} title="Back-End Stack" />
      </Row>

      <Col className="window-style p-0 mb-4">
        <Row className="window-title m-0">
          <Col className="d-flex align-items-center justify-content-between">
            <h3>{t("project.titles")}</h3>
            <WindowButtons />
          </Col>
        </Row>
        <Row
          xs={1}
          xl={3}
          className="window-bg px-1 pt-3 p-xl-3 m-0"
          style={{ backgroundColor: "#737373" }}>
          {projectArray.map((pr, i) => {
            return (
              <Col key={pr.title} className="mb-4 mb-xl-0">
                <ProjectCard
                  key={i}
                  title={pr.title}
                  description={pr.description}
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
  )
}

export default App
