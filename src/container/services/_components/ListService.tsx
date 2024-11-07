/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import CustomImage from '@/components/CustomImage/index';
import Title from '@/components/Title/Title';
import { useServiceData } from '@/services/services/Services.Service';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useEffect, useMemo, useState } from 'react';

// Function to format the price with commas
const formatPrice = (price: number) => {
  return new Intl.NumberFormat('vi-VN').format(price);
};

const ListService = () => {
  const { data: DATA_SERVICES } = useServiceData();
  const SERVICES: any = useMemo(() => DATA_SERVICES || [], [DATA_SERVICES]);

  // State to hold the selected package and its title
  const [selectedPackage, setSelectedPackage] = useState<any>(null);

  // Set the first package as the default selected package when the component mounts
  useEffect(() => {
    if (SERVICES?.data?.length) {
      setSelectedPackage(SERVICES?.data[0]); // Set the first package as the default
    }
  }, [SERVICES]);

  // Handle package click to filter the services and change the title
  const handlePackageClick = (pkg: any) => {
    setSelectedPackage(pkg);
  };

  // Filter the services of the selected package
  const filteredServices = selectedPackage ? selectedPackage.services : [];

  return (
    <>
      {/* Display all packages initially */}
      <div className="mt-6 grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-5">
        {SERVICES?.data?.map((pkg: any) => (
          <div
            key={pkg.id}
            className="group max-w-sm transform cursor-pointer rounded-3xl"
            onClick={() => handlePackageClick(pkg)} // Set selected package on click
          >
            <div className="flex justify-center overflow-hidden rounded-xl">
              <CustomImage
                src={pkg.image?.thumbnail || ''}
                alt="service"
                width={500}
                height={500}
                className="max-h-[100px]"
              />
            </div>
            <h3 className="mt-2 text-center text-sm font-normal text-primary md:text-base lg:text-lg">
              {pkg.name}
            </h3>
          </div>
        ))}
      </div>

      {/* Dynamically change title and services based on the selected package */}
      <div className="mx-auto mb-8 py-6 lg:mb-[56px] lg:py-12">
        {/* Fade effect applied to the title */}
        <motion.div
          key={selectedPackage?.id} // Ensure animation triggers when the package changes
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }} // Slower fade effect for the title
        >
          <Title>{selectedPackage ? selectedPackage.name : 'Gói Massage Thư Giãn'}</Title>
        </motion.div>

        <div className="mt-4 flex flex-col items-center justify-center lg:mt-8 lg:flex-row">
          {/* Left Section: Image */}
          <div className="flex w-[80%] justify-center md:w-[50%] lg:w-1/2">
            <div className="relative lg:max-w-[530px]">
              <CustomImage
                src={selectedPackage?.image?.url || ''}
                alt="massage"
                width={500}
                height={500}
              />
            </div>
          </div>

          {/* Right Section: Services */}
          <div className="mt-4 w-full md:mt-8 lg:w-1/2">
            {/* Fade effect applied to filtered services */}
            <motion.div
              key={selectedPackage?.id} // Ensure animation triggers when the package changes
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1 }} // Slower fade effect for the services
            >
              {filteredServices?.map((service: any) => (
                <div key={service.id} className="mb-8 rounded-3xl border border-[#E4E4E7] p-6">
                  <h2 className="flex items-center text-base font-semibold text-primary md:text-lg">
                    {service.name}
                  </h2>
                  <div className="my-4 flex h-10 items-center justify-between rounded-xl bg-custom-gradient px-4 py-[10px] text-white">
                    <p className="text-xs font-medium md:text-base">
                      {service.duration ? `${service.duration} phút / Lần` : 'Chưa có thời gian'}
                    </p>
                    <p className="text-xs font-semibold md:text-base">
                      {service.price ? `${formatPrice(service.price)} / VND` : 'Chưa có giá'}
                    </p>
                  </div>

                  <div className="mt-4 flex flex-col gap-2 text-xs text-gray-600 md:text-sm">
                    <div className="flex items-center gap-2">
                      <span>
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M20.9556 5.9022L9.05063 19.5079L3.04199 13.4992L4.5004 12.0408L8.95017 16.4906L19.4034 4.54404L20.9556 5.9022Z"
                            fill="url(#paint0_linear_1216_2990)"
                          />
                          <defs>
                            <linearGradient
                              id="paint0_linear_1216_2990"
                              x1="6.44333"
                              y1="16.6576"
                              x2="25.1068"
                              y2="15.3477"
                              gradientUnits="userSpaceOnUse"
                            >
                              <stop stopColor="#DD1B1C" />
                              <stop offset="1" stopColor="#9E1E1F" />
                            </linearGradient>
                          </defs>
                        </svg>
                      </span>
                      {service.description}
                    </div>
                  </div>

                  <div className="mt-6 flex flex-col items-center justify-between gap-3 lg:flex-row">
                    <p className="text-sm font-semibold text-[#181818] md:text-base">
                      Giá chưa bao gồm VAT & TIP.
                    </p>

                    <Link
                      href="/dat-lich"
                      className="group flex items-center gap-2 text-sm text-[#3A449B] hover:underline md:text-base"
                    >
                      Đặt lịch ngay
                      <span className="transition-all duration-300 group-hover:translate-x-2">
                        <svg
                          width="17"
                          height="17"
                          viewBox="0 0 17 17"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g clipPath="url(#clip0_1166_21082)">
                            <path
                              d="M10.5999 12.7117L9.65993 11.7717L12.7133 8.71172H1.93327V7.37839H12.7133L9.65327 4.31839L10.5999 3.37839L15.2666 8.04505L10.5999 12.7117Z"
                              fill="#3A449B"
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0_1166_21082">
                              <rect
                                width="16"
                                height="16"
                                fill="white"
                                transform="matrix(-1 0 0 1 16.5999 0.0450439)"
                              />
                            </clipPath>
                          </defs>
                        </svg>
                      </span>
                    </Link>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ListService;
