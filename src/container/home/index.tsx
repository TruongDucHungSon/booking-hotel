import SectionBanner from './_components/SectionBanner';
import SectionContact from './_components/SectionContact';
import SectionCustomer from './_components/SectionCustomer';
import SectionFormBooking from './_components/SectionFormBooking';
import SectionIntroduce from './_components/SectionIntroduce';
import SectionNew from './_components/SectionNew';
import SectionSale from './_components/SectionSale';
import SectionService from './_components/SectionService';

const HomePage = () => {
  return (
    <main className="relative">
      <SectionBanner />
      <SectionFormBooking />
      <SectionIntroduce />
      <SectionService />
      <SectionSale />
      <SectionNew />
      <SectionCustomer />
      <SectionContact />
    </main>
  );
};

export default HomePage;
