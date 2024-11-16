'use client';

import CartSrc from '@/assets/images/service/cart.png';
import CustomImage from '@/components/CustomImage';
import Title from '@/components/Title/Title';
import { useState } from 'react';

import deleteIc from '@/assets/svgs/search/delete.svg';
import SectionProducts from '@/components/SectionProducts/SectionProducts';
import { removeFromCart, updateCartItem } from '@/redux/cart/slide';
import { RootState } from '@/redux/rootReducers';
import { formatPrice } from '@/utils/helpers';
import { useDispatch, useSelector } from 'react-redux';

const PageCart = () => {
  const dispatch = useDispatch();
  const items = useSelector((state: RootState) => state.cart.items);
  const [selectedItems, setSelectedItems] = useState<number[]>([]);

  const handleQuantityChange = (id: number, delta: number) => {
    const item = items.find((item) => item.id === id);
    if (item) {
      dispatch(updateCartItem({ id, quantity: Math.max(item.quantity + delta, 1) }));
    }
  };

  const toggleSelectAll = () => {
    setSelectedItems(selectedItems.length === items.length ? [] : items.map((item) => item.id));
  };

  const handleDeleteSelected = () => {
    selectedItems.forEach((id) => dispatch(removeFromCart(id)));
    setSelectedItems([]);
  };

  const toggleSelectItem = (id: number) => {
    setSelectedItems((prev) => (prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]));
  };
  return (
    <main>
      <div className="container py-10 lg:py-20">
        <Title>Giỏ Hàng</Title>
        <p className="mt-2 text-center text-sm text-[#1B1B1B] md:text-base">
          Hệ thống đặt phòng trực tuyến hiện tại của chúng tôi chỉ có thể đặt tối đa 1 dịch vụ cùng
          một lúc.
        </p>

        <div className="my-[28px] flex flex-col items-start gap-3 md:gap-6 lg:my-[56px] lg:flex-row">
          {/* Thông Tin Khách Hàng */}
          <div className="w-full lg:w-[70%]">
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
          <div className="my-[28px] flex w-full flex-col items-start gap-3 md:gap-6 lg:my-[56px] lg:flex-row">
            {/* Thông Tin Khách Hàng */}
            {/* ...Customer Info Form... */}

            {/* Giỏ Hàng */}
            <div className="w-full rounded-3xl bg-[#f1f1f4] p-4 md:p-6">
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

              <div className="sidebar-scroll mb-6 h-[400px] space-y-4 overflow-y-scroll pr-4">
                {items.map((item) => (
                  <div key={item.id} className="flex items-start gap-3 md:gap-6">
                    <input
                      type="checkbox"
                      className="mt-12 size-[16px] md:mt-16 md:size-[22px]"
                      checked={selectedItems.includes(item.id)}
                      onChange={() => toggleSelectItem(item.id)}
                    />
                    <div className="rounded-[32px] border border-[#E3E3E3] bg-white p-[24px]">
                      <CustomImage
                        src={item.image || CartSrc.src}
                        alt="cart"
                        width={100}
                        height={100}
                        className="size-[80px] md:size-[100px]"
                        classNameImg="rounded-xl"
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-base font-semibold md:text-xl">{item.name}</h3>
                      <p className="mt-1 text-sm font-bold text-red-500 md:text-base">
                        <span className="text-sm font-medium text-black md:text-base">Giá: </span>
                        {formatPrice(item.price)}
                        <span className="text-sm font-medium text-black md:text-base"> VND</span>
                      </p>
                      <div className="mt-2 flex items-center gap-2">
                        <div className="shadow-quality flex h-10 w-[108px] items-center justify-center gap-7 rounded-full border border-[#D0D3E1] bg-white py-2 text-base font-bold md:text-lg">
                          <button
                            type="button"
                            className={`text-[${item.quantity === 1 ? '#D0D3E1' : '#3A449B'}]`}
                            onClick={() => handleQuantityChange(item.id, -1)}
                            disabled={item.quantity === 1}
                          >
                            -
                          </button>
                          <p>{item.quantity}</p>
                          <button
                            type="button"
                            className="text-[#3A449B]"
                            onClick={() => handleQuantityChange(item.id, 1)}
                          >
                            +
                          </button>
                        </div>
                      </div>
                    </div>
                    <button type="button" onClick={() => dispatch(removeFromCart(item.id))}>
                      <CustomImage
                        src={deleteIc}
                        alt="delete"
                        width={24}
                        height={24}
                        className="size-4 md:size-5"
                      />
                    </button>
                  </div>
                ))}
              </div>

              <div className="border-t pt-8">
                {/* Summary */}
                <div className="space-y-2">
                  <div className="flex justify-between text-sm md:text-base">
                    <span className="text-sm text-black/85 md:text-base">Tạm tính</span>
                    <span className="text-base font-semibold text-black md:text-lg">
                      {formatPrice(
                        items.reduce((acc, item) => acc + item.price * item.quantity, 0),
                      )}{' '}
                      VND
                    </span>
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
        </div>
        <SectionProducts />
      </div>
    </main>
  );
};

export default PageCart;
