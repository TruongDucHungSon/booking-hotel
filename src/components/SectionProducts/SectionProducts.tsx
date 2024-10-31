import { products } from '@/utils/constants';
import CustomImage from '../CustomImage';
import Title from '../Title/Title';

const SectionProducts = () => {
  return (
    <section className="container pb-10 lg:pb-20">
      <Title>Sản phẩm liên quan</Title>
      {/* list products */}
      <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {products.slice(0, 6).map((product) => (
          <div
            className="flex gap-4 rounded-3xl border border-[#E8E8E8] bg-white p-4"
            key={product.id}
          >
            <CustomImage
              src={product.image.src}
              width={300}
              height={300}
              alt={product.name}
              className="mb-4 h-20 w-20"
            />
            <div>
              <h2 className="mb-[10px] text-base font-semibold text-[#253D4E] lg:text-lg">
                {product.name}
              </h2>
              <div className="mb-2 flex items-center gap-3">
                <span className="text-gradient-hover text-sm font-bold lg:text-base">
                  {product.price} / Hộp
                </span>
                <span className="text-sm text-[#B7B7B7] line-through">{product.originalPrice}</span>
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
