import RoomSrc2 from '@/assets/images/room/r2.png';
import CustomImage from '@/components/CustomImage';
import Title from '@/components/Title/Title';
import { useArticlesData } from '@/services/article/Article.Service';
import { formatDateString } from '@/utils/helpers';
import Link from 'next/link';

const SectionListNews = () => {
  const { data: DATA_ARTICLES } = useArticlesData();
  const ARTICLES: any = DATA_ARTICLES?.data || [];
  console.log(ARTICLES);

  return (
    <section>
      <Title>Tin tức</Title>
      <div className="mt-3 md:mt-6">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {ARTICLES.map((article: any) => (
            <div key={article.id} className="rounded-3xl border border-[#E8E8E8] bg-white">
              <Link href={`/tin-tuc/${article.id}`} className="text-sm font-semibold md:text-base">
                <CustomImage
                  src={RoomSrc2.src || `https://api.aksoft.vn/${article.featured_image}`}
                  alt={article.title}
                  width={200}
                  height={200}
                  className="h-[200px] w-full object-cover"
                  classNameImg="rounded-tl-3xl rounded-tr-3xl"
                />
              </Link>

              <div className="p-3 md:p-4">
                <Link href={'/tin-tuc/1'} className="text-sm font-semibold md:text-base">
                  {article.title}
                </Link>
                <p className="mb-2 mt-1 line-clamp-3 text-xs text-[#343434] md:mb-4 md:mt-2 md:text-sm">
                  {article.content}
                </p>
                <div className="flex items-center justify-between">
                  <p className="text-xs text-[#343434]">{formatDateString(article.created_at)}</p>
                  <Link
                    href={'/tin-tuc/1'}
                    className="group flex items-center justify-center gap-2 text-sm font-medium text-[#3A449B] hover:underline md:text-base"
                  >
                    Xem Thêm
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
            </div>
          ))}
        </div>
        {/* <div className="mt-8 flex justify-center">
          <Link
            href="/dich-vu"
            className="group mx-auto flex w-[260px] items-center justify-center gap-2 rounded-2xl bg-[#3A449B] px-6 py-[12px] font-medium text-white"
          >
            Xem tất cả
            <span className="transition-all duration-300 group-hover:translate-y-2">
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3.33268 9.99999L4.27268 9.05999L7.33268 12.1133L7.33268 1.33332L8.66602 1.33332L8.66602 12.1133L11.726 9.05332L12.666 9.99999L7.99935 14.6667L3.33268 9.99999Z"
                  fill="white"
                />
              </svg>
            </span>
          </Link>
        </div> */}
      </div>
    </section>
  );
};

export default SectionListNews;
