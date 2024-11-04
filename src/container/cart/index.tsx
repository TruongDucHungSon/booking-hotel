'use client';

import CartSrc from '@/assets/images/service/cart.png';
import CustomImage from '@/components/CustomImage';
import Title from '@/components/Title/Title';
import { useState } from 'react';

import SaleIc from '@/assets/svgs/arrow/sale.svg';
import deleteIc from '@/assets/svgs/search/delete.svg';
import SectionProducts from '@/components/SectionProducts/SectionProducts';

const PageCart = () => {
  const [quantity, setQuantity] = useState<number>(1);
  const [selectedItems, setSelectedItems] = useState<number[]>([]);
  const items = [0, 1, 2]; // Example items in the cart

  const handleIncrease = () => setQuantity((prev) => prev + 1);
  const handleDecrease = () => setQuantity((prev) => (prev > 1 ? prev - 1 : prev));

  const toggleSelectAll = () => {
    if (selectedItems.length === items.length) {
      setSelectedItems([]);
    } else {
      setSelectedItems(items);
    }
  };

  const handleDeleteSelected = () => {
    console.log('Deleting selected items:', selectedItems);
    // Logic to delete selected items from the cart
    setSelectedItems([]);
  };

  const toggleSelectItem = (index: number) => {
    setSelectedItems((prev) => {
      const isSelected = prev.includes(index);
      if (isSelected) {
        return prev.filter((i) => i !== index);
      } else {
        return [...prev, index];
      }
    });
  };

  return (
    <main>
      <div className="container py-10 lg:py-20">
        <Title>Giỏ Hàng</Title>
        <p className="mt-2 text-center text-sm text-[#1B1B1B] md:text-base">
          Hệ thống đặt phòng trực tuyến hiện tại của chúng tôi chỉ chấp nhận đặt phòng sau một tuần
          và chỉ có thể đặt tối đa hai người cùng một lúc.
        </p>

        <div className="my-[28px] flex flex-col items-start gap-3 md:gap-6 lg:my-[56px] lg:flex-row">
          {/* Thông Tin Khách Hàng */}
          <div className="w-full lg:w-[55%]">
            <h2 className="mb-2 text-base font-semibold md:text-lg lg:mb-4">
              Thông Tin Khách Hàng
            </h2>
            <form className="space-y-4">
              <div>
                <label className="mb-1 block text-sm font-medium placeholder:text-sm md:text-base placeholder:md:text-base">
                  Họ và tên
                </label>
                <input
                  type="text"
                  className="w-full rounded-xl border px-4 py-2 placeholder:text-sm placeholder:md:text-base"
                  placeholder="Trần Văn Mạnh"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="mb-1 block text-sm font-medium placeholder:text-sm md:text-base placeholder:md:text-base">
                    Số điện thoại
                  </label>
                  <input
                    type="text"
                    className="w-full rounded-xl border px-4 py-2 placeholder:text-sm placeholder:md:text-base"
                    placeholder="0123 456 789"
                  />
                </div>
                <div>
                  <label className="mb-1 block text-sm font-medium md:text-base">Giới tính</label>
                  <div className="flex items-center space-x-4">
                    <label className="text-sm md:text-base">
                      <input type="radio" name="gender" className="mr-1 accent-[#3A449B]" /> Nam
                    </label>
                    <label className="text-sm md:text-base">
                      <input type="radio" name="gender" className="mr-1 accent-[#3A449B]" /> Nữ
                    </label>
                    <label className="text-sm md:text-base">
                      <input type="radio" name="gender" className="mr-1 accent-[#3A449B]" /> Khác
                    </label>
                  </div>
                </div>
              </div>
              <div>
                <label className="mb-1 block text-sm font-medium md:text-base">Email</label>
                <input
                  type="email"
                  className="w-full rounded-xl border px-4 py-2"
                  placeholder="abc@gmail.com"
                />
              </div>
              <div>
                <label className="mb-2 block text-sm font-medium md:text-base">Địa chỉ</label>
                <select className="mb-2 w-full rounded-xl border px-4 py-2 text-sm md:text-base">
                  <option className="text-sm md:text-base">Hồ Chí Minh</option>
                  <option className="text-sm md:text-base">Hà Nội</option>
                </select>
                <select className="mb-2 w-full rounded-xl border px-4 py-2 text-sm md:text-base">
                  <option className="text-sm md:text-base">Chọn Quận/Huyện</option>
                </select>
                <select className="w-full rounded-xl border px-4 py-2 text-sm md:text-base">
                  <option className="text-sm md:text-base">Chọn Phường/Xã</option>
                </select>
              </div>
              <div>
                <label className="mb-1 block text-sm font-medium md:text-base">Ghi chú</label>
                <textarea
                  className="w-full rounded-xl border px-4 py-2"
                  placeholder="VD: giao hàng giờ hành chính"
                  rows={3}
                ></textarea>
              </div>
            </form>
          </div>

          {/* Giỏ Hàng */}
          <div className="rounded-3xl bg-[#f1f1f4] p-4 md:p-6">
            <h2 className="mb-4 text-base font-semibold md:text-lg">Giỏ Hàng Của Tôi</h2>

            {/* Select All and Delete Selected */}
            <div className="mb-4 flex items-center justify-between">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  className="size-[16px] md:size-[22px]"
                  checked={selectedItems.length === items.length}
                  onChange={toggleSelectAll}
                />
                <span className="ml-2 text-sm md:text-base">Chọn tất cả</span>
              </div>
              {selectedItems.length > 0 && (
                <button
                  type="button"
                  className="text-sm text-red-500 md:text-base"
                  onClick={handleDeleteSelected}
                >
                  Xóa tất cả
                </button>
              )}
            </div>

            <div className="space-y-4">
              {items.map((_, index) => (
                <div key={index} className="flex items-start gap-3 md:gap-6">
                  <input
                    type="checkbox"
                    className="mt-12 size-[16px] md:mt-16 md:size-[22px]"
                    checked={selectedItems.includes(index)}
                    onChange={() => toggleSelectItem(index)}
                  />
                  <div className="rounded-[32px] border border-[#E3E3E3] bg-white p-[24px]">
                    <CustomImage
                      src={CartSrc.src}
                      alt="cart"
                      width={100}
                      height={100}
                      className="size-[80px] md:size-[100px]"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-base font-semibold md:text-xl">
                      Viên uống Calci K-2 Pharma World hỗ trợ giảm nguy cơ loãng xương
                    </h3>
                    <p className="mt-1 text-sm font-bold text-red-500 md:text-base">
                      <span className="text-sm font-medium text-black md:text-base">Giá: </span>
                      470.000
                      <span className="text-sm font-medium text-black md:text-base"> VND</span>
                    </p>
                    <div className="mt-2 flex items-center gap-2">
                      <div className="shadow-quality flex h-10 w-[108px] items-center justify-center gap-7 rounded-full border border-[#D0D3E1] bg-white py-2 text-base font-bold md:text-lg">
                        <button
                          type="button"
                          className={`text-[${quantity === 1 ? '#D0D3E1' : '#3A449B'}]`}
                          onClick={handleDecrease}
                          disabled={quantity === 1}
                        >
                          -
                        </button>
                        <p>{quantity}</p>
                        <button type="button" className="text-[#3A449B]" onClick={handleIncrease}>
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                  <CustomImage
                    src={deleteIc}
                    alt="delete"
                    width={24}
                    height={24}
                    className="size-4 md:size-5"
                  />
                </div>
              ))}
            </div>

            <div className="mt-6">
              <div className="mb-3 flex items-center justify-between rounded-xl border border-[#3A449B] bg-[#d6d7e7] px-3 py-2 md:mb-6 md:py-3">
                <button type="button" className="text-sm font-medium text-[#3A449B]">
                  Voucher giảm giá
                </button>
                <CustomImage
                  src={SaleIc}
                  alt="Sale"
                  width={16}
                  height={16}
                  className="size-[16px] md:size-5"
                />
              </div>

              <div className="space-y-2">
                <div className="flex justify-between text-sm md:text-base">
                  <span className="text-sm text-black/85 md:text-base">Tạm tính</span>
                  <span className="text-base font-semibold text-black md:text-lg">
                    2.820.000 VND
                  </span>
                </div>
                <div className="flex justify-between text-sm md:text-base">
                  <span className="text-sm text-black/85 md:text-base">Giảm giá</span>
                  <span className="text-base font-semibold text-black md:text-lg">0 VND</span>
                </div>
                <div className="flex justify-between text-sm md:text-base">
                  <span className="text-sm text-black/85 md:text-base">Phí giao hàng</span>
                  <span className="text-base font-semibold text-black md:text-lg">Miễn phí</span>
                </div>
                <div className="mt-4 flex justify-between text-base md:mt-6 md:text-lg">
                  <span className="text-lg font-medium text-[#4F4F4F] md:text-2xl">Tổng tiền</span>
                  <div className="flex flex-col items-end">
                    <span className="text-base font-semibold text-[#3A449B] md:text-lg">
                      2.960.000 VND
                    </span>
                    <p className="text-xs font-medium text-[#DA0000]">
                      Bạn đã tiết kiệm được phí giao hàng
                    </p>
                  </div>
                </div>
              </div>

              <button
                type="button"
                className="mt-4 w-full rounded-full bg-[#3A449B] py-3 text-sm font-semibold text-white md:mt-6 md:text-base"
              >
                Đặt hàng
              </button>
            </div>
          </div>
        </div>

        <SectionProducts />
      </div>
    </main>
  );
};

export default PageCart;
