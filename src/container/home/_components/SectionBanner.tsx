'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/autoplay'; // Import autoplay styles
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import SlideSrc1 from '../../../assets/images/slider/slide1.png';
import SlideSrc2 from '../../../assets/images/slider/slide2.png';
import SlideSrc3 from '../../../assets/images/slider/slide3.png';
import CustomImage from '../../../components/CustomImage/index';
// import required modules
import { Autoplay, Pagination } from 'swiper/modules';
const SectionBanner = () => {
  return (
    <section className="mb-20 bg-gradient py-8">
      {/* header banner */}
      <div className="mx-auto w-full pl-5 pr-10 text-center text-white lg:w-[1212px]">
        <div className="flex justify-between">
          <svg
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

          <h2 className="font-wylie text-[64px] leading-[64px]">
            Thư giãn cơ thể - tái tạo năng lượng
          </h2>

          <svg
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
        <p className="text-20 mt-2 font-varela font-normal uppercase leading-[20px] tracking-[0.3em]">
          Massage cho bạn khoảnh khắc bình yên
        </p>
      </div>

      {/* slider banner */}
      <div className="container z-50 mt-8 h-[350px]">
        <Swiper
          spaceBetween={2}
          pagination={{
            dynamicBullets: true,
            clickable: true,
          }}
          autoplay={{
            delay: 3000, // Delay in milliseconds for autoplay
            disableOnInteraction: false, // Keeps autoplay active after interaction
          }}
          speed={1000} // Speed for smooth transitions in milliseconds
          modules={[Pagination, Autoplay]} // Include the Autoplay module
        >
          <SwiperSlide>
            <div className="flex items-center justify-center gap-6 pb-8">
              <CustomImage
                src={SlideSrc1.src}
                alt="Slide 1"
                width={1000}
                height={1000}
                className="w-[421.33px] rounded-tl-[14px]"
              />
              <CustomImage
                src={SlideSrc2.src}
                alt="Slide 1"
                width={1000}
                height={1000}
                className="w-[421.33px] rounded-tl-[14px]"
              />
              <CustomImage
                src={SlideSrc3.src}
                alt="Slide 1"
                width={1000}
                height={1000}
                className="w-[421.33px] rounded-tl-[14px]"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex items-center justify-center gap-6 pb-8">
              <CustomImage
                src={SlideSrc1.src}
                alt="Slide 1"
                width={1000}
                height={1000}
                className="w-[421.33px] rounded-tl-[14px]"
              />
              <CustomImage
                src={SlideSrc2.src}
                alt="Slide 1"
                width={1000}
                height={1000}
                className="w-[421.33px] rounded-tl-[14px]"
              />
              <CustomImage
                src={SlideSrc3.src}
                alt="Slide 1"
                width={1000}
                height={1000}
                className="w-[421.33px] rounded-tl-[14px]"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex items-center justify-center gap-6 pb-8">
              <CustomImage
                src={SlideSrc1.src}
                alt="Slide 1"
                width={1000}
                height={1000}
                className="w-[421.33px] rounded-tl-[14px]"
              />
              <CustomImage
                src={SlideSrc2.src}
                alt="Slide 1"
                width={1000}
                height={1000}
                className="w-[421.33px] rounded-tl-[14px]"
              />
              <CustomImage
                src={SlideSrc3.src}
                alt="Slide 1"
                width={1000}
                height={1000}
                className="w-[421.33px] rounded-tl-[14px]"
              />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default SectionBanner;
