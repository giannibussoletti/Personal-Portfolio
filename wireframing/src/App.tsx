import "bootstrap/dist/css/bootstrap.min.css"
import { Container, Row, Col, Image, Card, Button, Accordion } from "react-bootstrap"
const iconArray: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const ProjectArray: number[] = [1, 2, 3, 4, 5]

const App = () => {
  return (
    <div data-bs-theme="dark" className="bg-dark text-white">
      <main>
        <Container>
          <Row className="mb-5">
            <Col className="vh-100 d-flex justify-content-center align-items-center" xs={12}>
              <h1 className="text-uppercase text-center mb-5">gianni bussoletti</h1>
            </Col>
          </Row>
          <Row className="mb-5 px-5">
            <Col xs="auto" className="me-5">
              <Image src="https://placebear.com/200/200" className="rounded-circle" />
            </Col>
            <Col>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum cumque debitis quasi
                placeat animi suscipit vel consequuntur sequi voluptatibus perspiciatis. Tempora
                laboriosam soluta totam a maxime quas, consequatur repellat odio! Lorem ipsum dolor
                sit amet consectetur adipisicing elit. Velit aperiam minus odio eius quia magnam
                iure! Assumenda, nihil, harum minima vel repudiandae quod adipisci repellat porro
                nesciunt nam sequi debitis?
              </p>
              {iconArray.map((icon) => (
                <Image key={icon} className="me-2" src="https://placebear.com/40/40" />
              ))}
            </Col>
          </Row>
          <Row className="mb-5" xs={1} sm={2} lg={5}>
            {ProjectArray.map((prj) => {
              return (
                <Col key={prj}>
                  <Card>
                    <Card.Img variant="top" src="https://placebear.com/286/180" />
                    <Card.Body>
                      <Card.Title>Card Title</Card.Title>
                      <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                      </Card.Text>
                      <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                  </Card>
                </Col>
              )
            })}
          </Row>
          <Row className="mb-5">
            <h2>Principali esperienze lavorative</h2>
            <Accordion>
              {ProjectArray.map((prj, i) => {
                return (
                  <Accordion.Item key={prj} eventKey={`${i}`}>
                    <Accordion.Header>Accordion Item #1</Accordion.Header>
                    <Accordion.Body>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                      incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                      nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
                      eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt
                      in culpa qui officia deserunt mollit anim id est laborum.
                    </Accordion.Body>
                  </Accordion.Item>
                )
              })}
            </Accordion>
          </Row>
        </Container>
      </main>
      <footer>
        <p className="text-center mb-0">ciao sono un wireframe</p>
      </footer>
    </div>
  )
}

export default App
