import SectionBannerNew from './_components/SectionBannerNew';
import SectionFeaturedNew from './_components/SectionFeaturedNew';
import SectionListNews from './_components/SectionListNews';
const NewsPage = () => {
  return (
    <main>
      <SectionBannerNew />
      <div className="container grid grid-cols-1 gap-6 py-10 lg:grid-cols-[0.7fr,2fr] lg:py-20">
        <SectionFeaturedNew />
        <SectionListNews />
      </div>
    </main>
  );
};
export default NewsPage;
