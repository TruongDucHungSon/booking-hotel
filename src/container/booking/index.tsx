import React from 'react';
import SectionBooking from './_components/SectionBooking';
import SectionGallery from './_components/SectionGallery';

const BookingPage = () => {
  return (
    <main className="container">
      <SectionBooking />
      <SectionGallery />
    </main>
  );
};

export default BookingPage;
