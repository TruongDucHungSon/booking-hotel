'use client';
import check from '@/assets/svgs/arrow/check1.svg';
import CustomImage from '@/components/CustomImage';
import Title from '@/components/Title/Title';
import { useServiceData } from '@/services/services/Services.Service';
import { find, get, head, isEmpty, isEqual, map } from 'lodash';
import { FC, useEffect, useMemo, useState } from 'react';

interface Service {
  id: number;
  title: string;
  duration: string;
  price: string;
  description: string[];
}

interface Category {
  categoryId: number;
  image: string;
  categoryTitle: string;
  services: Service[];
}

export interface SelectedServiceBooking {
  service: Service;
  category: Category;
}

interface ServiceModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelect: ({ category, service }: any) => void;
  categoryId?: string | number;
  serviceId?: string | number;
}

const ModalServiceBooking: FC<ServiceModalProps> = ({
  isOpen,
  onClose,
  onSelect,
  categoryId,
  serviceId,
}) => {
  const { data } = useServiceData();
  const services = useMemo(() => get(data, 'data', []), [data]);

  const category = useMemo(() => find(services, { id: categoryId }), [categoryId, services]);
  const serviceValue = useMemo(() => {
    const services = get(category, 'services', []);

    if (isEmpty(services)) return null;

    return find(services, { id: serviceId });
  }, [category, serviceId]);

  const [selectedCategory, setSelectedCategory] = useState<any>(category);
  const [selectedService, setSelectedService] = useState<any>(serviceValue);

  useEffect(() => {
    if (isEmpty(selectedCategory) && !isEmpty(services)) setSelectedCategory(head(services));
  }, [selectedCategory, services]);

  useEffect(() => {
    if (isEmpty(selectedService) && !isEmpty(selectedCategory))
      setSelectedService(head(get(selectedCategory, 'services', [])));
  }, [selectedCategory, selectedService]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="sidebar-scroll h-[75%] w-[90%] overflow-y-scroll rounded-3xl bg-white p-6 shadow-lg lg:h-[90%] lg:px-16 lg:py-12">
        <div className="relative mb-2 flex items-center justify-center md:mb-4">
          <Title>Chọn dịch vụ</Title>
          <button
            type="button"
            onClick={onClose}
            className="absolute right-0 top-0 text-[32px] text-xl font-bold"
          >
            &times;
          </button>
        </div>
        <p className="mb-3 text-center text-sm text-[#1B1B1B] md:mb-6 md:text-base">
          Hệ thống đặt phòng trực tuyến hiện tại của chúng tôi chỉ có thể đặt tối đa 1 dịch vụ cùng
          một lúc.
        </p>

        {/* Category filter */}
        <div className="sidebar-scroll mb-4 flex snap-x snap-mandatory gap-6 overflow-visible overflow-x-auto lg:grid-cols-5">
          {map(services, (item) => (
            <div
              className="mb-2 flex min-w-[calc(23%-1rem)] flex-shrink-0 cursor-pointer snap-center flex-col items-center gap-2 md:gap-4"
              key={item.id}
              onClick={() => setSelectedCategory(item)}
            >
              <CustomImage
                src={get(item, 'image.url', '')}
                width={200}
                height={200}
                alt="category service"
                className={`rounded-[26px] border-2 transition-all duration-300 ease-in-out ${
                  item.id === selectedCategory?.id
                    ? 'border-[#3A449B] opacity-100'
                    : 'border-transparent opacity-60'
                }`}
                classNameImg="rounded-[24px]"
              />
              <button className="text-center">
                <p
                  className={`text-center font-semibold transition-colors duration-300 ease-in-out ${
                    item.id === selectedCategory?.id ? 'text-[#3A449B]' : 'text-[#18181B]'
                  }`}
                >
                  {item.name}
                </p>
              </button>
            </div>
          ))}
        </div>

        <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {map(get(selectedCategory, 'services', []), (service) => (
            <div
              key={service.id}
              className={`cursor-pointer rounded-3xl border p-5 transition-all duration-300 ease-in-out lg:p-6 ${selectedService?.id === service?.id ? 'border-[#3A449B]' : 'border-gray-200 opacity-100'}`}
              onClick={() => setSelectedService(service)}
            >
              <h3
                className={`text-center text-base font-semibold md:text-lg ${selectedService?.id === service?.id ? 'text-[#3A449B]' : 'text-[#18181B]'}`}
              >
                {service.name}
              </h3>
              <div className="my-4 flex items-center justify-between rounded-xl bg-custom-gradient px-2 py-[10px] text-sm text-white">
                <p className="text-xs font-semibold lg:text-sm">
                  <span className="font-normal">Thời gian: </span>
                  {service.duration}
                  <span className="font-normal"> phút</span>
                </p>
                <p className="text-xs font-semibold lg:text-sm">
                  {service.price} <span className="font-normal">VND/LẦN</span>
                </p>
              </div>
              <div className="mt-2 space-y-1 text-sm text-gray-600">
                <div className="flex items-center gap-3">
                  <CustomImage src={check} alt="check" width={32} height={32} className="h-6 w-6" />
                  <p className="w-[320px] text-xs md:text-sm">{service?.description}</p>
                </div>
                <p className="mt-2 text-sm font-semibold text-[#18181B] md:mt-4 md:text-base">
                  Giá chưa bao gồm VAT & TIP.
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 flex justify-center">
          <button
            onClick={() => {
              if (!isEqual(serviceId, selectedService?.id)) {
                onSelect({ category: selectedCategory, service: selectedService });
              }

              onClose();
            }}
            className="w-[220px] rounded-3xl bg-[#3A449B] px-4 py-2 text-base font-semibold text-white transition-colors duration-300 ease-in-out hover:bg-[#3A449B]/80"
          >
            Đặt lịch
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModalServiceBooking;
