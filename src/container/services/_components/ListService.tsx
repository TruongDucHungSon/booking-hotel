/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import sv1 from '@/assets/images/new/sv1.png';
import sv7 from '@/assets/images/new/sv6.png';
import CustomImage from '@/components/CustomImage/index';
import Title from '@/components/Title/Title';
import { useServiceData } from '@/services/services/Services.Service';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { useEffect, useMemo, useState } from 'react';
import { useFormContext } from 'react-hook-form';

const ListService = () => {
  const router = useRouter();
  const { data: DATA_SERVICES } = useServiceData();
  const SERVICES: any = useMemo(() => DATA_SERVICES || [], [DATA_SERVICES]);
  const methods = useFormContext();

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

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('vi-VN').format(price);
  };

  // Filter the services of the selected package
  const filteredServices = selectedPackage ? selectedPackage.services : [];

  // Handle the booking of a service
  const handleBook = (service: any) => {
    methods.setValue('service', service);
    methods.setValue('category', selectedPackage);

    router.push('/dat-lich');
  };

  return (
    <section className="mt-[28px] lg:mt-[56px]">
      {/* Display all packages initially */}
      <div className="mt-6 w-full">
        {/* Container with scrollable behavior on smaller screens */}
        <div className="scroll-snap-x sidebar-scroll md:scroll-snap-x-start lg:scroll-snap-none flex space-x-6 overflow-x-auto lg:space-x-8 lg:overflow-x-visible">
          {SERVICES?.data?.map((pkg: any) => (
            <div
              key={pkg.id}
              className={`scroll-snap-start group mb-4 max-w-sm transform cursor-pointer rounded-3xl transition-all duration-300`} // snap-align applied here
              onClick={() => handlePackageClick(pkg)} // Set selected package on click
            >
              <div
                className={`flex justify-center overflow-hidden rounded-[28px] ${
                  selectedPackage?.id === pkg.id
                    ? 'border-2 border-[#3a449b]' // Active style: border and text color
                    : 'border-transparent' // Default style
                } `}
              >
                <CustomImage
                  src={sv1.src || pkg.image?.thumbnail}
                  alt="service"
                  width={500}
                  height={500}
                  className="h-[100px] w-[250px] lg:w-[[calc(100%/20%)]]"
                  classNameImg="rounded-3xl"
                />
              </div>
              <h3
                className={`mt-2 text-center text-sm font-medium md:text-base lg:text-lg ${
                  selectedPackage?.id === pkg.id
                    ? 'font-semibold text-[#3a449b]' // Active style: border and text color
                    : 'border-transparent' // Default style
                }`}
              >
                {pkg.name}
              </h3>
            </div>
          ))}
        </div>
      </div>

      {/* Dynamically change title and services based on the selected package */}
      <div className="mx-auto mb-8 py-6 lg:mb-[56px] lg:py-12">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          key={selectedPackage?.id}
        >
          <Title>{selectedPackage ? selectedPackage.name : 'Gói Massage Thư Giãn'}</Title>
        </motion.div>

        <div className="mt-4 flex flex-col items-center justify-center lg:mt-8 lg:flex-row">
          <div className="flex w-[80%] justify-center md:w-[50%] lg:w-1/2">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="relative hidden md:block lg:max-w-[530px]"
            >
              <CustomImage
                src={sv7.src || selectedPackage?.image?.url || ''}
                alt="massage"
                width={500}
                height={500}
              />
            </motion.div>
          </div>

          {/* Right Section: Services */}
          <div className="mt-4 w-full md:mt-8 lg:w-1/2">
            <motion.div
              key={selectedPackage?.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1 }}
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

                    <button
                      className="group flex items-center gap-2 text-sm text-[#3A449B] hover:underline md:text-base"
                      onClick={() => handleBook(service)}
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
                              d="M10.5999 12.7117L9.65993 11.7717L12.7133 8.71172H1.93327V7.37839H12.7133L9.65327 4.31839L10.5999 3.37839L15.9333 8.71172L10.5999 12.7117Z"
                              fill="#3A449B"
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0_1166_21082">
                              <rect width="17" height="17" fill="white" />
                            </clipPath>
                          </defs>
                        </svg>
                      </span>
                    </button>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ListService;
