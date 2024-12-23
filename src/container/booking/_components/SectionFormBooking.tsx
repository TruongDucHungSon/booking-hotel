/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';
import sv1 from '@/assets/images/new/sv1.png';
import bedIc from '@/assets/svgs/arrow/bed.svg';
import BoxIc from '@/assets/svgs/arrow/box.svg';
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
import ModalBeds from '@/components/modal/ModalBeds';
import ProductModal from '@/components/modal/ModalProduct';
import ModalServiceBooking from '@/components/modal/ModalServiceBooking';
import ServiceSelectionModal from '@/components/modal/ModalServicer';
import VoucherModal from '@/components/modal/ModalVoucher';
import SelectionModalForm, { RoomProps } from '@/components/modal/SelectionModalForm';
import { publicRequest } from '@/config/HandleApi.Service';
import { calculateTotalPriceFood } from '@/container/booking/action/action';
import { usePostBooking } from '@/services/booking/Booking.Service';
import { useLocationData } from '@/services/location/Location.Service';
import { useProductData } from '@/services/product/Products.Service';
import { usePromotionData } from '@/services/promotion/promotion.service';
import { useRoomData } from '@/services/room/Rooms.Service';
import { useBedData, useSubServiceData } from '@/services/services/Services.Service';
import { NUMBER_PEOPLE, serviceLocations } from '@/utils/constants';
import { API_ENDPOINT } from '@/utils/endpoint';
import { formatDateString, formatPrice } from '@/utils/helpers';
import { yupResolver } from '@hookform/resolvers/yup';
import { useBoolean } from 'ahooks';
import dayjs from 'dayjs';
import { motion } from 'framer-motion';
import {
  filter,
  find,
  forEach,
  isEmpty,
  isNaN,
  isNil,
  map,
  parseInt,
  split,
  toNumber,
} from 'lodash';
import { useRouter } from 'next/navigation';
import { useEffect, useMemo, useState } from 'react';
import DatePicker from 'react-datepicker';
import { SubmitHandler, useForm, useFormContext } from 'react-hook-form';
import { toast } from 'react-toastify';
import * as yup from 'yup';
const SectionFormBooking = () => {
  const router = useRouter();

  const { data: DATA_LOCATIONS } = useLocationData();
  const LOCATIONS: any = DATA_LOCATIONS || [];
  const { data: DATA_PROMOTIONS } = usePromotionData();
  const PROMOTIONS: any = DATA_PROMOTIONS || [];
  const { data: DATA_SUB_SERVICES } = useSubServiceData();
  const SUB_SERVICES: any = DATA_SUB_SERVICES?.data || [];
  const { data: DATA_PRODUCTS } = useProductData();
  const PRODUCTS: any = DATA_PRODUCTS?.data || [];
  const { data: DATA_BEDS } = useBedData();
  const BEDS: any = DATA_BEDS?.data || [];
  const { data: DATA_ROOMS } = useRoomData();
  const ROOMS: any = DATA_ROOMS?.data || [];

  const methods = useFormContext();
  const [isModalOpenRoom, setModalOpenRoom] = useState(false);
  const openModalRoom = () => setModalOpenRoom(true);
  const closeModalRoom = () => setModalOpenRoom(false);
  const [isModalOpenBed, setModalOpenBed] = useState(false);
  const openModalBed = () => setModalOpenBed(true);
  const closeModalBed = () => setModalOpenBed(false);
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

  const [isModalOpenService, setIsModalOpenService] = useState(false);

  const handleOpenModalService = () => {
    setIsModalOpenService(true);
  };

  const handleCloseModalService = () => {
    setIsModalOpenService(false);
  };

  const [isOpenLocation, locationHandlers] = useBoolean(false);
  const [isOpenStore, storeHandlers] = useBoolean(false);

  const {
    register,
    setValue,
    handleSubmit,
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
        staff: yup.string(),
        gender: yup.string().required(),
        fullName: yup.string().required(),
        address: yup.string(),
        store: yup.string().required(),
        phoneNumber: yup
          .string()
          .required()
          .matches(/^\d{10}$/, 'Số điện thoại phải có đúng 10 chữ số'),
      }),
    ),
  });
  const [showThankYouModal, setShowThankYouModal] = useState(false);
  const [selectedPayment, setSelectedPayment] = useState<any>(null);

  const location = methods.watch('location_id');
  const selectedTime = watch('selectedTime');
  const currentServices = watch('services');

  const selectedCategory = watch('category');

  const selectedService = watch('service');
  console.log(selectedService);

  const selectBed = selectedCategory?.services.filter(
    (service: any) => service.service_type === 'bed_service',
  );
  const selectRoom = selectedCategory?.services.filter(
    (service: any) => service.service_type === 'room_service',
  );

  const [selectedBed, setSelectedBed] = useState<any | null>(null);
  const handleSelectBed = (bed: any) => {
    setSelectedBed(bed);
    setValue('bed', bed.id);
  };
  const idSelectBed = selectBed?.map((bed: any) => bed.id);
  const idSelectRoom = selectRoom?.map((bed: any) => bed.id);
  const resutBed = BEDS.find((bed: any) => idSelectBed?.includes(bed.id));
  const resultRoom = ROOMS.find((room: any) => idSelectRoom?.includes(room.id));

  const selectFood = selectedCategory?.services.filter(
    (service: any) => service?.service_type === 'food_drink',
  );

  const store = watch('store');

  useEffect(() => {
    if (selectedService?.delivery_type === 'at-home' && location === 'in-store') {
      setValue('service', null);
    }
  }, [selectedService]);

  useEffect(() => {
    if (location === 'in-store') {
      router.push('/dat-lich');
    } else if (location === 'at-home') {
      router.push('/dat-lich-tai-nha');
    }
  }, [location]);

  const nameService = selectedService?.name || 'Chưa chọn dịch vụ';
  const [selectedRoom, setSelectedRoom] = useState<any | null>(null);
  const handleSelectRoom = (room: RoomProps) => {
    setSelectedRoom(room);
    setValue('room', room);
  };

  const calculateTotalPriceSelectFood = (services: any, serviceData: any) => {
    return services?.reduce((total: any, { id, quantity }: any) => {
      // Tìm dịch vụ theo ID
      const service = serviceData.find((item: any) => item.id === parseInt(id, 10));
      if (service) {
        total += parseFloat(service.price) * quantity; // Nhân giá với số lượng
      }
      return total;
    }, 0);
  };
  const totalPriceSelectFood = calculateTotalPriceSelectFood(currentServices, SUB_SERVICES);

  const calculateTotalPrice = (products: any) => {
    return products.reduce((total: any, product: any) => total + parseInt(product.price), 0);
  };
  const totalFood = currentServices ? totalPriceSelectFood : calculateTotalPriceFood(selectFood);
  const selectPriceBed = selectedBed
    ? parseFloat(selectedBed.price)
    : selectBed?.reduce(
        (total: number, service: any) => total + parseFloat(service.price || '0'),
        0,
      );

  const selectPriceRoom = selectedRoom
    ? parseFloat(selectedRoom.price)
    : selectRoom?.reduce(
        (total: number, service: any) => total + parseFloat(service.price || '0'),
        0,
      );

  const priceService = parseFloat(selectedService?.price || '0');
  const totalPriceProducts = calculateTotalPrice(selectedProducts);

  const [totalPrice, setTotalPrice] = useState(
    priceService + totalPriceProducts + totalFood + selectPriceBed + selectPriceRoom,
  );

  useEffect(() => {
    let newTotalPrice =
      priceService + totalPriceProducts + totalFood + selectPriceBed + selectPriceRoom;

    if (selectedVoucher) {
      const voucherValue = parseInt(selectedVoucher?.discount, 10);
      if (voucherValue < 100) {
        newTotalPrice = Math.round(newTotalPrice - (newTotalPrice * voucherValue) / 100);
      } else if (voucherValue >= 100) {
        newTotalPrice -= voucherValue;
      }
    }

    // Đảm bảo giá trị không âm
    setTotalPrice(Math.max(0, newTotalPrice));
  }, [
    selectedVoucher,
    priceService,
    totalPriceProducts,
    totalFood,
    selectPriceBed,
    selectPriceRoom,
  ]);

  // Tính giá ban đầu (chưa giảm giá)
  const initTotalPrice =
    priceService + totalPriceProducts + totalFood + selectPriceBed + selectPriceRoom;

  // Giá giảm giá
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
  }, []);

  const [dataForm, setDataForm] = useState<any>(null);
  // const postPaymentMutation = usePostPayment(idBooking);
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
        toast.error('Mạng không ổn định.');
      }
    };

    postPayment();
  }, [idBooking, selectedPayment]);

  // Triggering the postPaymentMutation with idBooking
  const { mutate: bookMutate } = usePostBooking();

  const handleBooking: SubmitHandler<any> = (data) => {
    forEach(data, (value, key) => methods.setValue(key, value)); // Set form values
    const values = methods.getValues(); // Get form values
    setShowThankYouModal(true);
    const services = [
      {
        service_id: selectedService?.id,
        quantity: 1, // Số lượng dịch vụ chính
      },
      ...(selectedBed
        ? [
            {
              service_id: selectedBed.id,
              quantity: 1,
            },
          ]
        : selectBed.map((bed: any) => ({
            service_id: bed.id,
            quantity: 1,
          }))),
      ...(currentServices
        ? currentServices.map((food: any) => ({
            service_id: food.id,
            quantity: food.quantity,
          }))
        : selectFood.map((food: any) => ({
            service_id: food.id,
            quantity: 1,
          }))),
      ...(selectedRoom
        ? [
            {
              service_id: selectedRoom.id,
              quantity: 1,
            },
          ] // Nếu `selectedRoom` là object, thêm object này vào mảng
        : [
            ...selectRoom.map((room: any) => ({
              service_id: room.id,
              quantity: 1,
            })), // Nếu không có `selectedRoom`, sử dụng các phần tử từ `selectRoom`
          ]),
    ];

    const formData = {
      guest_info: {
        name: values.fullName,
        phone_number: values.phoneNumber,
        gender: values.gender,
      },
      location_id: parseInt(values.store),
      promotion_id: selectedVoucher?.id || null,
      number_of_people: parseInt(values.number_of_people),
      notes: values.note,
      booking_time: `${formatDateString(values.startDate)} ${values.selectedTime}:00`,
      staff_id: 9,
      services,
      delivery_type: location,
    };
    // TriggsetDataFormer the booking mutation
    setDataForm(formData);
  };

  const handleBookingForm = () => {
    // Trigger the booking mutation
    bookMutate(dataForm, {
      onSuccess: () => {
        reset();
        setIsLoading(false); // Reset the form after successful booking
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
    <form className="mb-5 md:mb-10" onSubmit={handleSubmit(handleBooking)}>
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

              <div className="relative w-full">
                <button
                  type="button"
                  onClick={storeHandlers.toggle}
                  className="flex w-full items-center justify-between rounded-2xl border bg-white px-4 py-[10px] text-sm font-medium text-black shadow-sm focus:border-[#3A449B] focus:outline-none md:text-base"
                >
                  <CustomImage width={18} height={18} src={StoreIc} alt="Store Icon" />
                  {(LOCATIONS?.data && find(LOCATIONS.data, { id: store })?.name) ||
                    'Chọn cửa hàng'}

                  <CustomImage
                    width={18}
                    height={18}
                    src={ArrowIc}
                    alt="Arrow Down"
                    className={`transition-all duration-300 ${isOpenStore ? 'rotate-180' : ''}`}
                  />
                </button>
                {errors.store ? (
                  <div className="text-[12px] font-medium text-red-500">
                    Quý khách vui lòng chọn địa điểm
                  </div>
                ) : null}
                {isOpenStore && (
                  <ul className="absolute z-10 mt-2 w-full rounded-xl border bg-white text-sm shadow-lg md:text-base">
                    {LOCATIONS?.data?.map((storeOption: any) => (
                      <li
                        key={storeOption.id}
                        onClick={() => {
                          setValue('store', storeOption.id);
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
            <SelectionModalForm
              isOpen={isModalOpenRoom}
              onClose={closeModalRoom}
              onSelectRoom={handleSelectRoom}
              rooms={ROOMS}
              title="Đặt phòng"
              sutTitle1="Hệ thống đặt phòng trực tuyến hiện tại của chúng tôi"
              sutTitle2="chỉ chấp nhận đặt phòng sau một tuần"
              sutTitle3="chỉ có thể đặt tối đa 1 phòng cùng một lúc."
            />
            {/* Room choice */}
            <div className={`relative mb-4 w-full ${location === 'at-home' ? 'hidden' : 'block'}`}>
              <button
                type="button"
                onClick={openModalRoom}
                className="flex w-full items-center justify-between rounded-2xl border bg-white px-4 py-[10px] text-sm font-medium focus:border-[#3A449B] focus:outline-none md:text-base"
              >
                Phòng massage
                <CustomImage width={18} height={18} src={downBlue} alt="Arrow Down" />
              </button>
              {errors.room ? (
                <div className="text-[12px] font-medium text-red-500">
                  Quý khách vui lòng chọn phòng
                </div>
              ) : null}
              {/* Display selected room */}
              {selectedRoom ? (
                <div
                  key={selectedRoom.id}
                  className="mt-2 w-fit rounded-xl border bg-[#f1f1f4] px-4 py-2 text-[13px] text-xs font-medium leading-4 text-black/85 md:text-base"
                >
                  {selectedRoom.name}
                </div>
              ) : (
                <div
                  key={resultRoom?.id}
                  className="mt-2 w-fit rounded-xl border bg-[#f1f1f4] px-4 py-2 text-[13px] text-xs font-medium leading-4 text-black/85 md:text-base"
                >
                  {resultRoom?.name}
                </div>
              )}
            </div>
            <div className={`relative mb-4 w-full`}>
              <button
                type="button"
                onClick={openModalBed}
                className="flex w-full items-center justify-between rounded-2xl border bg-white px-4 py-[10px] text-sm font-medium focus:border-[#3A449B] focus:outline-none md:text-base"
              >
                Giường massage
                <CustomImage width={18} height={18} src={downBlue} alt="Arrow Down" />
              </button>
              {/* {errors.room ? (
                <div className="text-[12px] font-medium text-red-500">
                  Quý khách vui lòng chọn giường
                </div>
              ) : null} */}
              {/* Display selected room */}
              {selectedBed ? (
                <div
                  key={selectedBed?.id}
                  className="mt-2 w-fit rounded-xl border bg-[#f1f1f4] px-4 py-2 text-[13px] text-xs font-medium leading-4 text-black/85 md:text-base"
                >
                  {selectedBed?.name}
                </div>
              ) : (
                <div
                  key={resutBed?.id}
                  className="mt-2 w-fit rounded-xl border bg-[#f1f1f4] px-4 py-2 text-[13px] text-xs font-medium leading-4 text-black/85 md:text-base"
                >
                  {resutBed?.name}
                </div>
              )}
            </div>

            <ModalBeds
              isOpen={isModalOpenBed}
              onClose={closeModalBed}
              onSelectRoom={handleSelectBed}
              rooms={BEDS}
              title="Đặt giường"
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
                location={location}
                isOpen={isModalOpenService}
                onClose={handleCloseModalService}
                onSelectServices={(v) => {
                  const result = map(v, (quantity, id) => ({
                    id,
                    quantity,
                  }));

                  setValue('services', result);
                }}
                services={SUB_SERVICES}
                title="Đặt dịch vụ"
                subTitle1="Hệ thống đặt phòng trực tuyến hiện tại của chúng tôi"
                subTitle2="chỉ chấp nhận đặt phòng sau một tuần"
                subTitle3="chỉ có thể đặt tối đa 1 phòng cùng một lúc."
              />

              <div className="mt-2">
                <div className="flex flex-wrap items-center gap-4">
                  {map(currentServices, ({ id, quantity }) => {
                    // Tìm service dựa trên id (đảm bảo id là số)
                    const service = find(SUB_SERVICES, { id: Number(id) });

                    // Debug nếu không tìm thấy dịch vụ
                    if (!service) {
                      console.warn(`Không tìm thấy dịch vụ với id: ${id}`);
                      return null;
                    }

                    return (
                      <div
                        key={id}
                        onClick={() => {
                          // Loại bỏ dịch vụ hiện tại khỏi danh sách
                          const result = filter(
                            currentServices,
                            ({ id: currentId }) => currentId !== id,
                          );

                          // Cập nhật giá trị
                          setValue('services', result);
                        }}
                        className="flex w-fit cursor-pointer items-center gap-4 rounded-xl bg-[#F1F1F4] px-4 py-2 text-[13px] leading-4"
                      >
                        <CustomImage
                          width={18}
                          height={18}
                          src={deleteIc}
                          alt="Delete Icon"
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
              <span className="font-semibold">{formatPrice(priceService) || 0} VND</span>
            </p>
            <p className="flex justify-between">
              <p className="flex items-center gap-2">
                <CustomImage
                  className="h-6 w-6"
                  width={18}
                  height={18}
                  src={bedIc}
                  alt="Arrow Down"
                />{' '}
                Giá phòng
              </p>
              <span className="font-semibold">{formatPrice(selectPriceRoom)} VND</span>
            </p>
            <p className="flex justify-between">
              <p className="flex items-center gap-2">
                <CustomImage
                  className="h-6 w-6"
                  width={18}
                  height={18}
                  src={bedIc}
                  alt="Arrow Down"
                />{' '}
                Giá giường
              </p>
              <span className="font-semibold">{formatPrice(selectPriceBed)} VND</span>
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
              <span className="font-semibold">{formatPrice(totalFood)} VND</span>
            </p>
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
              <span className="font-semibold">{formatPrice(totalPriceProducts) || 0} VND</span>
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
                  ? `${formatPrice(initTotalPrice) || '0'} VND`
                  : `${formatPrice(totalPrice) || '0'} VND`}
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
                  <div className="hidden items-center gap-2 sm:flex"></div>
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
                  handleBookingForm();
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

export default SectionFormBooking;
