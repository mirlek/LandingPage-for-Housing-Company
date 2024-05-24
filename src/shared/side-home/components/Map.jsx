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
                  variant={'outline-secondary'}
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
          <Row className="mb-3">
            <Col className="d-flex justify-content-center mb-3 ">
              <iframe 
                src="https://yandex.ru/map-widget/v1/?um=constructor%3A76b314abf0117a920522413340f3f9ba3513b7c83d05daab433b02ca9b95b5d9&amp;source=constructor" 
                width="100%" 
                height="720" 
                allowFullScreen 
                frameborder="0">
              </iframe>
            </Col>
          </Row>
        )}
      </Card.Body>
    </Card>
  );
};

export default Map;
