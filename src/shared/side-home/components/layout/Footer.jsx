import { Card, Row, Col, Container, Image } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <Card className="coins mt-4 p-3 w-100">
      <Card.Body>
        <Container>
          <Row className="mb-3 d-flex justify-content-center align-items-center">
          <Col xs={12} md={4} lg={2} className="mb-3 text-center text-md-start">
            <Card.Text className="d-flex justify-content-center justify-content-md-start align-items-center" 
              style={{ color: '#9A9A9A', fontSize: '18px' }}>
              <Image src={t('contacts.phone_label')} alt="Phone" className="me-2 d-flex align-items-center" 
                style={{maxWidth: '10%', height: 'fit-content'}}/>
              <span>{t('contacts.phone')}</span>
            </Card.Text>
            <Card.Text style={{ fontWeight: '700', fontSize: '21px' }}>+7 (707) 682-56-76</Card.Text>
          </Col>
            <Col xs={12} md={8} lg={10} className="d-flex justify-content-center text-center align-items-center">
              <Card.Text className="text-content p-3 w-100 info-footer"> {t('contacts.info')}</Card.Text>
            </Col>
          </Row>
        </Container>
      </Card.Body>
    </Card>
  );
};

export default Footer;
