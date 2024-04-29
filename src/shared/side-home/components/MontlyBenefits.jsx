import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

const MontlyBenefits = () => {
  const { t } = useTranslation();

  const keys = Array.from({ length: 4 }, (_, index) => index + 1);

  return (
    <Card className="coins mx-3 p-3 w-100">
      <Card.Body className='pb-2'>
        <Col className="d-flex justify-content-center text-center">
          <p style={{ color: '#00AB55' }} className="heading">
            {t('montlybenefits.heading')}
          </p>
        </Col>
        <Row>
          <Col md={6} className="p-1">
            {keys.map((key) => (
              <Card className="monthly-benefit-card mt-2" key={key}>
                <Card.Body>
                  <div className="d-flex align-items-center justify-content-start pl-3 mb-3">
                    <Card.Img
                      variant="top"
                      src={t(`montlybenefits.pic${key}`)}
                      style={{ height: '24px', width: '24px' }}
                      className="me-2"
                    />
                    <Card.Title style={{ fontWeight: 'bold', fontSize: '24px' }} className="card-text">
                      {t(`montlybenefits.title${key}`)}
                    </Card.Title>
                  </div>
                  <Card.Text className="text-content">{t(`montlybenefits.text${key}`)}</Card.Text>
                </Card.Body>
              </Card>
            ))}
          </Col>
          <Col md={6} className="p-1">
            {keys.map((key) => (
              <Card className="monthly-benefit-card mt-2 mb-2" key={key}>
                <Card.Body>
                  <div className="d-flex align-items-center justify-content-start pl-3 mb-3">
                    <Card.Img
                      variant="top"
                      src={t(`montlybenefits.pic${key + 4}`)}
                      style={{ height: '24px', width: '24px' }}
                      className="me-2"
                    />
                    <Card.Title style={{ fontWeight: 'bold', fontSize: '24px' }} className="card-text">
                      {t(`montlybenefits.title${key + 4}`)}
                    </Card.Title>
                  </div>
                  <Card.Text className="text-content">{t(`montlybenefits.text${key + 4}`)}</Card.Text>
                </Card.Body>
              </Card>
            ))}
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};

export default MontlyBenefits;
