import React from 'react';
import { Card, Row, Col, Button, Image } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

const Coins = () => {
  const { t } = useTranslation();

  return (
    <Card className="coins mx-3 p-3 w-100" style={{ margin: '2rem' }}>
      <Card.Body>
        <Row className="d-flex justify-content-center">
          <Col sm={12} md={6} lg={4} className="order-md-last d-flex justify-content-center align-items-center">
            <div style={{ maxWidth: '100%' }} className="img-coins">
              <Image src="/img/stack_of_coins.png" alt="coins-img" fluid />
            </div>
          </Col>
          <Col sm={12} md={6} lg={6} className="mt-4 text-center text-md-left">
            <p className="heading">{t('coins.heading')}</p>
            <p className="text-content">{t('coins.text')}</p>
            <div>
              <Button variant="custom" id="contactUs" href="#requestForm">
                {t('btn.contactUs')}
              </Button>
            </div>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};

export default Coins;
