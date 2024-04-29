import PageLayout from './PageLayout';
import MainBanner from '../MainBanner';
import Coins from '../Coins';
import MontlyBenefits from '../MontlyBenefits';
import Partners from '../Partners';
import OurBenefits from '../OurBenefits';
import FAQ from '../FAQ';
import Map from '../Map';
import About from '../About';
import RequestForm from '../RequestForm';
import Footer from './Footer';

const MainPage = () => (
  <PageLayout>
    <MainBanner />
    <About />
    <OurBenefits />
    <Coins />
    <MontlyBenefits />
    <Partners />
    <FAQ />
    <RequestForm />
    <Map />
    <Footer />
  </PageLayout>
);
export default MainPage;
