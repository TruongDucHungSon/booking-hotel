/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';
import DateIc from '@/assets/svgs/arrow/date.svg';
import ArrowIc from '@/assets/svgs/arrow/down.svg';
import LocationIc from '@/assets/svgs/arrow/location.svg';
import StoreIc from '@/assets/svgs/arrow/store.svg';
import TimeIc from '@/assets/svgs/arrow/time.svg';
import downBLue from '@/assets/svgs/search/dropdowBlu.svg';
import CustomImage from '@/components/CustomImage';
import { setBookingData } from '@/redux/formBooking/slice';
import { RootState } from '@/redux/rootReducers';
import { useLocationData } from '@/services/location/Location.Service';
import { typeServices } from '@/utils/constants';
import { formatDateString } from '@/utils/helpers';
import { vi } from 'date-fns/locale';
import React, { useEffect, useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useDispatch, useSelector } from 'react-redux';

const SectionFormBooking = () => {
  const dispatch = useDispatch();
  const { data: DATA_LOCATIONS } = useLocationData();
  const LOCATIONS: any = DATA_LOCATIONS || [];

  const bookingDataFromRedux = useSelector((state: RootState) => state.booking.bookingData);
  console.log(bookingDataFromRedux);

  // State for booking data, either from Redux or localStorage
  const [bookingData, setBookingDataState] = useState(bookingDataFromRedux);
  console.log(bookingData);

  const [store, setStore] = useState(bookingData?.store || LOCATIONS?.data?.[0].name);
  const [serviceLocation, setServiceLocation] = useState(
    bookingData?.serviceLocation || 'Massage tại cửa hàng',
  );
  const [selectedTime, setSelectedTime] = useState(bookingData?.selectedTime || '');
  const [startDate, setStartDate] = useState(bookingData?.startDate || new Date());

  // Load from localStorage if Redux has no data
  useEffect(() => {
    if (!bookingDataFromRedux) {
      const savedData = localStorage.getItem('bookingData');
      if (savedData) {
        const parsedData = JSON.parse(savedData);
        setBookingDataState(parsedData);

        // Optional: Sync localStorage data to Redux
        dispatch(setBookingData(parsedData));
      }
    }
  }, [bookingDataFromRedux, dispatch]);

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

  const formattedDate = formatDateString('2024-11-07T05:57:14.000Z');
  console.log(formattedDate);

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
    <section className="pt-10 lg:pt-20">
      {/* form */}
      <div className="rounded-3xl bg-[#F3F3F3] py-3 lg:px-8 lg:py-6">
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col gap-4 px-2 lg:flex-row lg:items-center lg:p-0">
            {/* Location Dropdown */}
            <div className="relative w-full lg:w-1/3">
              <button
                type="button"
                onClick={() => toggleDropdown('location')}
                className="flex w-full items-center justify-between rounded-2xl border bg-white px-4 py-[10px] text-sm font-medium text-[#3A449B] focus:border-[#3A449B] focus:outline-none lg:text-base"
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
                  {typeServices.map((location) => (
                    <li
                      key={location.id}
                      onClick={() => handleSelect('location', location.type)}
                      className="cursor-pointer rounded-xl px-4 py-2 text-sm transition-all duration-300 ease-in-out hover:bg-[#3A449B] hover:text-white lg:text-base"
                    >
                      {location.type}
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {/* Store Dropdown */}
            <div className="relative w-full lg:w-1/3">
              <button
                type="button"
                onClick={() => toggleDropdown('store')}
                className="flex w-full items-center justify-between rounded-2xl border bg-white px-4 py-[10px] text-xs font-medium text-black shadow-sm focus:border-[#3A449B] focus:outline-none lg:text-sm"
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
                  {LOCATIONS?.data?.map((location: any) => (
                    <li
                      key={location.id}
                      onClick={() => handleSelect('store', location.name)}
                      className="cursor-pointer rounded-xl px-4 py-2 text-xs transition-all duration-300 ease-in-out hover:bg-[#3A449B] hover:text-white lg:text-sm"
                    >
                      {location.name}
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {/* Date and Time Pickers */}
            <div className="flex w-full flex-col items-center gap-2 rounded-2xl border border-[#CCCCCC] bg-white px-2 text-base font-medium text-[#B9B9B9] lg:w-[43%] lg:flex-row">
              <div className="relative flex w-full items-center justify-center gap-1 px-2 lg:px-1">
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
                  className="w-full rounded-2xl bg-white py-[10px] text-center text-sm font-medium text-black focus:outline-none lg:text-base"
                  placeholderText="Chọn ngày"
                  locale={vi}
                  popperPlacement="bottom"
                  wrapperClassName="w-full"
                />
                <CustomImage
                  width={18}
                  height={18}
                  src={ArrowIc}
                  alt="Arrow Down"
                  className="h-6 w-6"
                />
              </div>

              <span className="hidden lg:block">|</span>
              <div className="relative flex w-full items-center justify-between px-2 lg:px-0">
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
                  className="w-full cursor-pointer rounded-md border-none bg-transparent px-2 py-2 text-center text-sm font-medium text-primary focus:border-[#3A449B] focus:outline-none lg:text-base"
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
                  <ul className="sidebar-scroll absolute left-0 top-12 z-10 h-[250px] w-full overflow-y-scroll rounded-xl border bg-white shadow-lg">
                    {availableTimes.map((time) => (
                      <li
                        key={time}
                        onClick={() => handleSelect('time', time)}
                        className="cursor-pointer rounded-xl px-4 py-[10px] text-sm transition-all duration-300 ease-in-out hover:bg-[#3A449B] hover:text-white lg:text-base"
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
    </section>
  );
};

export default SectionFormBooking;
