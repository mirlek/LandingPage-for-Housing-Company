import React, { useState } from 'react';
import { Card, Row, Col, Button, Image, Container } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

const FAQ = () => {
  const { t } = useTranslation();
  const [expandedIndex, setExpandedIndex] = useState(null);
  const [isRotated, setIsRotated] = useState(false);
  const keys = Array.from({ length: 3 }, (_, index) => index + 1);
  const faqData = {
    1: {
      num: t('faq.num1'),
      title: t('faq.title1'),
      text: t('faq.text1')
    },
    2: {
      num: t('faq.num2'),
      title: t('faq.title2'),
      text: t('faq.text2')
    },
    3: {
      num: t('faq.num3'),
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
      <Card className="main mt-4 mb-3 p-2 w-100">
        <Card.Body>
          <Col className="d-flex justify-content-center text-center">
            <p style={{ color: '#00AB55' }} className="heading">
              {t('faq.heading')}
            </p>
          </Col>
        </Card.Body>
      </Card>
      {keys.map((key, index) => (
        <Card className="main mb-3 w-100" key={key}>
          <Card.Body className='p-0'>
            <Row className="d-flex align-items-start p-2">
              <Button onClick={() => toggleExpand(index)} type="button" variant={null} className='btn d-flex align-items-center'>
                <Container>
                  <Row>
                    <Col lg={10}  sm={10} className='d-flex align-items-center mt-2 mb-2'>
                      <p className="faq-numbers me-2 ms-2">
                        {faqData[key].num}
                      </p>
                      <p className="faq-titles p-0 m-0 ps-3 faq-text-content">
                        {faqData[key].title}
                      </p> 
                    </Col>
                    <Col lg={2} sm={2}>
                      <div className="icon-container d-flex justify-content-end align-items-center">
                      <Image 
                        src="/img/Dropdown_minus_Button.png" 
                        alt="Minus" 
                        className={`icon minus icon-${index}`}
                      />
                      <Image 
                        src="/img/Dropdown_plus_Button.png" 
                        alt="Plus" 
                        className={`icon plus icon-${index} ${expandedIndex === index ? 'hidden' : ''}`}
                      />
                      </div>
                    </Col>
                  </Row>
                </Container>
                </Button> 
                <Col>
                  <div className={`text-container ${expandedIndex === index ? 'open' : ''} `}>
                    <div dangerouslySetInnerHTML={{ __html: faqData[key].text }} className='px-4 faq-text mx-2'/>
                    {index === 0 && (
                      <Button variant="link" href={t(`faq.youtubeLinkFAQ`)} target="_blank" className="ourbenefits-download-btns faq-download-btns">
                        <img src={t('faq.picvideo')} className="d-none d-md-inline me-2" style={{width: '28px'}}/>
                        {t('ourbenefits.video')}
                      </Button>
                    )}
                    {index === 1 && (
                      <Button variant="link" href={t(`faq.form`)} download target="_blank" className="ourbenefits-download-btns faq-download-btns">
                        <img src={t('faq.picdocument')} className="d-none d-md-inline me-2" style={{width: '28px'}}/>
                        {t('faq.formtitle')}
                      </Button>
                    )}
                  </div>
                </Col>
            </Row>
          </Card.Body>
        </Card>
      ))}
    </>
  );
};

export default FAQ;
