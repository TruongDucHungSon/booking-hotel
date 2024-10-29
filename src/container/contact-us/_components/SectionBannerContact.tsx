import BannerIntroduce from '@/assets/images/banner/introduce.jpg';
import CustomImage from '@/components/CustomImage';
import React from 'react';

const SectionBannerContact = () => {
  return (
    <section className="-z-10 w-full bg-gradient pb-10">
      <CustomImage
        width={2000}
        height={1000}
        src={BannerIntroduce.src}
        alt={'banner'}
        className="container z-50 max-h-[400px] max-w-full"
        classNameImg="rounded-[14px]"
      />
    </section>
  );
};

export default SectionBannerContact;
