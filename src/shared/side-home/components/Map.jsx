import { Card, Col, Button, Row } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';


const Map = () => {
  const { t } = useTranslation();

  const isXsScreen = window.innerWidth < 768;

  useEffect(() => {
    const hideElement = () => {
      const mapFrame = document.querySelector('.i4ewOd-pzNkMb-haAclf');
      if (mapFrame) {
        mapFrame.style.display = 'none';
      }
    };

    window.addEventListener('load', hideElement);

    return () => {
      window.removeEventListener('load', hideElement);
    };
  }, []);
  
  return (
    <Card className="coins w-100 mt-4">
      <Card.Body>
        <Row className="justify-content-center text-center align-items-center mb-3">
          <Col>
            <p style={{ color: '#00AB55' }} className="heading">
              {t('home:map.heading')}
            </p>
          </Col>
        </Row>
        {isXsScreen ? (
          <Row className="justify-content-center">
            <Col className="w-100">
              {['city1', 'city2', 'city3', 'city4', 'city5', 'city6', 'city7', 'city8'].map((city, index) => (
                <Button
                  key={index}
                  variant={'outline-secondary'}
                  className="w-100 map-btn"
                  style={{ fontWeight: 'bold' }}
                  disabled
                >
                  {t(`home:map.${city}`)}
                </Button>
              ))}
            </Col>
          </Row>
        ) : (
          <Row className="mb-3">
            <Col className="d-flex justify-content-center mb-3">
            <iframe src="https://www.google.com/maps/d/embed?mid=1xob9Q9un2UzpzCHpNabj2HiwAmOKfw8&ehbc=2E312F" width={'100%'} allowFullScreen height="700"></iframe>
              {/* <iframe 
                src="https://www.google.com/maps/d/embed?mid=1xob9Q9un2UzpzCHpNabj2HiwAmOKfw8&ehbc=2E312F" 
                width={'100%'} 
                height="480" 
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"></iframe> */}
            </Col>
          </Row>
        )}
      </Card.Body>
    </Card>
  );
};

export default Map;
