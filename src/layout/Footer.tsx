import FooterSrc from '@/assets/images/logo/logo.png';
import CustomImage from '@/components/CustomImage';
import Link from 'next/link';
const Footer = () => {
  return (
    <footer>
      <div className="relative h-[182px] w-full bg-[#FFF4F4] py-8">
        <CustomImage
          src={FooterSrc.src}
          alt="logo"
          width={2000}
          height={500}
          className="abs-center z-40 w-[100px] lg:h-[118px] lg:w-[166px]"
        />
      </div>
      <div className="flex h-fit flex-col items-center justify-between bg-custom-gradient py-0 text-white lg:py-3">
        <div className="container flex flex-col items-start justify-between gap-2 py-6 lg:flex-row lg:items-center lg:py-0">
          <div className="flex items-center gap-3">
            <svg
              width="20"
              height="20"
              viewBox="0 0 16 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_1076_7928)">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M11.0347 14.8002C10.0747 14.7648 7.35408 14.3888 4.50475 11.5402C1.65608 8.69082 1.28075 5.97082 1.24475 5.01015C1.19141 3.54615 2.31275 2.12415 3.60808 1.56882C3.76407 1.50147 3.93488 1.47582 4.10377 1.49441C4.27265 1.51299 4.43381 1.57516 4.57141 1.67482C5.63808 2.45215 6.37408 3.62815 7.00608 4.55282C7.14514 4.75597 7.20459 5.00319 7.17312 5.24735C7.14165 5.49152 7.02144 5.71557 6.83541 5.87682L5.53475 6.84282C5.47191 6.8882 5.42768 6.95484 5.41027 7.03037C5.39285 7.1059 5.40345 7.18518 5.44008 7.25349C5.73475 7.78882 6.25875 8.58615 6.85875 9.18615C7.45875 9.78615 8.29408 10.3448 8.86675 10.6728C8.93855 10.7131 9.02307 10.7244 9.10292 10.7043C9.18277 10.6842 9.2519 10.6343 9.29608 10.5648L10.1427 9.27615C10.2984 9.06939 10.528 8.93087 10.7835 8.88961C11.039 8.84835 11.3006 8.90756 11.5134 9.05482C12.4514 9.70415 13.5461 10.4275 14.3474 11.4535C14.4552 11.5921 14.5237 11.7571 14.5459 11.9312C14.568 12.1054 14.543 12.2823 14.4734 12.4435C13.9154 13.7455 12.5034 14.8542 11.0347 14.8002Z"
                  fill="white"
                />
              </g>
              <defs>
                <clipPath id="clip0_1076_7928">
                  <rect width="16" height="16" fill="white" transform="translate(0 0.0449219)" />
                </clipPath>
              </defs>
            </svg>
            <Link href={'tel:0314294897'} className="text-sm font-medium text-white">
              0314294897
            </Link>
          </div>
          <div className="flex items-center gap-3">
            <svg
              width="24"
              height="24 "
              viewBox="0 0 16 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.99989 1.37817C5.05922 1.37817 2.66656 3.77084 2.66656 6.70817C2.64722 11.0048 7.79722 14.5675 7.99989 14.7115C7.99989 14.7115 13.3526 11.0048 13.3332 6.71151C13.3332 3.77084 10.9406 1.37817 7.99989 1.37817ZM7.99989 9.37817C6.52656 9.37817 5.33323 8.18484 5.33323 6.71151C5.33323 5.23817 6.52656 4.04484 7.99989 4.04484C9.47322 4.04484 10.6666 5.23817 10.6666 6.71151C10.6666 8.18484 9.47322 9.37817 7.99989 9.37817Z"
                fill="white"
              />
            </svg>

            <p className="text-sm font-medium text-white">
              77 Trần Nhân Tôn, Phường 09, Quận 5, Thành phố Hồ Chí Minh, Việt Nam
            </p>
          </div>
          <div className="flex items-center gap-3">
            <svg
              width="20"
              height="20"
              viewBox="0 0 16 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.00016 14.7115C4.31816 14.7115 1.3335 11.7268 1.3335 8.04484C1.3335 4.36284 4.31816 1.37817 8.00016 1.37817C11.6822 1.37817 14.6668 4.36284 14.6668 8.04484C14.6668 11.7268 11.6822 14.7115 8.00016 14.7115ZM8.66683 8.04484V4.71151H7.3335V9.37817H11.3335V8.04484H8.66683Z"
                fill="white"
              />
            </svg>

            <p className="text-sm font-medium text-white">Thứ 2 - Chủ Nhật : 8h30 - 22h</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
