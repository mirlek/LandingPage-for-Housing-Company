import React from 'react';
import { Card, Col, Image, Button, Row } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

const Map = () => {
  const { t } = useTranslation();

  const isXsScreen = window.innerWidth < 768;

  return (
    <Card className="coins mx-3 w-100">
      <Card.Body>
        <Row className="justify-content-center text-center align-items-center mb-3">
          <Col>
            <p style={{ color: '#00AB55' }} className="heading">
              {t('map.heading')}
            </p>
          </Col>
        </Row>
        {isXsScreen ? (
          <Row className="justify-content-center">
            <Col className="w-100">
              {['city1', 'city2', 'city3', 'city4', 'city5', 'city6', 'city7', 'city8'].map((city, index) => (
                <Button
                  key={index}
                  variant={index === 0 ? 'outline-success' : 'outline-secondary'}
                  className="w-100 map-btn"
                  style={{ fontWeight: 'bold' }}
                  disabled
                >
                  {t(`map.${city}`)}
                </Button>
              ))}
            </Col>
          </Row>
        ) : (
          <Row className="justify-content-center mb-3">
            <Col>
              <Image src="/img/Map.png" fluid />
            </Col>
          </Row>
        )}
      </Card.Body>
    </Card>
  );
};

export default Map;
