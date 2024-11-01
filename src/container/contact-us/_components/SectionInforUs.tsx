'use client';

import addressIc from '@/assets/svgs/contact/address.svg';
import mailIc from '@/assets/svgs/contact/mail.svg';
import phoneIc from '@/assets/svgs/contact/phone.svg';
import UseIc from '@/assets/svgs/contact/user.svg';
import addressWhite from '@/assets/svgs/contact/white_address.svg';
import callWhite from '@/assets/svgs/contact/white_call.svg';
import WhiteDrIc from '@/assets/svgs/contact/white_dr.svg';
import CustomImage from '@/components/CustomImage';
import Title from '@/components/Title/Title';
import { Branch, branches } from '@/utils/constants';
import { useState } from 'react';

const SectionInforUs: React.FC = () => {
  const [activeBranch, setActiveBranch] = useState<Branch | null>(null);

  // Handle branch selection
  const handleBranchClick = (branch: Branch) => {
    setActiveBranch(branch);
  };

  return (
    <div className="container py-10 lg:py-20">
      <Title>Liên hệ với chúng tôi</Title>
      <div className="mt-4 h-fit space-y-6 rounded-lg bg-white md:mt-8">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-[1.2fr,1fr]">
          {/* Branch List */}
          <div className="rounded-xl border border-[#E8E8E8] p-4 md:p-6">
            <h3 className="mb-4 text-base font-semibold text-[#18181B] md:text-lg">
              Chi Nhánh Của Chúng Tôi
            </h3>
            <ul className="sidebar-scroll h-[530px] space-y-4 overflow-y-scroll">
              {branches.map((branch) => (
                <li
                  key={branch.name}
                  onClick={() => handleBranchClick(branch)}
                  className={`mr-2 cursor-pointer rounded-lg border p-4 text-sm md:text-base ${
                    activeBranch?.name === branch.name
                      ? 'bg-[#3A449B] text-white'
                      : 'border-gray-200'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="mb-[6px] text-base font-semibold md:text-lg">{branch.name}</p>
                      <div className="flex items-center gap-2">
                        <CustomImage
                          width={18}
                          height={18}
                          src={activeBranch?.name === branch.name ? addressWhite : addressIc}
                          alt="Address"
                        />
                        <p className="text-sm">{branch.address}</p>
                      </div>
                      <div className="mt-2 flex items-center gap-2">
                        <CustomImage
                          width={18}
                          height={18}
                          src={activeBranch?.name === branch.name ? callWhite : phoneIc}
                          alt="Phone"
                        />
                        <p className="text-sm">0981 123 106</p>
                      </div>
                    </div>
                    <div>
                      <CustomImage width={18} height={18} src={WhiteDrIc} alt="Doctor Icon" />
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Customer Information Form */}
          <div>
            <h3 className="mb-4 text-base font-semibold text-[#18181B] md:text-lg">
              Thông Tin Khách Hàng
            </h3>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-[#18181b] md:text-base">
                  Họ và tên
                </label>
                <div className="mt-[10px] flex items-center gap-2 rounded-xl border border-[#E8E8E8] px-4 py-[14px]">
                  <CustomImage width={18} height={18} src={UseIc} alt="User" />
                  <input
                    type="text"
                    placeholder="Tên của bạn"
                    className="w-full rounded-lg outline-none"
                  />
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-1">
                  <label className="block text-sm font-medium text-[#18181b] md:text-base">
                    Số điện thoại
                  </label>
                  <div className="mt-[10px] flex items-center gap-2 rounded-xl border border-[#E8E8E8] px-4 py-[14px]">
                    <CustomImage width={18} height={18} src={phoneIc} alt="User" />
                    <input
                      type="number"
                      placeholder="Nhập số điện thoại của bạn"
                      className="w-full rounded-lg text-sm outline-none md:text-base"
                    />
                  </div>
                </div>
                <div className="flex-1">
                  <label className="block text-sm font-medium text-[#18181b] md:text-base">
                    Giới tính
                  </label>
                  <div className="mt-[10px] flex gap-2">
                    <label className="flex items-center text-sm md:text-base">
                      <input type="radio" name="gender" className="mr-1 accent-[#3A449B]" /> Nam
                    </label>
                    <label className="flex items-center text-sm md:text-base">
                      <input type="radio" name="gender" className="mr-1 accent-[#3A449B]" /> Nữ
                    </label>
                    <label className="a flex items-center text-sm md:text-base">
                      <input type="radio" name="gender" className="mr-1 accent-[#3A449B]" /> Khác
                    </label>
                  </div>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-[#18181b] md:text-base">
                  Email
                </label>
                <div className="mt-[10px] flex items-center gap-2 rounded-xl border border-[#E8E8E8] px-4 py-[14px]">
                  <CustomImage width={18} height={18} src={mailIc} alt="Email" />
                  <input
                    type="email"
                    placeholder="abc@gmail.com"
                    className="w-full rounded-lg text-sm outline-none md:text-base"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="service"
                  className="block text-sm font-medium text-[#18181b] md:text-base"
                >
                  Dịch vụ
                </label>
                <select
                  id="service"
                  className="mt-[10px] w-full rounded-lg border border-[#E8E8E8] px-4 py-[14px] text-sm md:text-base"
                >
                  <option>Massage tại cửa hàng</option>
                  <option>Massage tại nhà</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-[#18181b] md:text-base">
                  Ghi chú
                </label>
                <textarea
                  placeholder="VD: liên hệ cho tôi ngay"
                  className="mt-[10px] w-full rounded-lg border border-gray-300 p-2 text-sm md:text-base"
                  rows={3}
                ></textarea>
              </div>
            </form>
          </div>
        </div>

        {/* Interactive Map */}
      </div>
    </div>
  );
};

export default SectionInforUs;
