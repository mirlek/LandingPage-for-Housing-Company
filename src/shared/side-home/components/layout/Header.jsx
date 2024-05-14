import React from 'react';
import { Col, Button, OverlayTrigger, Tooltip, Image, Container, Row } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneVolume, faCircleInfo } from '@fortawesome/free-solid-svg-icons';
import { PATH_AUTH } from '@app/routes/paths';
import { tokens, TranslatedToken } from '@shared/utils/i18n';
import { NavLink } from 'react-router-dom';
import LanguageSelector from './ChangeLanguage';

const Header = () => {
  const { t } = useTranslation();

  return (
    <Container className='p-0'>
      <Row className="d-flex justify-content-between align-items-center header p-2">
        <Col lg={2} md={2} className="d-none d-lg-block pl-0">
          <Image src="/img/Group_32.png" />
        </Col>
        <Col lg={10} md={10} className="d-none d-lg-block">
          <div className="d-flex align-items-baseline justify-content-end">
            <OverlayTrigger
              placement="bottom"
              overlay={<Tooltip id="tooltip-inner">Номер телефона предназначен только для связи с председателем</Tooltip>}
              arrow={false} 
            >
              <div className="phone me-4">
              <a href="tel:+77076825676">
                <FontAwesomeIcon icon={faPhoneVolume} className="me-2" />
                  +7(707)682-56-76
                <FontAwesomeIcon icon={faCircleInfo} className="ms-2" />
              </a>
              </div>
            </OverlayTrigger>
            <LanguageSelector className="mr-3" />
            <NavLink className={'button contained'} to={PATH_AUTH.login}>
              <Button variant="custom">
                <span>
                  <TranslatedToken id={tokens.common.login} />
                </span>
              </Button>
            </NavLink>
          </div>
        </Col>

        <Col xs={12} className="d-block d-lg-none p-0">
          <div className="d-flex justify-content-between">
            <div>
              <Image src="/img/Group_32.png" />
            </div>
            <div>
              <Button variant="custom" id="loginBtn">
                {t('home:btn.login')}
              </Button>
            </div>
          </div>
          <div className="d-flex justify-content-between align-items-baseline mt-2">
            <LanguageSelector />
            <OverlayTrigger
              placement="bottom"
              overlay={<Tooltip id="tooltip-phone">Номер телефона предназначен только для связи с председателем</Tooltip>}
            >
              <div className="phone" style={{fontSize: '17px'}}>
                <FontAwesomeIcon icon={faPhoneVolume} className="me-2"/>
                +7(707)682-56-76
                <FontAwesomeIcon icon={faCircleInfo} className="ms-2"/>
              </div>
            </OverlayTrigger>
          </div>
        </Col>
      </Row>
    </Container>
    
  );
};

export default Header;
