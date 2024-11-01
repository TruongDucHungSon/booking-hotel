import CustomImage from '@/components/CustomImage';
import Title from '@/components/Title/Title';
import { NEW } from '@/utils/constants';
import { map } from 'lodash';
import Link from 'next/link';

const SectionNew = () => {
  return (
    <section className="container py-10 lg:py-20">
      <Title>Tin tức</Title>
      <div className="place-center mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
        {map(NEW, (item) => (
          <div
            className="group cursor-pointer overflow-hidden rounded-3xl bg-[#f3f3f3] p-4"
            key={item.id}
          >
            <CustomImage
              width={1000}
              height={500}
              src={item.image.src}
              alt="new"
              className="mb-4 h-[168px] w-full overflow-hidden transition-all duration-300 group-hover:scale-105"
              classNameImg="rounded-2xl rounded-2xl "
            />
            <div>
              <Link
                href={'#'}
                className="mb-1 line-clamp-2 text-[16px] font-medium leading-[20.16px] tracking-tight text-black"
              >
                <span>[{item.location}]</span> {item.title}
              </Link>
              <p className="text-sm tracking-tight">{item.content}</p>
              <div className="mt-4 flex items-center justify-between">
                <div className="flex items-center gap-1">
                  <svg
                    width="14"
                    height="15"
                    viewBox="0 0 14 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clip-path="url(#clip0_1129_3396)">
                      <path
                        d="M12.5416 2.8783H11.2777V3.65607H12.4444V12.2116H1.55547V3.65607H2.72213V2.8783H1.45824C1.36734 2.87982 1.27762 2.89923 1.19421 2.93543C1.11081 2.97163 1.03535 3.0239 0.972156 3.08926C0.908958 3.15463 0.859256 3.2318 0.825889 3.31638C0.792522 3.40096 0.776143 3.49128 0.777688 3.58218V12.2855C0.776143 12.3764 0.792522 12.4667 0.825889 12.5513C0.859256 12.6359 0.908958 12.7131 0.972156 12.7784C1.03535 12.8438 1.11081 12.8961 1.19421 12.9323C1.27762 12.9685 1.36734 12.9879 1.45824 12.9894H12.5416C12.6325 12.9879 12.7222 12.9685 12.8056 12.9323C12.889 12.8961 12.9645 12.8438 13.0277 12.7784C13.0909 12.7131 13.1406 12.6359 13.1739 12.5513C13.2073 12.4667 13.2237 12.3764 13.2221 12.2855V3.58218C13.2237 3.49128 13.2073 3.40096 13.1739 3.31638C13.1406 3.2318 13.0909 3.15463 13.0277 3.08926C12.9645 3.0239 12.889 2.97163 12.8056 2.93543C12.7222 2.89923 12.6325 2.87982 12.5416 2.8783Z"
                        fill="#4F4F4F"
                      />
                      <path d="M3.11108 5.98938H3.88886V6.76716H3.11108V5.98938Z" fill="#4F4F4F" />
                      <path d="M5.44434 5.98938H6.22211V6.76716H5.44434V5.98938Z" fill="#4F4F4F" />
                      <path d="M7.77783 5.98938H8.55561V6.76716H7.77783V5.98938Z" fill="#4F4F4F" />
                      <path d="M10.1111 5.98938H10.8889V6.76716H10.1111V5.98938Z" fill="#4F4F4F" />
                      <path d="M3.11108 7.93384H3.88886V8.71162H3.11108V7.93384Z" fill="#4F4F4F" />
                      <path d="M5.44434 7.93384H6.22211V8.71162H5.44434V7.93384Z" fill="#4F4F4F" />
                      <path d="M7.77783 7.93384H8.55561V8.71162H7.77783V7.93384Z" fill="#4F4F4F" />
                      <path d="M10.1111 7.93384H10.8889V8.71162H10.1111V7.93384Z" fill="#4F4F4F" />
                      <path d="M3.11108 9.8783H3.88886V10.6561H3.11108V9.8783Z" fill="#4F4F4F" />
                      <path d="M5.44434 9.8783H6.22211V10.6561H5.44434V9.8783Z" fill="#4F4F4F" />
                      <path d="M7.77783 9.8783H8.55561V10.6561H7.77783V9.8783Z" fill="#4F4F4F" />
                      <path d="M10.1111 9.8783H10.8889V10.6561H10.1111V9.8783Z" fill="#4F4F4F" />
                      <path
                        d="M3.88889 4.43387C3.99203 4.43387 4.09094 4.39289 4.16387 4.31996C4.23681 4.24703 4.27778 4.14812 4.27778 4.04498V1.71164C4.27778 1.6085 4.23681 1.50959 4.16387 1.43666C4.09094 1.36373 3.99203 1.32275 3.88889 1.32275C3.78575 1.32275 3.68683 1.36373 3.6139 1.43666C3.54097 1.50959 3.5 1.6085 3.5 1.71164V4.04498C3.5 4.14812 3.54097 4.24703 3.6139 4.31996C3.68683 4.39289 3.78575 4.43387 3.88889 4.43387Z"
                        fill="#4F4F4F"
                      />
                      <path
                        d="M10.1111 4.43387C10.2142 4.43387 10.3131 4.39289 10.386 4.31996C10.459 4.24703 10.4999 4.14812 10.4999 4.04498V1.71164C10.4999 1.6085 10.459 1.50959 10.386 1.43666C10.3131 1.36373 10.2142 1.32275 10.1111 1.32275C10.0079 1.32275 9.909 1.36373 9.83607 1.43666C9.76314 1.50959 9.72217 1.6085 9.72217 1.71164V4.04498C9.72217 4.14812 9.76314 4.24703 9.83607 4.31996C9.909 4.39289 10.0079 4.43387 10.1111 4.43387Z"
                        fill="#4F4F4F"
                      />
                      <path d="M5.05566 2.8783H8.94455V3.65607H5.05566V2.8783Z" fill="#4F4F4F" />
                    </g>
                    <defs>
                      <clipPath id="clip0_1129_3396">
                        <rect
                          width="14"
                          height="14"
                          fill="white"
                          transform="translate(0 0.544922)"
                        />
                      </clipPath>
                    </defs>
                  </svg>

                  <span className="text-sm">{item.date}</span>
                </div>
                <div>
                  <a
                    href={'/'}
                    className="flex items-center justify-center gap-2 text-base font-medium text-[#3A449B] group-hover:underline"
                  >
                    Đọc tiếp
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
            </div>
          </div>
        ))}
      </div>
      <div className="mt-8 flex justify-center">
        <Link
          href="/dich-vu"
          className="group mx-auto flex w-[260px] items-center justify-center gap-2 rounded-2xl bg-[#3A449B] px-6 py-[12px] font-medium text-white"
        >
          Xem tất cả
          <span className="transition-all duration-300 group-hover:translate-x-2">
            <svg
              width="14"
              height="11"
              viewBox="0 0 14 11"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.00008 10.2116L8.06008 9.27163L11.1134 6.21163L0.333415 6.21163L0.333414 4.8783L11.1134 4.8783L8.05341 1.8183L9.00008 0.878296L13.6667 5.54496L9.00008 10.2116Z"
                fill="white"
              />
            </svg>
          </span>
        </Link>
      </div>
    </section>
  );
};

export default SectionNew;
