/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';
import DateIc from '@/assets/svgs/arrow/date.svg';
import ArrowIc from '@/assets/svgs/arrow/down.svg';
import LocationIc from '@/assets/svgs/arrow/location.svg';
import StoreIc from '@/assets/svgs/arrow/store.svg';
import TimeIc from '@/assets/svgs/arrow/time.svg';
import downBlue from '@/assets/svgs/search/dropdowBlu.svg';
import CustomImage from '@/components/CustomImage';
import { setBookingData } from '@/redux/formBooking/slice';
import { RootState } from '@/redux/rootReducers';
import { useLocationData } from '@/services/location/Location.Service';
import { typeServices } from '@/utils/constants';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { Controller, useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';

const SectionFormBooking = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const { data: DATA_LOCATIONS } = useLocationData();
  const LOCATIONS: any = DATA_LOCATIONS || [];
  const bookingDataFromRedux = useSelector((state: RootState) => state.booking.bookingData);

  const {
    control,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<any>({
    defaultValues: {
      serviceLocation: bookingDataFromRedux?.serviceLocation || 'Massage tại cửa hàng',
      store: bookingDataFromRedux?.store || LOCATIONS?.data?.[0].name,
      selectedStaff: bookingDataFromRedux?.selectedStaff || '',
      selectedTime: bookingDataFromRedux?.selectedTime || '',
      startDate: bookingDataFromRedux?.startDate || new Date(),
    },
  });

  const [dropdowns, setDropdowns] = useState<{ [key: string]: boolean }>({
    store: false,
    location: false,
    time: false,
  });

  const toggleDropdown = (type: string) => {
    setDropdowns((prev) => ({
      ...prev,
      [type]: !prev[type],
    }));
  };

  const closeDropdown = (type: string) => {
    setDropdowns((prev) => ({
      ...prev,
      [type]: false,
    }));
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
  const serviceLocation = watch('serviceLocation');
  const isHomeService = serviceLocation === 'Massage tại nhà';

  const onSubmit = (data: any) => {
    dispatch(setBookingData(data));
    localStorage.setItem('bookingData', JSON.stringify(data));

    if (isHomeService) {
      router.push('/dat-lich-tai-nha');
    } else {
      router.push('/dat-lich');
    }
  };

  return (
    <section className="pt-10 lg:pt-20">
      <div className="rounded-3xl bg-[#F3F3F3] py-3 lg:px-8 lg:py-6">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col gap-4 px-2 lg:flex-row lg:items-center lg:p-0">
            {/* Location Dropdown */}
            <div className="relative w-full lg:w-1/3">
              <button
                type="button"
                onClick={() => toggleDropdown('location')}
                className="flex w-full items-center justify-between rounded-2xl border bg-white px-4 py-[10px] text-sm font-medium text-[#3A449B] focus:border-[#3A449B] focus:outline-none lg:text-base"
              >
                <CustomImage width={18} height={18} src={LocationIc} alt="Location Icon" />
                {watch('serviceLocation')}
                <CustomImage
                  width={18}
                  height={18}
                  src={downBlue}
                  alt="Dropdown Icon"
                  className={`transition-all duration-300 ${dropdowns.location ? 'rotate-180' : ''}`}
                />
              </button>
              {dropdowns.location && (
                <ul className="absolute z-10 mt-2 w-full rounded-xl border bg-white shadow-lg">
                  {typeServices.map((location) => (
                    <li
                      key={location.id}
                      onClick={() => {
                        setValue('serviceLocation', location.type);
                        closeDropdown('location');
                      }}
                      className="cursor-pointer rounded-xl px-4 py-2 text-sm transition-all duration-300 ease-in-out hover:bg-[#3A449B] hover:text-white lg:text-base"
                    >
                      {location.type}
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {/* Store or Staff Dropdown */}
            <div className="relative w-full lg:w-1/3">
              {isHomeService ? (
                <button
                  type="button"
                  onClick={() => toggleDropdown('store')}
                  className="flex w-full items-center justify-between rounded-2xl border bg-white px-4 py-[10px] text-xs font-medium text-black shadow-sm focus:border-[#3A449B] focus:outline-none lg:text-sm"
                >
                  <CustomImage width={18} height={18} src={StoreIc} alt="Store Icon" />
                  {watch('selectedStaff') || 'Chọn nhân viên'}
                  <CustomImage
                    width={18}
                    height={18}
                    src={ArrowIc}
                    alt="Dropdown Icon"
                    className={`transition-all duration-300 ${dropdowns.store ? 'rotate-180' : ''}`}
                  />
                </button>
              ) : (
                <button
                  type="button"
                  onClick={() => toggleDropdown('store')}
                  className="flex w-full items-center justify-between rounded-2xl border bg-white px-4 py-[10px] text-xs font-medium text-black shadow-sm focus:border-[#3A449B] focus:outline-none lg:text-sm"
                >
                  <CustomImage width={18} height={18} src={StoreIc} alt="Store Icon" />
                  {watch('store')}
                  <CustomImage
                    width={18}
                    height={18}
                    src={ArrowIc}
                    alt="Dropdown Icon"
                    className={`transition-all duration-300 ${dropdowns.store ? 'rotate-180' : ''}`}
                  />
                </button>
              )}
              {dropdowns.store && (
                <ul className="absolute z-10 mt-2 w-full rounded-xl border bg-white shadow-lg">
                  {(isHomeService ? ['Staff 1', 'Staff 2', 'Staff 3'] : LOCATIONS?.data || []).map(
                    (option: any) => (
                      <li
                        key={option.id || option}
                        onClick={() => {
                          setValue(
                            isHomeService ? 'selectedStaff' : 'store',
                            isHomeService ? option : option.name,
                          );
                          closeDropdown('store');
                        }}
                        className="cursor-pointer rounded-xl px-4 py-2 text-xs transition-all duration-300 ease-in-out hover:bg-[#3A449B] hover:text-white lg:text-sm"
                      >
                        {isHomeService ? option : option.name}
                      </li>
                    ),
                  )}
                </ul>
              )}
            </div>

            {/* Date and Time Pickers */}
            <div className="flex w-full flex-col items-center gap-2 rounded-2xl border border-[#CCCCCC] bg-white text-base font-medium text-[#B9B9B9] lg:w-[38%] lg:flex-row">
              <div className="flex w-full items-center justify-between px-4 lg:w-[50%]">
                <CustomImage src={DateIc} alt="date" width={24} height={24} className="size-6" />
                <Controller
                  name="startDate"
                  control={control}
                  rules={{ required: true }}
                  render={({ field }) => (
                    <DatePicker
                      {...field}
                      selected={field.value}
                      onChange={(date) => date && field.onChange(date)}
                      dateFormat="dd/MM/yyyy"
                      className="w-full rounded-2xl bg-white py-[10px] text-center text-sm font-medium text-black focus:outline-none lg:text-base"
                      placeholderText="Chọn ngày"
                    />
                  )}
                />{' '}
                <CustomImage src={downBlue} alt="date" width={24} height={24} className="size-6" />
              </div>
              {errors.startDate && <p className="text-red-500">Vui lòng chọn ngày</p>}
              <div className="relative flex w-full lg:w-[50%]">
                <button
                  type="button"
                  onClick={() => toggleDropdown('time')}
                  className="flex w-full items-center justify-between px-4 py-[10px] text-sm font-medium text-black focus:border-[#3A449B] focus:outline-none md:text-xs"
                >
                  <CustomImage width={18} height={18} src={TimeIc} alt="Time Icon" />
                  {watch('selectedTime') || 'Chọn giờ'}
                  <CustomImage
                    width={18}
                    height={18}
                    src={downBlue}
                    alt="Dropdown Icon"
                    className={`transition-all duration-300 ${dropdowns.time ? 'rotate-180' : ''}`}
                  />
                </button>
                {dropdowns.time && (
                  <ul className="sidebar-scroll absolute left-0 top-10 z-10 mt-2 h-[250px] w-full overflow-y-scroll rounded-xl border bg-white shadow-lg">
                    {filteredAvailableTimes.map((time) => (
                      <li
                        key={time}
                        onClick={() => {
                          setValue('selectedTime', time);
                          closeDropdown('time');
                        }}
                        className="cursor-pointer rounded-xl px-4 py-2 text-sm transition-all duration-300 ease-in-out hover:bg-[#3A449B] hover:text-white md:text-base"
                      >
                        {time}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          </div>

          <div className="mt-4 flex justify-center lg:justify-end">
            <button
              type="submit"
              className="w-[95%] rounded-2xl bg-[#3A449B] px-8 py-2 text-sm font-medium text-white transition-all duration-300 ease-in-out hover:bg-[#2B347E] md:w-[220px] lg:text-base"
            >
              Đặt lịch
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default SectionFormBooking;
