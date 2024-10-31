import CustomImage from '@/components/CustomImage';
import Title from '@/components/Title/Title';
import Link from 'next/link';

const ArticleDetailPage = () => {
  return (
    <main>
      <div className="mx-auto w-full px-5 py-10 lg:w-[880px] lg:px-0 lg:py-20">
        <div className="">
          <div className="flex items-center gap-1 text-sm font-medium">
            <Link href={'/tin-tuc'} className="text-[#EF5F5F]">
              Danh mục tin tức
            </Link>
            <p>/</p>
            <p>Chi tiết tin tức</p>
          </div>
          <h1 className="mt-4 text-xl font-bold text-gray-800 md:text-2xl lg:text-[32px] lg:leading-10">
            Thông báo Mã số dự thưởng Chương trình tri ân SeABank 30 năm: Kết nối vươn tầm - Khởi
            dựng hưng thịnh dành cho doanh nghiệp
          </h1>
          <div className="mb-6 mt-2 flex items-center justify-between text-xs text-[#4F4F4F] md:text-sm">
            <span>22/07/2024</span>
            <span className="flex cursor-pointer items-center gap-2 rounded-3xl bg-[#E8E8E8] px-6 py-[10px] font-medium text-black">
              <svg
                className="size-4 lg:size-6"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_1509_1716)">
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M18.4998 2C19.0772 1.99994 19.6458 2.14278 20.1547 2.41578C20.6635 2.68877 21.097 3.08345 21.4163 3.56461C21.7356 4.04578 21.9309 4.59848 21.9848 5.17345C22.0387 5.74842 21.9495 6.32778 21.7251 6.8599C21.5007 7.39201 21.1482 7.86034 20.6989 8.22313C20.2496 8.58592 19.7175 8.83189 19.15 8.93913C18.5826 9.04636 17.9974 9.01152 17.4467 8.83772C16.896 8.66391 16.3968 8.35654 15.9938 7.943L11.6698 10.21C11.8828 10.765 11.9998 11.37 11.9998 12C12.0002 12.6118 11.8883 13.2185 11.6698 13.79L15.9938 16.057C16.581 15.4554 17.3652 15.0853 18.2029 15.0144C19.0406 14.9434 19.8758 15.1763 20.5559 15.6706C21.236 16.1648 21.7154 16.8873 21.9066 17.706C22.0977 18.5247 21.9879 19.3848 21.597 20.1291C21.2061 20.8734 20.5604 21.4522 19.778 21.7595C18.9955 22.0669 18.1285 22.0824 17.3355 21.8031C16.5426 21.5238 15.8767 20.9684 15.4595 20.2385C15.0424 19.5086 14.9019 18.653 15.0638 17.828L10.5888 15.482C9.89568 16.1964 9.00515 16.6877 8.03118 16.893C7.05721 17.0983 6.04413 17.0082 5.12167 16.6343C4.19921 16.2604 3.40935 15.6196 2.85322 14.7941C2.29709 13.9686 2 12.9959 2 12.0005C2 11.0051 2.29709 10.0324 2.85322 9.2069C3.40935 8.38139 4.19921 7.74065 5.12167 7.36672C6.04413 6.9928 7.05721 6.90271 8.03118 7.10799C9.00515 7.31327 9.89568 7.80457 10.5888 8.519L15.0638 6.172C14.9646 5.66493 14.9788 5.14218 15.1056 4.64128C15.2324 4.14039 15.4685 3.67377 15.797 3.27493C16.1254 2.8761 16.5381 2.55494 17.0054 2.3345C17.4728 2.11407 17.9831 1.99984 18.4998 2ZM18.4998 17C18.1019 17 17.7204 17.158 17.4391 17.4393C17.1578 17.7206 16.9998 18.1022 16.9998 18.5C16.9998 18.8978 17.1578 19.2794 17.4391 19.5607C17.7204 19.842 18.1019 20 18.4998 20C18.8976 20 19.2791 19.842 19.5604 19.5607C19.8417 19.2794 19.9998 18.8978 19.9998 18.5C19.9998 18.1022 19.8417 17.7206 19.5604 17.4393C19.2791 17.158 18.8976 17 18.4998 17ZM6.99975 9C6.2041 9 5.44104 9.31607 4.87843 9.87868C4.31582 10.4413 3.99975 11.2044 3.99975 12C3.99975 12.7956 4.31582 13.5587 4.87843 14.1213C5.44104 14.6839 6.2041 15 6.99975 15C7.7954 15 8.55847 14.6839 9.12108 14.1213C9.68368 13.5587 9.99975 12.7956 9.99975 12C9.99975 11.2044 9.68368 10.4413 9.12108 9.87868C8.55847 9.31607 7.7954 9 6.99975 9ZM18.4998 4C18.3028 4 18.1077 4.0388 17.9257 4.11418C17.7437 4.18956 17.5784 4.30005 17.4391 4.43934C17.2998 4.57863 17.1893 4.74399 17.1139 4.92598C17.0386 5.10796 16.9998 5.30302 16.9998 5.5C16.9998 5.69698 17.0386 5.89204 17.1139 6.07403C17.1893 6.25601 17.2998 6.42137 17.4391 6.56066C17.5784 6.69995 17.7437 6.81044 17.9257 6.88582C18.1077 6.9612 18.3028 7 18.4998 7C18.8976 7 19.2791 6.84196 19.5604 6.56066C19.8417 6.27936 19.9998 5.89783 19.9998 5.5C19.9998 5.10218 19.8417 4.72064 19.5604 4.43934C19.2791 4.15804 18.8976 4 18.4998 4Z"
                    fill="black"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_1509_1716">
                    <rect width="24" height="24" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              Chia sẻ
            </span>
          </div>
        </div>

        {/* Article Content */}
        <div className="border-b border-b-[#EEEEEE] pb-4 text-gray-700 md:pb-8">
          <p className="mb-6 text-sm font-semibold md:text-base">
            Ngân hàng TMCP Đông Nam Á (SeABank, mã chứng khoán SSB) công bố kết quả kinh doanh 6
            tháng đầu năm 2024 với lợi nhuận trước thuế đạt hơn 3.238 tỷ đồng, tăng 61% so với cùng
            kỳ năm 2023. Đặc biệt, số dư CASA tăng cao, đạt 20.038 tỷ đồng, tăng 59% so với cùng kỳ
            năm trước. Các chỉ số kinh doanh khác đều có sự tăng trưởng ổn định và hiệu quả. Bên
            cạnh đó SeABank cũng thành công huy động 255 triệu USD từ các tổ chức tài chính quốc tế.
          </p>
          {/* Second Image with Caption */}
          <div className="my-6">
            <CustomImage
              src="https://images.unsplash.com/photo-1519415510236-718bdfcd89c8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHNwYXxlbnwwfHwwfHx8MA%3D%3D" // Replace with actual image path
              alt="SeABank Room"
              width={800}
              height={450}
              className="w-full"
              classNameImg="rounded-2xl"
            />
          </div>

          {/* Further Content */}
          <p className="mt-3 text-sm md:mt-6 md:text-base">
            Được triển khai từ ngày 01/04/2024 đến ngày 30/06/2024, chương trình ưu đãi sinh nhật
            SeABank 30 năm “Kết nối vươn tầm – Khởi dựng hưng thịnh” dành cho doanh nghiệp đã nhận
            sự quan tâm nhiệt tình của khách hàng. SeABank xin chúc mừng các Doanh nghiệp may mắn đã
            trúng thưởng các giải thưởng giá trị trong đợt quay thưởng:
          </p>

          <ul className="mt-1 list-inside list-disc text-sm md:mt-3 md:text-base">
            <li>1 giải đặc biệt, mỗi giải trị giá 50 chỉ vàng AJC</li>
            <li>10 giải nhất, mỗi giải trị giá 5 chỉ vàng AJC</li>
            <li>12 giải khuyến khích, mỗi giải trị giá 0.5 chỉ vàng AJC</li>
          </ul>
        </div>

        {/* Tags Section */}
        <div className="mb-5 mt-4 flex flex-wrap items-center gap-3 md:mt-6 lg:mb-10">
          <p className="text-sm font-semibold md:text-base">Từ khóa:</p>
          {[
            'Tin tức SeABank',
            'Quỹ chăm sóc sức khỏe',
            'Văn hóa SeABank',
            'Tư vấn dịch vụ',
            'Tư vấn dịch vụ',
            'Tư vấn dịch vụ',
            'Tư vấn dịch vụ',
            'Tư vấn dịch vụ',
            'Tư vấn dịch vụ',
            'CTKM',
          ].map((tag) => (
            <div key={tag} className="flex items-center gap-2 md:gap-3">
              <span className="rounded-full bg-[#EEEEEE] px-4 py-2 text-xs font-medium md:text-sm">
                {tag}
              </span>
            </div>
          ))}
        </div>
      </div>
      {/* Article Header */}

      {/* Related Articles Section */}
      <div className="container">
        <Title>Tin tức liên quan</Title>
        <div className="grid grid-cols-1 gap-4 pb-10 sm:grid-cols-2 lg:grid-cols-3 lg:pb-20">
          {[...Array(3)].map((_, index) => (
            <div key={index} className="mt-3 rounded-xl bg-[#F3F3F3] p-4 md:mt-5">
              <CustomImage
                src="https://images.unsplash.com/photo-1519415510236-718bdfcd89c8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHNwYXxlbnwwfHwwfHx8MA%3D%3D" // Replace with actual path
                alt="Related News"
                width={400}
                height={250}
                className="h-[220px] w-full rounded-lg object-cover"
                classNameImg="rounded-xl"
              />
              <h3 className="mt-3 text-sm font-semibold md:mt-4 md:text-base">
                Top 3 Sữa Tắm Hương Nước Hoa Thơm Quyến Rũ
              </h3>
              <p className="mt-1 line-clamp-3 text-xs text-[#828282] md:mt-[10px] md:text-sm">
                Ngân hàng TMCP Đông Nam Á (SeABank) đã tổ chức buổi tọa đàm và công bố hoàn thành
                trụ cột 2 của Basel II - Quy trình đánh giá nội bộ về mức II - Quy trình đánh giá
                nội bộ về mức II - Quy trình đánh giá nội bộ về mức
              </p>
              <div className="mt-2 flex items-center justify-between md:mt-3">
                <p className="text-xs text-[#4F4F4F]">19/06/2023</p>
                <Link
                  href={'/tin-tuc/1'}
                  className="group flex items-center justify-center gap-2 text-sm font-medium text-[#3A449B] hover:underline md:text-base"
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
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default ArticleDetailPage;
