/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

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
import downBlue from '@/assets/svgs/search/dropdowBlu.svg';
import CustomImage from '@/components/CustomImage';
import Title from '@/components/Title/Title';
import ProductModal, { Product } from '@/components/modal/ModalProduct';
import ModalServiceBooking, {
  SelectedServiceBooking,
} from '@/components/modal/ModalServiceBooking';
import ServiceSelectionModal from '@/components/modal/ModalServicer';
import VoucherModal from '@/components/modal/ModalVoucher';
import SelectionModalForm, { RoomProps } from '@/components/modal/SelectionModalForm';
import { RootState } from '@/redux/rootReducers';
import { useLocationData } from '@/services/location/Location.Service';
import {
  ServicesBooking,
  productsBooking,
  roomsData,
  servicesData,
  typeServices,
  vouchers,
} from '@/utils/constants';
import { useMemo, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';

import { useServiceData } from '@/services/services/Services.Service';
import { FormValues } from '@/utils/type';
import { useRouter } from 'next/navigation';

const SectionFormBooking = () => {
  const { data: DATA_LOCATIONS } = useLocationData();
  const LOCATIONS: any = DATA_LOCATIONS || [];
  const { data: DATA_SERVICES } = useServiceData();
  const SERVICES: any = useMemo(() => DATA_SERVICES || [], [DATA_SERVICES]);
  const router = useRouter();

  const bookingDataFromRedux = useSelector((state: RootState) => state.booking.bookingData);
  const serviceDataFromRedux = useSelector((state: RootState) => state.booking.selectedService);
  console.log(serviceDataFromRedux);
  const initialStoreValue = bookingDataFromRedux?.store || LOCATIONS?.data?.[0].name;
  const [serviceLocation, setServiceLocation] = useState('Massage tại cửa hàng');
  const [store, setStore] = useState(initialStoreValue || LOCATIONS?.data?.[0].name);
  const [dropdowns, setDropdowns] = useState({
    store: false,
    location: false,
    room: false,
  });
  const [selectedRoom, setSelectedRoom] = useState(roomsData[0].name);
  const [isModalOpenRoom, setModalOpenRoom] = useState(false);
  const openModalRoom = () => setModalOpenRoom(true);
  const closeModalRoom = () => setModalOpenRoom(false);
  const [isModalOpenServiceBooking, setModalOpenServiceBooking] = useState(false);
  const [selectedServicesBooking, setSelectedServiceBooking] = useState<SelectedServiceBooking[]>(
    [],
  );

  const [isProductModalOpen, setProductModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const handleSelectProduct = (product: Product) => {
    setSelectedProduct(product);
    console.log('Selected Product:', product);
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

  const handleSelectServicesBooking = (services: SelectedServiceBooking[]) => {
    setSelectedServiceBooking(services);
  };

  const handleRoomSelect = (room: RoomProps) => {
    setSelectedRoom(room.name); // Set the selected room name
    // Optionally, handle other actions (e.g., set room details)
  };

  const toggleDropdown = (type: keyof typeof dropdowns) => {
    setDropdowns((prev) => ({
      ...prev,
      [type]: !prev[type],
    }));
  };

  const handleSelect = (type: keyof typeof dropdowns, value: string) => {
    if (type === 'store') setStore(value);
    if (type === 'location') setServiceLocation(value);

    if (type === 'location') {
      if (value === 'Massage tại cửa hàng') {
        router.push('/dat-lich');
      } else {
        router.push('/dat-lich-tai-nha');
      }
    }
    toggleDropdown(type); // Close dropdown after selecting
  };

  const [isModalOpenService, setIsModalOpenService] = useState(false);
  const [selectedServices, setSelectedServices] = useState<{ [key: string]: number }>({});

  const handleOpenModalService = () => {
    setIsModalOpenService(true);
  };

  const handleCloseModalService = () => {
    setIsModalOpenService(false);
  };

  const handleSelectServices = (selected: { [key: string]: number }) => {
    setSelectedServices(selected);
  };
  const handleRemoveService = (serviceId: string) => {
    setSelectedServices((prev) => {
      const updated = { ...prev };
      delete updated[serviceId]; // Remove the service from the selected services
      return updated;
    });
  };

  const { register, handleSubmit } = useForm<FormValues>();

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log(data);
  };

  return (
    <section className="mb-5 md:mb-10">
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
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-5 rounded-3xl bg-[#F1F1F4] p-4 md:mb-6">
              <div className="relative mb-3 w-full md:mb-6">
                <button
                  type="button"
                  onClick={() => toggleDropdown('location')}
                  className="flex w-full items-center justify-between rounded-2xl border bg-white px-4 py-[10px] text-sm font-medium text-[#3A449B] focus:border-[#3A449B] focus:outline-none md:text-base"
                >
                  <CustomImage width={18} height={18} src={LocationIc} alt="Location Icon" />
                  {serviceLocation}
                  <CustomImage
                    width={18}
                    height={18}
                    src={downBlue}
                    alt="Arrow Down"
                    className={`transition-all duration-300 ${dropdowns.location ? 'rotate-180' : ''}`}
                  />
                </button>
                {dropdowns.location && (
                  <ul className="absolute z-10 mt-2 w-full rounded-xl border bg-white text-sm shadow-lg md:text-base">
                    {typeServices.map((location: any) => (
                      <li
                        key={location.id}
                        onClick={() => handleSelect('location', location.type)}
                        className="cursor-pointer rounded-xl px-4 py-2 transition-all duration-300 ease-in-out hover:bg-[#3A449B] hover:text-white"
                      >
                        {location.type}
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              <div className="relative w-full">
                <button
                  type="button"
                  onClick={() => toggleDropdown('store')}
                  className="flex w-full items-center justify-between rounded-2xl border bg-white px-4 py-[10px] text-sm font-medium text-black shadow-sm focus:border-[#3A449B] focus:outline-none md:text-base"
                >
                  <CustomImage width={18} height={18} src={StoreIc} alt="Store Icon" />
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
                  <ul className="absolute z-10 mt-2 w-full rounded-xl border bg-white text-sm shadow-lg md:text-base">
                    {DATA_LOCATIONS?.data?.map((storeOption: any) => (
                      <li
                        key={storeOption.id}
                        onClick={() => handleSelect('store', storeOption.name)}
                        className="cursor-pointer rounded-xl px-4 py-2 transition-all duration-300 ease-in-out hover:bg-[#3A449B] hover:text-white"
                      >
                        {storeOption.name}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
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
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium text-black md:text-base">
                  Số lượng người
                </label>
                <select
                  {...register('numPeople')}
                  className="mt-2 w-full rounded-xl border px-4 py-[10px]"
                >
                  <option value="1" className="text-sm md:text-base">
                    1 người
                  </option>
                  <option value="2" className="text-sm md:text-base">
                    2 người
                  </option>
                  <option value="3" className="text-sm md:text-base">
                    3 người
                  </option>
                  {/* Add more options as needed */}
                </select>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="mb-4">
                <label className="block text-sm font-medium text-black md:text-base">
                  Ngày đến
                </label>
                <input
                  type="date"
                  {...register('arrivalDate')}
                  className="mt-2 w-full rounded-xl border px-4 py-[10px] text-sm md:text-base"
                />
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium text-black md:text-base">Giờ đến</label>
                <input
                  type="time"
                  {...register('arrivalTime')}
                  className="mt-2 w-full rounded-xl border px-4 py-[10px] text-sm md:text-base"
                />
              </div>
            </div>

            {/* Room choice */}
            <div className="relative mb-4 w-full">
              <button
                type="button"
                onClick={openModalRoom}
                className="flex w-full items-center justify-between rounded-2xl border bg-white px-4 py-[10px] text-sm font-medium focus:border-[#3A449B] focus:outline-none md:text-base"
              >
                Phòng massage
                <CustomImage width={18} height={18} src={downBlue} alt="Arrow Down" />
              </button>
              {/* Display selected room */}
              <div className="mt-2 w-fit rounded-xl border bg-[#f1f1f4] px-4 py-2 text-[13px] text-xs font-medium leading-4 text-black/85 md:text-base">
                {selectedRoom}
              </div>
            </div>
            {/* Room Selection Modal */}
            <SelectionModalForm
              isOpen={isModalOpenRoom}
              onClose={closeModalRoom}
              onSelectRoom={handleRoomSelect}
              rooms={roomsData}
              title="Đặt phòng"
              sutTitle1="Hệ thống đặt phòng trực tuyến hiện tại của chúng tôi"
              sutTitle2="chỉ chấp nhận đặt phòng sau một tuần"
              sutTitle3="chỉ có thể đặt tối đa 1 phòng cùng một lúc."
            />

            <div>
              <button
                type="button"
                onClick={handleOpenModalService}
                className="flex w-full items-center justify-between rounded-2xl border bg-white px-4 py-[10px] text-base text-sm font-medium focus:border-[#3A449B] focus:outline-none md:text-base"
              >
                Dịch vụ
                <CustomImage width={18} height={18} src={downBlue} alt="Arrow Down" />
              </button>

              <ServiceSelectionModal
                isOpen={isModalOpenService}
                onClose={handleCloseModalService}
                onSelectServices={handleSelectServices}
                services={servicesData}
                title="Đặt dịch vụ"
                subTitle1="Hệ thống đặt phòng trực tuyến hiện tại của chúng tôi"
                subTitle2="chỉ chấp nhận đặt phòng sau một tuần"
                subTitle3="chỉ có thể đặt tối đa 1 phòng cùng một lúc."
              />

              {/* Display selected services below the button */}
              <div className="mt-2">
                <div className="flex flex-wrap items-center gap-4">
                  {Object.entries(selectedServices).map(([serviceId, quantity]) => {
                    const service = servicesData.find((s) => s.id === serviceId);
                    return service ? (
                      <div
                        onClick={() => handleRemoveService(serviceId)}
                        className="mb-4 flex w-fit cursor-pointer items-center gap-2 rounded-xl bg-[#F1F1F4] px-4 py-2 text-[13px] leading-4"
                      >
                        <CustomImage
                          width={18}
                          height={18}
                          src={deleteIc}
                          alt="Arrow Down"
                          className="h-[14px] w-[14px]"
                        />
                        <p key={serviceId} className="text-xs md:text-base">
                          {quantity} {service.name}
                        </p>
                      </div>
                    ) : null;
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
              ></textarea>
            </div>
          </form>
        </div>

        {/* Right Side: Service Details */}
        <div className="w-full rounded-3xl bg-[#F1F1F4] p-4 md:p-6 lg:h-min lg:w-[calc(100%-(500px+32px))]">
          <div className="flex w-full flex-col items-center justify-between gap-2 md:flex-row md:gap-6">
            {/* Render selected services */}
            {selectedServicesBooking?.map(({ service, category }) => (
              <div
                key={category?.categoryId}
                className="flex w-full flex-col items-center gap-3 md:flex-row md:gap-6"
              >
                <CustomImage
                  width={1200}
                  height={1000}
                  src={category.image}
                  alt="Gói trị liệu"
                  className="w-full rounded-[20px] border border-[#E7E7E7] bg-white p-2 md:h-[137px] md:w-[270px]"
                  classNameImg="rounded-[16px]"
                />
                <div className="flex w-full flex-col items-start lg:w-[365px]">
                  <h3 className="text-sm font-semibold md:text-base lg:text-xl">
                    {category?.categoryTitle || 'No Category'}
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
            {selectedServicesBooking.length === 0 && (
              <div className="flex w-full flex-col">
                <button
                  onClick={() => setModalOpenServiceBooking(true)}
                  type="button"
                  className="text-medium mt-4 flex h-10 w-full items-center justify-center rounded-2xl border border-[#3A449B] text-center text-sm text-[#3A449B] md:h-12 md:text-base"
                >
                  Chọn dịch vụ
                </button>
              </div>
            )}

            {/* Modal service booking */}
            <ModalServiceBooking
              isOpen={isModalOpenServiceBooking}
              onClose={() => setModalOpenServiceBooking(false)}
              servicesBooking={ServicesBooking}
              onSelectServices={handleSelectServicesBooking}
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
              vouchers={vouchers}
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
            type="button"
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
    </section>
  );
};

export default SectionFormBooking;
