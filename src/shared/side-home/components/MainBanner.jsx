import React from 'react';
import { Card } from 'react-bootstrap';
import Header from './layout/Header';
import MainBannerCard from './MainBannerCard';

const MainBanner = () => {
  const isMobile = window.innerWidth < 1264;

  return (
    <Card className="coins mx-3 w-100" style={{ position: 'relative', overflow: 'hidden' }}>
      <Card.Body className="p-0 m-0">
        <Header />
        <MainBannerCard />
        {isMobile ? (
          <img src="/img/Background_mobile.png" alt="Mobile Background" className="mobile-background" />
        ) : (
          <video autoPlay loop muted className="video-banner" style={{ width: '150%' }}>
            <source src="/img/Banner_ver2.mp4" type="video/mp4" />
          </video>
        )}
      </Card.Body>
    </Card>
  );
};

export default MainBanner;
