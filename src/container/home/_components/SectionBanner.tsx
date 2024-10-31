'use client';

import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';

import { Autoplay, Pagination } from 'swiper/modules';
import SlideSrc1 from '../../../assets/images/slider/slide1.png';
import CustomImage from '../../../components/CustomImage/index';

const SectionBanner = () => {
  return (
    <section className="-z-20 mb-5 bg-gradient py-8 lg:mb-20">
      {/* Header Banner */}
      <div className="mx-auto w-full px-5 text-center text-white lg:w-[1212px]">
        <div className="flex flex-col items-center lg:flex-row lg:justify-between">
          <svg
            className="hidden lg:block"
            width="83"
            height="82"
            viewBox="0 0 83 82"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M24 0L21.4544 21.0074L0 23.5L21.4544 25.9926L24 47L26.5456 25.9926L48 23.5L26.5456 21.0074L24 0Z"
              fill="white"
            />
            <path
              opacity="0.5"
              d="M67.2869 47.0626L62.0471 60.1854L48.0625 58.1619L61.1852 63.4017L59.1617 77.3863L64.4016 64.2635L78.3861 66.2871L65.2634 61.0472L67.2869 47.0626Z"
              fill="white"
            />
          </svg>

          <h2 className="font-wylie text-[40px] leading-[48px] lg:text-[64px] lg:leading-[64px]">
            Thư giãn cơ thể - tái tạo năng lượng
          </h2>

          <svg
            className="hidden lg:block"
            width="62"
            height="91"
            viewBox="0 0 62 91"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M38 0C41.4699 11.5341 50.498 20.5301 62 24C50.4659 27.4699 41.4699 36.498 38 48C34.5301 36.498 25.502 27.4699 14 24C25.502 20.5301 34.498 11.5341 38 0Z"
              fill="white"
            />
            <path
              opacity="0.5"
              d="M11 69C12.5904 74.2865 16.7282 78.4096 22 80C16.7135 81.5904 12.5904 85.7282 11 91C9.40964 85.7282 5.27176 81.5904 0 80C5.27176 78.4096 9.39491 74.2865 11 69Z"
              fill="white"
            />
          </svg>
        </div>
        <p className="mt-4 font-varela text-[16px] font-normal uppercase leading-[20px] tracking-[0.3em] lg:mt-2 lg:text-[20px]">
          Massage cho bạn khoảnh khắc bình yên
        </p>
      </div>

      {/* Slider Banner */}
      <div className="container mt-8 h-[350px]">
        <Swiper
          spaceBetween={2}
          slidesPerGroup={3}
          pagination={{
            dynamicBullets: true,
            clickable: true,
          }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          speed={1000}
          modules={[Pagination, Autoplay]}
          breakpoints={{
            640: {
              slidesPerView: 1, // Mobile: 1 slide
            },
            768: {
              slidesPerView: 2, // Tablet: 2 slides
            },
            1024: {
              slidesPerView: 3, // Desktop: 3 slides
            },
          }}
        >
          {Array(6)
            .fill(null)
            .map((_, index) => (
              <SwiperSlide key={index}>
                <div className="flex items-center justify-center gap-6 pb-8 lg:gap-12">
                  <CustomImage
                    src={SlideSrc1.src}
                    alt={`Slide ${index + 1}`}
                    width={1000}
                    height={1000}
                    className="w-full max-w-[421.33px] rounded-tl-[14px] lg:max-w-[421.33px]"
                  />
                </div>
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
    </section>
  );
};

export default SectionBanner;
