'use client';

import Title from '@/components/Title/Title';
import { clearCart } from '@/redux/cart/slide';
import { yupResolver } from '@hookform/resolvers/yup';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import * as yup from 'yup';

// Schema validation
const schema = yup.object().shape({
  fullName: yup.string().required('Họ và tên là bắt buộc.'),
  phone: yup
    .string()
    .required('Số điện thoại là bắt buộc.')
    .matches(/^[0-9]+$/, 'Số điện thoại chỉ chứa số.')
    .min(9, 'Số điện thoại phải có ít nhất 9 chữ số.'),
  gender: yup.string().required('Vui lòng chọn giới tính.'),
  email: yup.string().required('Email là bắt buộc.').email('Email không hợp lệ.'),
  address: yup.string().required('Địa chỉ là bắt buộc.'),
  note: yup.string().optional(),
});

const FormCart = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const dispatch = useDispatch();
  const [showThankYouModal, setShowThankYouModal] = useState(false);
  const [showThankYouText, setShowThankYouText] = useState(false);

  const onSubmit = (data: any) => {
    console.log(data);
    setShowThankYouModal(true); // Handle form submission here
  };

  const handlePostCart = async () => {
    await dispatch(clearCart());
    await setShowThankYouModal(false); // Handle form submission here
    setShowThankYouText(true);
  };

  return (
    <div className="w-full lg:w-[70%]">
      <ToastContainer /> {/* Container của react-toastify */}
      <h2 className="mb-2 text-base font-semibold md:text-lg lg:mb-4">Thông Tin Khách Hàng</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {/* Họ và tên */}
        <div>
          <label className="mb-1 block text-sm font-medium md:text-base">Họ và tên</label>
          <input
            type="text"
            className="w-full rounded-xl border px-4 py-2"
            placeholder="Trần Văn Mạnh"
            {...register('fullName')}
          />
          {errors.fullName && <p className="text-sm text-red-500">{errors.fullName.message}</p>}
        </div>

        {/* Số điện thoại và Giới tính */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="mb-1 block text-sm font-medium md:text-base">Số điện thoại</label>
            <input
              type="text"
              className="w-full rounded-xl border px-4 py-2"
              placeholder="0123 456 789"
              {...register('phone')}
            />
            {errors.phone && <p className="text-sm text-red-500">{errors.phone.message}</p>}
          </div>
          <div>
            <label className="mb-1 block text-sm font-medium md:text-base">Giới tính</label>
            <div className="flex items-center space-x-4">
              <label className="text-sm md:text-base">
                <input
                  type="radio"
                  value="Nam"
                  {...register('gender')}
                  className="mr-1 accent-[#3A449B]"
                />{' '}
                Nam
              </label>
              <label className="text-sm md:text-base">
                <input
                  type="radio"
                  value="Nữ"
                  {...register('gender')}
                  className="mr-1 accent-[#3A449B]"
                />{' '}
                Nữ
              </label>
              <label className="text-sm md:text-base">
                <input
                  type="radio"
                  value="Khác"
                  {...register('gender')}
                  className="mr-1 accent-[#3A449B]"
                />{' '}
                Khác
              </label>
            </div>
            {errors.gender && <p className="text-sm text-red-500">{errors.gender.message}</p>}
          </div>
        </div>

        {/* Email */}
        <div>
          <label className="mb-1 block text-sm font-medium md:text-base">Email</label>
          <input
            type="email"
            className="w-full rounded-xl border px-4 py-2"
            placeholder="abc@gmail.com"
            {...register('email')}
          />
          {errors.email && <p className="text-sm text-red-500">{errors.email.message}</p>}
        </div>

        {/* Địa chỉ */}
        <div>
          <label className="mb-2 block text-sm font-medium md:text-base">Địa chỉ</label>
          <input
            type="text"
            placeholder="Địa chỉ"
            className="w-full rounded-xl border px-4 py-2"
            {...register('address')}
          />
          {errors.address && <p className="text-sm text-red-500">{errors.address.message}</p>}
        </div>

        {/* Ghi chú */}
        <div>
          <label className="mb-1 block text-sm font-medium md:text-base">Ghi chú</label>
          <textarea
            className="w-full rounded-xl border px-4 py-2"
            placeholder="VD: giao hàng giờ hành chính"
            rows={3}
            {...register('note')}
          ></textarea>
        </div>

        {/* Nút đặt hàng */}
        <motion.button
          type="submit"
          className="mt-4 w-full rounded-full bg-[#3A449B] py-3 text-sm font-semibold text-white md:mt-6 md:text-base"
          whileHover={{ scale: 1.05 }}
        >
          Đặt hàng
        </motion.button>
      </form>
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
                        value="bank"
                        className="form-radio size-4 accent-[#3A449B] lg:size-5"
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
                handlePostCart();
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
              Đơn hàng của bạn đã được đặt. Chúng tôi sẽ liên hệ với bạn sớm nhất
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
    </div>
  );
};

export default FormCart;
