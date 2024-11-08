'use client';
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useLocationData } from '@/services/location/Location.Service';
import { useStaffData } from '@/services/staff/Staff.service';
import SectionBanner from './_components/SectionBanner';
import SectionContact from './_components/SectionContact';
import SectionCustomer from './_components/SectionCustomer';
import SectionFormBooking from './_components/SectionFormBooking';
import SectionIntroduce from './_components/SectionIntroduce';
import SectionNew from './_components/SectionNew';
import SectionSale from './_components/SectionSale';
import SectionService from './_components/SectionService';

const HomePage = () => {
  const { data: DATA_LOCATIONS } = useLocationData();
  const LOCATIONS: any = DATA_LOCATIONS || [];
  console.log(LOCATIONS);

  const { data: DATA_STAFFS } = useStaffData();
  const STAFFS: any = DATA_STAFFS || [];

  return (
    <main className="relative">
      <SectionBanner />
      <SectionFormBooking LOCATIONS={LOCATIONS} STAFFS={STAFFS} />
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
