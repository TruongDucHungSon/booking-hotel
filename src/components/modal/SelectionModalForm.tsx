import RoomSrc2 from '@/assets/images/room/r2.png';
import React, { useEffect, useState } from 'react';
import CustomImage from '../../components/CustomImage';
import Title from '../Title/Title';

export interface RoomProps {
  name: string;
  image: { src: string }; // URL to the room image
}

interface RoomSelectionModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectRoom: (room: RoomProps) => void; // Update to include bed count
  rooms: any[];
  title: string;
  sutTitle1: string;
  sutTitle2: string;
  sutTitle3: string;
}

const SelectionModalForm: React.FC<RoomSelectionModalProps> = ({
  isOpen,
  onClose,
  onSelectRoom,
  rooms,
  title,
  sutTitle1,
  sutTitle2,
  sutTitle3,
}) => {
  const [selectedRoom, setSelectedRoom] = useState<any | null>(null);
  const [filteredRooms, setFilteredRooms] = useState<any[]>([]);
  const [selectedType, setSelectedType] = useState<string>('Phòng thường');
  useEffect(() => {
    // Filter rooms based on the selected type
    const filtered = rooms.filter((room) => room.type_text === selectedType);
    setFilteredRooms(filtered);
  }, [selectedType, rooms]);
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-20">
      <div className="sidebar-scroll relative h-[70%] w-[90%] overflow-y-scroll rounded-3xl bg-white px-12 py-6 shadow-lg">
        <Title>{title}</Title>
        <button
          className="absolute right-6 top-6 text-2xl text-gray-600 hover:text-gray-800"
          onClick={onClose}
        >
          &times;
        </button>
        <p className="mb-6 mt-[10px] flex flex-wrap items-center justify-center gap-2 text-center text-xs font-semibold text-[#1B1B1B] md:text-base">
          {sutTitle1}
          <span className="text-[#EF5F5F]">{sutTitle2}</span>
          và
          <span className="text-[#EF5F5F]">{sutTitle3}</span>
        </p>

        {/* Room type buttons for filtering */}
        <div className="mb-5 flex justify-center gap-4 lg:mb-8">
          {['Phòng thường', 'Phòng VIP', 'Phòng đôi'].map((type) => (
            <button
              key={type}
              onClick={() => setSelectedType(type)}
              className={`rounded-full px-4 py-2 ${selectedType === type ? 'bg-[#3A449B] text-white' : 'bg-gray-200 text-gray-600'}`}
            >
              {type}
            </button>
          ))}
        </div>
        <div className="grid-col1 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredRooms.map((room) => (
            <div
              key={room.id}
              onClick={() => setSelectedRoom(room)} // Set the selected room
              className={`group cursor-pointer overflow-hidden rounded-3xl transition-all duration-300`}
            >
              <CustomImage
                src={RoomSrc2.src || room.image.src}
                alt={room.name}
                width={1000}
                height={500}
                className={`max-h-[180px] overflow-hidden rounded-3xl ${selectedRoom?.name === room.name ? 'border-2 border-[#3A449B]' : ''}`}
                classNameImg="rounded-3xl"
              />
              <p
                className={`mt-2 text-center text-sm md:text-base ${selectedRoom?.name === room.name ? 'font-semibold text-[#3A449B]' : 'group-hover:text-[#3A449B]'}`}
              >
                {room.name}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-4 flex flex-col gap-2">
          <button
            type="button"
            className={`*: mx-auto w-[220px] rounded-3xl bg-[#3A449B] px-6 py-2 text-sm text-white md:text-base ${!selectedRoom ? 'cursor-not-allowed opacity-50' : ''}`}
            onClick={() => {
              if (selectedRoom) {
                onSelectRoom(selectedRoom); // Call the select room function with bed count
                onClose();
              }
            }}
            disabled={!selectedRoom} // Disable if no room is selected
          >
            Chọn
          </button>
        </div>
      </div>
    </div>
  );
};

export default SelectionModalForm;
