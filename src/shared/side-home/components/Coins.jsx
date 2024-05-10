import { Card, Row, Col, Button, Image } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

const Coins = () => {
  const { t } = useTranslation();

  return (
    <Card className="coins mt-4 mb-4 w-100">
      <Card.Body>
        <Row className="d-flex justify-content-center align-items-center">
            <Col xs={12} md={3} lg={2} className="text-center">
            <div className="img-coins mx-auto ">
              <Image src="/img/stack_of_coins.png" alt="coins-img" fluid />
            </div>
            </Col>
            <Col xs={12} md={8} lg={7} className="text-center text-md-start mb-3 mt-3">
            <div>
              <Card.Title>
                <p className="heading p-0 mb-4" style={{ fontSize: '32px' }}>
                {t('coins.heading')}
                </p>
              </Card.Title>
              <Card.Text style={{ lineHeight: '1' }}>{t('coins.text')}</Card.Text>
            </div>
            </Col>
            <Col xs={12} md={12} lg={3}>
            <div className="d-flex justify-content-end justify-content-sm-center">
              <Button variant="custom" id="contactUs" href="#requestForm" className="mt-0">
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
