import Link from 'next/link';
const SectionContact = () => {
  return (
    <section className="bg-contact container mb-20 rounded-xl pt-20">
      <div className="flex items-start justify-between gap-8 px-[87px] py-[49px]">
        <div className="w-[45%] text-white">
          <h6 className="flex gap-3 font-wylie text-3xl text-white">
            Khách hàng nói về Bloom massage
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.59102 0.650751L10.138 11.3419L0.105739 15.3477L10.7968 13.8007L14.8027 23.833L13.2557 13.1419L23.288 9.13603L12.5968 10.683L8.59102 0.650751Z"
                fill="white"
              />
            </svg>
            <svg
              width="16"
              height="17"
              viewBox="0 0 16 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                opacity="0.8"
                d="M10.2623 0.615483L7.59179 7.30366L0.464381 6.27234L7.15256 8.94289L6.12123 16.0703L8.79179 9.38212L15.9192 10.4134L9.23102 7.74289L10.2623 0.615483Z"
                fill="white"
                fill-opacity="0.5"
              />
            </svg>
          </h6>
          <p className="mt-[10px] w-full text-sm font-medium lg:w-[345px]">
            Bạn có thắc mắc hay cần tư vấn massage. Hãy để lại thông tin của bạn dưới đây, chúng tôi
            sẽ liên hệ lại trong thời gian sớm nhất.
          </p>
          <div className="mt-6 flex w-[136px] flex-col gap-4">
            <p className="text-sm font-semibold uppercase">Hoặc liên hệ</p>
            <div className="border: 3px solid flex items-center gap-4 rounded-[100px] border-[3px] bg-white px-4 py-2">
              <Link href={'#'}>
                <svg
                  width="24"
                  height="25"
                  viewBox="0 0 24 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M24 12.5449C24 5.91756 18.6274 0.544922 12 0.544922C5.37264 0.544922 0 5.91756 0 12.5449C0 18.1724 3.87456 22.8947 9.10128 24.1916V16.2121H6.62688V12.5449H9.10128V10.9648C9.10128 6.88044 10.9498 4.98732 14.9597 4.98732C15.72 4.98732 17.0318 5.1366 17.5685 5.2854V8.6094C17.2853 8.57964 16.7933 8.56476 16.1822 8.56476C14.2147 8.56476 13.4544 9.3102 13.4544 11.248V12.5449H17.3741L16.7006 16.2121H13.4544V24.4571C19.3963 23.7395 24.0005 18.6803 24.0005 12.5449H24Z"
                    fill="#0866FF"
                  />
                </svg>
              </Link>
              <Link href={'#'}>
                <svg
                  width="24"
                  height="25"
                  viewBox="0 0 24 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M17.1765 9.20839C18.7198 10.3156 20.6105 10.967 22.6525 10.967V7.02353C22.2661 7.02361 21.8806 6.98317 21.5025 6.90278V10.0069C19.4606 10.0069 17.5702 9.35541 16.0265 8.24832V16.2958C16.0265 20.3215 12.7745 23.5848 8.76333 23.5848C7.26666 23.5848 5.87556 23.1307 4.71997 22.352C6.03888 23.7053 7.87821 24.5449 9.91309 24.5449C13.9245 24.5449 17.1766 21.2816 17.1766 17.2557V9.20839H17.1765ZM18.5951 5.22992C17.8064 4.36515 17.2885 3.2476 17.1765 2.0121V1.50488H16.0867C16.361 3.0752 17.2966 4.41679 18.5951 5.22992ZM7.25706 19.2627C6.81638 18.6829 6.57824 17.9735 6.57931 17.2442C6.57931 15.4029 8.06672 13.91 9.90177 13.91C10.2438 13.91 10.5837 13.9625 10.9096 14.0663V10.0347C10.5287 9.98231 10.1443 9.96007 9.7601 9.96822V13.1062C9.43394 13.0024 9.09384 12.9497 8.75177 12.9501C6.91671 12.9501 5.42938 14.4428 5.42938 16.2843C5.42938 17.5863 6.17284 18.7136 7.25706 19.2627Z"
                    fill="#FF004F"
                  />
                  <path
                    d="M16.0265 8.24824C17.5702 9.35533 19.4607 10.0068 21.5025 10.0068V6.9027C20.3628 6.65906 19.3538 6.06133 18.5951 5.22992C17.2966 4.41671 16.361 3.07512 16.0867 1.50488H13.2241V17.2555C13.2176 19.0917 11.7327 20.5785 9.90162 20.5785C8.82257 20.5785 7.86394 20.0623 7.25682 19.2627C6.17269 18.7136 5.42923 17.5862 5.42923 16.2843C5.42923 14.443 6.91655 12.9501 8.75161 12.9501C9.1032 12.9501 9.44208 13.0051 9.75995 13.1063V9.96831C5.81921 10.05 2.6499 13.2814 2.6499 17.2556C2.6499 19.2395 3.43913 21.038 4.72006 22.3521C5.87565 23.1307 7.26675 23.5849 8.76342 23.5849C12.7747 23.5849 16.0265 20.3215 16.0265 16.2958V8.24824H16.0265Z"
                    fill="black"
                  />
                  <path
                    d="M21.5025 6.90272V6.06341C20.4748 6.06497 19.4672 5.77611 18.5952 5.22986C19.3671 6.07799 20.3835 6.66279 21.5025 6.90272ZM16.0867 1.50491C16.0605 1.35483 16.0404 1.20377 16.0265 1.05214V0.544922H12.074V16.2957C12.0677 18.1317 10.5829 19.6185 8.75164 19.6185C8.214 19.6185 7.70638 19.4904 7.25685 19.2628C7.86397 20.0624 8.82259 20.5785 9.90164 20.5785C11.7326 20.5785 13.2177 19.0918 13.2241 17.2556V1.50491H16.0867ZM9.76014 9.96833V9.07481C9.42988 9.02951 9.09691 9.00678 8.76353 9.00694C4.75192 9.00686 1.5 12.2703 1.5 16.2957C1.5 18.8194 2.77806 21.0436 4.72017 22.3519C3.43924 21.0379 2.65001 19.2394 2.65001 17.2556C2.65001 13.2814 5.81924 10.05 9.76014 9.96833Z"
                    fill="#00F2EA"
                  />
                </svg>
              </Link>
              <Link href={'#'}>
                <svg
                  width="24"
                  height="25"
                  viewBox="0 0 24 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_1129_3706)">
                    <path
                      d="M23.5221 6.73033C23.3864 6.21975 23.119 5.75375 22.7466 5.37899C22.3743 5.00422 21.91 4.73383 21.4003 4.59488C19.5239 4.09033 12.0239 4.09033 12.0239 4.09033C12.0239 4.09033 4.52393 4.09033 2.64756 4.59488C2.13786 4.73383 1.67358 5.00422 1.30121 5.37899C0.928842 5.75375 0.661431 6.21975 0.525744 6.73033C0.0239258 8.61488 0.0239258 12.5449 0.0239258 12.5449C0.0239258 12.5449 0.0239258 16.4749 0.525744 18.3594C0.661431 18.87 0.928842 19.336 1.30121 19.7108C1.67358 20.0855 2.13786 20.3559 2.64756 20.4949C4.52393 20.9994 12.0239 20.9994 12.0239 20.9994C12.0239 20.9994 19.5239 20.9994 21.4003 20.4949C21.91 20.3559 22.3743 20.0855 22.7466 19.7108C23.119 19.336 23.3864 18.87 23.5221 18.3594C24.0239 16.4749 24.0239 12.5449 24.0239 12.5449C24.0239 12.5449 24.0239 8.61488 23.5221 6.73033Z"
                      fill="#FF0302"
                    />
                    <path
                      d="M9.56934 16.1136V8.97632L15.8421 12.545L9.56934 16.1136Z"
                      fill="#FEFEFE"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_1129_3706">
                      <rect width="24" height="24" fill="white" transform="translate(0 0.544922)" />
                    </clipPath>
                  </defs>
                </svg>
              </Link>
            </div>
          </div>
        </div>
        {/* form */}
        <form action="" className="w-[52%]">
          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col text-white">
              <label htmlFor="name" className="mb-3 text-base font-medium">
                Tên của bạn
              </label>
              <input
                type="text"
                className="w-full rounded-xl border-none bg-white px-4 py-2 text-[#4F4F4F80] outline-none"
                id="name"
                placeholder="Nhập tên của bạn"
              />
            </div>
            <div className="flex flex-col text-white">
              <label htmlFor="phone" className="mb-3 text-base font-medium">
                Số điện thoại
              </label>
              <input
                type="text"
                className="w-full rounded-xl border-none bg-white px-4 py-2 text-[#4F4F4F80] outline-none"
                id="phone"
                placeholder="Nhập số điện thoại của bạn"
              />
            </div>
          </div>
          <div className="mt-4 flex w-full flex-col text-white">
            <label htmlFor="phone" className="mb-3 text-base font-medium">
              Nội dung
            </label>
            <textarea
              className="h-[100px] w-full rounded-xl border-none bg-white px-4 py-2 text-[#4F4F4F80] outline-none"
              id="phone"
              placeholder="Nhập lời nhắn"
            />
          </div>
          <div className="flex items-center justify-center">
            <button
              type="submit"
              className="mt-4 transform rounded-[10px] border border-white px-6 py-2 text-center text-white transition duration-300 ease-in-out hover:bg-white hover:text-black hover:shadow-lg"
            >
              Gửi cho chúng tôi
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default SectionContact;
