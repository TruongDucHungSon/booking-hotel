/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import sv1 from '@/assets/images/new/sv1.png';
import bed from '@/assets/svgs/arrow/bed.svg';
import BoxIc from '@/assets/svgs/arrow/box.svg';
import box1 from '@/assets/svgs/arrow/box1.svg';
import check from '@/assets/svgs/arrow/check1.svg';
import deleteIc from '@/assets/svgs/arrow/delete.svg';
import ArrowIc from '@/assets/svgs/arrow/down.svg';
import LocationIc from '@/assets/svgs/arrow/location.svg';
import massa from '@/assets/svgs/arrow/massa.svg';
import SaleIc from '@/assets/svgs/arrow/sale.svg';
import service from '@/assets/svgs/arrow/service.svg';
import StoreIc from '@/assets/svgs/arrow/store.svg';
import voucher from '@/assets/svgs/arrow/voucher.svg';
import addIc from '@/assets/svgs/search/add.svg';
import downBlue from '@/assets/svgs/search/dropdowBlu.svg';
import useIc from '@/assets/svgs/search/use.svg';
import CustomImage from '@/components/CustomImage';
import Title from '@/components/Title/Title';
import ProductModal, { Product } from '@/components/modal/ModalProduct';
import ModalServiceBooking from '@/components/modal/ModalServiceBooking';
import ServiceSelectionModal from '@/components/modal/ModalServicer';
import VoucherModal from '@/components/modal/ModalVoucher';
import SelectionModalForm from '@/components/modal/SelectionModalForm';
import { useLocationData } from '@/services/location/Location.Service';
import { usePromotionData } from '@/services/promotion/promotion.service';
import { useStaffData } from '@/services/staff/Staff.service';
import { productsBooking, roomsData, serviceLocations, servicesData } from '@/utils/constants';
import { yupResolver } from '@hookform/resolvers/yup';
import { useBoolean } from 'ahooks';
import dayjs from 'dayjs';
import {
  filter,
  find,
  forEach,
  head,
  isEmpty,
  isNaN,
  isNil,
  map,
  split,
  times,
  toNumber,
} from 'lodash';
import { useEffect, useMemo, useState } from 'react';
import DatePicker from 'react-datepicker';
import { SubmitHandler, useForm, useFormContext } from 'react-hook-form';
import * as yup from 'yup';

const SectionFormBooking = () => {
  const { data: DATA_LOCATIONS } = useLocationData();
  const LOCATIONS: any = DATA_LOCATIONS || [];
  const { data: DATA_PROMOTIONS } = usePromotionData();
  const PROMOTIONS: any = DATA_PROMOTIONS || [];

  const { data: DATA_STAFFS } = useStaffData();
  const staffs: any = DATA_STAFFS || [];

  const methods = useFormContext();
  const [isModalOpenRoom, setModalOpenRoom] = useState(false);
  const openModalRoom = () => setModalOpenRoom(true);
  const closeModalRoom = () => setModalOpenRoom(false);
  const [isModalOpenServiceBooking, setModalOpenServiceBooking] = useState(false);

  const [isProductModalOpen, setProductModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const handleSelectProduct = (product: Product) => {
    setSelectedProduct(product);
  };

  const [selectedVoucher, setSelectedVoucher] = useState<string | null>(null);

  const [isModalOpenVoucher, setIsModalOpenVoucher] = useState(false);
  const toggleModalVoucher = () => {
    setIsModalOpenVoucher(!isModalOpenVoucher);
  };

  const handleVoucherSelect = (voucher: string) => {
    setSelectedVoucher(voucher);
    setIsModalOpenVoucher(false); // Close modal after selection
  };

  const [isModalOpenService, setIsModalOpenService] = useState(false);

  const handleOpenModalService = () => {
    setIsModalOpenService(true);
  };

  const handleCloseModalService = () => {
    setIsModalOpenService(false);
  };

  const [isOpenLocation, locationHandlers] = useBoolean(false);
  const [isOpenStore, storeHandlers] = useBoolean(false);
  const [isOpenstaff, staffHandlers] = useBoolean(false);

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    reset,
    formState: { errors },
  } = useForm<any>({
    resolver: yupResolver(
      yup.object().shape({
        serviceLocation: yup.number().required(),
        selectedTime: yup.string().required(),
        room: yup.string(),
        services: yup.mixed(),
        service: yup.mixed().nonNullable().required(),
        staff: yup.string(),
        gender: yup.string().required(),
        fullName: yup.string().required(),
        address: yup.string(),
        phoneNumber: yup
          .string()
          .required()
          .matches(/^\d{10}$/, 'Số điện thoại phải có đúng 10 chữ số'),
      }),
    ),
  });
  const [showThankYouModal, setShowThankYouModal] = useState(false);

  const location = watch('serviceLocation');
  const selectedTime = watch('selectedTime');
  const room = watch('room');
  const currentServices = watch('services');
  const selectedService = watch('service');
  const selectedCategory = watch('category');
  const staff = watch('staff');

  const timeValue = useMemo(() => {
    if (isEmpty(selectedTime)) return;

    const [hour, minute] = split(selectedTime, ':');
    let h = 0;
    let m = 0;

    if (isNaN(toNumber(hour))) return;
    else h = toNumber(hour);

    if (isNaN(toNumber(minute))) return;
    else m = toNumber(minute);

    const now = dayjs();

    return now.set('hour', h).set('minute', m).toDate();
  }, [selectedTime]);

  useEffect(() => {
    reset(methods.getValues());
  }, [methods, reset]);

  useEffect(() => {
    if (isEmpty(room)) setValue('room', head(roomsData)?.name);
  }, [room, setValue]);

  useEffect(() => {
    if (location === 2 && isEmpty(staff)) setValue('staff', head(staffs));
  }, [staffs, location, setValue]);

  const handleBook: SubmitHandler<any> = (data) => {
    forEach(data, (value, key) => methods.setValue(key, value));
    const values = methods.getValues();
    setShowThankYouModal(true);
    console.log(values);
  };

  return (
    <form onSubmit={handleSubmit(handleBook)} className="mb-5 md:mb-10">
      {/* heading */}
      <Title>thông tin đặt chỗ</Title>
      <p className="mt-2 text-center text-sm text-[#1B1B1B] md:mt-[10px] md:text-base">
        Hệ thống đặt phòng trực tuyến hiện tại của chúng tôi chỉ chấp nhận đặt phòng sau một tuần và
        chỉ có thể đặt tối đa hai người cùng một lúc.
      </p>
      {/* form */}
      <div className="my-[14px] flex flex-col md:my-[28px] lg:my-[56px] lg:flex-row lg:space-x-8">
        {/* Left Side: Customer Information */}
        <div className="w-full lg:w-[533px]">
          <div>
            <div className="mb-5 rounded-3xl bg-[#F1F1F4] p-4 md:mb-6">
              <div className="relative mb-3 w-full md:mb-6">
                <button
                  type="button"
                  onClick={locationHandlers.toggle}
                  className="flex w-full items-center justify-between rounded-2xl border bg-white px-4 py-[10px] text-sm font-medium text-[#3A449B] focus:border-[#3A449B] focus:outline-none md:text-base"
                >
                  <CustomImage width={18} height={18} src={LocationIc} alt="Location Icon" />
                  {find(serviceLocations, { value: location })?.label}
                  <CustomImage
                    width={18}
                    height={18}
                    src={downBlue}
                    alt="Arrow Down"
                    className={`transition-all duration-300 ${isOpenLocation ? 'rotate-180' : ''}`}
                  />
                </button>
                {isOpenLocation && (
                  <ul className="absolute z-10 mt-2 w-full rounded-xl border bg-white text-sm shadow-lg md:text-base">
                    {map(serviceLocations, (location) => (
                      <li
                        key={location.value}
                        onClick={() => {
                          setValue('serviceLocation', location.value);
                          locationHandlers.setFalse();
                        }}
                        className="cursor-pointer rounded-xl px-4 py-2 transition-all duration-300 ease-in-out hover:bg-[#3A449B] hover:text-white"
                      >
                        {location.label}
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              {location === 1 && (
                <div className="relative w-full">
                  <button
                    type="button"
                    onClick={storeHandlers.toggle}
                    className="flex w-full items-center justify-between rounded-2xl border bg-white px-4 py-[10px] text-sm font-medium text-black shadow-sm focus:border-[#3A449B] focus:outline-none md:text-base"
                  >
                    <CustomImage width={18} height={18} src={StoreIc} alt="Store Icon" />
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
                    <ul className="absolute z-10 mt-2 w-full rounded-xl border bg-white text-sm shadow-lg md:text-base">
                      {LOCATIONS?.data?.map((storeOption: any) => (
                        <li
                          key={storeOption.id}
                          onClick={() => {
                            setValue('store', storeOption.name);
                            storeHandlers.setFalse();
                          }}
                          className="cursor-pointer rounded-xl px-4 py-2 transition-all duration-300 ease-in-out hover:bg-[#3A449B] hover:text-white"
                        >
                          {storeOption.name}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              )}
              {location === 2 && (
                <>
                  <div className="flex w-full items-center justify-between rounded-2xl border bg-white px-4 py-[10px] text-sm font-medium focus:border-[#3A449B] focus:outline-none md:text-base">
                    <CustomImage width={18} height={18} src={addIc} alt="Location Icon" />
                    <input
                      placeholder="Nhập địa chỉ"
                      type="text"
                      className="w-full border-none text-center outline-none"
                      {...register('address')}
                    />
                    <CustomImage
                      width={18}
                      height={18}
                      src={ArrowIc}
                      alt="Arrow Down"
                      className={`transition-all duration-300`}
                    />
                  </div>
                  {errors.address ? (
                    <div className="text-[12px] font-medium text-red-500">
                      Quý khách vui lòng nhập địa chỉ
                    </div>
                  ) : null}

                  <div className="relative mt-3 w-full md:mt-6">
                    <button
                      onClick={staffHandlers.toggle}
                      type="button"
                      className="flex w-full items-center justify-between rounded-2xl border bg-white px-4 py-[10px] text-xs font-medium text-black shadow-sm focus:border-[#3A449B] focus:outline-none md:text-base"
                    >
                      <CustomImage width={18} height={18} src={useIc} alt="staff Icon" />
                      {staff}
                      <CustomImage
                        width={18}
                        height={18}
                        src={ArrowIc}
                        alt="Arrow Down"
                        className={`transition-all duration-300 ${isOpenstaff ? 'rotate-180' : ''}`}
                      />
                    </button>
                    {isOpenstaff && (
                      <ul className="sidebar-scroll absolute z-10 mt-2 h-[250px] w-full overflow-y-scroll rounded-xl border bg-white shadow-lg">
                        {map(staffs?.data, (item) => (
                          <li
                            key={item.id}
                            onClick={() => {
                              staffHandlers.setFalse();
                              setValue('staff', item.name);
                            }}
                            className="cursor-pointer rounded-xl px-4 py-2 text-sm transition-all duration-300 ease-in-out hover:bg-[#3A449B] hover:text-white md:text-base"
                          >
                            {item.name}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </>
              )}
            </div>
            <h2 className="mb-2 text-lg font-semibold text-[#18181B] md:mb-4 md:text-xl">
              THÔNG TIN KHÁCH HÀNG
            </h2>

            <div className="grid grid-cols-2 gap-4">
              <div className="mb-4">
                <label className="block text-sm font-medium text-black md:text-base">
                  Họ và tên
                </label>
                <input
                  type="text"
                  {...register('fullName')}
                  className="mt-2 w-full rounded-xl border px-4 py-[10px] text-sm md:text-base"
                />
                {errors.fullName ? (
                  <div className="text-[12px] font-medium text-red-500">
                    Quý khách vui lòng nhập tên
                  </div>
                ) : null}
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium text-black md:text-base">
                  Số điện thoại
                </label>
                <input
                  type="text"
                  {...register('phoneNumber')}
                  className="mt-2 w-full rounded-xl border px-4 py-[10px] text-sm focus:border-[#3A449B] md:text-base"
                />
                {errors.phoneNumber ? (
                  <div className="text-[12px] font-medium text-red-500">
                    Số điện thoại phải có đúng 10 chữ số
                  </div>
                ) : null}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="mb-4">
                <label className="block text-sm font-medium text-black md:text-base">
                  Giới tính
                </label>
                <div className="mt-2 flex space-x-4">
                  <label className="flex items-center">
                    <input
                      type="radio"
                      className="accent-[#3A449B]"
                      value="Nam"
                      {...register('gender')}
                    />
                    <span className="ml-2 text-sm md:text-base">Nam</span>
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      value="Nữ"
                      className="accent-[#3A449B]"
                      {...register('gender')}
                    />
                    <span className="ml-2 text-sm md:text-base">Nữ</span>
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      value="Khác"
                      className="accent-[#3A449B]"
                      {...register('gender')}
                    />
                    <span className="ml-2 text-sm md:text-base">Khác</span>
                  </label>
                </div>
                {errors.gender ? (
                  <div className="text-[12px] font-medium text-red-500">
                    Quý khách vui lòng chọn giới tính
                  </div>
                ) : null}
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium text-black md:text-base">
                  Số lượng người
                </label>
                <select
                  {...register('numPeople')}
                  className="mt-2 w-full rounded-xl border px-4 py-[10px]"
                >
                  {times(5, (index) => (
                    <option key={index} value={index + 1} className="text-sm md:text-base">
                      {index + 1} người
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="mb-4">
                <label className="block text-sm font-medium text-black md:text-base">
                  Ngày đến
                </label>

                <DatePicker
                  minDate={dayjs().toDate()}
                  selected={watch('startDate')}
                  dateFormat="dd/MM/yyyy"
                  onChange={(date) => {
                    if (!isNil(date)) {
                      setValue('startDate', dayjs(date).toISOString());
                    }
                  }}
                  className="mt-2 w-full rounded-xl border px-4 py-[10px] text-sm md:text-base"
                />
                {errors.startDate ? (
                  <div className="text-[12px] font-medium text-red-500">
                    Quý khách vui lòng nhập ngày
                  </div>
                ) : null}
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium text-black md:text-base">Giờ đến</label>
                <DatePicker
                  className="mt-2 w-full rounded-xl border px-4 py-[10px] text-sm md:text-base"
                  selected={timeValue}
                  showTimeSelect
                  showTimeSelectOnly
                  timeIntervals={30}
                  timeFormat="HH:mm"
                  dateFormat="HH:mm"
                  placeholderText="Select a time"
                  minTime={new Date().setHours(7, 30) as any}
                  maxTime={new Date().setHours(22, 0) as any}
                  onChange={(date) => {
                    const hour = dayjs(date).get('hour');
                    const minute = dayjs(date).get('minute');

                    setValue('selectedTime', `${hour}:${minute}`);
                  }}
                />
                {errors.selectedTime ? (
                  <div className="text-[12px] font-medium text-red-500">
                    Quý khách vui lòng giờ đặt lịch
                  </div>
                ) : null}
              </div>
            </div>

            {/* Room choice */}
            <div className={`relative mb-4 w-full ${location === 2 ? 'hidden' : 'block'}`}>
              <button
                type="button"
                onClick={openModalRoom}
                className="flex w-full items-center justify-between rounded-2xl border bg-white px-4 py-[10px] text-sm font-medium focus:border-[#3A449B] focus:outline-none md:text-base"
              >
                Phòng massage
                <CustomImage width={18} height={18} src={downBlue} alt="Arrow Down" />
              </button>
              {/* Display selected room */}
              {room && (
                <div className="mt-2 w-fit rounded-xl border bg-[#f1f1f4] px-4 py-2 text-[13px] text-xs font-medium leading-4 text-black/85 md:text-base">
                  {room}
                </div>
              )}
            </div>

            {/* Room Selection Modal */}
            <SelectionModalForm
              isOpen={isModalOpenRoom}
              onClose={closeModalRoom}
              onSelectRoom={(v) => {
                setValue('room', v.name);
              }}
              rooms={roomsData}
              title="Đặt phòng"
              sutTitle1="Hệ thống đặt phòng trực tuyến hiện tại của chúng tôi"
              sutTitle2="chỉ chấp nhận đặt phòng sau một tuần"
              sutTitle3="chỉ có thể đặt tối đa 1 phòng cùng một lúc."
            />

            <div>
              <label className="mb-1 block text-sm font-medium text-black md:text-base">
                Dịch vụ
              </label>
              <button
                type="button"
                onClick={handleOpenModalService}
                className="flex w-full items-center justify-between rounded-2xl border bg-white px-4 py-[10px] text-sm font-medium focus:border-[#3A449B] focus:outline-none md:text-base"
              >
                Dịch vụ
                <CustomImage width={18} height={18} src={downBlue} alt="Arrow Down" />
              </button>

              <ServiceSelectionModal
                isOpen={isModalOpenService}
                onClose={handleCloseModalService}
                onSelectServices={(v) => {
                  const result = map(v, (quantity, id) => ({
                    id,
                    quantity,
                  }));

                  setValue('services', result);
                }}
                services={servicesData}
                title="Đặt dịch vụ"
                subTitle1="Hệ thống đặt phòng trực tuyến hiện tại của chúng tôi"
                subTitle2="chỉ chấp nhận đặt phòng sau một tuần"
                subTitle3="chỉ có thể đặt tối đa 1 phòng cùng một lúc."
              />

              {/* Display selected services below the button */}
              <div className="mt-2">
                <div className="flex flex-wrap items-center gap-4">
                  {map(currentServices, ({ id, quantity }) => {
                    const service = find(servicesData, { id });

                    if (isEmpty(service)) return null;

                    return (
                      <div
                        key={id}
                        onClick={() => {
                          const result = filter(currentServices, ({ id: i }) => i !== id);

                          setValue('services', result);
                        }}
                        className="mb-4 flex w-fit cursor-pointer items-center gap-2 rounded-xl bg-[#F1F1F4] px-4 py-2 text-[13px] leading-4"
                      >
                        <CustomImage
                          width={18}
                          height={18}
                          src={deleteIc}
                          alt="Arrow Down"
                          className="h-[14px] w-[14px]"
                        />
                        <p className="text-xs md:text-base">
                          {quantity} {service.name}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-black md:text-base">Ghi chú</label>
              <textarea
                {...register('note')}
                className="mt-2 w-full rounded-xl border px-4 py-[10px] text-sm md:text-base"
                rows={3}
                placeholder="Tôi có thể đến muộn 10p"
              />
            </div>
          </div>
        </div>

        {/* Right Side: Service Details */}
        <div className="w-full rounded-3xl bg-[#F1F1F4] p-4 md:p-6 lg:h-min lg:w-[calc(100%-(500px+32px))]">
          <div className="flex w-full flex-col items-center justify-between gap-2 md:flex-row md:gap-6">
            {/* Render selected services */}
            {[]?.map(({ service, category }: any) => (
              <div
                key={selectedService?.id}
                className="flex w-full flex-col items-center gap-3 md:flex-row md:gap-6"
              >
                <CustomImage
                  width={1200}
                  height={1000}
                  src={sv1.src}
                  alt="Gói trị liệu"
                  className="w-full rounded-[20px] border border-[#E7E7E7] bg-white p-2 md:h-[137px] md:w-[270px]"
                  classNameImg="rounded-[16px]"
                />
                <div className="flex w-full flex-col items-start lg:w-[365px]">
                  <h3 className="text-sm font-semibold md:text-base lg:text-xl">
                    {category?.name || 'No Category'}
                  </h3>
                  <p className="mt-1 font-medium">
                    Giá:{' '}
                    <span className="text-sm font-bold text-[#EF5F5F] md:text-base">
                      {service.price}
                    </span>
                    <span> VND / Lần</span>
                  </p>
                  <p className="mt-1 font-medium">
                    Thời gian:{' '}
                    <span className="text-sm font-bold text-[#EF5F5F] md:text-base">
                      {service.duration}
                    </span>
                    <span> phút</span>
                  </p>

                  <div className="flex w-full flex-col">
                    <button
                      onClick={() => setModalOpenServiceBooking(true)}
                      type="button"
                      className="text-medium mt-4 flex h-10 w-full items-center justify-center rounded-2xl border border-[#3A449B] text-center text-sm text-[#3A449B] md:h-12 md:text-base"
                    >
                      Chọn lại dịch vụ
                    </button>
                  </div>
                </div>
              </div>
            ))}

            {/* Hide this button if there are selected services */}
            <div className="flex w-full flex-col">
              {isEmpty(selectedService) ? (
                <button
                  onClick={() => setModalOpenServiceBooking(true)}
                  type="button"
                  className="text-medium mt-4 flex h-10 w-full items-center justify-center rounded-2xl border border-[#3A449B] text-center text-sm text-[#3A449B] md:h-12 md:text-base"
                >
                  Chọn dịch vụ
                </button>
              ) : null}
              {errors.service ? (
                <div className="text-[12px] font-medium text-red-500">
                  Quý khách vui lòng chọn dịch vụ
                </div>
              ) : null}

              {!isEmpty(selectedService) ? (
                <div
                  key={selectedService?.id}
                  className="flex w-full flex-col items-center gap-3 md:flex-row md:gap-6"
                >
                  <CustomImage
                    width={1200}
                    height={1000}
                    src={sv1.src}
                    alt="Gói trị liệu"
                    className="w-full rounded-[20px] border border-[#E7E7E7] bg-white p-2 md:h-[137px] md:w-[270px]"
                    classNameImg="rounded-[16px]"
                  />
                  <div className="flex w-full flex-col items-start lg:w-[365px]">
                    <h3 className="text-sm font-semibold md:text-base lg:text-xl">
                      {selectedService?.name || 'No Category'}
                    </h3>
                    <p className="mt-1 font-medium">
                      Giá:{' '}
                      <span className="text-sm font-bold text-[#EF5F5F] md:text-base">
                        {selectedService.price}
                      </span>
                      <span> VND / Lần</span>
                    </p>
                    <p className="mt-1 font-medium">
                      Thời gian:{' '}
                      <span className="text-sm font-bold text-[#EF5F5F] md:text-base">
                        {selectedService.duration}
                      </span>
                      <span> phút</span>
                    </p>

                    <div className="flex w-full flex-col">
                      <button
                        onClick={() => setModalOpenServiceBooking(true)}
                        type="button"
                        className="text-medium mt-4 flex h-10 w-full items-center justify-center rounded-2xl border border-[#3A449B] text-center text-sm text-[#3A449B] md:h-12 md:text-base"
                      >
                        Chọn lại dịch vụ
                      </button>
                    </div>
                  </div>
                </div>
              ) : null}
            </div>

            {/* Modal service booking */}
            <ModalServiceBooking
              isOpen={isModalOpenServiceBooking}
              onClose={() => setModalOpenServiceBooking(false)}
              onSelect={({ category, service }) => {
                setValue('category', category);
                setValue('service', service);
              }}
              serviceId={selectedService?.id}
              categoryId={selectedCategory?.id}
            />
          </div>

          <div className="my-3 grid grid-cols-2 gap-4 text-sm md:my-6 md:text-base">
            <button
              type="button"
              onClick={toggleModalVoucher}
              className="flex items-center justify-between rounded-xl border border-[#3A449B] bg-[#d6d7e7] p-3 text-[#3A449B]"
            >
              Voucher giảm giá <CustomImage width={18} height={18} src={SaleIc} alt="Arrow Down" />
            </button>

            <VoucherModal
              isOpen={isModalOpenVoucher}
              onClose={toggleModalVoucher}
              onSelectVoucher={handleVoucherSelect}
              selectedVoucher={selectedVoucher}
              vouchers={PROMOTIONS}
            />
            <button
              type="button"
              onClick={() => setProductModalOpen(true)}
              className="ml-2 flex items-center justify-between rounded-xl border border-[#3A449B] bg-[#d6d7e7] p-2 text-[#3A449B]"
            >
              Sản phẩm mua kèm
              <CustomImage width={18} height={18} src={BoxIc} alt="Arrow Down" />
            </button>
            <ProductModal
              isOpen={isProductModalOpen}
              onClose={() => setProductModalOpen(false)}
              onSelectProduct={handleSelectProduct}
              selectedProduct={selectedProduct}
              products={productsBooking}
            />
          </div>

          <div className="flex flex-col gap-4 border-b pb-4 text-sm text-black/85 md:text-base">
            <p className="flex justify-between">
              <p className="flex items-center gap-2">
                <CustomImage
                  className="h-6 w-6"
                  width={18}
                  height={18}
                  src={massa}
                  alt="Arrow Down"
                />{' '}
                Dịch vụ massage (2 người)
              </p>
              <span className="font-semibold">700.000 VND</span>
            </p>
            <p className="flex justify-between">
              <p className="flex items-center gap-2">
                <CustomImage
                  className="h-6 w-6"
                  width={18}
                  height={18}
                  src={bed}
                  alt="Arrow Down"
                />{' '}
                Giá giường
              </p>
              <span className="font-semibold">100.000 VND</span>
            </p>
            <p className="flex justify-between">
              <p className="flex items-center gap-2">
                <CustomImage
                  className="h-6 w-6"
                  width={18}
                  height={18}
                  src={service}
                  alt="Arrow Down"
                />
                Giá dịch vụ
              </p>
              <span className="font-semibold">90.000 VND</span>
            </p>
            <p className="flex justify-between">
              <p className="flex items-center gap-2">
                <CustomImage
                  className="h-6 w-6"
                  width={18}
                  height={18}
                  src={box1}
                  alt="Arrow Down"
                />{' '}
                Sản phẩm mua kèm
              </p>
              <span className="font-semibold">60.000 VND</span>
            </p>
            <p className="flex justify-between text-black/85">
              <p className="flex items-center gap-2">
                {' '}
                <CustomImage
                  className="h-6 w-6"
                  width={18}
                  height={18}
                  src={voucher}
                  alt="Arrow Down"
                />
                Voucher giảm giá
              </p>
              <span className="font-semibold text-[#DA0000]">-50.000 VND</span>
            </p>
          </div>

          <div className="mb-6 mt-4">
            <div className="flex items-center justify-between text-base font-semibold md:text-xl">
              <p> Tổng thanh toán:</p> <p className="text-[#3A449B]">900.000 VND</p>
            </div>
            <p className="text-right text-[13px] font-medium leading-4 text-[#DA0000]">
              Bạn đã tiết kiệm được 50K
            </p>
          </div>
          <button
            type="submit"
            className="text-medium mt-4 flex h-10 w-full items-center justify-center rounded-2xl border bg-[#3A449B] text-center text-base text-white transition duration-300 ease-in-out hover:bg-blue-900 md:h-12"
          >
            Thanh toán
          </button>
          <div className="mt-6">
            <div className="mb-4 flex items-center gap-2 text-sm font-semibold md:text-base">
              <CustomImage src={ArrowIc} alt="payment" width={18} height={18} className="h-3 w-6" />
              Thông tin gói dịch vụ
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2 text-xs text-[#18181B] md:text-sm">
                <CustomImage src={check} alt="payment" width={18} height={18} className="h-6 w-6" />
                Tắm sạch bằng bộ sản phẩm tắm gội thảo dược theo mùa
              </div>
              <div className="flex items-center gap-2 text-xs text-[#18181B] md:text-sm">
                <CustomImage src={check} alt="payment" width={18} height={18} className="h-6 w-6" />
                Xông hơi ướt với lá xông theo mùa, ngâm chân muối thảo dược
              </div>
              <div className="flex items-center gap-2 text-xs text-[#18181B] md:text-sm">
                <CustomImage src={check} alt="payment" width={18} height={18} className="h-6 w-6" />
                Chăm sóc toàn thân với kem Ngải Diệp hoặc kem Gừng
              </div>
              <div className="flex items-center gap-2 text-xs text-[#18181B] md:text-sm">
                <CustomImage src={check} alt="payment" width={18} height={18} className="h-6 w-6" />
                Ăn nhẹ với cháo dưỡng sinh, nước uống thảo dược và hoa quả
              </div>
            </div>
          </div>
        </div>
      </div>
      {showThankYouModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="rounded-lg bg-white p-6 text-center">
            <h2 className="text-lg font-semibold">Cảm ơn quý khách!</h2>
            <p>Lịch của quý khách đã được đặt thành công.</p>
            <button
              className="mt-4 rounded bg-blue-900 px-4 py-2 text-white"
              onClick={() => setShowThankYouModal(false)} // Close modal on button click
            >
              Đóng
            </button>
          </div>
        </div>
      )}
    </form>
  );
};

export default SectionFormBooking;
