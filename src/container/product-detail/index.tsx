'use client';

import bag from '@/assets/svgs/arrow/bag.svg';
import cart from '@/assets/svgs/arrow/cart.svg';
import check from '@/assets/svgs/arrow/check.svg';
import pr1 from '@/assets/svgs/introduce/pr1.jpg';
import CustomImage from '@/components/CustomImage/index';
import SectionProducts from '@/components/SectionProducts/SectionProducts';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import SwiperCore from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import { Navigation, Pagination, Thumbs } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

const ProductDetailPage = () => {
  const [quantity, setQuantity] = useState<number>(1);
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperCore | null>(null);
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]); // Keep refs for sections
  const [activeSectionId, setActiveSectionId] = useState<number>(1);
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  const handleIncrease = () => setQuantity((prev) => prev + 1);
  const handleDecrease = () => setQuantity((prev) => (prev > 1 ? prev - 1 : prev));

  // IntersectionObserver setup
  useEffect(() => {
    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = Number(entry.target.getAttribute('data-id'));
          if (id !== undefined) setActiveSectionId(id);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, {
      rootMargin: '0px',
      root: null,
      threshold: 0.1, // Trigger when 20% of the title is visible
    });

    // Observe only the titles
    sectionRefs.current.forEach((section) => {
      const title = section?.querySelector('h2'); // Observe h2 elements only
      if (title) observer.observe(title);
    });

    return () => {
      sectionRefs.current.forEach((section) => {
        const title = section?.querySelector('h2');
        if (title) observer.unobserve(title);
      });
    };
  }, []);

  const productData = {
    details: [
      {
        id: 1,
        title: 'Mô tả sản phẩm',
        items: [
          'Làm sạch là một bước rất quan trọng trong quá trình chăm sóc da. Một ngày da mặt phải tiếp xúc với bụi bẩn, ô nhiễm từ môi trường bên ngoài và mồ hôi, bã nhờn, tế bào da chết,... từ chính da mặt tiết ra, lâu dần, sẽ gây ra tình trạng mụn, viêm da,... Do đó, cần thiết phải có một sản phẩm giúp loại bỏ hết những tác nhân gây hại đó ra khỏi làn da của chúng ta. Nếu bạn đang tìm một sản phẩm làm sạch sâu, an toàn lại dịu nhẹ thì Nước Tẩy Trang Oreal Micellar Water 400ml chính là sự lựa chọn hoàn hảo',
        ],
      },

      {
        id: 2,
        title: 'Thành Phần',
        items: [
          "Nước Tẩy Trang L'Oreal Micellar Water 400ml Dưỡng Ẩm Cho Da Thường/Da Khô",
          "Nước Tẩy Trang L'Oreal Micellar Water 400ml Làm Mát Da Cho Da Dầu/Da Hỗn Hợp",
          "Nước Tẩy Trang L'Oreal Micellar Water 400ml Làm Sạch Sâu Trang Điểm",
          "Nước Tẩy Trang L'Oreal Micellar Water 400ml Làm Sạch Sâu Trang Điểm",
          "Nước Tẩy Trang L'Oreal Micellar Water 400ml Làm Sạch Sâu Trang Điểm",
          "Nước Tẩy Trang L'Oreal Micellar Water 400ml Làm Sạch Sâu Trang Điểm",
          "Nước Tẩy Trang L'Oreal Micellar Water 400ml Làm Sạch Sâu Trang Điểm",
        ],
      },
      {
        id: 3,
        title: 'Công Dụng',
        items: [
          'Làm sạch da dịu nhẹ',
          'Cân bằng độ ẩm và dưỡng ẩm cho da, cho da căng bóng, mềm mịn',
        ],
      },
      {
        id: 4,
        title: 'Cách Dùng',
        items: [
          'Lắc đều trước khi sử dụng',
          'Không cần rửa lại với nước',
          'Đóng nắp sau khi sử dụng',
          'Đóng nắp sau khi sử dụng',
          'Đóng nắp sau khi sử dụng',
          'Đóng nắp sau khi sử dụng',
          'Đóng nắp sau khi sử dụng',
        ],
      },
      {
        id: 5,
        title: 'Tác dụng phụ',
        items: [
          'Lắc đều trước khi sử dụng',
          'Không cần rửa lại với nước',
          'Đóng nắp sau khi sử dụng',
          'Đóng nắp sau khi sử dụng',
          'Đóng nắp sau khi sử dụng',
          'Đóng nắp sau khi sử dụng',
          'Đóng nắp sau khi sử dụng',
        ],
      },
      {
        id: 6,
        title: 'Lưu ý',
        items: [
          'Lắc đều trước khi sử dụng',
          'Không cần rửa lại với nước',
          'Đóng nắp sau khi sử dụng',
          'Đóng nắp sau khi sử dụng',
          'Đóng nắp sau khi sử dụng',
          'Đóng nắp sau khi sử dụng',
          'Đóng nắp sau khi sử dụng',
        ],
      },
      {
        id: 7,
        title: 'Bảo quản',
        items: [
          'Lắc đều trước khi sử dụng',
          'Không cần rửa lại với nước',
          'Đóng nắp sau khi sử dụng',
          'Đóng nắp sau khi sử dụng',
          'Đóng nắp sau khi sử dụng',
          'Đóng nắp sau khi sử dụng',
          'Đóng nắp sau khi sử dụng',
        ],
      },
    ],
  };

  const product = {
    name: 'Viên uống Calci K-2 Pharma World hỗ trợ giảm nguy cơ loãng xương (60 viên)',
    sku: '01234567',
    brand: 'Pharma World',
    price: '470.000đ',
    description: [
      { title: 'Danh mục', text: 'Bổ sung Canxi & Vitamin D' },
      { title: 'Dạng bào chế', text: 'Viên nén' },
      { title: 'Quy cách', text: 'Hộp 60 viên' },
      { title: 'Xuất xử thương hiệu', text: 'Mỹ' },
      { title: 'Nhà sản xuất', text: 'ARNET PHẨMCEUTICAL' },
      { title: 'Nước sản xuất', text: 'Hoa Kỳ' },
      { title: 'Thành phần', text: 'Zinc, Magnesium, Vitamin D3, Vitamin K2, Calcium (Ca+)' },
      {
        title: 'Mô tả ngắn',
        text: 'Pharma World Calci K2 bổ sung canxi và một số vitamin, khoáng chất giúp chắc xương, tăng khả năng hấp thụ canxi cho cơ thể, hỗ trợ giảm nguy cơ loãng xương.',
      },
      { title: 'Số đăng ký', text: '4938/2022/ĐKSP' },
    ],
    thumbnails: [pr1, pr1, pr1, pr1, pr1, pr1, pr1],
  };

  return (
    <main>
      <div className="container py-10 lg:py-20">
        {/* Breadcrumb */}
        <div className="mb-4 flex items-center gap-2 text-xs text-gray-500 lg:text-sm">
          <Link href="/" className="hover:text-[#3A449B] hover:underline">
            Trang Chủ
          </Link>
          /
          <Link href="/san-pham" className="hover:text-[#3A449B] hover:underline">
            Danh Sách Sản Phẩm
          </Link>
          /<span className="text-[#3A449B]"> Sản Phẩm</span>
        </div>

        {/* Main Content */}
        <div className="flex flex-col gap-10 lg:flex-row">
          {/* Image Gallery */}
          <div className="w-full flex-1 lg:w-[45%]">
            <Swiper
              modules={[Navigation, Pagination, Thumbs]}
              thumbs={{ swiper: thumbsSwiper }}
              spaceBetween={10}
              slidesPerView={1}
              navigation
              className="mainSwiper"
              onSlideChange={(swiper) => setActiveSlideIndex(swiper.activeIndex)}
            >
              {product.thumbnails.map((src, index) => (
                <SwiperSlide key={index}>
                  <div className="relative h-[300px] rounded-[32px] border border-[#E3E3E3] md:h-[500px] lg:h-[568px]">
                    <CustomImage
                      src={src.src}
                      alt={`Calci K-2 Image ${index + 1}`}
                      width={2000}
                      height={1000}
                      className="abs-center"
                      classNameImg="rounded-[60px]"
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Thumbnail Swiper */}
            <Swiper
              onSwiper={setThumbsSwiper}
              spaceBetween={10}
              freeMode
              watchSlidesProgress
              className="thumbSwiper mt-4"
              breakpoints={{
                330: {
                  slidesPerView: 3.5,
                },
                768: {
                  slidesPerView: 5.5,
                },
                1024: {
                  slidesPerView: 5.5,
                },
              }}
            >
              {product.thumbnails.map((src, index) => (
                <SwiperSlide key={index}>
                  <CustomImage
                    src={src.src}
                    alt={`Thumbnail ${index + 1}`}
                    width={120}
                    height={120}
                    className={`h-20 cursor-pointer rounded-[32px] border md:h-[100px] ${
                      activeSlideIndex === index
                        ? 'border-[#3A449B]' // Apply active border when thumbnail is active
                        : 'border-[#E3E3E3]'
                    }`}
                    classNameImg="rounded-[32px]"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* Product Information */}
          <div className="flex-1">
            <div className="mb-4 flex flex-col items-start justify-between gap-1 text-xs text-[#B9BBBF] md:text-sm lg:flex-row lg:items-center">
              <span>
                Mã sản phẩm: <span className="font-medium text-[#3A449B]">{product.sku}</span>
              </span>
              <span>
                Thương hiệu: <span className="font-medium text-[#3A449B]">{product.brand}</span>
              </span>
            </div>
            <h1 className="mb-2 text-[26px] text-xl font-bold leading-8">{product.name}</h1>
            <div className="mt-3 border-b border-b-[#E4E4E4] pb-4 text-2xl font-bold text-[#3A449B] lg:text-3xl">
              {product.price} <span className="ml-1 font-normal">/ hộp</span>
            </div>

            {/* Product Description */}
            <div className="mt-4 flex flex-col gap-1 text-[16px] text-xs leading-9 md:gap-4 md:text-base">
              <div className="flex items-center gap-2">
                <p className="w-[150px] font-semibold">Chọn đơn vị tính</p>
                <span className="flex h-6 w-[73px] items-center justify-center rounded-[100px] border border-[#E3E3E3/80] bg-[#f9faff] text-sm text-[#626A6B] md:h-8 md:text-base">
                  Hộp
                </span>
              </div>
              {product.description.map((description) => (
                <div className="flex gap-3" key={description.title}>
                  <p className="w-[150px] font-semibold">{description.title}</p>
                  <p className="w-[450px]">{description.text}</p>
                </div>
              ))}
            </div>

            {/* Purchase Options */}
            <div className="mb-5 mt-4 flex items-center gap-2">
              <label htmlFor="quantity" className="w-[150px] text-xs font-semibold md:text-base">
                Số lượng:
              </label>
              <div className="shadow-quality flex h-10 w-[130px] items-center justify-center gap-7 rounded-full border border-[#D0D3E1] py-2 text-lg font-bold md:h-[50px] md:text-2xl">
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

            <div className="mt-5 grid grid-cols-1 gap-3 text-sm md:grid-cols-2 md:text-base">
              <button
                type="button"
                className="flex h-12 items-center justify-center gap-3 rounded-[22px] border-2 border-[#3A449B] bg-[#3A449B] px-4 py-[10px] font-semibold text-white transition-all duration-300 ease-in-out hover:bg-blue-900 md:h-[60px]"
              >
                <CustomImage
                  src={bag.src}
                  alt="cart"
                  width={20}
                  height={20}
                  className="mr-2 inline-block"
                />
                Mua Ngay
              </button>
              <button
                type="button"
                className="flex h-12 items-center justify-center gap-3 rounded-[22px] border-2 border-[#3A449B] px-4 py-2 font-semibold text-[#3A449B] transition-all duration-300 ease-in-out md:h-[60px]"
              >
                <CustomImage
                  src={cart.src}
                  alt="cart"
                  width={20}
                  height={20}
                  className="mr-2 inline-block"
                />
                Thêm vào giỏ hàng
              </button>
            </div>
          </div>
        </div>
        {/* details product */}
        <div className="mt-[56px] rounded-3xl border border-[#E8E8E8] text-base">
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-4">
            {/* Sidebar */}
            <div className="col-span-1 hidden border-r border-r-[#E0E0E0] p-6 md:block">
              <ul>
                {productData.details.map((section) => (
                  <li
                    key={section.id}
                    className={`cursor-pointer rounded-2xl px-6 py-3 text-sm font-semibold md:text-base lg:text-[17px] ${
                      activeSectionId === section.id
                        ? 'bg-gray-100 font-bold text-[#3A449B]'
                        : 'text-gray-400'
                    }`}
                    onClick={() => {
                      sectionRefs.current[section.id - 1]?.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start',
                      });
                    }}
                  >
                    {section.title}
                  </li>
                ))}
              </ul>
            </div>

            {/* Main content */}
            <div className="sidebar-scroll col-span-3 h-[680px] overflow-y-scroll rounded-lg px-6 pb-6">
              {productData.details.map((section) => (
                <div
                  key={section.id}
                  ref={(el) => {
                    sectionRefs.current[section.id - 1] = el;
                  }}
                  data-id={section.id}
                  className={`mt-[14px] ${activeSectionId === section.id ? 'text-[#3A449B]' : ''}`} // Add active-section class conditionally
                >
                  <h2
                    className={`sticky left-0 right-0 top-0 mt-5 h-full w-full bg-white pb-2 text-base font-semibold text-[#344054] md:pt-10`}
                    data-id={section.id}
                  >
                    {section.title}
                  </h2>
                  <ul>
                    {section.items.map((item, itemIndex) => (
                      <li
                        key={itemIndex}
                        className="mt-2 text-sm text-gray-600 md:mt-[14px] md:text-base"
                      >
                        <CustomImage
                          src={check.src}
                          alt="check"
                          width={20}
                          height={20}
                          className="mr-4 inline-block"
                        />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <SectionProducts />
    </main>
  );
};

export default ProductDetailPage;
