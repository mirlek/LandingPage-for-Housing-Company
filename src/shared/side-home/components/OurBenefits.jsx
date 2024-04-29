import React from 'react';
import { Card, Row, Col, Button } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

const OurBenefits = () => {
  const { t } = useTranslation();

  const keys = Array.from({ length: 4 }, (_, index) => index + 1);

  const getTokenByIndex = (index) => {
    if (index === 2) return 'https://youtu.be/WsXdTNLApgQ';

    if (index === 3) return t(`ourbenefits.link4`);

    return t(`ourbenefits.link${index}`);
  };

  return (
    <>
      <Card className="coins mx-3 mt-4 mb-3 p-2 w-100">
        <Card.Body>
          <Col className="d-flex justify-content-center text-center">
            <p style={{ color: '#00AB55' }} className="heading">
              {t('ourbenefits.heading')}
            </p>
          </Col>
        </Card.Body>
      </Card>
      {keys.map((key, index) => (
        <Card key={index} className="coins mx-3 mb-3 p-1 w-100">
          <Card.Body>
            <Row>
              <Col xs={3} md={2} lg={2}>
                <Card.Img variant="top" src={t(`ourbenefits.pic${key}`)} />
              </Col>
              <Col xs={9} md={8} lg={6} className="d-flex align-items-center">
                <div>
                  <Card.Title>
                    <p className="heading" style={{ fontSize: '32px' }}>
                      {t(`ourbenefits.title${key}`)}
                    </p>
                  </Card.Title>
                  <Card.Text style={{ lineHeight: '1' }}>{t(`ourbenefits.text${key}`)}</Card.Text>
                </div>
              </Col>
              <Col
                xs={12}
                md={2}
                lg={4}
                className={`d-flex align-items-center ${
                  window.innerWidth < 767 ? 'justify-content-center' : 'justify-content-end'
                }`}
              >
                <div className="d-flex align-items-center">
                  {index === 1 ? (
                    <>
                      <Button
                        variant="link"
                        href={t(`ourbenefits.link2`)}
                        download
                        className="ourbenefits-download-btns"
                      >
                        <img src={t('faq.picdocument')} alt="Document Icon" className="d-none d-md-inline" />
                        {t('ourbenefits.option2')}
                      </Button>
                      <Button
                        variant="link"
                        href={t(`ourbenefits.link3`)}
                        download
                        className="ourbenefits-download-btns"
                      >
                        <img src={t('faq.picdocument')} alt="Document Icon" className="d-none d-md-inline" />
                        {t('ourbenefits.option3')}
                      </Button>
                    </>
                  ) : (
                    <Button
                      variant="link"
                      href={getTokenByIndex(index)}
                      download={index !== 2}
                      target={index === 2 ? '_blank' : ''}
                      rel={index === 2 ? 'noopener noreferrer' : ''}
                      className="ourbenefits-download-btns"
                    >
                      <img
                        src={index === 2 ? t('faq.picvideo') : t('faq.picdocument')}
                        alt={index === 2 ? 'Video Icon' : 'Document Icon'}
                        className="d-none d-md-inline"
                      />
                      {index === 2 ? t(`ourbenefits.video`) : t(`ourbenefits.option${key}`)}
                    </Button>
                  )}
                </div>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      ))}
    </>
  );
};

export default OurBenefits;
