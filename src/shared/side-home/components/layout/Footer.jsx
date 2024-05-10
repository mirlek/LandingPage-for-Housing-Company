import { Card, Row, Col, Container, Button } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <Card className="coins mt-4 p-3 w-100">
      <Card.Body>
        <Container>
          <Row className="mb-3 d-flex justify-content-center align-items-center">
          <Col xs={12} md={4} lg={2} className="text-center text-md-center mb-3">
            <Card.Text className="d-flex align-items-center justify-content-center justify-content-md-start text-center text-md-center" style={{ color: '#9A9A9A', fontSize: '18px' }}>
              <img src={t('contacts.phone_label')} alt="Phone" className="me-2" />
              <span>{t('contacts.phone')}</span>
            </Card.Text>
            <Card.Text style={{ fontWeight: 'bold' }}>+7 (707) 682-56-76</Card.Text>
          </Col>
            <Col xs={12} md={8} lg={10} className="d-flex justify-content-center text-center align-items-center">
              <Card.Text
                className="text-content p-3 w-100"
                style={{
                  backgroundColor: '#F2F2F2',
                  border: '1px solid transparent',
                  borderRadius: '32px',
                  color: '#9A9A9A',
                  fontSize: '18px',
                  lineHeight: '1'
                }}
              >
                {t('contacts.info')}
              </Card.Text>
            </Col>
          </Row>
        </Container>
      </Card.Body>
    </Card>
  );
};

export default Footer;
