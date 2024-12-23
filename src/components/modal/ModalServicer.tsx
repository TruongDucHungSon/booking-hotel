'use client';

import sv1 from '@/assets/images/new/sv1.png';
import React, { useState } from 'react';
import CustomImage from '../CustomImage';
import Title from '../Title/Title';

interface ServiceSelectionModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectServices: (selectedServices: { [key: string]: number }) => void;
  services: any[];
  title: string;
  subTitle1: string;
  subTitle2: string;
  subTitle3: string;
  location: string;
}

const ServiceSelectionModal: React.FC<ServiceSelectionModalProps> = ({
  isOpen,
  onClose,
  onSelectServices,
  services,
  title,
  subTitle1,
  subTitle2,
  subTitle3,
  location,
}) => {
  const [selectedServices, setSelectedServices] = useState<{ [key: string]: number }>({});

  if (!isOpen) return null;

  // Filter services based on selected location (in-store or at-home)
  const filteredServices = Array.isArray(services)
    ? services.filter((service) => service.delivery_type === location)
    : [];

  const handleServiceClick = (service: any) => {
    setSelectedServices((prev) => ({
      ...prev,
      [service.id]: (prev[service.id] || 0) + 1,
    }));
  };

  const handleServiceDelete = (service: any) => {
    setSelectedServices((prev) => {
      const newServices = { ...prev };
      if (newServices[service.id] > 1) {
        newServices[service.id] -= 1;
      } else {
        delete newServices[service.id];
      }
      return newServices;
    });
  };

  const handleConfirmSelection = () => {
    onSelectServices(selectedServices);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-20">
      <div className="sidebar-scroll relative h-[70%] w-[95%] overflow-y-scroll rounded-xl bg-white px-12 py-6 text-xl shadow-lg md:w-[90%] md:rounded-3xl">
        <Title>{title}</Title>
        <button
          className="absolute right-6 top-6 text-2xl text-gray-600 hover:text-gray-800"
          onClick={onClose}
        >
          &times;
        </button>
        <p className="mb-6 mt-[10px] flex flex-wrap items-center justify-center gap-2 text-center text-xs font-semibold text-[#1B1B1B] md:text-base">
          {subTitle1}
          <span className="text-[#EF5F5F]">{subTitle2}</span>
          và
          <span className="text-[#EF5F5F]">{subTitle3}</span>
        </p>

        {/* Show a message if there are no services */}
        {filteredServices.length === 0 ? (
          <p className="h-[200px] text-center text-lg font-semibold text-primary">
            Không có dịch vụ nào.
          </p>
        ) : (
          <div className="grid grid-cols-2 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filteredServices.map((service) => (
              <div
                key={service.id}
                className="group cursor-pointer rounded-3xl transition-all duration-300"
              >
                <div onClick={() => handleServiceClick(service)}>
                  <CustomImage
                    width={180}
                    height={180}
                    src={sv1.src || ''}
                    alt={service.name}
                    className="h-[120px] w-[120px] rounded-3xl object-cover sm:w-full md:h-[160px]"
                    classNameImg="rounded-3xl"
                  />
                  <div className="mt-2 flex flex-col items-center justify-center gap-2 text-center text-sm text-gray-700 group-hover:text-[#3A449B] md:flex-row md:gap-5 md:text-base">
                    <p>{service.name}</p>
                    {selectedServices[service.id] && (
                      <span className="text-center text-xs font-medium text-[#3A449B] md:text-sm">
                        Đã chọn: {selectedServices[service.id]}
                      </span>
                    )}
                  </div>
                </div>
                {selectedServices[service.id] && (
                  <button
                    onClick={() => handleServiceDelete(service)}
                    className="mx-auto mt-2 flex items-center justify-center text-center text-xs text-red-500 md:text-sm"
                  >
                    Giảm số lượng
                  </button>
                )}
              </div>
            ))}
          </div>
        )}

        <div className="mt-3 text-center md:mt-6">
          <button
            type="button"
            onClick={handleConfirmSelection}
            className="w-[220px] rounded-3xl bg-[#3A449B] px-6 py-2 text-sm text-white disabled:opacity-50 md:text-base"
            disabled={Object.keys(selectedServices).length === 0}
          >
            Chọn dịch vụ
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServiceSelectionModal;
