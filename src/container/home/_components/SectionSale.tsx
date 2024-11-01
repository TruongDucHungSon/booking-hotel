import SaleSrc from '../../../assets/images/service/sale.jpg';
import CustomImage from '../../../components/CustomImage/index';

const SectionSale = () => {
  return (
    <section>
      <div className="relative">
        <CustomImage
          width={2000}
          height={500}
          src={SaleSrc.src}
          alt="sale"
          className="h-[350px] w-full lg:h-[500px]"
        />
        <div className="-translate-y-1/ absolute left-[36%] top-[14%] z-50 -translate-x-1/2 lg:left-[29%] lg:top-1/2">
          <h5 className="hover-gradient pb-3 font-wylie text-4xl lg:text-[48px] lg:leading-[46px]">
            Khuyến mãi đặc biệt của bloom massage
          </h5>
          <p className="mb-6 w-full text-sm lg:w-[584px] lg:text-[16px] lg:leading-[30px]">
            Bloom Spa là địa chỉ làm đẹp uy tín, tin cậy ĐÃ GIÚP HƠN 300.000 KHÁCH HÀNG Tìm lại
            thanh xuân của mình
          </p>
          <div className="font-gilroy flex h-10 w-[192px] cursor-pointer items-center justify-center rounded-[12px] bg-[#3A449B] px-6 py-2 text-left text-[16px] text-sm leading-[16.8px] tracking-[-0.3px] text-white transition-opacity duration-500 hover:opacity-80 lg:text-base">
            <button type="button">Nhận code giảm giá</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionSale;
