import { useState } from "react"
import { Button, Col, Container, Row } from "react-bootstrap"
import { useTranslation } from "react-i18next"
import { arrayLang } from "../arrays"

const LangSwitcher = () => {
  const { i18n } = useTranslation()
  const [lang, setLang] = useState(i18n.language)

  const changeLang = (code: string) => {
    i18n.changeLanguage(code)
  }

  return (
    <Container>
      <Row>
        <Col className="d-flex justify-content-center align-items-center">
          <span className="text-uppercase text-white">{lang}</span>
          {arrayLang.map((lang) => {
            return (
              <Button
                key={lang.name}
                aria-label={lang.name}
                className="p-0 mx-1 bg-transparent border-0 fs-3"
                onClick={() => {
                  changeLang(lang.code)
                  setLang(lang.code)
                }}>
                {lang.flag}
              </Button>
            )
          })}
        </Col>
      </Row>
    </Container>
  )
}

export default LangSwitcher
