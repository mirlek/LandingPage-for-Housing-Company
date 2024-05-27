import { Card, Row, Col, Container, Image } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <Card className="main mt-4 p-4 w-100">
      <Card.Body className='p-0'>
        <Container>
          <Row className="d-flex justify-content-center align-items-center">
          <Col xs={12} md={4} lg={3} xl={2} className="text-center text-xl-start footer-first-column">
            <Card.Text className="d-flex justify-content-center justify-content-xl-start align-items-center" 
              style={{ color: '#9A9A9A', fontSize: '18px' }}>
              <Image src={t('contacts.phone_label')} alt="Phone" className="me-2 d-flex align-items-center footer-img" 
                style={{width: '24px', height: '24px'}}/>
              <span>{t('contacts.phone')}</span>
            </Card.Text>
            <Card.Text style={{ fontWeight: '700', fontSize: '21px' }}>+7 (707) 682-56-76</Card.Text>
          </Col>
            <Col xs={12} md={8} lg={9} xl={10} className="d-flex justify-content-center text-center align-items-center">
              <Card.Text className="text-content p-3 w-100 info-footer"> {t('contacts.info')}</Card.Text>
            </Col>
          </Row>
        </Container>
      </Card.Body>
    </Card>
  );
};

export default Footer;
