import { Card, Row, Col } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

const MontlyBenefits = () => {
  const { t } = useTranslation();

  const keys = Array.from({ length: 8 }, (_, index) => index + 1);

  return (
    <Card className="coins p-3 w-100">
      <Card.Body className='pb-2'>
        <Row>
          {keys.slice(0, 3).map((key) => (
            <Col sm={12} md={12} lg={4} key={key}>
              <Card className="monthly-benefit-card mt-2 mb-2 text-center p-1">
                <Card.Body className='text-center'>
                  <Card.Img
                    variant="top"
                    src={t(`montlybenefits.pic${key}`)}
                    style={{ height: '24px', width: '24px' }}
                    className="mx-auto mb-2"
                  />
                  <Card.Title style={{ fontWeight: 'bold', fontSize: '24px' }} className="card-text">
                    <span dangerouslySetInnerHTML={{ __html: t(`montlybenefits.title${key}`) }} />
                  </Card.Title>
                  <Card.Text className="text-content">{t(`montlybenefits.text${key}`)}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
        <Row>
          {keys.slice(3, 6).map((key) => (
            <Col sm={12} md={12} lg={4} key={key}>
              <Card className="monthly-benefit-card mt-2 mb-2 text-center p-1">
                <Card.Body className='text-center'>
                  <Card.Img
                    variant="top"
                    src={t(`montlybenefits.pic${key}`)}
                    style={{ height: '24px', width: '24px' }}
                    className="mx-auto mb-2"
                  />
                  <Card.Title style={{ fontWeight: 'bold', fontSize: '24px' }} className="card-text">
                    <span dangerouslySetInnerHTML={{ __html: t(`montlybenefits.title${key}`) }} />
                  </Card.Title>
                  <Card.Text className="text-content">{t(`montlybenefits.text${key}`)}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
        <Row>
          {keys.slice(6, 8).map((key) => (
            <Col sm={12} md={12} lg={6} key={key}>
              <Card className="monthly-benefit-card mt-2 mb-2 text-center p-1">
                <Card.Body className='text-center'>
                  <Card.Img
                    variant="top"
                    src={t(`montlybenefits.pic${key}`)}
                    style={{ height: '24px', width: '24px' }}
                    className="mx-auto mb-2"
                  />
                  <Card.Title style={{ fontWeight: 'bold', fontSize: '24px' }} className="card-text">
                    {t(`montlybenefits.title${key}`)}
                  </Card.Title>
                  <Card.Text className="text-content">{t(`montlybenefits.text${key}`)}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Card.Body>
    </Card>
  );
};

export default MontlyBenefits;
