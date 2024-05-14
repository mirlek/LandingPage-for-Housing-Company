import React, { useState, useEffect } from 'react';
import { Card, Row, Col, Button, Container } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

const MainBannerCard = () => {
  const { t } = useTranslation();
  const [activeButton, setActiveButton] = useState(null);
  const [animationStarted, setAnimationStarted] = useState(false);
  const [pageLoaded, setPageLoaded] = useState(false);

  useEffect(() => {
    setPageLoaded(true);
  }, []);

  const handleButtonClick = (index) => {
    if (activeButton === index) {
      setActiveButton(null); 
      setAnimationStarted(false); 
    } else {
      setActiveButton(index);
      setAnimationStarted(true);
    }
  };

  return (
    <Card className="main-banner-card p-4">
      <Card.Body className="p-0">
        <Container>
          <Row xs={1} md={2}>
            <Col lg={5}>
              <Col className="mb-3 p-0">
                <p className="heading" style={{ textTransform: 'none' }}>
                  {t('mainBanner.heading')}
                </p>
              </Col>
              <Col className="main-banner-btn-contactUs d-none d-lg-block">
                <Button variant="custom" id="contactUs" href="#requestForm" className="w-lg-50 w-md-100 w-xs-100 m-0">
                  {t('btn.contactUs')}
                </Button>
              </Col>
            </Col>
            <Col lg={7} className="fill" style={{ height: '310px', maxHeight: '310px' }}>
            <div className="d-lg-flex flex-wrap d-none align-items-center mb-4">
              <p style={{ fontSize: '18px', fontWeight: '700' }}>{t('mainBanner.btntitle')}</p>
                {['btn1', 'btn2', 'btn3', 'btn4'].map((key, index) => (
                  <Button
                    type={'button'}
                    key={index}
                    className="btn btn-lg"
                    id="bannerBtns"
                    style={{
                      backgroundColor: activeButton === index + 1 ? '#161C24' : '#F6F6F6',
                      color: activeButton === index + 1 ? 'white' : '#000000'
                    }}
                    onClick={() => handleButtonClick(index + 1)}
                  >
                    {t(`mainBanner.${key}`)}
                  </Button>
                ))}
              </div>
              {pageLoaded &&
                ['btn1', 'btn2', 'btn3', 'btn4'].map((key, index) => (
                  <Card.Text
                    key={index}
                    className={`text ${activeButton === index + 1 && animationStarted ? 'slide-in' : ''} ${
                      activeButton === index + 1 ? 'custom-text' : ''
                    }`}
                    dangerouslySetInnerHTML={{
                      __html: activeButton === index + 1 ? t(`mainBanner.${key}text${index + 1}`) : ''
                    }}
                  />
                ))}
              {!activeButton && (
                <Card.Text dangerouslySetInnerHTML={{ __html: t('mainBanner.btntext') }}  
                  className={`d-md-inline d-lg-inline d-xl-inline d-xxl-inline custom-text ${!activeButton && !animationStarted ? 'slide-in' : ''}`}
                  style={{ lineHeight: '1.2' }}/>
              )}
            </Col>
            <Col className="main-banner-btn-contactUs d-lg-none"> 
              <Button variant="custom" id="contactUs" href="#requestForm" className="w-lg-50 w-md-100 w-xs-100 m-0">
                {t('btn.contactUs')}
              </Button>
          </Col>
          </Row>
        </Container>
      </Card.Body>
    </Card>
  );
}  

export default MainBannerCard;
