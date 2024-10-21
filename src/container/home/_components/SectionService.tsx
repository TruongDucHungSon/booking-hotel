'use client';
import CustomImage from '@/components/CustomImage';
import { SERVICE } from '@/utils/constants';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import Title from '../../../components/Title/Title';

const SectionService = () => {
  return (
    <section className="pb-20">
      <Title className="mb-8">Dịch vụ Nổi bật tại bloom massage</Title>
      <div className="custom-swiper container">
        <Swiper
          className="pb-10"
          spaceBetween={24}
          slidesPerView={5}
          modules={[Pagination]} // Include the Autoplay module
          pagination={{
            dynamicBullets: true,
            clickable: true,
          }}
          breakpoints={{
            380: { slidesPerView: 2 },
            600: { slidesPerView: 3 },
            768: { slidesPerView: 4 },
            1024: { slidesPerView: 5 },
          }}
        >
          {SERVICE.map((service, index) => (
            <SwiperSlide key={index}>
              <div className="pb-14">
                <div className="rounded-bl-[20px] rounded-br-[20px] rounded-tl-[300px] rounded-tr-[300px] border border-[#e7e7e7] p-2">
                  <CustomImage
                    src={service.image.src}
                    alt={'service.title'}
                    width={1000}
                    height={500}
                    className="rounded-bl-[14px] rounded-br-[14px] rounded-tl-[300px] rounded-tr-[300px]"
                  />
                </div>
                <div className="mt-4 text-center">
                  <h3 className="mb-2 text-base font-semibold uppercase text-primary">
                    {service.title}
                  </h3>
                  <a
                    href={service.path}
                    className="group flex items-center justify-center gap-2 font-medium text-[#3A449B] hover:underline"
                  >
                    Đặt lịch ngay
                    <span className="transition-all duration-300 group-hover:translate-x-2">
                      <svg
                        width="17"
                        height="17"
                        viewBox="0 0 17 17"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clip-path="url(#clip0_1166_21082)">
                          <path
                            d="M10.5999 12.7117L9.65993 11.7717L12.7133 8.71172H1.93327V7.37839H12.7133L9.65327 4.31839L10.5999 3.37839L15.2666 8.04505L10.5999 12.7117Z"
                            fill="#3A449B"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_1166_21082">
                            <rect
                              width="16"
                              height="16"
                              fill="white"
                              transform="matrix(-1 0 0 1 16.5999 0.0450439)"
                            />
                          </clipPath>
                        </defs>
                      </svg>
                    </span>
                  </a>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default SectionService;
