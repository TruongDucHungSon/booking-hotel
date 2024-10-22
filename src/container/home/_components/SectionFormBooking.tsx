'use client';
import DateIc from '@/assets/svgs/arrow/date.svg';
import ArrowIc from '@/assets/svgs/arrow/down.svg';
import LocationIc from '@/assets/svgs/arrow/location.svg';
import StoreIc from '@/assets/svgs/arrow/store.svg';
import TimeIc from '@/assets/svgs/arrow/time.svg';
import downBLue from '@/assets/svgs/search/dropdowBlu.svg';
import CustomImage from '@/components/CustomImage';
import Title from '@/components/Title/Title';
import { vi } from 'date-fns/locale';
import { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

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
    <section className="sticky top-0 z-[9999] mx-auto bg-[#ffffff]">
      <div className="container bg-[#ffff] px-8 py-6">
        <Title type="primary">Đặt lịch massage</Title>

        <form onSubmit={handleSubmit}>
          <div className="mt-6 flex flex-col gap-4 md:flex-row md:items-center">
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
            <div className="flex w-full items-center gap-2 rounded-2xl border border-[#CCCCCC] bg-white px-2 text-base font-medium text-[#B9B9B9] lg:w-[42%]">
              <div className="relative flex w-full items-center justify-center gap-2 px-2">
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

            {/* Submit Button */}
          </div>
          <div className="mt-4 flex w-full items-center justify-between">
            <p className="text-base text-primary">
              Chương trình Săn Code Ưu Đãi độc quyền tại Bloom Massage, diễn ra vào thứ Hai, thứ Tư,
              thứ Sáu và Chủ Nhật hàng tuần!
            </p>
            <button
              type="submit"
              className="w-full rounded-2xl bg-[#3A449B] px-4 py-2 text-base font-medium text-white shadow-sm transition-all duration-300 ease-in-out hover:bg-[#2c3568] focus:outline-none lg:w-[260px]"
            >
              Đặt lịch ngay
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default SectionFormBooking;
