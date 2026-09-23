import { Col, Card, Row, Button } from "react-bootstrap"
import WindowButtons from "./WindowButtons"
import type { ProjectType } from "../types"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { stackIconBack, stackIconFront } from "../arrays"

const allStackIcon = [...stackIconFront, ...stackIconBack]

const ProjectCard = ({ title, stack, imgLink, textBack, repoLink, demoLink }: ProjectType) => {
  return (
    <Card className="window-style rounded-0 align-self-start">
      <Card.Header className="p-2 window-title rounded-0 d-flex justify-content-between align-items-center">
        <div className=" fs-6 text-uppercase">{title}</div> <WindowButtons />
      </Card.Header>
      <Card.Body className={textBack ? "bg-white overflow-scroll" : "p-0"}>
        {imgLink ? (
          <Card.Img className="rounded-0" src={imgLink} />
        ) : (
          textBack?.map((text) => <p>{text}</p>)
        )}
      </Card.Body>
      <Card.Footer>
        <Row>
          <Col className="py-2 window-bg">
            <p className="m-0">
              Stack:
              {stack.map((names) => {
                const icon = allStackIcon.find((i) => i.value === names)
                return icon ? (
                  <FontAwesomeIcon
                    className="me-1"
                    key={names}
                    icon={icon.icon}
                    size="xl"
                    style={{ color: icon.color }}
                  />
                ) : null
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
          {demoLink ? (
            <Col className="my-2 p-0 px-1">
              <Button
                variant="light"
                className="w-100 btn-projects"
                onClick={() => window.open(demoLink)}>
                Demo
              </Button>
            </Col>
          ) : (
            ""
          )}
        </Row>
      </Card.Footer>
    </Card>
  )
}

export default ProjectCard
