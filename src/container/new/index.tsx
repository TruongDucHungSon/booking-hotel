import SectionBannerNew from './_components/SectionBannerNew';
import SectionFeaturedNew from './_components/SectionFeaturedNew';
import SectionListNews from './_components/SectionListNews';
const NewsPage = () => {
  return (
    <main>
      <SectionBannerNew />
      <div className="container grid grid-cols-1 gap-6 py-20 lg:grid-cols-[0.7fr,2fr]">
        <SectionFeaturedNew />
        <SectionListNews />
      </div>
    </main>
  );
};
export default NewsPage;
