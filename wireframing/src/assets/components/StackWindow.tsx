import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Col, Row } from "react-bootstrap"
import { iconSize } from "../variables"
import type { StackComponentType } from "../types"

const StackWindow = ({ array, title }: StackComponentType) => {
  return (
    <Row className="m-0 mb-4 mb-lg-0">
      <Col className="window-style">
        <Row className="window-title mb-3">
          <Col>
            <h3>{title}</h3>
          </Col>
        </Row>
        <Row xs={1} lg={2}>
          {array.map((stackIcon, i) => {
            return (
              <Col key={stackIcon.value + i} className="mb-3">
                <FontAwesomeIcon size={iconSize} icon={stackIcon.icon} />
                {stackIcon.value}
              </Col>
            )
          })}
        </Row>
      </Col>
    </Row>
  )
}

export default StackWindow
