'use client';

import SaleIc from '@/assets/svgs/arrow/sale.svg';
import CustomImage from '@/components/CustomImage';
import React, { useState } from 'react';
import Title from '../Title/Title';

type VoucherModalProps = {
  isOpen: boolean;
  onClose: () => void;
  onSelectVoucher: (voucher: string) => void;
  selectedVoucher: string | null;
  vouchers: any;
};

const VoucherModal: React.FC<VoucherModalProps> = ({
  isOpen,
  onClose,
  onSelectVoucher,
  selectedVoucher,
  vouchers,
}) => {
  const [selectedDiscount, setSelectedDiscount] = useState<string | null>(selectedVoucher);

  if (!isOpen) return null;

  const handleVoucherSelect = (discount: string) => {
    setSelectedDiscount(discount);
  };

  const handleApplyVoucher = () => {
    if (selectedDiscount) {
      onSelectVoucher(selectedDiscount);
      onClose(); // Close modal after selection
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-800 bg-opacity-75">
      <div className="sidebar-scroll h-[70%] w-[90%] overflow-y-scroll rounded-3xl bg-white px-8 py-6 shadow-lg lg:h-auto lg:px-16 lg:py-12">
        <div className="relative mx-auto flex items-center justify-center">
          <Title>Voucher giảm giá</Title>
          <button
            className="absolute right-0 top-0 text-2xl text-gray-600 hover:text-gray-800"
            onClick={onClose}
          >
            &times;
          </button>
        </div>

        <div className="mx-auto mt-4 flex w-full items-center justify-around gap-3 rounded-xl border border-[#E8E8E8] px-4 py-[10px] md:w-[432px]">
          <CustomImage
            className="hidden size-4 md:block md:size-6"
            width={48}
            height={48}
            src={SaleIc}
            alt="Arrow Down"
          />
          <input
            type="text"
            placeholder="Tìm mã giảm giá"
            className="max-w-[140px] rounded-lg border border-none outline-none lg:w-[180px]"
          />
          <button className="flex h-8 w-[169px] items-center justify-center rounded-xl bg-[#3A449B] text-xs font-medium text-white transition-all duration-300 hover:opacity-90 md:text-base">
            Áp dụng
          </button>
        </div>

        <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 lg:grid-cols-3">
          {vouchers?.data?.map((voucher: any) => (
            <div key={voucher.id}>
              <VoucherCard
                name={voucher.name}
                discount={voucher.formatted_discount}
                minimum={voucher.description}
                validDate={voucher.start_date}
                selected={selectedDiscount === voucher.formatted_discount}
                onSelect={() => handleVoucherSelect(voucher.formatted_discount)}
              />
            </div>
          ))}
        </div>

        <button
          className="mx-auto mt-4 flex w-[220px] justify-center rounded-3xl bg-[#3A449B] px-4 py-2 text-sm text-white md:text-base"
          onClick={handleApplyVoucher}
        >
          Chọn voucher
        </button>
      </div>
    </div>
  );
};

const VoucherCard: React.FC<any> = ({ discount, minimum, name, validDate, selected, onSelect }) => (
  <div>
    <div
      className={`flex h-[220px] cursor-pointer flex-col items-center justify-center rounded-3xl border p-4 text-center ${
        selected ? 'border-[#3A449B] bg-[#e1e3f0]' : ''
      }`}
      onClick={onSelect} // Handle click to select voucher
    >
      <h3 className="text-gradient-hover pb-2 text-[24px] font-bold leading-10 lg:text-[40px]">
        {name}
      </h3>
      <p className="mb-2 text-base font-medium text-black md:text-lg">{minimum}</p>
      <p className="text-sm text-[#4F4F4F] md:text-base">Có hiệu lực đến: {validDate}</p>
    </div>
    <div className="mt-2 text-center">
      <p className={`text-sm text-black md:text-base ${selected ? 'text-[#3A449B]' : ''}`}>
        Voucher giảm {discount}
      </p>
    </div>
  </div>
);

export default VoucherModal;
