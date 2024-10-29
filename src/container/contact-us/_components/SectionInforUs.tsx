'use client';
import Title from '@/components/Title/Title';
import 'leaflet-defaulticon-compatibility';
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css';
import { useState } from 'react';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
// Define the type for a branch
interface Branch {
  name: string;
  coords: [number, number];
  address: string;
}

const branches: Branch[] = [
  {
    name: 'Cần Thơ',
    coords: [10.0452, 105.7469],
    address: 'Tầng 2, số Nguyễn Trãi, P. Cái Khế, Q. Ninh Kiều, Cần Thơ',
  },
  {
    name: 'Vĩnh Long',
    coords: [10.2537, 105.9722],
    address: 'Bờ kè Trần Hoàng, Phường 8, Vĩnh Long',
  },
  {
    name: 'Tiền Giang',
    coords: [10.3588, 106.3679],
    address: '43 Nguyễn Huỳnh Đức, P.3, TP. Mỹ Tho, T. Tiền Giang',
  },
  {
    name: 'Hà Nội',
    coords: [10.2415, 106.3756],
    address: '43 Nguyễn Huỳnh Đức, P.3, TP. Mỹ Tho, T. Tiền Giang',
  },
  {
    name: 'Hải Phòng',
    coords: [10.2415, 106.3756],
    address: '43 Nguyễn Huỳnh Đức, P.3, TP. Mỹ Tho, T. Tiền Giang',
  },
  {
    name: 'Bình Dương',
    coords: [10.2415, 106.3756],
    address: '43 Nguyễn Huỳnh Đức, P.3, TP. Mỹ Tho, T. Tiền Giang',
  },
  {
    name: 'Thành Phố Hồ Chí Minh',
    coords: [10.2415, 106.3756],
    address: '43 Nguyễn Huỳnh Đức, P.3, TP. Mỹ Tho, T. Tiền Giang',
  },
];

const SectionInforUs: React.FC = () => {
  // Define state for active branch
  const [activeBranch, setActiveBranch] = useState<Branch | null>(null);

  // Handle branch click event
  const handleBranchClick = (branch: Branch) => {
    setActiveBranch(branch);
  };

  // Define a custom icon for map markers
  return (
    <div className="container py-20">
      <Title>Liên hệ với chúng tôi</Title>
      <div className="mt-8 space-y-6 rounded-lg bg-white">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-[1.2fr,1fr]">
          {/* Branch List */}
          <div className="rounded-xl border border-[#E8E8E8] p-6">
            <h3 className="mb-4 text-lg font-semibold text-[#18181B]">Chi Nhánh Của Chúng Tôi</h3>
            <ul className="sidebar-scroll h-[400px] space-y-4 overflow-y-scroll">
              {branches.map((branch) => (
                <li
                  key={branch.name}
                  onClick={() => handleBranchClick(branch)}
                  className={`mr-2 cursor-pointer rounded-lg border p-4 ${
                    activeBranch?.name === branch.name
                      ? 'bg-[#3A449B] text-white'
                      : 'border-gray-200'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-semibold">{branch.name}</p>
                      <p className="text-sm">{branch.address}</p>
                      <p className="text-sm">0981 123 106</p>
                    </div>
                    <div className="text-blue-600">
                      <i className="fas fa-map-marker-alt"></i>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Customer Info Form */}
          <div>
            <h3 className="mb-4 text-lg font-semibold text-[#18181B]">Thông Tin Khách Hàng</h3>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-[#18181b]">Họ và tên</label>
                <div className="flex items-center gap-2">
                  <input
                    type="text"
                    placeholder="Trần Văn Mạnh"
                    className="mt-1 w-full rounded-lg p-2 outline-none"
                  />
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-1">
                  <label className="block text-sm font-medium text-[#18181b]">Số điện thoại</label>
                  <input
                    type="text"
                    placeholder="0123 456 789"
                    className="mt-1 w-full rounded-lg border border-gray-300 p-2"
                  />
                </div>
                <div className="flex-1">
                  <label className="block text-sm font-medium text-[#18181b]">Giới tính</label>
                  <div className="mt-1 flex gap-2">
                    <label className="flex items-center">
                      <input type="radio" name="gender" className="mr-1" /> Nam
                    </label>
                    <label className="flex items-center">
                      <input type="radio" name="gender" className="mr-1" /> Nữ
                    </label>
                    <label className="flex items-center">
                      <input type="radio" name="gender" className="mr-1" /> Khác
                    </label>
                  </div>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-[#18181b]">Email</label>
                <input
                  type="email"
                  placeholder="abc@gmail.com"
                  className="mt-1 w-full rounded-lg border border-gray-300 p-2"
                />
              </div>
              <div>
                <label htmlFor="service" className="block text-sm font-medium text-[#18181b]">
                  Dịch vụ
                </label>
                <select id="service" className="mt-1 w-full rounded-lg border border-gray-300 p-2">
                  <option>Massage tại cửa hàng</option>
                  <option>Massage tại nhà</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-[#18181b]">Ghi chú</label>
                <textarea
                  placeholder="VD: liên hệ cho tôi ngay"
                  className="mt-1 w-full rounded-lg border border-gray-300 p-2"
                  rows={3}
                ></textarea>
              </div>
            </form>
          </div>
        </div>

        {/* Interactive Map */}
        <div className="mt-6">
          <MapContainer
            center={[10.3588, 106.3679]}
            zoom={10}
            className="h-[564px] w-full rounded-lg"
          >
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            {branches.map((branch) => (
              <Marker
                key={branch.name}
                position={branch.coords}
                eventHandlers={{
                  click: () => handleBranchClick(branch),
                }}
              >
                <Popup>{branch.address}</Popup>
              </Marker>
            ))}
          </MapContainer>
        </div>
      </div>
    </div>
  );
};

export default SectionInforUs;
