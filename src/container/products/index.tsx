'use client';

import cartIc from '@/assets/svgs/introduce/cart.svg';
import CustomImage from '@/components/CustomImage';
import Title from '@/components/Title/Title';
import { useProductData } from '@/services/product/Products.Service';
import { formatPrice } from '@/utils/helpers';
import Link from 'next/link';

const ProductPage = () => {
  const { data: DATA_PRODUCTS } = useProductData();
  const PRODUCTS: any = DATA_PRODUCTS?.data || [];
  const imageProduct =
    'https://images.unsplash.com/photo-1526947425960-945c6e72858f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8c3BhJTIwcHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D';
  return (
    <main className="w-full bg-[#f5f6fa]">
      <div className="container py-10 lg:py-20">
        <Title type="secondary" className="mb-8">
          sản phẩm nổi bật
        </Title>
        {/* list products */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {PRODUCTS.map((product: any) => (
            <div
              className="group w-full transform rounded-2xl bg-white p-4 transition-all duration-300 hover:shadow-lg"
              key={product.id}
            >
              <div className="flex justify-center overflow-hidden rounded-xl">
                <Link href="/san-pham/san-pham-chuc-nang">
                  <CustomImage
                    src={imageProduct || product.image.url}
                    alt="product"
                    width={500}
                    height={500}
                    className="h-[200px] cursor-pointer object-contain transition-transform duration-300 group-hover:scale-110"
                  />
                </Link>
              </div>
              <div className="mt-2">
                <Link
                  href="/san-pham/san-pham-chuc-nang"
                  className="text-lg font-normal text-black hover:text-[#3A449B] lg:text-base"
                >
                  {product.name}
                </Link>
              </div>
              <div className="mt-1">
                <span className="text-base font-bold text-[#3A449B] lg:text-lg">
                  {formatPrice(product.price)} VND
                </span>
                <span className="ml-2 text-base font-medium text-[#B7B7B7] line-through lg:text-lg">
                  {formatPrice(product.original_price)} VND
                </span>
              </div>
              <div className="mt-4 flex items-center justify-between">
                <CustomImage
                  src={cartIc}
                  alt="call"
                  className="h-12 w-12 cursor-pointer transition duration-300 hover:scale-110 hover:opacity-80"
                />
                <button
                  type="button"
                  className="ml-4 h-12 flex-1 rounded-lg bg-[#3A449B] px-4 py-2 text-center text-base font-medium text-white shadow-md transition-all duration-300 hover:bg-[#1c2681] hover:bg-gradient-to-l"
                >
                  Mua ngay
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default ProductPage;
