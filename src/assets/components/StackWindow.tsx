import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Col, Row } from "react-bootstrap"
import { iconSize } from "../variables"
import type { StackComponentType } from "../types"
import WindowButtons from "./WindowButtons"

const StackWindow = ({ array, title }: StackComponentType) => {
  return (
    <Row className="m-0 mb-4 mb-lg-0 align-self-start">
      <Col className="window-style p-0">
        <Row className="window-title m-0">
          <Col className="d-flex align-items-center justify-content-between">
            <h3>{title}</h3>
            <WindowButtons />
          </Col>
        </Row>
        <Row xs={1} lg={2} className="window-bg py-3 m-0">
          {array.map((stackIcon, i) => {
            return (
              <Col key={stackIcon.value + i} className="my-2">
                <FontAwesomeIcon
                  size={iconSize}
                  icon={stackIcon.icon}
                  style={{ color: stackIcon.color }}
                />
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
