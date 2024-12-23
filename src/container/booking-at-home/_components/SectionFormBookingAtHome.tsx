/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';
import { motion } from 'framer-motion';

import acb from '@/assets/images/banner/acb.png';
import more from '@/assets/images/banner/more.png';
import vcb from '@/assets/images/banner/vcb.png';
import sv1 from '@/assets/images/new/sv1.png';
import BoxIc from '@/assets/svgs/arrow/box.svg';
// import box1 from '@/assets/svgs/arrow/box1.svg';
import check from '@/assets/svgs/arrow/check1.svg';
import deleteIc from '@/assets/svgs/arrow/delete.svg';
import ArrowIc from '@/assets/svgs/arrow/down.svg';
import LocationIc from '@/assets/svgs/arrow/location.svg';
import massa from '@/assets/svgs/arrow/massa.svg';
import SaleIc from '@/assets/svgs/arrow/sale.svg';
import voucher from '@/assets/svgs/arrow/voucher.svg';
import addIc from '@/assets/svgs/search/add.svg';
import downBlue from '@/assets/svgs/search/dropdowBlu.svg';
import useIc from '@/assets/svgs/search/use.svg';
import CustomImage from '@/components/CustomImage';
import Title from '@/components/Title/Title';
import ProductModal from '@/components/modal/ModalProduct';
import ModalServiceBooking from '@/components/modal/ModalServiceBooking';
import VoucherModal from '@/components/modal/ModalVoucher';
import { publicRequest } from '@/config/HandleApi.Service';
import { usePostBooking } from '@/services/booking/Booking.Service';
import { useProductData } from '@/services/product/Products.Service';
import { usePromotionData } from '@/services/promotion/promotion.service';
import { useStaffData } from '@/services/staff/Staff.service';
import { NUMBER_PEOPLE, serviceLocations } from '@/utils/constants';
import { API_ENDPOINT } from '@/utils/endpoint';
import { formatDateString, formatPrice } from '@/utils/helpers';
import { yupResolver } from '@hookform/resolvers/yup';
import { useBoolean } from 'ahooks';
import dayjs from 'dayjs';
import { find, forEach, isEmpty, isNaN, isNil, map, split, toNumber } from 'lodash';
import { useRouter } from 'next/navigation';
import { useEffect, useMemo, useState } from 'react';
import DatePicker from 'react-datepicker';
import { SubmitHandler, useForm, useFormContext } from 'react-hook-form';
import { toast } from 'react-toastify';
import * as yup from 'yup';
const SectionFormBookingAtHome = () => {
  const router = useRouter();
  const { data: DATA_PROMOTIONS } = usePromotionData();
  const PROMOTIONS: any = DATA_PROMOTIONS || [];

  const { data: DATA_STAFFS } = useStaffData();
  const staffs: any = DATA_STAFFS?.data || [];

  const { data: DATA_PRODUCTS } = useProductData();
  const PRODUCTS: any = DATA_PRODUCTS?.data || [];

  const methods = useFormContext();
  const [isModalOpenServiceBooking, setModalOpenServiceBooking] = useState(false);

  const [isProductModalOpen, setProductModalOpen] = useState(false);
  const [selectedProducts, setSelectedProducts] = useState<any[]>([]);
  const [showThankYouText, setShowThankYouText] = useState(false);
  const handleSelectProduct = (products: any[]) => {
    setSelectedProducts(products); // Sets the selected products array
  };

  const handleRemoveProduct = (productId: string) => {
    setSelectedProducts((prevProducts) =>
      prevProducts.filter((product) => product.id !== productId),
    );
  };

  const [selectedVoucher, setSelectedVoucher] = useState<{
    id: string;
    discount: string;
  } | null>(null);

  const [isModalOpenVoucher, setIsModalOpenVoucher] = useState(false);
  const toggleModalVoucher = () => {
    setIsModalOpenVoucher(!isModalOpenVoucher);
  };

  const handleVoucherSelect = (voucher: { id: string; discount: string } | null) => {
    setSelectedVoucher(voucher);
    setIsModalOpenVoucher(false); // Close modal after selection
  };

  const [isOpenLocation, locationHandlers] = useBoolean(false);
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
        location_id: yup.string().required(),
        selectedTime: yup.string().required(),
        services: yup.mixed(),
        service: yup.mixed().nonNullable().required(),
        staff: yup.string().required('Vui lòng chọn nhân viên'),
        gender: yup.string().required(),
        fullName: yup.string().required(),
        address: yup.string().required(),
        phoneNumber: yup
          .string()
          .required()
          .matches(/^\d{10}$/, 'Số điện thoại phải có đúng 10 chữ số'),
      }),
    ),
  });
  const [showThankYouModal, setShowThankYouModal] = useState(false);
  const selectedTime = watch('selectedTime');
  const selectedService = watch('service');

  const selectedCategory = watch('category');
  const staff = watch('staff');
  const [selectedPayment, setSelectedPayment] = useState('counter');
  const location = methods.watch('location_id');
  const [dataForm, setDataForm] = useState<any>(null);

  useEffect(() => {
    if (location === 'in-store') {
      router.push('/dat-lich');
    } else if (location === 'at-home') {
      router.push('/dat-lich-tai-nha');
    }
    setModalOpenServiceBooking(true);
  }, [location]);

  const [idBooking, setIdBooking] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const postPayment = async () => {
      if (!idBooking || selectedPayment !== 'payos') return;

      try {
        const paymentData = {
          payment_method: 'payos',
          return_url: `https://booking-hotel-lake.vercel.app/dich-vu`,
          cancel_url: `https://booking-hotel-lake.vercel.app/dich-vu`,
        };

        const paymentResponse = await publicRequest.request({
          method: 'POST',
          url: `${API_ENDPOINT.POST_PAYMENT}/${idBooking}/payments`,
          data: paymentData,
        });

        const paymentUrl = paymentResponse?.data?.payment_url;
        if (paymentUrl) {
          setIsLoading(true);
          router.push(paymentUrl);
        } else {
          setIsLoading(false);
          throw new Error('Không tìm thấy URL thanh toán.');
        }
      } catch (error: any) {
        setIsLoading(false);
        console.error(error);
        toast.error('Đã xảy ra lỗi khi xử lý thanh toán. Vui lòng thử lại.');
      }
    };

    postPayment();
  }, [idBooking, selectedPayment]);

  const nameService = selectedService?.name || 'Chưa chọn dịch vụ';

  // Hàm tính tổng giá của sản phẩm
  const calculateTotalPrice = (products: any) => {
    return products.reduce((total: any, product: any) => total + parseInt(product.price), 0);
  };

  // Tính toán giá dịch vụ và sản phẩm
  const priceService = formatPrice(selectedService?.price);
  const totalPriceProducts = formatPrice(calculateTotalPrice(selectedProducts));

  // Khai báo state cho tổng giá ban đầu (chưa áp dụng voucher)
  const [totalPrice, setTotalPrice] = useState(
    parseInt(priceService) + parseInt(totalPriceProducts),
  );

  // useEffect để cập nhật totalPrice khi selectedVoucher thay đổi
  useEffect(() => {
    let newTotalPrice = parseInt(priceService) + parseInt(totalPriceProducts);

    if (selectedVoucher) {
      const voucherValue = parseInt(selectedVoucher?.discount);
      if (voucherValue < 100) {
        console.log(selectedService);
        newTotalPrice = Math.round(newTotalPrice - (newTotalPrice * voucherValue) / 100);
      } else if (voucherValue >= 100) {
        newTotalPrice -= parseInt(formatPrice(voucherValue));
      }
    }

    setTotalPrice(newTotalPrice);
  }, [selectedVoucher, priceService, totalPriceProducts]);

  const initTotalPrice =
    parseInt(formatPrice(selectedService?.price)) + parseInt(totalPriceProducts);
  const sale = formatPrice(initTotalPrice - totalPrice);

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
    if (location === 'at-home' && isEmpty(staff)) methods.setValue('staff', staffs[0]?.id);
  }, [staffs, location, setValue]);

  const { mutate: bookMutate } = usePostBooking();

  const handleBooking: SubmitHandler<any> = (data) => {
    forEach(data, (value, key) => methods.setValue(key, value));
    const values = methods.getValues();
    setShowThankYouModal(true);

    const formData = {
      guest_info: {
        name: values.fullName,
        phone_number: values.phoneNumber,
        gender: values.gender,
      },
      location_id: 2,
      number_of_people: parseInt(values.number_of_people) || 1,
      notes: values.note,
      address: values.address,
      booking_time: `${formatDateString(values.startDate)} ${values.selectedTime}:00`,
      staff_id: parseInt(staff),
      promotion_id: selectedVoucher?.id || null,
      services: [
        {
          service_id: selectedService?.id,
          quantity: 1,
        },
      ],
      // services: currentServices?.map((item: any) => ({
      //   service_id: parseInt(item.id),
      //   quantity: item.quantity,
      // })),
      delivery_type: location,
    };
    setDataForm(formData);
  };
  const handleBook = () => {
    bookMutate(dataForm, {
      onSuccess: () => {
        reset();
        setIsLoading(false);
      },
      onError: (error: any) => {
        setIsLoading(false);

        console.error('Booking failed:', error);
      },
    });
  };

  const handleBookingFormPayment = () => {
    setIsLoading(true);
    // Trigger the booking mutation
    bookMutate(dataForm, {
      onSuccess: (response: any) => {
        const bookingId = response?.data?.id;
        if (bookingId) {
          setIdBooking(bookingId); // Set the booking ID after successful booking
        }
        reset();
        setIsLoading(false); // Reset the form after successful booking
      },
      onError: (error: any) => {
        setIsLoading(false);
        console.error('Booking failed:', error);
      },
    });
  };

  return (
    <form onSubmit={handleSubmit(handleBooking)} className="mb-5 md:mb-10">
      {/* Hiển thị spinner khi đang loading */}
      {isLoading && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <motion.div
            className="h-8 w-8 rounded-full border-4 border-gray-300 border-t-[#3A449B]"
            animate={{
              rotate: 360,
            }}
            transition={{
              repeat: Infinity,
              duration: 1,
              ease: 'linear',
            }}
          ></motion.div>
        </div>
      )}
      {/* heading */}
      <Title>thông tin đặt chỗ tại nhà</Title>
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
                  {find(serviceLocations, { service_type: location })?.label}
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
                          methods.setValue('location_id', location.service_type);
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
                    {(staffs && find(staffs, { id: staff })?.name) || 'Chọn nhân viên'}
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
                      {map(staffs, (item) => (
                        <li
                          key={item.id}
                          onClick={() => {
                            staffHandlers.setFalse();
                            setValue('staff', item.id);
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
                      value="male"
                      {...register('gender')}
                    />
                    <span className="ml-2 text-sm md:text-base">Nam</span>
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      value="female"
                      className="accent-[#3A449B]"
                      {...register('gender')}
                    />
                    <span className="ml-2 text-sm md:text-base">Nữ</span>
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      value="orther"
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
                  {...register('number_of_people')}
                  className="mt-2 w-full rounded-xl border px-4 py-[10px]"
                >
                  {map(NUMBER_PEOPLE, (index) => (
                    <option key={index} value={index} className="text-sm md:text-base">
                      {index} người
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

            {/* Room Selection Modal */}

            <div className="my-4">
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
                        {formatPrice(selectedService?.price)}
                      </span>
                      <span> VND / Lần</span>
                    </p>
                    <p className="mt-1 font-medium">
                      Thời gian:{' '}
                      <span className="text-sm font-bold text-[#EF5F5F] md:text-base">
                        {selectedService?.duration}
                      </span>
                      <span> phút</span>
                    </p>

                    <div className="flex w-full flex-col">
                      <button
                        onClick={() => {
                          setModalOpenServiceBooking(true);
                          // Reset the selected service value (if needed)
                        }}
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

          <div className="my-3 grid grid-cols-1 gap-4 text-sm md:my-6 md:text-base">
            <button type="button" onClick={toggleModalVoucher}>
              {isEmpty(selectedVoucher) ? (
                <div className="flex items-center justify-between rounded-xl border border-[#3A449B] bg-[#d6d7e7] p-3 text-[#3A449B]">
                  Voucher giảm giá
                  <CustomImage width={18} height={18} src={SaleIc} alt="Arrow Down" />{' '}
                </div>
              ) : (
                <div className="flex items-center justify-center rounded-xl border border-[#3A449B] bg-[#d6d7e7] p-3 text-[#3A449B]">
                  Giảm{' '}
                  {formatPrice(selectedVoucher.discount) === '100.000'
                    ? `${formatPrice(selectedVoucher.discount)} VND`
                    : `${formatPrice(selectedVoucher.discount)}%`}
                </div>
              )}
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
              className="ml-2 hidden items-center justify-between rounded-xl border border-[#3A449B] bg-[#d6d7e7] p-2 text-[#3A449B]"
            >
              {isEmpty(selectedProducts) ? 'Sản phẩm mua kèm' : 'Chọn lại sản phẩm'}
              <CustomImage width={18} height={18} src={BoxIc} alt="Arrow Down" />
            </button>

            <ProductModal
              isOpen={isProductModalOpen}
              onClose={() => setProductModalOpen(false)}
              onSelectProduct={handleSelectProduct}
              selectedProduct={selectedProducts}
              products={PRODUCTS}
            />
          </div>
          {!isEmpty(selectedProducts) && (
            <div className="mb-4 flex w-full flex-col gap-3 md:gap-6">
              {selectedProducts.map((product) => (
                <div key={product.id} className="flex items-start gap-3 md:gap-6">
                  <div className="rounded-[32px] border border-[#E3E3E3] bg-white p-[24px]">
                    <CustomImage
                      src={product.imageUrl}
                      alt="cart"
                      width={100}
                      height={100}
                      className="size-[80px]"
                      classNameImg="rounded-2xl"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-base font-semibold md:text-xl">{product.name}</h3>
                    <p className="mt-1 text-sm font-bold text-red-500 md:text-base">
                      <span className="text-sm font-medium text-black md:text-base">Giá: </span>
                      {formatPrice(product.price)}
                      <span className="text-sm font-medium text-black md:text-base"> VND</span>
                    </p>
                  </div>
                  <div onClick={() => handleRemoveProduct(product.id)}>
                    <CustomImage
                      src={deleteIc}
                      alt="delete"
                      width={24}
                      height={24}
                      className="size-4 cursor-pointer md:size-5"
                    />
                  </div>
                </div>
              ))}
            </div>
          )}

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
                {nameService}
              </p>
              <span className="font-semibold">{priceService} VND</span>
            </p>
            {/* <p className="flex justify-between">
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
            </p> */}
            {/* <p className="flex justify-between">
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
            </p> */}
            {/* <p className="flex justify-between">
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
              <span className="font-semibold">{formatPrice(totalPriceProducts)}.000 VND</span>
            </p> */}
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
              {selectedVoucher && (
                <span className="font-semibold text-[#DA0000]">
                  -
                  {formatPrice(selectedVoucher.discount) === '100.000'
                    ? `${formatPrice(selectedVoucher.discount)} VND`
                    : `${formatPrice(selectedVoucher.discount)}%` || 0}
                </span>
              )}
            </p>
          </div>

          <div className="mb-6 mt-4">
            <div className="flex items-center justify-between text-base font-semibold md:text-xl">
              <p> Tổng thanh toán:</p>{' '}
              <p className="text-[#3A449B]">
                {isEmpty(selectedVoucher)
                  ? `${formatPrice(initTotalPrice)}.000 VND`
                  : `${formatPrice(totalPrice)}.000  VND` || '0'}
              </p>
            </div>
            {selectedVoucher && (
              <p className="text-right text-[13px] font-medium leading-4 text-[#DA0000]">
                Bạn đã tiết kiệm được {sale} nghìn đồng
              </p>
            )}
          </div>
          <button
            type="submit"
            className="text-medium mt-4 flex h-10 w-full items-center justify-center rounded-2xl border bg-[#3A449B] text-center text-base text-white transition duration-300 ease-in-out hover:bg-blue-900 md:h-12"
          >
            Đặt lịch
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
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <form className="sidebar-scroll over relative h-[70%] w-full max-w-[90%] overflow-y-scroll rounded-3xl bg-white p-10 lg:max-w-[60%] lg:px-16 lg:py-12">
            {/* Modal Title */}
            <Title>Hình thức thanh toán</Title>
            <button
              type="button"
              onClick={() => setShowThankYouModal(false)}
              className="absolute right-6 top-6 text-[32px] text-xl font-bold"
            >
              &times;
            </button>
            <div className="mt-4 rounded-lg">
              {/* MoMo Payment Option */}

              {/* Bank Transfer Payment Option */}
              <div>
                <div className="flex items-center justify-between">
                  <div>
                    <label className="mt-4 flex items-center space-x-2">
                      <input
                        type="radio"
                        name="payment"
                        value="payos"
                        className="form-radio size-4 accent-[#3A449B] lg:size-5"
                        onChange={() => {
                          setSelectedPayment('payos');
                        }}
                      />
                      <span className="text-sm font-semibold md:text-base lg:text-lg">
                        Chuyển Khoản Ngân Hàng
                      </span>
                    </label>
                    <p className="text-xs font-medium lg:w-[356px] lg:text-sm">
                      Chuyển tiền mặt tại quầy giao dịch hoặc chuyển khoản qua Internet Banking và
                      trạm ATM.
                    </p>
                  </div>
                  <div className="hidden items-center gap-2 sm:flex">
                    <CustomImage
                      src={vcb.src}
                      alt="vcb"
                      width={80}
                      height={80}
                      className="size-7 lg:size-8"
                    />
                    <CustomImage
                      src={acb.src}
                      alt="acb"
                      width={60}
                      height={60}
                      className="size-7 lg:size-9"
                    />
                    <CustomImage
                      src={more.src}
                      alt="more"
                      width={60}
                      height={60}
                      className="size-7 lg:size-8"
                    />
                  </div>
                </div>
              </div>

              {/* Counter Payment Option */}
              <div>
                <label className="mt-4 flex items-center space-x-2">
                  <input
                    type="radio"
                    name="payment"
                    value="counter"
                    className="form-radio size-4 accent-[#3A449B] lg:size-5"
                    onChange={() => setSelectedPayment('counter')}
                  />
                  <span className="text-sm font-semibold md:text-base lg:text-lg">
                    Tại Quầy Lễ Tân
                  </span>
                </label>
                <p className="mt-1 text-xs font-medium lg:text-sm">
                  Thanh toán trực tiếp tại quầy lễ tân của chúng tôi khi bạn đến nhận phòng
                </p>
                <div className="mt-4 rounded-[7px] border border-[#17C653] bg-[#eafff1] px-[14px] py-[17px]">
                  <p className="text-xs font-semibold text-[#17C653] md:text-sm">
                    Lưu ý trước khi thanh toán
                  </p>
                  <p className="text-xs font-medium text-[#000000]">
                    Sau khi đặt phòng thành công, bạn có thể đến cơ sở của chúng tôi để thanh toán
                    và bắt đầu sử dụng dịch vụ.
                  </p>
                </div>
              </div>
            </div>

            {/* Payment Button */}
            <button
              type="submit"
              onClick={async (e) => {
                e.preventDefault();
                if (selectedPayment === 'payos') {
                  await setShowThankYouModal(false);
                  handleBookingFormPayment();
                } else if (selectedPayment === 'counter') {
                  handleBook();
                  await setShowThankYouModal(false);
                  await setShowThankYouText(true);
                  setTimeout(() => {
                    router.push('/dich-vu');
                  }, 2000);
                }
              }}
              className="mx-auto mt-8 flex w-full max-w-[145px] justify-center rounded-2xl bg-[#3A449B] py-3 text-white transition-all duration-300 hover:opacity-90"
            >
              Thanh Toán
            </button>
          </form>
        </div>
      )}
      {showThankYouText && (
        <div className="z-60 fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="w-full max-w-md rounded-lg bg-white p-6 text-center">
            <h2 className="text-xl font-semibold text-[#3A449B]">Cảm ơn bạn!</h2>
            <p className="mt-2 text-gray-700">
              Lịch của bạn đã được đặt thành công. Xin mời bạn đến trải nghiệm dịch vụ
            </p>
            <button
              onClick={() => setShowThankYouText(false)}
              className="mt-4 rounded-lg bg-[#3A449B] px-4 py-2 text-white hover:opacity-90"
            >
              Đóng
            </button>
          </div>
        </div>
      )}
    </form>
  );
};

export default SectionFormBookingAtHome;
