import React, { useRef } from 'react';
import { Card, Row, Col, Image, Button } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

const About = () => {
  const { t } = useTranslation();
  const keys = Array.from({ length: 2 }, (_, index) => index + 1);
  const numbers = ['01', '02', '03', '04'];
  const videoRef = useRef(null);

  const aboutTextHtml = { __html: t('about.text') };

  const handleTimeJump = (time) => {
    if (videoRef.current) {
      const newUrl = `https://www.youtube.com/embed/TgJQ9jjonzQ?autoplay=1&controls=1&showinfo=0&modestbranding=1&rel=0&start=${time}`;
      videoRef.current.src = newUrl;
    }
  };
  const jumpTimes = [1, 45, 87, 131];

  return (
    <Card className="coins mx-3 w-100 mb-4 mt-4">
      <Card.Body>
        <Row>
          <Col className="d-flex justify-content-center mb-2">
            <p style={{ color: '#00AB55' }} className="heading">
              {t('about.heading')}
            </p>
          </Col>
        </Row>
        <Row className="justify-content-between m-2">
          <Col sm={12} md={12} lg={7} className="order-lg-last d-flex justify-content-center align-items-center">
            <div className="img-video">
              <iframe
                ref={videoRef}
                className="embed-responsive embed-responsive-16by9"
                src="https://www.youtube.com/embed/TgJQ9jjonzQ?autoplay=0&controls=1&showinfo=0&modestbranding=1&rel=0"
                title="YouTube video player"
                allowFullScreen
              />
            </div>
          </Col>
          <Col sm={12} md={12} lg={4} className="mt-4 d-flex align-items-center">
            <div>
              <Card.Text style={{ fontWeight: 'bold', fontSize: '48px', lineHeight: '1' }} className="mb-4">
                {t(`about.title`)}
              </Card.Text>
              <Card.Text dangerouslySetInnerHTML={aboutTextHtml} style={{ lineHeight: '1.2', marginBottom: '10px' }} />
            </div>
          </Col>
        </Row>
        <Row className="m-2">
          <Col md={6}>
            {keys.map((key, index) => (
              <Card className="monthly-benefit-card mt-4" key={key}>
                <Card.Body>
                  <Row className="d-flex justify-content-between p-0 m-0">
                    <Col sm={2} md={2} lg={1} className="d-flex align-items-center">
                      <Card.Text style={{ fontSize: '24px' }} className="card-text">
                        {numbers[index]}
                      </Card.Text>
                    </Col>
                    <Col lg={2} className="d-lg-block d-md-none d-sm-none">
                      <div className="d-flex justify-content-center">
                        <Image src={t(`about.pic${key}`)} className="about-image" />
                      </div>
                    </Col>
                    <Col sm={8} md={8} lg={4} className="d-flex align-items-center justify-content-start">
                      <div>
                        <Card.Title style={{ fontWeight: 'bold', fontSize: '24px' }} className="card-text">
                          {t(`about.short${key}`)}
                        </Card.Title>
                        <Card.Text className="text-content">{t(`about.timestamp${key}`)}</Card.Text>
                      </div>
                    </Col>
                    <Col sm={2} md={2} lg={2} className="d-flex justify-content-end">
                      <Button variant="success" className="about-btn" onClick={() => handleTimeJump(jumpTimes[index])}>
                        <Image src="/img/arrow-right.png" alt="btn-about" style={{ padding: 0, margin: 0 }} />
                      </Button>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            ))}
          </Col>
          <Col md={6} className="">
            {keys.map((key, index) => (
              <Card className="monthly-benefit-card mt-4 mb-4" key={key} style={{ minHeight: '115px' }}>
                <Card.Body>
                  <Row className="d-flex justify-content-between p-0 m-0">
                    <Col sm={2} md={2} lg={1} className="d-flex align-items-center">
                      <Card.Text style={{ fontSize: '24px' }} className="card-text">
                        {numbers[index + 2]}
                      </Card.Text>
                    </Col>
                    <Col lg={2} className="d-lg-block d-md-none d-sm-none">
                      <div className="d-flex justify-content-center">
                        <Image src={t(`about.pic${key + 2}`)} className="about-image" />
                      </div>
                    </Col>
                    <Col sm={8} md={8} lg={4} className="d-flex align-items-center justify-content-start">
                      <div>
                        <Card.Title style={{ fontWeight: 'bold', fontSize: '24px' }} className="card-text">
                          {t(`about.short${key + 2}`)}
                        </Card.Title>
                        <Card.Text className="text-content">{t(`about.timestamp${key + 2}`)}</Card.Text>
                      </div>
                    </Col>
                    <Col sm={2} md={2} lg={2} className="d-flex justify-content-end">
                      <Button
                        variant="success"
                        className="about-btn"
                        onClick={() => handleTimeJump(jumpTimes[index + 2])}
                      >
                        <Image src="/img/arrow-right.png" alt="btn-about" style={{ padding: 0, margin: 0 }} />
                      </Button>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            ))}
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};

export default About;
