import ListService from './_components/ListService';
import SectionBooking from './_components/SectionBooking';
import SectionGallery from './_components/SectionGallery';

const ServicesPage = () => {
  return (
    <main className="container">
      <SectionBooking />
      <ListService />
      <SectionGallery />
    </main>
  );
};

export default ServicesPage;
