import sv10 from '../../../assets/images/new/sv10.png';
import sv11 from '../../../assets/images/new/sv11.png';
import sv12 from '../../../assets/images/new/sv12.png';
import sv13 from '../../../assets/images/new/sv13.png';
import sv14 from '../../../assets/images/new/sv14.png';
import sv7 from '../../../assets/images/new/sv7.png';
import sv8 from '../../../assets/images/new/sv8.png';
import sv9 from '../../../assets/images/new/sv9.png';
import CustomImage from '../../../components/CustomImage';
import Title from '../../../components/Title/Title';

const SectionGallery = () => {
  return (
    <section className="pb-20">
      <Title>Phòng trưng bày</Title>
      <div className="mt-8 grid grid-cols-4 gap-4">
        <CustomImage
          width={1200}
          height={1000}
          src={sv8.src}
          alt="ss"
          classNameImg="rounded-[26px]"
        />
        <CustomImage
          width={1200}
          height={1000}
          src={sv9.src}
          alt="ss"
          classNameImg="rounded-[26px]"
        />
        <CustomImage
          width={1200}
          height={1000}
          src={sv7.src}
          alt="ss"
          classNameImg="rounded-[26px]"
        />
        <CustomImage
          width={1200}
          height={1000}
          src={sv10.src}
          alt="ss"
          classNameImg="rounded-[26px]"
        />
        <CustomImage
          width={1200}
          height={1000}
          src={sv11.src}
          alt="ss"
          classNameImg="rounded-[26px]"
        />
        <CustomImage
          width={1200}
          height={1000}
          src={sv12.src}
          alt="ss"
          classNameImg="rounded-[26px]"
        />
        <CustomImage
          width={1200}
          height={1000}
          src={sv13.src}
          alt="ss"
          classNameImg="rounded-[26px]"
        />
        <CustomImage
          width={1200}
          height={1000}
          src={sv14.src}
          alt="ss"
          classNameImg="rounded-[26px]"
        />
      </div>
    </section>
  );
};

export default SectionGallery;
