import React from 'react';
type Title = {
  children: React.ReactNode;
  className?: string;
  type?: 'primary' | 'secondary';
};
const Title = ({ children, className, type = 'primary' }: Title) => {
  return (
    <div className={`${type === 'primary' ? `bg-[#ffffff]` : `bg-[#f5f6fa]`}`}>
      <h4
        className={`mx-auto flex w-full justify-center gap-[10px] text-center font-wylie text-[24px] font-normal capitalize leading-[41.86px] text-black lg:w-[500px] lg:text-[28px] ${className} relative`}
      >
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            opacity="0.8"
            d="M9.87367 0.0705607L7.20312 6.75874L0.0757086 5.72741L6.76388 8.39797L5.73256 15.5254L8.40311 8.8372L15.5305 9.86852L8.84235 7.19797L9.87367 0.0705607Z"
            fill="url(#paint0_linear_1152_3538)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_1152_3538"
              x1="22.0797"
              y1="-0.556341"
              x2="-4.33937"
              y2="0.827122"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#3A449B" />
              <stop offset="1" stop-color="#EF5F5F" />
            </linearGradient>
          </defs>
        </svg>

        {children}
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9.19209 0.10583L10.7391 10.7969L0.706813 14.8028L11.3979 13.2558L15.4038 23.288L13.8568 12.5969L23.889 8.59111L13.1979 10.1381L9.19209 0.10583Z"
            fill="url(#paint0_linear_1076_8182)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_1076_8182"
              x1="24.5781"
              y1="-9.8631"
              x2="-8.70376"
              y2="11.7484"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#3A449B" />
              <stop offset="1" stop-color="#EF5F5F" />
            </linearGradient>
          </defs>
        </svg>
      </h4>
    </div>
  );
};

export default Title;
