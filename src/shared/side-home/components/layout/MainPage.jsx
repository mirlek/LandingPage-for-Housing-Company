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
import Contacts from '../Contacts';

const MainPage = () => (
  <PageLayout>
    <MainBanner />
    <About />
    <MontlyBenefits />
    <OurBenefits />
    <Coins />
    <Partners />
    <FAQ />
    <RequestForm />
    <Map />
    <Contacts />
  </PageLayout>
);
export default MainPage;
