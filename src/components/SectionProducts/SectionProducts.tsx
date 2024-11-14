import { useProductData } from '@/services/product/Products.Service';
import Link from 'next/link';
import CustomImage from '../CustomImage';
import Title from '../Title/Title';

const SectionProducts = () => {
  const { data: DATA_PRODUCTS } = useProductData();
  const PRODUCTS: any = DATA_PRODUCTS?.data || [];
  const imageProduct =
    'https://images.unsplash.com/photo-1526947425960-945c6e72858f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8c3BhJTIwcHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D';

  return (
    <section className="container pb-10 lg:pb-20">
      <Title>Sản phẩm liên quan</Title>
      {/* list products */}
      <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {PRODUCTS?.map((product: any) => (
          <div
            className="flex gap-4 rounded-3xl border border-[#E8E8E8] bg-white p-4"
            key={product.id}
          >
            <Link href={'/san-pham/san-pham-tot'}>
              <CustomImage
                src={imageProduct || product.image.src}
                height={300}
                width={300}
                alt={product.name}
                className="mb-4 h-20 w-20"
                classNameImg="rounded-lg"
              />
            </Link>
            <div>
              <h2 className="mb-[10px] text-base font-semibold text-[#253D4E] lg:text-lg">
                <Link href="/san-pham/san-pham-tot">{product.name}</Link>
              </h2>
              <div className="mb-2 flex items-center gap-3">
                <span className="text-gradient-hover text-sm font-bold lg:text-base">
                  {product.price} / Hộp
                </span>
                <span className="text-sm text-[#B7B7B7] line-through">
                  {product.original_price}
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
        ))}
      </div>
    </section>
  );
};

export default SectionProducts;
