import React, { useState } from 'react';
import { Card, Row, Col, Button, Image } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

const FAQ = () => {
  const { t } = useTranslation();
  const [expandedIndex, setExpandedIndex] = useState(null);
  const [isRotated, setIsRotated] = useState(false);
  const keys = Array.from({ length: 3 }, (_, index) => index + 1);
  const faqData = {
    1: {
      title: t('faq.title1'),
      text: t('faq.text1')
    },
    2: {
      title: t('faq.title2'),
      text: t('faq.text2')
    },
    3: {
      title: t('faq.title3'),
      text: t('faq.text3')
    }
  };

  const toggleExpand = (index) => {
    setExpandedIndex((prevIndex) => (prevIndex === index ? null : index));
    setIsRotated((prevState) => !prevState);
  };

  return (
    <>
      <Card className="coins mx-3 mt-4 mb-3 p-2 w-100">
        <Card.Body>
          <Col className="d-flex justify-content-center text-center">
            <p style={{ color: '#00AB55' }} className="heading">
              {t('faq.heading')}
            </p>
          </Col>
        </Card.Body>
      </Card>
      {keys.map((key, index) => (
        <Card className="coins mx-3 mb-3 w-100" key={key}>
          <Card.Body>
            <Row className="d-flex align-items-start p-2">
              <Col xs={10} md={10} lg={10}>
                <Card.Text style={{ fontWeight: 'bold', fontSize: '32px' }} className="text-content p-0 m-0 mt-3">
                  {faqData[key].title}
                </Card.Text>
                <div className={`text-container ${expandedIndex === index ? 'open' : ''} mt-3`}>
                  <div dangerouslySetInnerHTML={{ __html: faqData[key].text }} />
                  {index === 0 && (
                    <Button variant="link" href={faqData.youtubeLinkFAQ} target="_blank" className="ourbenefits-download-btns">
                      <img src={t('faq.picvideo')} className="d-none d-md-inline me-2" />
                      {t('ourbenefits.video')}
                    </Button>
                  )}
                </div>
              </Col>
              <Col xs={2} md={2} lg={2} className="d-flex justify-content-end align-items-start">
                <Button onClick={() => toggleExpand(index)} type="button" variant={null} className="btn btn-link mt-3">
                  <Image
                    src={expandedIndex === index ? '/img/Dropdown_minus_Button.png' : '/img/Dropdown_Button.png'}
                    alt="Expand/Collapse"
                    className={`img-fluid img-xs img-md ${isRotated ? 'rotate180' : ''}`}
                  />
                </Button>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      ))}
    </>
  );
};

export default FAQ;
