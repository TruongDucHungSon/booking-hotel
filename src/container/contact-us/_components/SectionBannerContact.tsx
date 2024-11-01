import BannerIntroduce from '@/assets/images/banner/introduce.jpg';
import CustomImage from '@/components/CustomImage';

const SectionBannerContact = () => {
  return (
    <section className="-z-10 w-full bg-gradient py-10 lg:pt-0">
      <CustomImage
        width={2000}
        height={1000}
        src={BannerIntroduce.src}
        alt={'banner'}
        className="container z-50 h-[300px] max-w-full lg:h-[400px]"
        classNameImg="rounded-[14px]"
      />
    </section>
  );
};

export default SectionBannerContact;
