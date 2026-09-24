import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useTranslation } from "react-i18next"
import { Row, Col, OverlayTrigger, Image, Tooltip } from "react-bootstrap"
import { socialIcon } from "../arrays"
import { iconSize } from "../variables"
import LangSwitcher from "./LangSwitcher"
import WindowButtons from "./WindowButtons"

const renderTooltip = (value: string) => {
  return <Tooltip>{value}</Tooltip>
}

const PresentationHeader = () => {
  const { t } = useTranslation()
  return (
    <>
      <Row>
        <Col className="d-flex justify-content-center mb-4">
          <Image
            roundedCircle
            className="border border-4 border-light"
            src="./proPic.webp"
            alt="Foto di Gianni Bussoletti"
            width={200}
            height={200}
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
    </>
  )
}

export default PresentationHeader
