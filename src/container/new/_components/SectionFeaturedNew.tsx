import QcSrc from '@/assets/images/new/qc.png';
import CustomImage from '@/components/CustomImage';
import { featuredArticles } from '@/utils/constants';
const SectionFeaturedNew = () => {
  return (
    <section>
      <div className="">
        <h2 className="mb-4 text-xl font-bold">Bài Viết Nổi Bật</h2>
        <div className="grid grid-cols-1 gap-4">
          {featuredArticles.map((article) => (
            <div key={article.title} className="border-b border-b-[#E8E8E8] pb-2">
              <p className="text-sm font-semibold text-black">{article.title}</p>
              <p className="line-clamp-2 text-sm text-[#7A7A9D]">{article.date}</p>
            </div>
          ))}
        </div>
      </div>
      <div>
        <CustomImage
          src={QcSrc.src}
          alt="FeaturedNew"
          width={500}
          height={1000}
          className="h-[608px] w-full"
        />
      </div>
    </section>
  );
};

export default SectionFeaturedNew;
