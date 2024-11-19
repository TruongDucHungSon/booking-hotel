'use client';

import icCart from '@/assets/images/banner/ic-cart.svg';
import { RootState } from '@/redux/rootReducers';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { HiMenuAlt3 } from 'react-icons/hi';
import { IoCloseOutline } from 'react-icons/io5';
import { useSelector } from 'react-redux';
import LogoSrc from '../assets/images/logo/logo.png';
import CallSvg from '../assets/svgs/call/call.svg';
import CustomImage from '../components/CustomImage/index';
import { Navigation, NavigationProps } from '../utils/constants';
const DefaultLayout = () => {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const items = useSelector((state: RootState) => state.cart.items);
  console.log(items);

  return (
    <header className="shadow-light-100 sticky left-0 right-0 top-0 z-[1000] bg-gradient lg:static">
      <div className="lg:px-5 lg:py-8 lg:pb-8">
        <div className="container flex h-[76px] items-center justify-between bg-white px-4 shadow-sm md:px-8 lg:rounded-3xl lg:border lg:border-[#F3F3F3] lg:bg-white/65 lg:px-5 lg:backdrop-blur-6">
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
          <div className="absolute right-6 lg:hidden">
            <div className="flex cursor-pointer items-center gap-3">
              <div onClick={() => setIsMenuOpen(false)} className="relative">
                <Link href={'/gio-hang'}>
                  <CustomImage
                    width={50}
                    height={50}
                    src={icCart}
                    alt="search-icon"
                    className="size-8 cursor-pointer"
                  />
                </Link>
                <span className="absolute -right-2 -top-2 flex size-5 items-center justify-center rounded-full bg-[#343434] text-xs font-semibold text-white">
                  {items?.length || 0}
                </span>
              </div>
              {isMenuOpen ? (
                <IoCloseOutline
                  size={28}
                  className="text-primary"
                  onClick={() => setIsMenuOpen(false)}
                />
              ) : (
                <HiMenuAlt3
                  size={28}
                  className="text-primary"
                  onClick={() => setIsMenuOpen(true)}
                />
              )}
            </div>
          </div>

          {/* Mobile Navigation Drawer */}

          <div
            className={`fixed top-[76px] z-[1000] w-full bg-white ${isMenuOpen === true ? 'visible left-0' : 'invisible left-[-1000px]'} transition-all duration-300 ease-in-out`}
          >
            <ul className="flex flex-col items-start space-y-4 px-4 pb-4 pt-6 text-primary">
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
            <div className="items-center gap-4 px-3 pb-6 lg:flex">
              <div className="flex h-10 w-fit cursor-pointer items-center justify-center rounded-[12px] bg-[#3A449B] px-6 py-2 text-[16px] text-sm font-medium leading-[16.8px] text-white hover:opacity-80 md:text-base">
                <button type="button" className="flex w-fit items-center gap-2">
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

          {/* Action Buttons */}
          <div className="hidden items-center gap-4 lg:flex">
            <div onClick={() => setIsMenuOpen(false)} className="relative">
              <Link href={'/gio-hang'}>
                <CustomImage
                  width={50}
                  height={50}
                  src={icCart}
                  alt="search-icon"
                  className="size-8 cursor-pointer"
                />
              </Link>
              <span className="absolute -right-2 -top-2 flex size-5 items-center justify-center rounded-full bg-[#343434] text-xs font-semibold text-white">
                {items?.length || 0}
              </span>
            </div>
            <div className="flex h-10 cursor-pointer items-center justify-center rounded-[12px] bg-[#3A449B] px-6 py-2 text-[16px] font-medium leading-[16.8px] text-white hover:opacity-80">
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
