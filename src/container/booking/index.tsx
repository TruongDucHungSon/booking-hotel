import SectionProducts from '@/components/SectionProducts/SectionProducts';
import SectionFormBooking from '../booking/_components/SectionFormBooking';

const BookingPage = () => {
  return (
    <main className="container pt-10 lg:pt-20">
      <SectionFormBooking />
      <SectionProducts />
    </main>
  );
};

export default BookingPage;
