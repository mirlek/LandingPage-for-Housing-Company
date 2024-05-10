import { Card } from 'react-bootstrap';
import Header from './layout/Header';
import MainBannerCard from './MainBannerCard';

const MainBanner = () => {
  const isMobile = window.innerWidth < 1264;

  return (
    <Card className="coins w-100 mb-2" style={{ position: 'relative', overflow: 'hidden' }}>
      <Card.Body className="p-0 m-0">
        <Header />
        <MainBannerCard />
        {isMobile ? (
          <img src="/img/Background_mobile.png" alt="Mobile Background" className="mobile-background" />
        ) : (
          <video autoPlay loop muted className="video-banner">
            <source src="/img/Banner_ver2.mp4" type="video/mp4" />
          </video>
        )}
      </Card.Body>
    </Card>
  );
};

export default MainBanner;
