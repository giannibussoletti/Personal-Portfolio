import { Col, Card, Row, Button } from "react-bootstrap"
import WindowButtons from "./WindowButtons"
import type { Lang, ProjectType } from "../types"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { stackIconBack, stackIconFront } from "../arrays"
import { useTranslation } from "react-i18next"

const ProjectCard = ({
  title,
  description,
  stack,
  imgLink,
  textBack,
  repoLink,
  demoLink,
}: ProjectType) => {
  const { i18n } = useTranslation()
  const lang: Lang = (i18n.resolvedLanguage as Lang) ?? "it"
  const allStackIcon = [...stackIconFront, ...stackIconBack]

  return (
    <Card className="window-style rounded-0 h-100">
      <Card.Header className="p-2 window-title rounded-0 d-flex justify-content-between align-items-center">
        <div className=" fs-6 text-uppercase">{title}</div> <WindowButtons />
      </Card.Header>
      <Card.Body className={textBack ? "bg-white" : "p-0"}>
        {imgLink ? (
          <Card.Img className="rounded-0" src={imgLink} />
        ) : (
          <ul className="ps-3 card-list">
            {" "}
            {textBack?.[lang]?.map((text) => (
              <li key={text}>{text}</li>
            ))}
          </ul>
        )}
      </Card.Body>
      <Card.Footer className="h-100 d-flex flex-column">
        <Row className="flex-grow-1">
          <Col className="py-2 window-bg d-flex flex-column">
            <p className="flex-grow-1">
              <strong>Info:</strong> {description[lang]}
            </p>
            <p style={{ lineHeight: "2" }}>
              <strong>Stack:</strong>
              {stack.map((names) => {
                const icon = allStackIcon.find((i) => i.value === names)
                return (
                  icon && (
                    <FontAwesomeIcon
                      className="me-1"
                      key={names}
                      icon={icon.icon}
                      size="xl"
                      style={{ color: icon.color }}
                    />
                  )
                )
              })}
            </p>
          </Col>
        </Row>
        <Row xs={demoLink ? 2 : 1} className=" justify-content-center">
          <Col className="my-2 p-0 px-1">
            <Button
              variant="light"
              className="w-100 btn-projects"
              onClick={() => window.open(repoLink)}>
              Repo
            </Button>
          </Col>
          {demoLink && (
            <Col className="my-2 p-0 px-1">
              <Button
                variant="light"
                className="w-100 btn-projects"
                onClick={() => window.open(demoLink)}>
                Demo
              </Button>
            </Col>
          )}
        </Row>
      </Card.Footer>
    </Card>
  )
}

export default ProjectCard
