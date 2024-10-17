'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import LogoSrc from '../assets/images/logo/logo.png';
import CallSvg from '../assets/svgs/call/call.svg';
import CustomImage from '../components/CustomImage/index';
import { Navigation, NavigationProps } from '../utils/constants';

const DefaultLayout = () => {
  const pathname = usePathname();
  return (
    <header className="bg-gradient">
      <div className="px-5 py-8 lg:px-0">
        <div className="mx-auto flex h-[76px] w-full max-w-[1312px] items-center justify-between rounded-3xl border border-[#F3F3F3] bg-white/65 px-8 py-8 backdrop-blur-6">
          {/* Logo */}
          <div>
            <Link href={'/'}>
              <CustomImage
                src={LogoSrc.src}
                alt="Logo"
                width={100}
                height={100}
                className="h-[60px] w-[84px] bg-transparent"
              />
            </Link>
          </div>
          {/* navigation */}
          <ul className="flex items-center justify-center gap-12">
            {Navigation.map((item: NavigationProps) => (
              <li key={item.name}>
                <Link
                  href={item.link}
                  className={`text-[16px] font-medium leading-[20.16px] transition-colors duration-500 ${
                    pathname === item.link
                      ? 'text-gradient-hover' // Add your gradient here
                      : 'hover:text-gradient-hover text-primary'
                  }`}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
          {/* button */}
          <div className="font-gilroy tracking-tightest flex h-10 cursor-pointer items-center justify-center rounded-[12px] bg-[#3A449B] px-6 py-2 text-left text-[16px] font-medium leading-[16.8px] text-white transition-opacity duration-500 hover:opacity-80">
            <button type="button" className="flex items-center gap-2">
              <CustomImage
                className="h-4 w-4"
                src={CallSvg}
                alt="call-icons"
                width={16}
                height={16}
              />
              Đặt lịch: 1900 1234
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default DefaultLayout;
