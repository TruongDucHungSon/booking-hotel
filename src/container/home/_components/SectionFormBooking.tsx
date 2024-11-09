/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';
import DateIc from '@/assets/svgs/arrow/date.svg';
import ArrowIc from '@/assets/svgs/arrow/down.svg';
import LocationIc from '@/assets/svgs/arrow/location.svg';
import StoreIc from '@/assets/svgs/arrow/store.svg';
import TimeIc from '@/assets/svgs/arrow/time.svg';
import downBLue from '@/assets/svgs/search/dropdowBlu.svg';
import CustomImage from '@/components/CustomImage';
import Title from '@/components/Title/Title';
import { setBookingData } from '@/redux/formBooking/slice';
import { useStaffData } from '@/services/staff/Staff.service';
import { vi } from 'date-fns/locale';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useDispatch } from 'react-redux';
const SectionFormBooking = ({ LOCATIONS }: any) => {
  const dispatch = useDispatch();
  const { data: DATA_STAFFS } = useStaffData();
  const STAFFS: any = DATA_STAFFS || [];
  console.log(STAFFS);
  const router = useRouter();
  const handleNavigate = () => {
    const destination = serviceLocation === 'Massage tại nhà' ? '/dat-lich-tai-nha' : '/dich-vu';
    router.push(destination);
  };

  // Load booking data from Redux

  const [store, setStore] = useState(LOCATIONS?.data?.[0].name);
  const [serviceLocation, setServiceLocation] = useState('Massage tại cửa hàng');
  const [selectedStaff, setSelectedStaff] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [startDate, setStartDate] = useState(new Date());

  const [dropdowns, setDropdowns] = useState({
    store: false,
    location: false,
    time: false,
    staff: false,
  });

  const toggleDropdown = (type: string) => {
    setDropdowns((prev) => ({
      ...prev,
      [type as keyof typeof dropdowns]: !prev[type as keyof typeof dropdowns],
    }));
  };

  const handleSelect = (type: string, value: string) => {
    if (type === 'store') setStore(value);
    if (type === 'location') {
      setServiceLocation(value);
      if (value === 'Massage tại nhà') {
        setStore('');
      }
    }
    if (type === 'time') setSelectedTime(value);
    if (type === 'staff') setSelectedStaff(value);
    toggleDropdown(type); // Close dropdown after selecting
  };

  const availableTimes = Array.from({ length: 48 }, (_, index) => {
    const hour = String(Math.floor(index / 2) + 8); // Start from 8 AM
    const minute = index % 2 === 0 ? '30' : '00';
    return `${hour}:${minute}`;
  });

  // Filter to include only times from 8:30 AM to 10:00 PM
  const filteredAvailableTimes = availableTimes.filter((time) => {
    const [hour, minute] = time.split(':').map(Number);
    return (
      (hour > 8 || (hour === 8 && minute === 30)) && (hour < 22 || (hour === 22 && minute === 0))
    );
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const bookingData = {
      store,
      serviceLocation,
      selectedTime,
      selectedStaff,
      startDate,
    };
    dispatch(setBookingData(bookingData));
    handleNavigate();
  };

  return (
    <section className="container top-0 z-[9999] mx-auto rounded-3xl bg-[#f5f6fa]">
      <div className="px-8 py-6">
        <Title type="secondary">Đặt lịch massage</Title>

        <form onSubmit={handleSubmit}>
          <div className="mt-6 flex flex-col gap-4 lg:flex-row lg:items-center">
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
                  {['Massage tại cửa hàng', 'Massage tại nhà'].map((location) => (
                    <li
                      key={location}
                      onClick={() => handleSelect('location', location)}
                      className="cursor-pointer rounded-xl px-4 py-2 text-sm transition-all duration-300 ease-in-out hover:bg-[#3A449B] hover:text-white lg:text-base"
                    >
                      {location}
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {/* Store Dropdown */}
            {serviceLocation === 'Massage tại cửa hàng' ? (
              <div className="relative w-full lg:w-1/3">
                <button
                  type="button"
                  onClick={() => toggleDropdown('store')}
                  className="flex w-full items-center justify-between rounded-2xl border bg-white px-4 py-[10px] text-xs font-medium text-black shadow-sm focus:border-[#3A449B] focus:outline-none lg:text-sm"
                >
                  <CustomImage width={18} height={18} src={StoreIc} alt="Arrow Down" />
                  {store || 'Chọn cửa hàng'}
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
            ) : (
              <div className="relative w-full lg:w-1/3">
                <button
                  type="button"
                  onClick={() => toggleDropdown('staff')}
                  className="flex w-full items-center justify-between rounded-2xl border bg-white px-4 py-[10px] text-sm font-medium text-black shadow-sm focus:border-[#3A449B] focus:outline-none lg:text-base"
                >
                  <CustomImage width={18} height={18} src={StoreIc} alt="Arrow Down" />
                  {selectedStaff || 'Chọn nhân viên'}
                  <CustomImage
                    width={18}
                    height={18}
                    src={ArrowIc}
                    alt="Arrow Down"
                    className={`transition-all duration-300 ${dropdowns.staff ? 'rotate-180' : ''}`}
                  />
                </button>
                {dropdowns.staff && (
                  <ul className="sidebar-scroll absolute z-10 mt-2 h-[250px] w-full overflow-y-scroll rounded-xl border bg-white shadow-lg">
                    {STAFFS?.data?.map((staffOption: any) => (
                      <li
                        key={staffOption.id}
                        onClick={() => handleSelect('staff', staffOption.name)}
                        className="cursor-pointer rounded-xl px-4 py-2 text-sm transition-all duration-300 ease-in-out hover:bg-[#3A449B] hover:text-white lg:text-base"
                      >
                        {staffOption.name}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            )}

            {/* Date and Time Pickers */}
            <div className="flex w-full flex-col items-center gap-2 rounded-2xl border border-[#CCCCCC] bg-white text-base font-medium text-[#B9B9B9] lg:w-[45%] lg:flex-row lg:px-2">
              <div className="relative flex w-full items-center justify-center gap-2 px-4 lg:px-0">
                <CustomImage
                  width={24}
                  height={24}
                  src={DateIc}
                  alt="Date Icon"
                  className="h-7 w-7"
                />
                <DatePicker
                  selected={startDate}
                  onChange={(date) => date && setStartDate(date)}
                  dateFormat="dd/MM/yyyy"
                  className="w-full rounded-2xl bg-white py-[10px] text-center text-sm font-medium text-black focus:outline-none lg:w-[95%] lg:text-base"
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
              <div className="relative flex w-full items-center justify-between px-4 lg:px-0">
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
                    {filteredAvailableTimes.map((time) => (
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

            {/* Submit Button */}
          </div>
          <div className="mt-4 flex w-full flex-col-reverse items-center justify-between gap-4 lg:flex-row">
            <p className="text-xs text-primary md:text-sm lg:text-base">
              Chương trình Săn Code Ưu Đãi độc quyền tại Bloom Massage, diễn ra vào thứ Hai, thứ Tư,
              thứ Sáu và Chủ Nhật hàng tuần!
            </p>
            <button
              type="submit"
              onClick={handleNavigate}
              className="w-full rounded-2xl bg-[#3A449B] px-4 py-2 text-sm font-medium text-white shadow-sm transition-all duration-300 ease-in-out hover:bg-[#2c3568] focus:outline-none lg:w-[260px] lg:text-base"
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
