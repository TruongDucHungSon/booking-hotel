import { clearCart } from '@/redux/cart/slide';
import { yupResolver } from '@hookform/resolvers/yup';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { toast, ToastContainer } from 'react-toastify';
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
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const dispatch = useDispatch();

  const onSubmit = (data: any) => {
    console.log(data); // Handle form submission here
    dispatch(clearCart());
    // Hiển thị thông báo thành công
    toast.success('Đặt hàng thành công!', {
      position: 'top-right',
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });

    // Reset form sau khi thành công
    reset();
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
    </div>
  );
};

export default FormCart;
