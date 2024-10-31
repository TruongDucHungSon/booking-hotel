'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import LogoSrc from '../assets/images/logo/logo.png';
import CallSvg from '../assets/svgs/call/call.svg';
import SearchIcon from '../assets/svgs/search/ri_search-line.svg';
import CustomImage from '../components/CustomImage/index';
import { Navigation, NavigationProps } from '../utils/constants';

const DefaultLayout = () => {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-gradient">
      <div className="pb-8 lg:px-0 lg:py-8">
        <div className="container sticky top-0 flex h-[76px] items-center justify-between rounded-3xl border border-[#F3F3F3] bg-white/65 px-4 backdrop-blur-6 md:px-8 lg:static lg:px-0">
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

          {/* Desktop Navigation */}
          <ul className="hidden items-center justify-center gap-12 lg:flex">
            {Navigation.map((item: NavigationProps) => (
              <li key={item.name}>
                <Link
                  href={item.link}
                  className={`text-[16px] font-medium leading-[20.16px] transition-colors duration-300 ease-in-out ${
                    pathname === item.link ? 'text-[#3A449B]' : 'text-primary hover:text-[#3A449B]'
                  }`}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-4 lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-[24px] text-[#3A449B]"
            >
              ☰
            </button>
          </div>

          {/* Mobile Navigation Drawer */}
          {isMenuOpen && (
            <div className="fixed left-0 top-0 z-[999] h-full w-full bg-gray-800 bg-opacity-90 lg:hidden">
              <div className="flex items-center justify-between bg-white p-4">
                <Link href={'/'}>
                  <CustomImage
                    src={LogoSrc.src}
                    alt="Logo"
                    width={100}
                    height={100}
                    className="h-[60px] w-[84px] bg-transparent"
                  />
                </Link>
                <button onClick={() => setIsMenuOpen(false)} className="text-[24px] text-[#3A449B]">
                  ✕
                </button>
              </div>
              <ul className="z-[999] flex flex-col items-start space-y-4 bg-white px-4 py-6 text-primary">
                {Navigation.map((item: NavigationProps) => (
                  <li key={item.name}>
                    <Link
                      href={item.link}
                      onClick={() => setIsMenuOpen(false)}
                      className={`${pathname === item.link ? 'text-[#3A449B]' : 'text-primary hover:text-[#3A449B]'} text-[16px] font-medium leading-[20.16px]`}
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Action Buttons */}
          <div className="hidden items-center gap-4 lg:flex">
            <CustomImage
              width={50}
              height={50}
              src={SearchIcon}
              alt="search-icon"
              className="h-10 w-10 cursor-pointer"
            />
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
      </div>
    </header>
  );
};

export default DefaultLayout;
