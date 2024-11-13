import CustomImage from '@/components/CustomImage';
import Title from '@/components/Title/Title';
import Link from 'next/link';

const ArticleDetailPage = () => {
  const tags = [
    'Tin tức SeABank',
    'Quỹ chăm sóc sức khỏe',
    'Văn hóa SeABank',
    'Tư vấn dịch vụ',
    'CTKM',
  ];

  const relatedArticles = [...Array(3)].map((_, index) => ({
    id: index,
    image:
      'https://images.unsplash.com/photo-1519415510236-718bdfcd89c8?w=500&auto=format&fit=crop&q=60',
    title: 'Top 3 Sữa Tắm Hương Nước Hoa Thơm Quyến Rũ',
    description:
      'Ngân hàng TMCP Đông Nam Á (SeABank) đã tổ chức buổi tọa đàm và công bố hoàn thành trụ cột 2 của Basel II.',
    date: '19/06/2023',
    link: '/tin-tuc/1',
  }));

  return (
    <main>
      <div className="mx-auto w-full px-5 py-10 lg:w-[880px] lg:px-0 lg:py-20">
        {/* Breadcrumbs */}
        <div className="flex items-center gap-1 text-sm font-medium">
          <Link href="/tin-tuc" className="text-[#EF5F5F]">
            Danh mục tin tức
          </Link>
          <span>/</span>
          <p>Chi tiết tin tức</p>
        </div>

        {/* Title */}
        <h1 className="mt-4 text-xl font-bold text-gray-800 md:text-2xl lg:text-[32px] lg:leading-10">
          Thông báo Mã số dự thưởng Chương trình tri ân SeABank 30 năm: Kết nối vươn tầm - Khởi dựng
          hưng thịnh dành cho doanh nghiệp
        </h1>

        {/* Date and Share */}
        <div className="mb-6 mt-2 flex items-center justify-between text-xs text-[#4F4F4F] md:text-sm">
          <span>22/07/2024</span>
          <div className="flex cursor-pointer items-center gap-2 rounded-3xl bg-[#E8E8E8] px-6 py-[10px] font-medium text-black">
            <svg
              className="size-4 lg:size-6"
              width="24"
              height="24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M18.4998 2C19.0772 1.99994 19.6458..." fill="black" />
            </svg>
            Chia sẻ
          </div>
        </div>

        {/* Article Content */}
        <div className="border-b border-b-[#EEEEEE] pb-4 text-gray-700 md:pb-8">
          <p className="mb-6 text-sm font-semibold md:text-base">
            Ngân hàng TMCP Đông Nam Á (SeABank) công bố kết quả kinh doanh...
          </p>

          {/* Article Image */}
          <CustomImage
            src="https://images.unsplash.com/photo-1519415510236-718bdfcd89c8?w=500&auto=format&fit=crop&q=60"
            alt="SeABank event"
            width={800}
            height={450}
            className="w-full rounded-2xl"
          />

          {/* Further Content */}
          <p className="mt-3 text-sm md:mt-6 md:text-base">
            Được triển khai từ ngày 01/04/2024 đến ngày 30/06/2024, chương trình ưu đãi...
          </p>

          {/* Tags Section */}
          <div className="mb-5 mt-4 flex flex-wrap items-center gap-3 md:mt-6 lg:mb-10">
            <p className="text-sm font-semibold md:text-base">Từ khóa:</p>
            {tags.map((tag) => (
              <div key={tag} className="flex items-center gap-2 md:gap-3">
                <span className="rounded-full bg-[#EEEEEE] px-4 py-2 text-xs font-medium md:text-sm">
                  {tag}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Related Articles Section */}
        <div className="container">
          <Title>Tin tức liên quan</Title>
          <div className="grid grid-cols-1 gap-4 pb-10 sm:grid-cols-2 lg:grid-cols-3 lg:pb-20">
            {relatedArticles.map(({ id, image, title, description, date, link }) => (
              <div key={id} className="mt-3 rounded-xl bg-[#F3F3F3] p-4 md:mt-5">
                <CustomImage
                  src={image}
                  alt="Related News"
                  width={400}
                  height={250}
                  className="h-[220px] w-full rounded-lg object-cover"
                />
                <h3 className="mt-3 text-sm font-semibold md:mt-4 md:text-base">{title}</h3>
                <p className="mt-1 line-clamp-3 text-xs text-[#828282] md:mt-[10px] md:text-sm">
                  {description}
                </p>
                <div className="mt-2 flex items-center justify-between md:mt-3">
                  <p className="text-xs text-[#4F4F4F]">{date}</p>
                  <Link
                    href={link}
                    className="group flex items-center justify-center gap-2 text-sm font-medium text-[#3A449B] hover:underline md:text-base"
                  >
                    Đọc tiếp
                    <span className="transition-all duration-300 group-hover:translate-x-2">
                      <svg width="17" height="17" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9 7l3 3-3 3" stroke="currentColor" strokeWidth="2" />
                      </svg>
                    </span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default ArticleDetailPage;
