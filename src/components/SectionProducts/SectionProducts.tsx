import { addToCart } from '@/redux/cart/slide';
import { useProductData } from '@/services/product/Products.Service';
import Link from 'next/link';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import CustomImage from '../CustomImage';
import Title from '../Title/Title';

const SectionProducts = () => {
  const dispatch = useDispatch();
  const { data: DATA_PRODUCTS } = useProductData();
  const PRODUCTS: any = DATA_PRODUCTS?.data || [];
  const imageProduct =
    'https://images.unsplash.com/photo-1526947425960-945c6e72858f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8c3BhJTIwcHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D';

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
    toast.success(`Sản phẩm ${product.name}  đã được thêm vào giỏ hàng !`, {
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
    <section className="container pb-10 lg:pb-20">
      <Title>Sản phẩm liên quan</Title>
      {/* list products */}
      <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {PRODUCTS?.map((product: any) => (
          <div
            className="flex gap-4 rounded-3xl border border-[#E8E8E8] bg-white p-4"
            key={product.id}
          >
            <Link href={`/san-pham/${[product.id]}`} as={`/san-pham/${product.id}`}>
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
                <Link href={`/san-pham/${[product.id]}`} as={`/san-pham/${product.id}`}>
                  {product.name}
                </Link>
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
                onClick={() => handleAddToCart(product)}
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
