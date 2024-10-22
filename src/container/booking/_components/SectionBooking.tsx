'use client';

import Title from '@/components/Title/Title';
import { vi } from 'date-fns/locale';
import Link from 'next/link';
import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import sv1 from '../../../assets/images/new/sv1.png';
import sv2 from '../../../assets/images/new/sv2.png';
import sv3 from '../../../assets/images/new/sv3.png';
import sv4 from '../../../assets/images/new/sv4.png';
import sv5 from '../../../assets/images/new/sv5.png';
import sv6 from '../../../assets/images/new/sv6.png';
import DateIc from '../../../assets/svgs/arrow/date.svg';
import ArrowIc from '../../../assets/svgs/arrow/down.svg';
import LocationIc from '../../../assets/svgs/arrow/location.svg';
import StoreIc from '../../../assets/svgs/arrow/store.svg';
import TimeIc from '../../../assets/svgs/arrow/time.svg';
import downBLue from '../../../assets/svgs/search/dropdowBlu.svg';
import CustomImage from '../../../components/CustomImage';

const services = [
  {
    id: 1,
    name: 'Gói trị liệu phòng chung',
    image: sv1,
  },
  {
    id: 2,
    name: 'Gói trị liệu phòng VIP',
    image: sv2,
  },
  {
    id: 3,
    name: 'Gói trị liệu truyền thống',
    image: sv3,
  },
  {
    id: 4,
    name: 'Gói trị liệu nâng cao',
    image: sv4,
  },
  {
    id: 5,
    name: 'Gói trị liệu chuyên sâu',
    image: sv5,
  },
] as const;

const servicesDetails = [
  {
    title: 'Gói dịch vụ chung 60 phút',
    duration: 'Thời gian: 60 phút',
    price: '350,000 VND/Lần',
    details: [
      'Tắm sạch bằng bộ sản phẩm tắm gội thảo dược theo mùa',
      'Xông hơi ướt với lá xông theo mùa, ngâm chân muối thảo dược',
      'Chăm sóc toàn thân với kem Ngải Diệp hoặc kem Gừng',
      'Ăn nhẹ với cháo dưỡng sinh, nước uống thảo dược và hoa quả',
    ],
  },
  {
    title: 'Gói dịch vụ chung 105 phút',
    duration: 'Thời gian: 105 phút',
    price: '450,000 VND/Lần',
    details: [
      'Tắm sạch bằng bộ sản phẩm tắm gội thảo dược theo mùa',
      'Xông hơi ướt với lá xông theo mùa, ngâm chân muối thảo dược',
      'Ngâm bồn sục với thuốc tắm thảo dược',
      'Tắm trắng ngũ hoa lá xông theo mùa',
      'Đắp mặt nạ ngũ hoa',
      'Chăm sóc toàn thân với kem Ngải Diệp/Gừng và phương pháp chườm ngải cứu nóng',
      'Ăn nhẹ với cháo dưỡng sinh, nước uống thảo dược và hoa quả',
    ],
  },
] as const;

const SectionFormBooking = () => {
  const [store, setStore] = useState('Bloom Massage Hoàn Kiếm Hà Nội');
  const [serviceLocation, setServiceLocation] = useState('Massage tại cửa hàng');
  const [selectedTime, setSelectedTime] = useState('');
  const [startDate, setStartDate] = useState(new Date());
  const [dropdowns, setDropdowns] = useState({
    store: false,
    location: false,
    time: false,
  });

  const toggleDropdown = (type: string) => {
    setDropdowns((prev) => ({
      ...prev,
      [type as keyof typeof dropdowns]: !prev[type as keyof typeof dropdowns],
    }));
  };

  const handleSelect = (type: string, value: string) => {
    if (type === 'store') setStore(value);
    if (type === 'location') setServiceLocation(value);
    if (type === 'time') setSelectedTime(value);
    toggleDropdown(type); // Close dropdown after selecting
  };

  const stores = [
    'Bloom Massage Hoàn Kiếm Hà Nội',
    'Bloom Massage Cầu Giấy',
    'Bloom Massage Đống Đa',
    'Bloom Massage Tây Hồ',
    'Bloom Massage Ba Đình',
  ];

  const availableTimes = Array.from({ length: 48 }, (_, index) => {
    const hour = String(Math.floor(index / 2)).padStart(2, '0');
    const minute = index % 2 === 0 ? '00' : '30';
    return `${hour}:${minute}`;
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const bookingData = {
      store,
      serviceLocation,
      selectedTime,
      startDate,
    };
    console.log('Booking Data:', bookingData);
    // You can send the bookingData to your server or handle it as needed
  };

  return (
    <section className="py-20">
      {/* form */}
      <div className="container">
        <div className="rounded-3xl bg-[#F3F3F3] px-8 py-6">
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col gap-4 md:flex-row md:items-center">
              {/* Location Dropdown */}
              <div className="relative w-full md:w-1/3">
                <button
                  type="button"
                  onClick={() => toggleDropdown('location')}
                  className="flex w-full items-center justify-between rounded-2xl border bg-white px-4 py-[10px] text-base font-medium text-[#3A449B] focus:border-[#3A449B] focus:outline-none"
                >
                  <CustomImage width={18} height={18} src={LocationIc} alt="Arrow Down" />
                  {serviceLocation}
                  <CustomImage
                    width={18}
                    height={18}
                    src={downBLue}
                    alt="Arrow Down"
                    className={`transition-all duration-300 ${dropdowns.location ? 'rotate-180' : ''}`}
                  />
                </button>
                {dropdowns.location && (
                  <ul className="absolute z-10 mt-2 w-full rounded-xl border bg-white shadow-lg">
                    {['Massage tại cửa hàng', 'Massage tại nhà'].map((location) => (
                      <li
                        key={location}
                        onClick={() => handleSelect('location', location)}
                        className="cursor-pointer rounded-xl px-4 py-2 transition-all duration-300 ease-in-out hover:bg-[#3A449B] hover:text-white"
                      >
                        {location}
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              {/* Store Dropdown */}
              <div className="relative w-full md:w-1/3">
                <button
                  type="button"
                  onClick={() => toggleDropdown('store')}
                  className="flex w-full items-center justify-between rounded-2xl border bg-white px-4 py-[10px] text-base font-medium text-black shadow-sm focus:border-[#3A449B] focus:outline-none"
                >
                  <CustomImage width={18} height={18} src={StoreIc} alt="Arrow Down" />
                  {store}
                  <CustomImage
                    width={18}
                    height={18}
                    src={ArrowIc}
                    alt="Arrow Down"
                    className={`transition-all duration-300 ${dropdowns.store ? 'rotate-180' : ''}`}
                  />
                </button>
                {dropdowns.store && (
                  <ul className="absolute z-10 mt-2 w-full rounded-xl border bg-white shadow-lg">
                    {stores.map((storeOption) => (
                      <li
                        key={storeOption}
                        onClick={() => handleSelect('store', storeOption)}
                        className="cursor-pointer rounded-xl px-4 py-2 transition-all duration-300 ease-in-out hover:bg-[#3A449B] hover:text-white"
                      >
                        {storeOption}
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              {/* Date and Time Pickers */}
              <div className="flex w-full items-center gap-2 rounded-2xl border border-[#CCCCCC] bg-white px-2 text-base font-medium text-[#B9B9B9] lg:w-[43%]">
                <div className="relative flex w-full items-center justify-center gap-1 px-1">
                  <CustomImage
                    width={18}
                    height={18}
                    src={DateIc}
                    alt="Arrow Down"
                    className="h-6 w-6"
                  />
                  <DatePicker
                    selected={startDate}
                    onChange={(date) => date && setStartDate(date)}
                    dateFormat="dd/MM/yyyy"
                    className="w-full rounded-2xl bg-white py-[10px] text-base font-medium text-black focus:outline-none"
                    placeholderText="Chọn ngày"
                    locale={vi}
                    popperPlacement="bottom"
                  />
                  <CustomImage
                    width={18}
                    height={18}
                    src={ArrowIc}
                    alt="Arrow Down"
                    className="h-6 w-6"
                  />
                </div>

                <span>|</span>
                <div className="relative flex w-full items-center justify-between">
                  <CustomImage
                    width={50}
                    height={50}
                    src={TimeIc}
                    alt="Arrow Down"
                    className="h-6 w-7"
                  />
                  <button
                    type="button"
                    onClick={() => toggleDropdown('time')}
                    className="w-full cursor-pointer rounded-md border-none bg-transparent px-2 py-2 text-left text-base font-medium text-primary focus:border-[#3A449B] focus:outline-none"
                  >
                    {selectedTime || 'Chọn giờ'}
                  </button>
                  <CustomImage
                    width={50}
                    height={50}
                    src={ArrowIc}
                    alt="Arrow Down"
                    className="h-6 w-6"
                  />
                  {dropdowns.time && (
                    <ul className="sidebar-scroll absolute top-12 z-10 h-[250px] w-full overflow-y-scroll rounded-xl border bg-white shadow-lg">
                      {availableTimes.map((time) => (
                        <li
                          key={time}
                          onClick={() => handleSelect('time', time)}
                          className="cursor-pointer rounded-xl px-4 py-[10px] transition-all duration-300 ease-in-out hover:bg-[#3A449B] hover:text-white"
                        >
                          {time}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            </div>
          </form>
        </div>
        {/* list services massage */}
        <div className="mt-6 grid grid-cols-2 gap-6 lg:grid-cols-5">
          {services.map((service) => (
            <div key={service.id} className="group max-w-sm transform rounded-3xl">
              <div className="flex justify-center overflow-hidden rounded-xl">
                <CustomImage
                  src={service.image}
                  alt="service"
                  width={500}
                  height={500}
                  className="max-h-[100px] cursor-pointer"
                />
              </div>
              <h3 className="mt-2 text-center text-lg font-normal text-primary">{service.name}</h3>
            </div>
          ))}
        </div>

        <div className="container mx-auto mb-[56px] px-4 py-12">
          <Title>Gói trị liệu phòng chung</Title>

          <div className="mt-8 flex flex-col items-center justify-center md:flex-row">
            {/* Left Section: Image */}
            <div className="flex w-full justify-center md:w-1/2">
              <div className="relative h-[600px] max-w-[530px]">
                <CustomImage src={sv6} alt="massage" width={500} height={500} />
              </div>
            </div>

            {/* Right Section: Services */}
            <div className="mt-8 w-full md:ml-8 md:mt-0 md:w-1/2">
              {servicesDetails.map((service, index) => (
                <div key={index} className="mb-8 rounded-3xl border border-[#E4E4E7] p-6">
                  <h2 className="] flex items-center text-lg font-semibold text-primary">
                    {service.title}
                  </h2>
                  <div className="my-4 flex h-10 items-center justify-between rounded-xl bg-custom-gradient px-4 py-[10px] text-white">
                    <p className="text-base font-medium">{service.duration} </p>
                    <p className="text-base font-semibold">{service.price}</p>
                  </div>

                  <ul className="mt-4 flex flex-col gap-2 text-sm text-gray-600">
                    {service.details.map((detail, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <span>
                          <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
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
                                <stop stop-color="#DD1B1C" />
                                <stop offset="1" stop-color="#9E1E1F" />
                              </linearGradient>
                            </defs>
                          </svg>
                        </span>{' '}
                        {detail}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-6 flex items-center justify-between">
                    <p className="text-base font-semibold text-[#181818]">
                      Giá chưa bao gồm VAT & TIP.
                    </p>

                    <Link
                      href={'#'}
                      className="group flex items-center gap-2 text-[#3A449B] hover:underline"
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
                          <g clip-path="url(#clip0_1166_21082)">
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
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionFormBooking;
