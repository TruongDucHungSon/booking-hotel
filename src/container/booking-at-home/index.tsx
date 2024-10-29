import SectionProducts from '@/components/SectionProducts/SectionProducts';
import SectionFormBookingAtHome from './_components/SectionFormBookingAtHome';

const BookingAtHomePage = () => {
  return (
    <main className="container pt-20">
      <SectionFormBookingAtHome />
      <SectionProducts />
    </main>
  );
};

export default BookingAtHomePage;
