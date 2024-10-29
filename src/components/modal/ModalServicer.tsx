import React, { useState } from 'react';
import CustomImage from '../CustomImage';
import Title from '../Title/Title';

export interface Service {
  id: string;
  name: string;
  image: string;
}

interface ServiceSelectionModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectServices: (selectedServices: { [key: string]: number }) => void;
  services: Service[];
  title: string;
  subTitle1: string;
  subTitle2: string;
  subTitle3: string;
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
}) => {
  const [selectedServices, setSelectedServices] = useState<{ [key: string]: number }>({});

  if (!isOpen) return null;

  const handleServiceClick = (service: Service) => {
    setSelectedServices((prev) => ({
      ...prev,
      [service.id]: (prev[service.id] || 0) + 1,
    }));
  };

  const handleServiceDelete = (service: Service) => {
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
      <div className="w-[90%] rounded-3xl bg-white px-12 py-6 shadow-lg">
        <Title>{title}</Title>
        <p className="mb-6 mt-[10px] flex flex-wrap items-center justify-center gap-2 text-center text-base font-semibold text-[#1B1B1B]">
          {subTitle1}
          <span className="text-[#EF5F5F]">{subTitle2}</span>
          và
          <span className="text-[#EF5F5F]">{subTitle3}</span>
        </p>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.id}
              className="group cursor-pointer overflow-hidden rounded-3xl transition-all duration-300"
            >
              <div onClick={() => handleServiceClick(service)}>
                <CustomImage
                  width={180}
                  height={180}
                  src={service.image}
                  alt={service.name}
                  className="h-[180px] w-full rounded-3xl object-cover"
                  classNameImg="rounded-3xl"
                />
                <div className="mt-2 flex items-center justify-center gap-5 text-center text-gray-700 group-hover:text-[#3A449B]">
                  <p>{service.name}</p>
                  {selectedServices[service.id] && (
                    <p className="text-center text-sm font-medium text-[#3A449B]">
                      Đã chọn: {selectedServices[service.id]}
                    </p>
                  )}
                </div>
              </div>
              {selectedServices[service.id] && (
                <button
                  onClick={() => handleServiceDelete(service)}
                  className="mx-auto mt-2 flex items-center justify-center text-center text-sm text-red-500"
                >
                  Giảm số lượng
                </button>
              )}
            </div>
          ))}
        </div>
        <div className="mt-6 text-center">
          <button
            type="button"
            onClick={handleConfirmSelection}
            className="w-[220px] rounded-3xl bg-[#3A449B] px-6 py-2 text-white disabled:opacity-50"
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
