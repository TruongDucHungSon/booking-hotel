'use client';
import CustomImage from '@/components/CustomImage';
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';

const SectionCustomer = () => {
  return (
    <section className="container py-20">
      <div className="flex flex-col items-center justify-between gap-8 lg:flex-row">
        <div className="w-full lg:w-[42%]">
          <h6 className="flex gap-3 font-wylie text-3xl">
            Khách hàng nói về Bloom massage
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.59102 0.650751L10.138 11.3419L0.105739 15.3477L10.7968 13.8007L14.8027 23.833L13.2557 13.1419L23.288 9.13603L12.5968 10.683L8.59102 0.650751Z"
                fill="url(#paint0_linear_1166_21264)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_1166_21264"
                  x1="23.977"
                  y1="-9.31817"
                  x2="-9.30484"
                  y2="12.2933"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#3A449B" />
                  <stop offset="1" stop-color="#EF5F5F" />
                </linearGradient>
              </defs>
            </svg>
            <svg
              width="16"
              height="17"
              viewBox="0 0 16 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                opacity="0.8"
                d="M10.2623 0.615483L7.59179 7.30366L0.464381 6.27234L7.15256 8.94289L6.12123 16.0703L8.79179 9.38212L15.9192 10.4134L9.23102 7.74289L10.2623 0.615483Z"
                fill="url(#paint0_linear_1166_21262)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_1166_21262"
                  x1="22.4684"
                  y1="-0.0114191"
                  x2="-3.9507"
                  y2="1.37204"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#3A449B" />
                  <stop offset="1" stop-color="#EF5F5F" />
                </linearGradient>
              </defs>
            </svg>
          </h6>
          <p className="mt-1 text-sm text-[#4F4F4F]">
            Dưới đây là một số đánh giá và phản hồi từ những khách hàng đã trải nghiệm dịch vụ Bloom
            Massage của chúng tôi.
          </p>
        </div>

        {/* Swiper for Customer Images */}
        <div className="grid w-full grid-cols-3 gap-5 md:grid-cols-4 lg:w-[60%] lg:grid-cols-6">
          <CustomImage
            width={500}
            height={500}
            className="h-[110px]"
            classNameImg="rounded-[26px]"
            src={
              'https://images.unsplash.com/photo-1630344745900-b5385f94f26c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTB8fGF1dGhvcnxlbnwwfHwwfHx8MA%3D%3D'
            }
            alt={`customer-`}
          />
          <CustomImage
            width={500}
            height={500}
            className="h-[110px]"
            classNameImg="rounded-[26px]"
            src={
              'https://images.unsplash.com/photo-1630344745900-b5385f94f26c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTB8fGF1dGhvcnxlbnwwfHwwfHx8MA%3D%3D'
            }
            alt={`customer-`}
          />
          <CustomImage
            width={500}
            height={500}
            className="h-[110px]"
            classNameImg="rounded-[26px]"
            src={
              'https://images.unsplash.com/photo-1630344745900-b5385f94f26c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTB8fGF1dGhvcnxlbnwwfHwwfHx8MA%3D%3D'
            }
            alt={`customer-`}
          />
          <CustomImage
            width={500}
            height={500}
            className="h-[110px]"
            classNameImg="rounded-[26px]"
            src={
              'https://images.unsplash.com/photo-1630344745900-b5385f94f26c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTB8fGF1dGhvcnxlbnwwfHwwfHx8MA%3D%3D'
            }
            alt={`customer-`}
          />
          <CustomImage
            width={500}
            height={500}
            className="h-[110px]"
            classNameImg="rounded-[26px]"
            src={
              'https://images.unsplash.com/photo-1630344745900-b5385f94f26c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTB8fGF1dGhvcnxlbnwwfHwwfHx8MA%3D%3D'
            }
            alt={`customer-`}
          />
          <CustomImage
            width={500}
            height={500}
            className="h-[110px]"
            classNameImg="rounded-[26px]"
            src={
              'https://images.unsplash.com/photo-1630344745900-b5385f94f26c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTB8fGF1dGhvcnxlbnwwfHwwfHx8MA%3D%3D'
            }
            alt={`customer-`}
          />
        </div>
      </div>

      {/* Swiper for Customer Feedback */}
      <div className="relative">
        <Swiper
          slidesPerView={3.5}
          spaceBetween={30}
          className="mt-12"
          pagination={{ clickable: true }}
          breakpoints={{
            380: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3.5,
            },
          }}
        >
          {Array(6)
            .fill(null)
            .map((_, index) => (
              <SwiperSlide key={index} className="flex odd:flex-col even:flex-col-reverse">
                <div className="mb-6 rounded-xl border border-[#E8E8E8] p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <CustomImage
                        width={500}
                        height={500}
                        className="h-12 w-12"
                        classNameImg="rounded-[100px]"
                        src={
                          'https://images.unsplash.com/photo-1629292825339-a0e89433f762?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTl8fGRlc2lnbiUyMHRoaW5raW5nfGVufDB8fDB8fHww'
                        }
                        alt={`customer-`}
                      />
                      <div>
                        <h6 className="text-base font-semibold">Anh Thanh Nam</h6>
                        <p className="text-sm text-[#4F4F4F]">Vĩnh Long</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 rounded-[7px] bg-[#FBF3EA] px-[10px] py-[7px]">
                      <svg
                        width="16"
                        height="17"
                        viewBox="0 0 16 17"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M7.65311 2.37757C7.6813 2.30879 7.72932 2.24995 7.79105 2.20854C7.85279 2.16713 7.92544 2.14502 7.99978 2.14502C8.07411 2.14502 8.14676 2.16713 8.2085 2.20854C8.27023 2.24995 8.31825 2.30879 8.34644 2.37757L9.76311 5.7849C9.78963 5.84866 9.83322 5.90386 9.88909 5.94444C9.94496 5.98502 10.0109 6.0094 10.0798 6.0149L13.7584 6.30957C14.0911 6.33624 14.2258 6.75157 13.9724 6.96824L11.1698 9.36957C11.1174 9.41436 11.0784 9.47271 11.057 9.53821C11.0356 9.60371 11.0326 9.67383 11.0484 9.7409L11.9051 13.3309C11.9223 13.4029 11.9178 13.4784 11.8921 13.5479C11.8665 13.6174 11.8208 13.6777 11.7609 13.7212C11.7009 13.7647 11.6295 13.7895 11.5555 13.7924C11.4815 13.7953 11.4083 13.7762 11.3451 13.7376L8.19511 11.8142C8.13627 11.7784 8.06869 11.7594 7.99978 11.7594C7.93086 11.7594 7.86328 11.7784 7.80444 11.8142L4.65444 13.7382C4.59128 13.7769 4.51808 13.796 4.44408 13.7931C4.37008 13.7901 4.29861 13.7654 4.23869 13.7218C4.17877 13.6783 4.13308 13.618 4.10741 13.5486C4.08174 13.4791 4.07722 13.4036 4.09444 13.3316L4.95111 9.7409C4.967 9.67383 4.96408 9.60369 4.94267 9.53817C4.92126 9.47266 4.8822 9.41432 4.82978 9.36957L2.02711 6.96824C1.97098 6.91998 1.93038 6.8562 1.91041 6.78493C1.89043 6.71365 1.89198 6.63806 1.91485 6.56767C1.93772 6.49727 1.9809 6.43521 2.03895 6.38928C2.097 6.34336 2.16734 6.31563 2.24111 6.30957L5.91978 6.0149C5.98861 6.0094 6.05459 5.98502 6.11046 5.94444C6.16633 5.90386 6.20992 5.84866 6.23644 5.7849L7.65311 2.37757Z"
                          stroke="#E59819"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                      <span className="text-base text-[#E59819]">5.0</span>
                    </div>
                  </div>
                  <p className="mt-5 text-sm text-[#4F4F4F]">
                    Tôi mới sanh em bé, do cần xét nghiệm ADN để làm khai sinh nhưng không thể đến
                    làm thủ tục được, lại ở xa, cũng nhờ Trung tâm đến thu mẫu tận nơi mà không tốn
                    thêm chi phí gì, cảm thấy hài lòng với dịch vụ tại Trung tâm.
                  </p>
                </div>
                <div className="rounded-xl border border-[#E8E8E8] p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <CustomImage
                        width={500}
                        height={500}
                        className="h-12 w-12"
                        classNameImg="rounded-[100px]"
                        src={
                          'https://images.unsplash.com/photo-1629292825339-a0e89433f762?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTl8fGRlc2lnbiUyMHRoaW5raW5nfGVufDB8fDB8fHww'
                        }
                        alt={`customer-`}
                      />
                      <div>
                        <h6 className="text-sm font-semibold lg:text-base">Anh Thanh Nam</h6>
                        <p className="text-xs text-[#4F4F4F]">Vĩnh Long</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 rounded-[7px] bg-[#FBF3EA] px-[10px] py-[7px]">
                      <svg
                        width="16"
                        height="17"
                        viewBox="0 0 16 17"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M7.65311 2.37757C7.6813 2.30879 7.72932 2.24995 7.79105 2.20854C7.85279 2.16713 7.92544 2.14502 7.99978 2.14502C8.07411 2.14502 8.14676 2.16713 8.2085 2.20854C8.27023 2.24995 8.31825 2.30879 8.34644 2.37757L9.76311 5.7849C9.78963 5.84866 9.83322 5.90386 9.88909 5.94444C9.94496 5.98502 10.0109 6.0094 10.0798 6.0149L13.7584 6.30957C14.0911 6.33624 14.2258 6.75157 13.9724 6.96824L11.1698 9.36957C11.1174 9.41436 11.0784 9.47271 11.057 9.53821C11.0356 9.60371 11.0326 9.67383 11.0484 9.7409L11.9051 13.3309C11.9223 13.4029 11.9178 13.4784 11.8921 13.5479C11.8665 13.6174 11.8208 13.6777 11.7609 13.7212C11.7009 13.7647 11.6295 13.7895 11.5555 13.7924C11.4815 13.7953 11.4083 13.7762 11.3451 13.7376L8.19511 11.8142C8.13627 11.7784 8.06869 11.7594 7.99978 11.7594C7.93086 11.7594 7.86328 11.7784 7.80444 11.8142L4.65444 13.7382C4.59128 13.7769 4.51808 13.796 4.44408 13.7931C4.37008 13.7901 4.29861 13.7654 4.23869 13.7218C4.17877 13.6783 4.13308 13.618 4.10741 13.5486C4.08174 13.4791 4.07722 13.4036 4.09444 13.3316L4.95111 9.7409C4.967 9.67383 4.96408 9.60369 4.94267 9.53817C4.92126 9.47266 4.8822 9.41432 4.82978 9.36957L2.02711 6.96824C1.97098 6.91998 1.93038 6.8562 1.91041 6.78493C1.89043 6.71365 1.89198 6.63806 1.91485 6.56767C1.93772 6.49727 1.9809 6.43521 2.03895 6.38928C2.097 6.34336 2.16734 6.31563 2.24111 6.30957L5.91978 6.0149C5.98861 6.0094 6.05459 5.98502 6.11046 5.94444C6.16633 5.90386 6.20992 5.84866 6.23644 5.7849L7.65311 2.37757Z"
                          stroke="#E59819"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                      <span className="text-base text-[#E59819]">5.0</span>
                    </div>
                  </div>
                  <p className="mt-5 text-sm text-[#4F4F4F]">
                    Sau nhiều lần cân nhắc, tìm hiểu. Trung tâm DNA Khai Sinh là đơn vị tôi tin
                    tưởng và lựa chọn để làm xét nghiệm ADN. Tư vấn giúp tôi giải tỏa hết các thắc
                    mắc của mình, giá cả hợp lý. Sau nhiều lần cân nhắc, tìm hiểu. Trung tâm DNA
                    Khai Sinh là đơn vị tôi tin tưởng và lựa chọn để làm xét nghiệm ADN. Tư vấn giúp
                    tôi giải tỏa hết các thắc mắc của mình, giá cả hợp lýSau nhiều lần cân nhắc, tìm
                    hiểu.
                  </p>
                </div>
              </SwiperSlide>
            ))}
        </Swiper>
        <div className="shadow-opacity absolute bottom-0 left-0 right-0 z-10 h-[200px] w-full"></div>
      </div>
    </section>
  );
};

export default SectionCustomer;
