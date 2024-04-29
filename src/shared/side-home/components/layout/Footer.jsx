import React from 'react';
import { Card, Row, Col, Container, Button } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <Card className="coins mx-3 p-3 w-100" style={{ margin: '2rem' }}>
      <Card.Body>
        <Col className="d-flex justify-content-center text-center align-items-center mb-3">
          <p style={{ color: '#00AB55' }} className="heading">
            {t('contacts.heading')}
          </p>
        </Col>
        <Container>
          <Row className="mb-3">
            <Col xs={6} md={6} lg={3} className="contact-column">
            <Card.Text className="contact-items d-flex align-items-center" style={{ color: '#9A9A9A' }}>
              <img src={t('contacts.phone_label')} alt="Phone" className="me-2"/> {t('contacts.phone')}
            </Card.Text>
              <Card.Text style={{ fontWeight: 'bold' }}>+7 (707) 682-56-76</Card.Text>
            </Col>
            <Col xs={6} md={6} lg={3} className="contact-column">
              <Card.Text className="contact-items d-flex align-items-center justify-content-end justify-content-lg-start" style={{ color: '#9A9A9A' }}>
                <img src={t('contacts.email_label')} alt="Email" className="me-2"/> {t('contacts.email')}
              </Card.Text>
              <Card.Text style={{ fontWeight: 'bold' }} className='d-flex justify-content-end justify-content-lg-start'>info@eosi.kz</Card.Text>
            </Col>
            <Col xs={8} md={6} lg={5} className="contact-column">
            <Card.Text className="contact-items d-flex align-items-center" style={{ color: '#9A9A9A' }}>
                <img src={t('contacts.address_label')} alt="Address" className="me-2"/> {t('contacts.address')}
              </Card.Text>
              <Card.Text style={{ fontWeight: 'bold' }}>{t('contacts.exactAddress')}</Card.Text>
            </Col>
            <Col xs={4} md={6} lg={1} className="d-flex justify-content-end">
              <Button variant="link" href="https://t.me/your_telegram_link" style={{ display: 'none' }}>
                <img src={t('contacts.telegram')} alt="Telegram" />
              </Button>
              <Button variant="link" href="https://wa.me/77782044493">
                <img src={t('contacts.whatsapp')} alt="WhatsApp" />
              </Button>
            </Col>
          </Row>
        </Container>
        <Col className="d-flex justify-content-center text-center align-items-center">
          <Card.Text
            className="text-content mt-3 p-3 w-100"
            style={{
              color: '#00000',
              backgroundColor: '#F2F2F2',
              border: '1px solid transparent',
              borderRadius: '32px'
            }}
          >
            {t('contacts.info')}
          </Card.Text>
        </Col>
      </Card.Body>
    </Card>
  );
};

export default Footer;
