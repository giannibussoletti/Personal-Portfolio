import { Col, Card, Row, Button } from "react-bootstrap"
import WindowButtons from "./WindowButtons"

const ProjectCard = () => {
  return (
    <Col xs={12} lg={4} className="mb-4">
      <Card className="window-style rounded-0">
        <Card.Header className="p-2 window-title rounded-0 d-flex justify-content-between align-items-center">
          <div className=" fs-6 text-uppercase">Card Header</div> <WindowButtons />
        </Card.Header>
        <Card.Img className="rounded-0" src="https://placehold.co/160x90" />
        <Card.Footer>
          <Row xs={2} className=" justify-content-center">
            <Col className="my-2 p-0 px-1">
              <Button variant="light" className="w-100 btn-projects">
                Repo
              </Button>
            </Col>
            <Col className="my-2 p-0 px-1">
              <Button variant="light" className="w-100 btn-projects">
                Demo
              </Button>
            </Col>
          </Row>
        </Card.Footer>
      </Card>
    </Col>
  )
}

export default ProjectCard
