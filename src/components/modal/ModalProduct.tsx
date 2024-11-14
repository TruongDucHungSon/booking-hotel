'use client';
import CustomImage from '@/components/CustomImage';
import { formatPrice } from '@/utils/helpers';
import React, { useState } from 'react';
import Title from '../Title/Title';

type ProductModalProps = {
  isOpen: boolean;
  onClose: () => void;
  onSelectProduct: (products: any[]) => void; // Change to array of products
  selectedProduct: any[]; // Change to array of selected products
  products: any[];
};

const ProductModal: React.FC<ProductModalProps> = ({
  isOpen,
  onClose,
  onSelectProduct,
  selectedProduct,
  products,
}) => {
  const [selectedIds, setSelectedIds] = useState<string[]>(
    selectedProduct.map((product) => product.id),
  );

  if (!isOpen) return null;

  const handleProductSelect = (product: any) => {
    setSelectedIds(
      (prevSelectedIds) =>
        prevSelectedIds.includes(product.id)
          ? prevSelectedIds.filter((id) => id !== product.id) // Remove if already selected
          : [...prevSelectedIds, product.id], // Add if not selected
    );
  };

  const handleApplyProduct = () => {
    const selectedProducts = products.filter((product) => selectedIds.includes(product.id));
    onSelectProduct(selectedProducts);
    onClose(); // Close modal after selection
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-800 bg-opacity-75">
      <div className="sidebar-scroll h-[70%] w-[90%] overflow-y-scroll rounded-3xl bg-white px-8 py-6 shadow-lg lg:h-auto lg:overflow-y-auto lg:px-16 lg:py-12">
        <div className="relative flex items-center justify-center border-b pb-4">
          <Title>Chọn sản phẩm</Title>
          <button
            className="absolute -top-2 right-0 text-2xl text-gray-600 hover:text-gray-800"
            onClick={onClose}
          >
            &times;
          </button>
        </div>

        <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {products?.map((product: any) => (
            <div key={product.id}>
              <ProductCard
                product={product}
                selected={selectedIds.includes(product.id)} // Update to check if in selectedIds
                onSelect={() => handleProductSelect(product)}
              />
            </div>
          ))}
        </div>

        <button
          className="mx-auto mt-8 flex w-[220px] items-center justify-center rounded-3xl bg-[#3A449B] px-4 py-2 text-white transition-all duration-300 ease-in-out hover:bg-[#232b76]"
          onClick={handleApplyProduct}
        >
          Chọn sản phẩm
        </button>
      </div>
    </div>
  );
};

type ProductCardProps = {
  product: any;
  selected: boolean;
  onSelect: () => void;
};

const ProductCard: React.FC<ProductCardProps> = ({ product, selected, onSelect }) => (
  <div
    className={`cursor-pointer rounded-3xl border p-4 text-center ${
      selected ? 'border-[#3A449B]' : 'border-[#E8E8E8]'
    }`}
    onClick={onSelect}
  >
    <div className="flex items-start gap-4 rounded-3xl bg-white" key={product.id}>
      <CustomImage
        src={product.imageUrl}
        height={300}
        width={300}
        alt={product.name}
        className="mb-4 h-20 w-20"
        classNameImg="rounded-2xl"
      />
      <div>
        <h2 className="mb-1 text-left text-base font-semibold text-[#253D4E] lg:text-lg">
          {product.name}
        </h2>
        <div className="mb-1 flex items-start gap-3">
          <span className="text-gradient-hover text-sm font-bold lg:text-base">
            {formatPrice(product.price)} VND / Hộp
          </span>
          <span className="text-sm text-[#B7B7B7] line-through">
            {formatPrice(product.original_price)} VND / Hộp
          </span>
        </div>
        <button
          type="button"
          className="mt-[10px] w-full rounded-[10px] border border-[#3A449B] px-4 py-1 text-sm font-medium text-[#3A449B] transition-all duration-300 ease-in-out hover:bg-[#3A449B] hover:text-white md:py-2 lg:text-base"
        >
          Mua ngay
        </button>
      </div>
    </div>
  </div>
);

export default ProductModal;
