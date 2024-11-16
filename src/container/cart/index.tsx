'use client';

import CartSrc from '@/assets/images/service/cart.png';
import deleteIc from '@/assets/svgs/search/delete.svg';
import CustomImage from '@/components/CustomImage';
import SectionProducts from '@/components/SectionProducts/SectionProducts';
import Title from '@/components/Title/Title';
import { removeFromCart, updateCartItem } from '@/redux/cart/slide';
import { RootState } from '@/redux/rootReducers';
import { formatPrice } from '@/utils/helpers';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import FormCart from './_componens/FormCart';

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
    selectedItems.forEach((id) => {
      dispatch(removeFromCart(id));
    });
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
          <FormCart />
          <motion.div
            className="w-full rounded-3xl bg-[#f1f1f4] p-4 md:p-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="mb-4 text-base font-semibold md:text-lg">Giỏ Hàng Của Tôi</h2>

            {items.length === 0 ? (
              <motion.div
                className="flex h-[450px] flex-col"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <p className="text-sm font-medium text-[#1B1B1B] md:text-base">
                  Giỏ hàng của bạn hiện đang trống.
                </p>
                <Link
                  href="/san-pham"
                  className="mt-4 inline-block w-fit rounded-2xl bg-[#3A449B] px-6 py-3 font-semibold text-white transition-all duration-300 hover:opacity-90"
                >
                  Danh sách sản phẩm
                </Link>
              </motion.div>
            ) : (
              <>
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
                    <motion.div
                      key={item.id}
                      className="flex items-start gap-3 md:gap-6"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: 0.1 * item.id }}
                    >
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
                          {formatPrice(item.price)}{' '}
                          <span className="text-sm font-medium text-black md:text-base"> VND</span>
                        </p>
                        <div className="mt-2 flex items-center gap-2">
                          <motion.div
                            className="shadow-quality flex h-10 w-[108px] items-center justify-center gap-7 rounded-full border border-[#D0D3E1] bg-white py-2 text-base font-bold md:text-lg"
                            whileTap={{ scale: 0.9 }}
                          >
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
                          </motion.div>
                        </div>
                      </div>
                      <motion.button
                        type="button"
                        onClick={() => dispatch(removeFromCart(item.id))}
                        whileHover={{ scale: 1.1 }}
                      >
                        <CustomImage
                          src={deleteIc}
                          alt="delete"
                          width={24}
                          height={24}
                          className="size-4 md:size-5"
                        />
                      </motion.button>
                    </motion.div>
                  ))}
                </div>

                <div className="border-t pt-8">
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm md:text-base">
                      <span className="text-sm font-semibold text-black/85 md:text-base">
                        Tổng tiền:
                      </span>
                      <span className="text-base font-bold text-black md:text-lg">
                        {formatPrice(
                          items.reduce((acc, item) => acc + item.price * item.quantity, 0),
                        )}{' '}
                        VND
                      </span>
                    </div>
                  </div>

                  <motion.button
                    type="button"
                    className="mt-4 w-full rounded-full bg-[#3A449B] py-3 text-sm font-semibold text-white md:mt-6 md:text-base"
                    whileHover={{ scale: 1.05 }}
                  >
                    Đặt hàng
                  </motion.button>
                </div>
              </>
            )}
          </motion.div>
        </div>
        <SectionProducts />
      </div>
    </main>
  );
};

export default PageCart;
