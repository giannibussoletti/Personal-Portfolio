import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Row, Col, Button, Image } from "react-bootstrap"
import { socialIcon } from "../arrays"
import WindowButtons from "./WindowButtons"
import { useTranslation } from "react-i18next"
import { Trans } from "react-i18next"
const Footer = () => {
  const { t } = useTranslation()

  return (
    <Row className="m-0 mb-4 mb-lg-0">
      <Col className="window-style p-0">
        <Row className="window-title m-0">
          <Col className="d-flex align-items-center justify-content-between">
            <h3>Footer</h3>
            <WindowButtons />
          </Col>
        </Row>
        <Row className="window-bg p-3 m-0">
          <Col
            xs={12}
            sm={6}
            className="d-block d-sm-flex flex-column flex-xl-row justify-content-center align-items-center">
            <p className="mb-2 mb-xl-0 pe-lg-2 text-sm-center text-lg-start">
              {t("footer.gotIdea")}
            </p>
            <Button
              variant="light"
              className="btn-projects d-flex align-items-center"
              onClick={() => window.open(socialIcon[2].url)}>
              <Image className="me-2" src="./contact.png" style={{ maxWidth: "35px" }} />
              <span>{t("footer.contactMe")}</span>
            </Button>
          </Col>
          <Col
            xs={12}
            sm={6}
            className="mt-3 my-sm-0 d-flex flex-column align-items-sm-center justify-content-sm-center flex-lg-row">
            {socialIcon.slice(0, 2).map((social) => {
              return (
                <div className="me-lg-3" key={social.value}>
                  <FontAwesomeIcon icon={social.icon} />
                  <a href={social.url}>{social.value}</a>
                </div>
              )
            })}
          </Col>
          <Col xs={12} className="mt-3 d-lg-flex justify-content-lg-center">
            <p className="mb-0 me-lg-3">
              <Trans i18nKey="footer.madeWith">
                Portfolio realizzato con <strong>React</strong>,<strong>TypeScript</strong> e{" "}
                <strong>Bootstrap</strong>.
              </Trans>
            </p>

            <p className="mb-0">
              Gianni Bussoletti –{" "}
              <span style={{ fontFamily: "Arial, Helvetica, sans-serif" }}>&#169; </span>
              {new Date().getFullYear().toString()}
            </p>
          </Col>
        </Row>
      </Col>
    </Row>
  )
}

export default Footer
