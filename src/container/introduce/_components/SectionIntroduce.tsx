import IntroduceSrc from '@/assets/images/banner/49.jpg';
import Ic1 from '@/assets/svgs/introduce/ic1.svg';
import Ic2 from '@/assets/svgs/introduce/ic2.svg';
import Ic3 from '@/assets/svgs/introduce/ic3.svg';
import Ic4 from '@/assets/svgs/introduce/ic4.svg';
import Ic5 from '@/assets/svgs/introduce/ic5.svg';
import CustomImage from '@/components/CustomImage';
import Title from '../../../components/Title/Title';
const SectionIntroduce = () => {
  return (
    <section className="container py-20">
      <Title>BLoom massage</Title>
      <p className="mt-[10px] text-center text-base text-primary">
        BLOOM MASAGE là thương hiệu spa được thành lập từ năm 2009. Kiến trúc theo phong cách Á Đông
        hiện đại kết hợp với nội thất trang trí tinh tế mang đến không gian hài hòa, ấm cúng. Trong
        một bản nhạc du dương, nhẹ nhàng, được phục vụ bởi đội ngũ nhân viên tận tình, giúp bạn thư
        giãn, nạp lại năng lượng, giảm bớt sự mệt mỏi, căng thẳng sau những bộn bề của cuộc sống.
      </p>
      <CustomImage
        width={1000}
        height={1000}
        src={IntroduceSrc.src}
        alt={'introduce'}
        className="mx-auto my-[56px] max-h-[822px] max-w-[618px]"
      />
      <p className="mb-8 text-center text-base font-medium">
        Hành trình phát triển thương hiệu 2015 – 8 năm tại Hà Nội
      </p>

      {/* list */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <div className="flex flex-col gap-6">
          <div className="flex items-start gap-8 rounded-[40px] border border-[#f1f1f4] p-6 text-[#000]">
            <div className="h-[68px] w-[68px]">
              <CustomImage
                width={68}
                height={68}
                src={Ic1.src}
                alt={'introduce'}
                className="h-[68px] w-[68px]"
              />
            </div>
            <div>
              <h6 className="mb-2 text-base font-semibold capitalize">
                Đội ngũ chuyên gia và kỹ thuật viên giàu kinh nghiệm
              </h6>
              <p className="text-sm text-primary">
                Với kinh nghiệm 8 năm trong lĩnh vực làm đẹp và chăm sóc sức khỏe, Bloom Spa được
                biết đến là nơi sở hữu đội ngũ chuyên gia tư vấn và kỹ thuật viên có tay nghề vững,
                được đào tạo chuyên sâu về dịch vụ, thường xuyên được tham gia các khóa học để trau
                dồi những kỹ năng.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-8 rounded-[40px] border border-[#f1f1f4] p-6 text-[#000]">
            <div className="h-[68px] w-[68px]">
              <CustomImage
                width={68}
                height={68}
                src={Ic2.src}
                alt={'introduce'}
                className="h-[68px] w-[68px]"
              />
            </div>
            <div>
              <h6 className="mb-2 text-base font-semibold capitalize">Tầm nhìn</h6>
              <p className="text-sm text-primary">
                Thông qua những giá trị tiền đề, không ngừng nỗ lực để trở thành hệ thống spa  chuẩn
                Nhật hàng đầu Việt Nam với tiêu chuẩn và tinh hoa đặc sắc quy tụ từ Nhật Bản, đem
                đến chất lượng dịch vụ vượt trội và cao cấp trong hành trình thăng hạng nhan sắc,
                nâng cao sức khoẻ của khách hàng. Trong 10 năm tới, Bloom Spa hướng đến mục tiêu có
                được 15 chi nhánh trực thuộc công ty, 300 cơ sở nhượng quyền toàn quốc và 10 cơ sở ở
                nước ngoài, đồng thời cập nhật liên tục những xu hướng làm đẹp để trở thành hệ thống
                spa tiêu chuẩn Nhật Bản hàng đầu Việt Nam trên hành trình giúp cho một triệu phụ
                nữ khỏe bên trong, đẹp bên ngoài.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-8 rounded-[40px] border border-[#f1f1f4] p-6 text-[#000]">
            <div className="h-[68px] w-[68px]">
              <CustomImage
                width={68}
                height={68}
                src={Ic3.src}
                alt={'introduce'}
                className="h-[68px] w-[68px]"
              />
            </div>
            <div>
              <h6 className="mb-2 text-base font-semibold capitalize">Sứ mệnh</h6>
              <p className="text-sm text-primary">
                Bloom Spa cung cấp những giải pháp và dịch vụ làm đẹp chuẩn Nhật Bản giúp người phụ
                nữ sở hữu “ sắc vóc như hoa, khí chất như ngọc”, tự tin và hưởng trọn sự viên mãn
                trong sự nghiệp và cuộc sống. Góp phần nâng cao giá trị sống của bản thân những
                người phụ nữ, họ biết yêu thương và chăm sóc bản thân để có được một hạnh phúc trọn
                vẹn.
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-6">
          <div className="flex items-start gap-8 rounded-[40px] border border-[#f1f1f4] p-6 text-[#000]">
            <div className="h-[68px] w-[68px]">
              <CustomImage
                width={68}
                height={68}
                src={Ic4.src}
                alt={'introduce'}
                className="h-[68px] w-[68px]"
              />
            </div>
            <div>
              <h6 className="mb-2 text-base font-semibold capitalize">
                Dịch vụ chăm sóc khách hàng tốt nhất
              </h6>
              <p className="text-sm text-primary">
                Bloom Spa luôn mang đến cho khách hàng những trải nghiệm dịch vụ hài lòng và thoải
                mái nhất bởi sự nhiệt tình, thân thiện của đội ngũ tư vấn và kỹ thuật viên. Cùng
                những chính sách gia tăng giá trị khách hàng, chế độ ưu đãi cùng giá cả phù hợp với
                mọi đối tượng.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-8 rounded-[40px] border border-[#f1f1f4] p-6 text-[#000]">
            <div className="w-[44%]">
              <CustomImage
                width={68}
                height={68}
                src={Ic5.src}
                alt={'introduce'}
                className="h-[68px] w-[68px]"
              />
            </div>
            <div>
              <h6 className="mb-2 text-base font-semibold capitalize">Giá trị cốt lõi</h6>
              <ul className="text-sm tracking-tighter text-primary">
                <li className="list-disc">
                  Niềm tin: Bloom Spa luôn tạo lập niềm tin đến với quý khách hàng và tập thể nhân
                  viên bằng các dịch vụ làm đẹp và bảo dưỡng sức khỏe an toàn và hiệu quả, bằng
                  phong thái phục vụ vô cùng tận tâm, chuyên nghiệp kết hợp với chế độ bảo dưỡng và
                  chăm sóc chu đáo.
                </li>
                <li className="list-disc">
                  Tạo nên bản sắc riêng: Bloom Spa luôn chú trọng đến tiêu chí “chuẩn hóa” ở tất cả
                  các cơ sở để giữ trọn tinh hoa làm đẹp từ Nhật Bản với quy trình công nghệ mới
                  nhất mang đến hiệu quả và sự hài lòng cho khách hàng.
                </li>
                <li className="list-disc">
                  Chất lượng luôn đi đầu: Bloom Spa luôn đề cao việc ứng xử chân thật với quý khách
                  hàng và nhân viên, tất cả sản phẩm được nhập khẩu 100% từ Nhật Bản đã qua kiểm
                  nghiệm từ chuyên gia. Chúng tôi luôn ưu tiên sử dụng máy móc công nghệ tiên tiến
                  hàng đầu được chứng nhận đầy đủ, mang đến hiệu quả chăm sóc vượt trội. Đội ngũ
                  nhân viên có tay nghề được đào bài bản cùng tinh thần trách nhiệm và sự nhiệt
                  huyết trong công việc.
                </li>
                <li className="list-disc">
                  Về con người: Trách nhiệm với chính bản thân, với đối tác, khách hàng, với ngành
                  làm đẹp và những mục tiêu chung, từ đó làm tiền đề tạo nên phong thái làm việc
                  chuyên nghiệp, chủ động và hiệu quả hơn. Bên trong những “trái tim nồng ấm” luôn
                  hết mình vì khách hàng là tinh thần Gắn kết, đồng lòng, hỗ trợ lẫn nhau, cùng nhau
                  làm việc và không ngừng học tập, trau dồi thêm kiến thức, tiếp thu cái mới để phục
                  vụ khách hàng tốt hơn qua những chương trình huấn luyện chuyên sâu từ các chuyên
                  gia trong và ngoài nước
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionIntroduce;
