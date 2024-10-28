'use client';

import CustomImage from '@/components/CustomImage';
import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import RoomSrc1 from '../../../assets/images/room/r1.png';
import RoomSrc2 from '../../../assets/images/room/r2.png';
import RoomSrc3 from '../../../assets/images/room/r3.png';
import RoomSrc4 from '../../../assets/images/room/r4.png';
import RoomSrc5 from '../../../assets/images/room/r5.png';
import RoomSrc6 from '../../../assets/images/room/r6.png';
import bed from '../../../assets/svgs/arrow/bed.svg';
import BoxIc from '../../../assets/svgs/arrow/box.svg';
import box1 from '../../../assets/svgs/arrow/box1.svg';
import check from '../../../assets/svgs/arrow/check1.svg';
import ArrowIc from '../../../assets/svgs/arrow/down.svg';
import LocationIc from '../../../assets/svgs/arrow/location.svg';
import massa from '../../../assets/svgs/arrow/massa.svg';
import SaleIc from '../../../assets/svgs/arrow/sale.svg';
import service from '../../../assets/svgs/arrow/service.svg';
import StoreIc from '../../../assets/svgs/arrow/store.svg';
import voucher from '../../../assets/svgs/arrow/voucher.svg';
import downBlue from '../../../assets/svgs/search/dropdowBlu.svg';
import Title from '../../../components/Title/Title';
import SelectionModalForm, { RoomProps } from '../../../components/modal/SelectionModalForm';
type FormValues = {
  fullName: string;
  phoneNumber: string;
  gender: string;
  numPeople: number;
  arrivalDate: string;
  arrivalTime: string;
  room: string; // Assuming you'll add more fields related to room and bed later
  bed: string;
  service: string[];
  note: string;
};

const SectionFormBooking = () => {
  const roomsData: RoomProps[] = [
    { name: 'Phòng Luxury VIP 1 ', image: RoomSrc1 },
    { name: 'Phòng Luxury VIP 2', image: RoomSrc2 },
    { name: 'Phòng Luxury VIP 3', image: RoomSrc3 },
    { name: 'Phòng Luxury VIP 4', image: RoomSrc4 },
    { name: 'Phòng Luxury VIP 5', image: RoomSrc5 },
    { name: 'Phòng Luxury VIP 6', image: RoomSrc6 },
  ];
  const bedsData: RoomProps[] = [
    { name: 'Giường Luxury Thượng Hạng 1 ', image: RoomSrc1 },
    { name: 'Giường Luxury Thượng Hạng 2', image: RoomSrc2 },
    { name: 'Giường Luxury Thượng Hạng 3', image: RoomSrc3 },
    { name: 'Giường Luxury Thượng Hạng 4', image: RoomSrc4 },
    { name: 'Giường Luxury Thượng Hạng 5', image: RoomSrc5 },
    { name: 'Giường Luxury Thượng Hạng 6', image: RoomSrc6 },
  ];

  const stores = [
    'Bloom Massage Hoàn Kiếm Hà Nội',
    'Bloom Massage Cầu Giấy',
    'Bloom Massage Đống Đa',
    'Bloom Massage Tây Hồ',
    'Bloom Massage Ba Đình',
  ];
  const [store, setStore] = useState('Bloom Massage Hoàn Kiếm Hà Nội');
  const [serviceLocation, setServiceLocation] = useState('Massage tại cửa hàng');
  const [dropdowns, setDropdowns] = useState({
    store: false,
    location: false,
    room: false,
  });
  const [selectedRoom, setSelectedRoom] = useState(roomsData[0].name);
  const [isModalOpenRoom, setModalOpenRoom] = useState(false);
  const openModalRoom = () => setModalOpenRoom(true);
  const closeModalRoom = () => setModalOpenRoom(false);

  const [selectedBed, setSelectedBed] = useState<string[]>([]);
  const [isModalOpenBed, setModalOpenBed] = useState(false);
  const openModalBed = () => setModalOpenBed(true);
  const closeModalBed = () => setModalOpenBed(false);

  const handleRoomSelect = (room: RoomProps) => {
    setSelectedRoom(room.name); // Set the selected room name
    // Optionally, handle other actions (e.g., set room details)
  };
  const handleBedSelect = (bed: RoomProps) => {
    setSelectedBed((prevSelectedBeds) => {
      // Check if the bed is already selected
      const isSelected = prevSelectedBeds.includes(bed.name);
      if (isSelected) {
        // If selected, remove it
        return prevSelectedBeds.filter((selectedBed: string) => selectedBed !== bed.name);
      } else {
        // If not selected, add it, but only if there are fewer than 2 already selected
        if (prevSelectedBeds.length < 2) {
          return [...prevSelectedBeds, bed.name];
        }
        return prevSelectedBeds; // Return current state if already 2 beds are selected
      }
    });
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
    toggleDropdown(type); // Close dropdown after selecting
  };

  const { register, handleSubmit } = useForm<FormValues>();

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log(data);
  };

  return (
    <section>
      {/* heading */}
      <Title>thông tin đặt chỗ</Title>
      <p className="mt-[10px] text-center text-base text-[#1B1B1B]">
        Hệ thống đặt phòng trực tuyến hiện tại của chúng tôi chỉ chấp nhận đặt phòng sau một tuần và
        chỉ có thể đặt tối đa hai người cùng một lúc.
      </p>
      {/* form */}
      <div className="my-[56px] flex space-x-8">
        {/* Left Side: Customer Information */}
        <div className="w-[533px]">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-6 rounded-3xl bg-[#F1F1F4] p-4">
              <div className="relative mb-6 w-full">
                <button
                  type="button"
                  onClick={() => toggleDropdown('location')}
                  className="flex w-full items-center justify-between rounded-2xl border bg-white px-4 py-[10px] text-base font-medium text-[#3A449B] focus:border-[#3A449B] focus:outline-none"
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

              <div className="relative w-full">
                <button
                  type="button"
                  onClick={() => toggleDropdown('store')}
                  className="flex w-full items-center justify-between rounded-2xl border bg-white px-4 py-[10px] text-base font-medium text-black shadow-sm focus:border-[#3A449B] focus:outline-none"
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
            </div>
            <h2 className="mb-4 text-xl font-semibold text-[#18181B]">THÔNG TIN KHÁCH HÀNG</h2>

            <div className="grid grid-cols-2 gap-4">
              <div className="mb-4">
                <label className="block text-base font-medium text-black">Họ và tên</label>
                <input
                  type="text"
                  {...register('fullName')}
                  className="mt-2 w-full rounded-xl border px-4 py-[10px]"
                />
              </div>

              <div className="mb-4">
                <label className="block text-base font-medium text-black">Số điện thoại</label>
                <input
                  type="text"
                  {...register('phoneNumber')}
                  className="mt-2 w-full rounded-xl border px-4 py-[10px] focus:border-[#3A449B]"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="mb-4">
                <label className="block text-base font-medium text-black">Giới tính</label>
                <div className="mt-2 flex space-x-4">
                  <label className="flex items-center">
                    <input
                      type="radio"
                      className="accent-[#3A449B]"
                      value="Nam"
                      {...register('gender')}
                    />
                    <span className="ml-2">Nam</span>
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      value="Nữ"
                      className="accent-[#3A449B]"
                      {...register('gender')}
                    />
                    <span className="ml-2">Nữ</span>
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      value="Khác"
                      className="accent-[#3A449B]"
                      {...register('gender')}
                    />
                    <span className="ml-2">Khác</span>
                  </label>
                </div>
              </div>

              <div className="mb-4">
                <label className="block text-base font-medium text-black">Số lượng người</label>
                <select
                  {...register('numPeople')}
                  className="mt-2 w-full rounded-xl border px-4 py-[10px]"
                >
                  <option value="1">1 người</option>
                  <option value="2">2 người</option>
                  <option value="3">3 người</option>
                  {/* Add more options as needed */}
                </select>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="mb-4">
                <label className="block text-base font-medium text-black">Ngày đến</label>
                <input
                  type="date"
                  {...register('arrivalDate')}
                  className="mt-2 w-full rounded-xl border px-4 py-[10px]"
                />
              </div>

              <div className="mb-4">
                <label className="block text-base font-medium text-black">Giờ đến</label>
                <input
                  type="time"
                  {...register('arrivalTime')}
                  className="mt-2 w-full rounded-xl border px-4 py-[10px]"
                />
              </div>
            </div>
            {/* Room choice */}
            <div className="relative mb-4 w-full">
              <button
                type="button"
                onClick={openModalRoom}
                className="flex w-full items-center justify-between rounded-2xl border bg-white px-4 py-[10px] text-base font-medium focus:border-[#3A449B] focus:outline-none"
              >
                Phòng massage
                <CustomImage width={18} height={18} src={downBlue} alt="Arrow Down" />
              </button>
              {/* Display selected room */}
              <div className="mt-2 w-fit rounded-xl border bg-[#f1f1f4] px-4 py-2 text-[13px] font-medium leading-4 text-black/85">
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
            {/* bed choice */}
            <div className="relative mb-4 w-full">
              <button
                type="button"
                onClick={openModalBed}
                className="flex w-full items-center justify-between rounded-2xl border bg-white px-4 py-[10px] text-base font-medium focus:border-[#3A449B] focus:outline-none"
              >
                Giường massage
                <CustomImage width={18} height={18} src={downBlue} alt="Arrow Down" />
              </button>
              {/* Display selected bed */}
              {selectedBed[0] ? (
                <div className="mt-2 w-fit rounded-xl border bg-[#f1f1f4] px-4 py-2 text-[13px] font-medium leading-4 text-black/85">
                  {selectedBed[0]}
                </div>
              ) : null}

              {selectedBed[1] ? (
                <div className="mt-2 w-fit rounded-xl border bg-[#f1f1f4] px-4 py-2 text-[13px] font-medium leading-4 text-black/85">
                  {selectedBed[1]}
                </div>
              ) : null}
            </div>

            {/* bed Selection Modal */}
            <SelectionModalForm
              isOpen={isModalOpenBed}
              onClose={closeModalBed}
              onSelectRoom={handleBedSelect}
              rooms={bedsData}
              title="Đặt phòng"
              sutTitle1="Hệ thống đặt phòng trực tuyến hiện tại của chúng tôi"
              sutTitle2="chỉ chấp nhận đặt phòng sau một tuần"
              sutTitle3="chỉ có thể đặt tối đa 1 phòng cùng một lúc."
            />

            <div className="mb-4">
              <label className="block text-base font-medium text-black">Ghi chú</label>
              <textarea
                {...register('note')}
                className="mt-2 w-full rounded-xl border px-4 py-[10px]"
                rows={3}
                placeholder="Tôi có thể đến muộn 10p"
              ></textarea>
            </div>
          </form>
        </div>

        {/* Right Side: Service Details */}
        <div className="h-min w-[calc(100%-(533px+32px))] rounded-3xl bg-[#F1F1F4] p-6">
          <div className="flex items-center justify-center gap-6">
            <CustomImage
              width={1200}
              height={1000}
              src={RoomSrc1.src}
              alt="Gói trị liệu"
              className="h-[137px] w-[270px] rounded-[20px] border border-[#E7E7E7] bg-white p-2"
              classNameImg="rounded-[16px]"
            />
            <div className="mb-4 w-[calc(100%-270px)]">
              <h3 className="text-xl font-semibold">Gói trị liệu phòng chung</h3>
              <p className="mt-1">
                Giá: <span className="text-base font-bold text-[#EF5F5F]">350.000</span> VND / Lần
              </p>
              <p className="mt-1">
                Thời gian: <span className="text-base font-bold text-[#EF5F5F]">60</span> phút
              </p>
              <button
                type="button"
                className="text-medium mt-4 flex h-12 w-full items-center justify-center rounded-2xl border border-[#3A449B] text-center text-[#3A449B]"
              >
                Chọn lại dịch vụ
              </button>
            </div>
          </div>

          <div className="my-6 grid grid-cols-2 gap-4">
            <button
              type="button"
              className="flex items-center justify-between rounded-xl border border-[#3A449B] bg-[#d6d7e7] p-3 text-[#3A449B]"
            >
              Voucher giảm giá <CustomImage width={18} height={18} src={SaleIc} alt="Arrow Down" />
            </button>
            <button
              type="button"
              className="ml-2 flex items-center justify-between rounded-xl border border-[#3A449B] bg-[#d6d7e7] p-2 text-[#3A449B]"
            >
              Sản phẩm mua kèm
              <CustomImage width={18} height={18} src={BoxIc} alt="Arrow Down" />
            </button>
          </div>

          <div className="flex flex-col gap-4 border-b pb-4 text-base text-black/85">
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
            <div className="flex items-center justify-between text-xl font-semibold">
              <p> Tổng thanh toán:</p> <p className="text-[#3A449B]">900.000 VND</p>
            </div>
            <p className="text-right text-[13px] font-medium leading-4 text-[#DA0000]">
              Bạn đã tiết kiệm được 50K
            </p>
          </div>
          <button
            type="button"
            className="text-medium mt-4 flex h-12 w-full items-center justify-center rounded-2xl border bg-[#3A449B] text-center text-white transition duration-300 ease-in-out hover:bg-blue-900"
          >
            Thanh toán
          </button>
          <div className="mt-6">
            <div className="mb-4 flex items-center gap-2 text-base font-semibold">
              <CustomImage src={ArrowIc} alt="payment" width={18} height={18} className="h-3 w-6" />
              Thông tin gói dịch vụ
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2 text-sm text-[#18181B]">
                <CustomImage src={check} alt="payment" width={18} height={18} className="h-6 w-6" />
                Tắm sạch bằng bộ sản phẩm tắm gội thảo dược theo mùa
              </div>
              <div className="flex items-center gap-2 text-sm text-[#18181B]">
                <CustomImage src={check} alt="payment" width={18} height={18} className="h-6 w-6" />
                Xông hơi ướt với lá xông theo mùa, ngâm chân muối thảo dược
              </div>
              <div className="flex items-center gap-2 text-sm text-[#18181B]">
                <CustomImage src={check} alt="payment" width={18} height={18} className="h-6 w-6" />
                Chăm sóc toàn thân với kem Ngải Diệp hoặc kem Gừng
              </div>
              <div className="flex items-center gap-2 text-sm text-[#18181B]">
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
