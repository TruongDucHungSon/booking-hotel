'use client';

import cartIc from '@/assets/svgs/introduce/cart.svg';
import CustomImage from '@/components/CustomImage';
import Title from '@/components/Title/Title';
import { addToCart } from '@/redux/cart/slide';
// import { useCategoryData } from '@/services/category/Category.Service';
import { useProductData } from '@/services/product/Products.Service';
import { formatPrice } from '@/utils/helpers';
import Link from 'next/link';
// import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';

const ProductPage = () => {
  const imageProduct =
    'https://images.unsplash.com/photo-1526947425960-945c6e72858f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8c3BhJTIwcHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D';
  const { data: DATA_PRODUCTS } = useProductData();
  const PRODUCTS: any = DATA_PRODUCTS?.data || [];
  // const { data: DATA_CATEGORY } = useCategoryData();
  // const CATEGORY: any = DATA_CATEGORY?.data || [];

  // const [selectedCategory, setSelectedCategory] = useState<number | null>(1);
  const dispatch = useDispatch();

  // Filter products based on the selected category
  // const filteredProducts = selectedCategory
  //   ? PRODUCTS.filter((product: any) => product.category.id === selectedCategory)
  //   : PRODUCTS;

  const handleAddToCart = (product: any) => {
    dispatch(
      addToCart({
        id: product.id,
        name: product.name,
        price: product.price,
        quantity: 1,
        image: imageProduct,
      }),
    );
    toast.success(`Sản phẩm ${product.name} đã được thêm vào giỏ hàng!`, {
      position: 'top-right',
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  return (
    <main className="w-full bg-[#f5f6fa]">
      <div className="container py-10 lg:py-20">
        {/* Category Header */}
        {/* <Title type="secondary" className="mb-4">
          Danh mục sản phẩm
        </Title>
        <div className="mb-8 flex gap-4 overflow-x-auto">
          {CATEGORY.map((category: any) => (
            <div
              key={category.id}
              className={`flex-shrink-0 cursor-pointer rounded-lg bg-gray-800 p-4 text-white shadow-md transition hover:shadow-lg ${
                selectedCategory === category.id ? 'bg-green-600' : ''
              }`}
              onClick={() => setSelectedCategory(category.id)}
            >
              <h3 className="text-lg font-semibold">{category.name}</h3>
            </div>
          ))}
        </div> */}

        {/* Product List */}
        <Title type="secondary" className="mb-8">
          Sản phẩm nổi bật
        </Title>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {PRODUCTS.length > 0 ? (
            PRODUCTS.map((product: any) => (
              <div
                className="group w-full transform rounded-2xl bg-white p-4 transition-all duration-300 hover:shadow-lg"
                key={product.id}
              >
                <div className="relative flex justify-center overflow-hidden rounded-xl">
                  <Link href={`/san-pham/${product.id}`} as={`/san-pham/${product.id}`}>
                    <CustomImage
                      src={imageProduct || product.image.url}
                      alt="product"
                      width={500}
                      height={500}
                      className="h-[200px] cursor-pointer object-contain transition-transform duration-300 group-hover:scale-110"
                      classNameImg="rounded-xl"
                    />
                  </Link>
                  {/* Discount Badge */}
                  {product.discount && (
                    <span className="absolute right-2 top-2 rounded-full bg-red-500 px-2 py-1 text-xs font-bold text-white">
                      -{product.discount}%
                    </span>
                  )}
                </div>
                <div className="mt-2">
                  <Link
                    href={`/san-pham/${product.id}`}
                    className="text-lg font-normal hover:text-[#3A449B] lg:text-base"
                  >
                    {product.name}
                  </Link>
                </div>
                <div className="mt-1">
                  <span className="text-lg font-bold text-[#3A449B]">
                    {formatPrice(product.price)}đ
                  </span>
                  {product.original_price && (
                    <span className="ml-2 text-base font-medium text-gray-400 line-through">
                      {formatPrice(product.original_price)}đ
                    </span>
                  )}
                </div>
                <div
                  className="mt-4 flex items-center justify-between"
                  onClick={() => handleAddToCart(product)}
                >
                  <CustomImage
                    src={cartIc}
                    alt="cart icon"
                    className="h-10 w-10 cursor-pointer transition duration-300 hover:scale-110"
                  />
                  <button
                    type="button"
                    className="ml-4 h-10 flex-1 rounded-lg bg-[#3A449B] px-4 py-2 text-center font-medium text-white shadow-md transition-all duration-300 hover:bg-[#2b337b]"
                  >
                    Mua ngay
                  </button>
                </div>
              </div>
            ))
          ) : (
            <p className="col-span-full text-center text-gray-500">
              Không có sản phẩm nào trong danh mục này.
            </p>
          )}
        </div>
      </div>
    </main>
  );
};

export default ProductPage;
