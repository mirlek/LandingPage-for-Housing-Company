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
      <Card className="main mt-4 mb-3 p-2 w-100">
        <Card.Body>
          <Col className="d-flex justify-content-center text-center">
            <p style={{ color: '#00AB55' }} className="heading">
              {t('ourbenefits.heading')}
            </p>
          </Col>
        </Card.Body>
      </Card>
      <Row>
        {keys.map((key, index) => (
          <Col md={6} key={index}>
            <Card className="main mb-3 p-1 w-100">
              <Card.Body className='px-4 pt-3 pb-3'>
                <Row>
                  <Col xs={3} md={3} lg={3} className='d-flex justify-content-center align-items-center'>
                    <Card.Img variant="top" src={t(`ourbenefits.pic${key}`)} className='our-benefits-img'/>
                  </Col>
                  <Col xs={9} md={9} lg={9} className="d-flex align-items-center">
                    <div>
                      <Card.Title>
                        <p className="our-benefits-heading">
                          {t(`ourbenefits.title${key}`)}
                        </p>
                      </Card.Title>
                      <Card.Text style={{ lineHeight: '140%', fontSize: '21px', letterSpacing: '1%' }}>{t(`ourbenefits.text${key}`)}</Card.Text>
                    </div>
                  </Col>
                  <Col xs={12} md={12} lg={12} className={`d-flex align-items-center our-benefits-btn-block mt-2 p-0 ${
                      window.innerWidth < 767 ? 'justify-content-start' : 'justify-content-start'
                    }`}
                  >
                    <div className="d-flex align-items-center">
                      {index === 1 ? (
                        <div className='w-100'>
                          <Button
                            variant="link"
                            href={t(`ourbenefits.link2`)}
                            download
                            className="ourbenefits-download-btns"
                          >
                            <img src={t('faq.picdocument')} alt="Document Icon" className="d-none d-md-inline me-1" style={{width: '28px'}}/>
                            {t('ourbenefits.option2')}
                          </Button>
                          <Button
                            variant="link"
                            href={t(`ourbenefits.link3`)}
                            download
                            className="ourbenefits-download-btns"
                          >
                            <img src={t('faq.picdocument')} alt="Document Icon" className="d-none d-md-inline me-1" style={{width: '28px'}}/>
                            {t('ourbenefits.option3')}
                          </Button>
                        </div>
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
                            className="d-none d-md-inline me-1" style={{width: '28px'}}
                          />
                          {index === 2 ? t(`ourbenefits.video`) : t(`ourbenefits.option${key}`)}
                        </Button>
                      )}
                    </div>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default OurBenefits;
