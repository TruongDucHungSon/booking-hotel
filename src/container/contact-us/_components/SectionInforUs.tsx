// File: SectionInforUs.tsx

'use client';

import addressIc from '@/assets/svgs/contact/address.svg';
import phoneIc from '@/assets/svgs/contact/phone.svg';
import addressWhite from '@/assets/svgs/contact/white_address.svg';
import callWhite from '@/assets/svgs/contact/white_call.svg';
import WhiteDrIc from '@/assets/svgs/contact/white_dr.svg';
import CustomImage from '@/components/CustomImage';
import Title from '@/components/Title/Title';
import { Branch, branches } from '@/utils/constants';
import L from 'leaflet';
import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';
import FormContact from './FormContact';

// Dynamically import react-leaflet components to avoid SSR issues
const MapContainer = dynamic(() => import('react-leaflet').then((mod) => mod.MapContainer), {
  ssr: false,
});
const TileLayer = dynamic(() => import('react-leaflet').then((mod) => mod.TileLayer), {
  ssr: false,
});
const Marker = dynamic(() => import('react-leaflet').then((mod) => mod.Marker), { ssr: false });
const Popup = dynamic(() => import('react-leaflet').then((mod) => mod.Popup), { ssr: false });

// Custom marker icon setup
const customMarkerIcon = new L.Icon({
  iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png', // Adjust path if necessary
  iconSize: [32, 32],
});

const SectionInforUs: React.FC = () => {
  const [activeBranch, setActiveBranch] = useState<Branch | null>(null);
  const [isClient, setIsClient] = useState(false);
  const handleBranchClick = (branch: Branch) => {
    setActiveBranch(branch);
  };
  useEffect(() => {
    setIsClient(true); // Ensure component only mounts on the client
  }, []);

  return (
    <div className="container py-10 lg:py-20">
      <Title>Liên hệ với chúng tôi</Title>
      <div className="mt-4 h-fit space-y-6 rounded-lg bg-white md:mt-8">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-[1.2fr,1fr]">
          {/* Branch List */}
          <div className="rounded-xl border border-[#E8E8E8] p-4 md:p-6">
            <h3 className="mb-4 text-base font-semibold text-[#18181B] md:text-lg">
              Chi Nhánh Của Chúng Tôi
            </h3>
            <ul className="sidebar-scroll h-[530px] space-y-4 overflow-y-scroll">
              {branches.map((branch) => (
                <li
                  key={branch.name}
                  onClick={() => handleBranchClick(branch)}
                  className={`mr-2 cursor-pointer rounded-lg border p-4 text-sm md:text-base ${
                    activeBranch?.name === branch.name
                      ? 'bg-[#3A449B] text-white'
                      : 'border-gray-200'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="mb-[6px] text-base font-semibold md:text-lg">{branch.name}</p>
                      <div className="flex items-center gap-2">
                        <CustomImage
                          width={18}
                          height={18}
                          src={activeBranch?.name === branch.name ? addressWhite : addressIc}
                          alt="Address"
                        />
                        <p className="text-sm">{branch.address}</p>
                      </div>
                      <div className="mt-2 flex items-center gap-2">
                        <CustomImage
                          width={18}
                          height={18}
                          src={activeBranch?.name === branch.name ? callWhite : phoneIc}
                          alt="Phone"
                        />
                        <p className="text-sm">0981 123 106</p>
                      </div>
                    </div>
                    <div>
                      <CustomImage width={18} height={18} src={WhiteDrIc} alt="Doctor Icon" />
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Customer Information Form */}
          <FormContact />
        </div>

        {/* Interactive Map */}
        {isClient && typeof window !== 'undefined' && (
          <div className="mt-6 h-[400px] w-full overflow-hidden rounded-lg">
            <MapContainer center={[10.7769, 106.7009]} zoom={13} className="h-full w-full">
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
              />
              {branches.map((branch) => (
                <Marker key={branch.name} position={branch.coords} icon={customMarkerIcon}>
                  <Popup>
                    <strong>{branch.name}</strong>
                    <br />
                    {branch.address}
                  </Popup>
                </Marker>
              ))}
            </MapContainer>
          </div>
        )}
      </div>
    </div>
  );
};

export default SectionInforUs;
