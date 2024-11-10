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
import { useStaffData } from '@/services/staff/Staff.service';
import { availableTimes, serviceLocations } from '@/utils/constants';
import { useBoolean } from 'ahooks';
import { vi } from 'date-fns/locale';
import dayjs from 'dayjs';
import { find, forEach, get, head, map } from 'lodash';
import { useRouter } from 'next/navigation';
import DatePicker from 'react-datepicker';
import { useForm, useFormContext } from 'react-hook-form';

const SectionFormBooking = ({ LOCATIONS }: any) => {
  const methods = useFormContext();

  const { data: DATA_STAFFS } = useStaffData();
  const STAFFS: any = DATA_STAFFS || [];

  const router = useRouter();

  const [isOpenLocation, locationHandlers] = useBoolean(false);
  const [isOpenStore, storeHandlers] = useBoolean(false);
  const [isOpenStaff, staffHandlers] = useBoolean(false);
  const [isOpenTime, timeHandlers] = useBoolean(false);

  // Load booking data from Redux
  const { handleSubmit, watch, setValue } = useForm<{
    store: string;
    serviceLocation: number;
    selectedStaff: string;
    startDate: string;
    selectedTime: string;
  }>({
    defaultValues: {
      store: get(head(LOCATIONS?.data), 'name', ''),
      serviceLocation: 1,
      selectedStaff: get(head(STAFFS?.data), 'name', ''),
      startDate: dayjs(new Date()).toISOString(),
      selectedTime: '',
    },
  });

  const location = watch('serviceLocation');
  const startDate = watch('startDate');
  const selectedTime = watch('selectedTime');

  const handleNavigate = () => router.push(location === 1 ? '/dich-vu' : '/dat-lich-tai-nha');

  const onSubmit = (data: any) =>
    forEach(data, (value, key) => {
      methods.setValue(key, value);
    });

  return (
    <section className="container top-0 z-[9999] mx-auto rounded-3xl bg-[#f5f6fa]">
      <div className="px-8 py-6">
        <Title type="secondary">Đặt lịch massage</Title>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mt-6 flex flex-col gap-4 lg:flex-row lg:items-center">
            {/* Location Dropdown */}
            <div className="relative w-full lg:w-1/3">
              <button
                type="button"
                onClick={locationHandlers.toggle}
                className="flex w-full items-center justify-between rounded-2xl border bg-white px-4 py-[10px] text-sm font-medium text-[#3A449B] focus:border-[#3A449B] focus:outline-none lg:text-base"
              >
                <CustomImage width={18} height={18} src={LocationIc} alt="Arrow Down" />
                {find(serviceLocations, { value: location })?.label}
                <CustomImage
                  width={18}
                  height={18}
                  src={downBLue}
                  alt="Arrow Down"
                  className={`transition-all duration-300 ${isOpenLocation ? 'rotate-180' : ''}`}
                />
              </button>
              {isOpenLocation && (
                <ul className="absolute z-10 mt-2 w-full rounded-xl border bg-white shadow-lg">
                  {map(serviceLocations, (location) => (
                    <li
                      key={location.value}
                      onClick={() => {
                        setValue('serviceLocation', location.value);
                        locationHandlers.setFalse();
                      }}
                      className="cursor-pointer rounded-xl px-4 py-2 text-sm transition-all duration-300 ease-in-out hover:bg-[#3A449B] hover:text-white lg:text-base"
                    >
                      {location.label}
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {/* Store Dropdown */}
            {location === 1 ? (
              <div className="relative w-full lg:w-1/3">
                <button
                  type="button"
                  onClick={storeHandlers.toggle}
                  className="flex w-full items-center justify-between rounded-2xl border bg-white px-4 py-[10px] text-xs font-medium text-black shadow-sm focus:border-[#3A449B] focus:outline-none lg:text-sm"
                >
                  <CustomImage width={18} height={18} src={StoreIc} alt="Arrow Down" />
                  {watch('store') || 'Chọn cửa hàng'}
                  <CustomImage
                    width={18}
                    height={18}
                    src={ArrowIc}
                    alt="Arrow Down"
                    className={`transition-all duration-300 ${isOpenStore ? 'rotate-180' : ''}`}
                  />
                </button>
                {isOpenStore && (
                  <ul className="absolute z-10 mt-2 w-full rounded-xl border bg-white shadow-lg">
                    {LOCATIONS?.data?.map((location: any) => (
                      <li
                        key={location.id}
                        onClick={() => {
                          setValue('store', location.name);
                          storeHandlers.setFalse();
                        }}
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
                  onClick={staffHandlers.toggle}
                  className="flex w-full items-center justify-between rounded-2xl border bg-white px-4 py-[10px] text-sm font-medium text-black shadow-sm focus:border-[#3A449B] focus:outline-none lg:text-base"
                >
                  <CustomImage width={18} height={18} src={StoreIc} alt="Arrow Down" />
                  {watch('selectedStaff') || 'Chọn nhân viên'}
                  <CustomImage
                    width={18}
                    height={18}
                    src={ArrowIc}
                    alt="Arrow Down"
                    className={`transition-all duration-300 ${isOpenStaff ? 'rotate-180' : ''}`}
                  />
                </button>
                {isOpenStaff && (
                  <ul className="sidebar-scroll absolute z-10 mt-2 h-[250px] w-full overflow-y-scroll rounded-xl border bg-white shadow-lg">
                    {STAFFS?.data?.map((staffOption: any) => (
                      <li
                        key={staffOption.id}
                        onClick={() => {
                          setValue('selectedStaff', staffOption.name);
                          staffHandlers.setFalse();
                        }}
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
                  selected={dayjs(startDate).toDate()}
                  minDate={new Date()}
                  onChange={(date) => {
                    if (date) setValue('startDate', dayjs(date).toISOString());
                    locationHandlers.setFalse();
                  }}
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
                  onClick={timeHandlers.toggle}
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
                {isOpenTime && (
                  <ul className="sidebar-scroll absolute left-0 top-12 z-10 h-[250px] w-full overflow-y-scroll rounded-xl border bg-white shadow-lg">
                    {map(availableTimes, (time) => (
                      <li
                        key={time}
                        onClick={() => {
                          setValue('selectedTime', time);
                          timeHandlers.setFalse();
                        }}
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
