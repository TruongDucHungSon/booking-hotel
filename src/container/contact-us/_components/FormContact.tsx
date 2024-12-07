import mailIc from '@/assets/svgs/contact/mail.svg';
import phoneIc from '@/assets/svgs/contact/phone.svg';
import UseIc from '@/assets/svgs/contact/user.svg';
import CustomImage from '@/components/CustomImage';
import { usePostContact } from '@/services/contact/contact.Service';
import { yupResolver } from '@hookform/resolvers/yup';
import { useRouter } from 'next/navigation';
import { Controller, useForm } from 'react-hook-form';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // Import CSS của react-toastify
import * as yup from 'yup';

// Schema validation
const schema = yup.object({
  fullName: yup.string().required('Họ và tên không được để trống'),
  phone: yup
    .string()
    .required('Số điện thoại không được để trống')
    .matches(/^[0-9]{10}$/, 'Số điện thoại không hợp lệ'),
  gender: yup.string().required('Vui lòng chọn giới tính'),
  email: yup.string().email('Email không hợp lệ').required('Email không được để trống'),
  service: yup.string().required('Vui lòng chọn dịch vụ'),
  note: yup.string().max(500, 'Ghi chú không được vượt quá 500 ký tự'),
  location_id: yup.number().required('Vui lòng chọn vị trí '),
});

const FormContact = ({ LOCATION_ID }: any) => {
  const router = useRouter();
  const location_id = LOCATION_ID || 1;
  const { mutate: POST_CONTACT } = usePostContact();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      fullName: '',
      phone: '',
      gender: '',
      email: '',
      service: '',
      note: '',
      location_id: 1,
    },
  });

  // Xử lý khi submit thành công
  const onSubmit = (data: any) => {
    const DataContact = {
      name: data.fullName || '',
      email: data.email || '',
      phone: data.phone || '',
      subject: 'Tư vấn dịch vụ',
      message: 'Tôi cần tư vấn về dịch vụ spa',
      gender: data.gender || '',
      delivery_type:
        data.service === 'Massage tại cửa hàng'
          ? 'in-store'
          : data.service === 'Massage tại nhà'
            ? 'at-home'
            : 'in-store',
      location_id: location_id || data.location_id || 1,
    };
    POST_CONTACT(DataContact, {
      onSuccess: () => {
        toast.success('Lưu thông tin thành công, chúng tôi sẽ liên hệ với bạn sớm nhất!', {
          position: 'top-right',
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
        router.push('/dich-vu');
      },
      onError: () => {
        toast.error('Mạng không ổn định!', {
          position: 'top-right',
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
      },
    });
  };

  return (
    <div>
      <ToastContainer />
      <h3 className="mb-4 text-base font-semibold text-[#18181B] md:text-lg">
        Thông Tin Khách Hàng
      </h3>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {/* Họ và tên */}
        <div>
          <label className="block text-sm font-medium text-[#18181b] md:text-base">Họ và tên</label>
          <div className="mt-[10px] flex items-center gap-2 rounded-xl border border-[#E8E8E8] px-4 py-[14px]">
            <CustomImage width={18} height={18} src={UseIc} alt="User" />
            <Controller
              name="fullName"
              control={control}
              render={({ field }) => (
                <input
                  {...field}
                  type="text"
                  placeholder="Tên của bạn"
                  className="w-full rounded-lg outline-none"
                />
              )}
            />
          </div>
          {errors.fullName && (
            <p className="mt-2 text-sm text-red-600">{errors.fullName.message}</p>
          )}
        </div>

        {/* Số điện thoại */}
        <div>
          <label className="block text-sm font-medium text-[#18181b] md:text-base">
            Số điện thoại
          </label>
          <div className="mt-[10px] flex items-center gap-2 rounded-xl border border-[#E8E8E8] px-4 py-[14px]">
            <CustomImage width={18} height={18} src={phoneIc} alt="Phone" />
            <Controller
              name="phone"
              control={control}
              render={({ field }) => (
                <input
                  {...field}
                  type="text"
                  placeholder="Nhập số điện thoại của bạn"
                  className="w-full rounded-lg text-sm outline-none md:text-base"
                />
              )}
            />
          </div>
          {errors.phone && <p className="mt-2 text-sm text-red-600">{errors.phone.message}</p>}
        </div>

        {/* Giới tính */}
        <div>
          <label className="block text-sm font-medium text-[#18181b] md:text-base">Giới tính</label>
          <div className="mt-[10px] flex gap-2">
            <Controller
              name="gender"
              control={control}
              render={({ field }) => (
                <>
                  <label className="flex items-center text-sm md:text-base">
                    <input {...field} type="radio" value="male" className="mr-1 accent-[#3A449B]" />{' '}
                    Nam
                  </label>
                  <label className="flex items-center text-sm md:text-base">
                    <input
                      {...field}
                      type="radio"
                      value="female"
                      className="mr-1 accent-[#3A449B]"
                    />{' '}
                    Nữ
                  </label>
                </>
              )}
            />
          </div>
          {errors.gender && <p className="mt-2 text-sm text-red-600">{errors.gender.message}</p>}
        </div>

        {/* Email */}
        <div>
          <label className="block text-sm font-medium text-[#18181b] md:text-base">Email</label>
          <div className="mt-[10px] flex items-center gap-2 rounded-xl border border-[#E8E8E8] px-4 py-[14px]">
            <CustomImage width={18} height={18} src={mailIc} alt="Email" />
            <Controller
              name="email"
              control={control}
              render={({ field }) => (
                <input
                  {...field}
                  type="email"
                  placeholder="abc@gmail.com"
                  className="w-full rounded-lg text-sm outline-none md:text-base"
                />
              )}
            />
          </div>
          {errors.email && <p className="mt-2 text-sm text-red-600">{errors.email.message}</p>}
        </div>

        {/* Dịch vụ */}
        <div>
          <label
            htmlFor="service"
            className="block text-sm font-medium text-[#18181b] md:text-base"
          >
            Dịch vụ
          </label>
          <Controller
            name="service"
            control={control}
            render={({ field }) => (
              <select
                {...field}
                id="service"
                className="mt-[10px] w-full rounded-lg border border-[#E8E8E8] px-4 py-[14px] text-sm md:text-base"
              >
                <option value="">Chọn dịch vụ</option>
                <option value="Massage tại cửa hàng">Massage tại cửa hàng</option>
                <option value="Massage tại nhà">Massage tại nhà</option>
              </select>
            )}
          />
          {errors.service && <p className="mt-2 text-sm text-red-600">{errors.service.message}</p>}
        </div>

        {/* Ghi chú */}
        <div>
          <label className="block text-sm font-medium text-[#18181b] md:text-base">Ghi chú</label>
          <Controller
            name="note"
            control={control}
            render={({ field }) => (
              <textarea
                {...field}
                placeholder="VD: liên hệ cho tôi ngay"
                className="mt-[10px] w-full rounded-lg border border-gray-300 p-2 text-sm md:text-base"
                rows={3}
              ></textarea>
            )}
          />
          {errors.note && <p className="mt-2 text-sm text-red-600">{errors.note.message}</p>}
        </div>

        {/* Nút lưu */}
        <div className="mt-4 flex items-center justify-between">
          <button
            type="submit"
            className="h-12 w-fit rounded-lg bg-[#3A449B] px-8 py-2 text-center text-base font-medium text-white shadow-md transition-all duration-300 hover:bg-[#1c2681] hover:bg-gradient-to-l"
          >
            Lưu thông tin
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormContact;
