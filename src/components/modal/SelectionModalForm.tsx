import React, { useState } from 'react';
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
  rooms: RoomProps[];
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
  const [selectedRoom, setSelectedRoom] = useState<RoomProps | null>(null);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-20">
      <div className="sidebar-scroll h-[70%] w-[90%] overflow-y-scroll rounded-3xl bg-white px-12 py-6 shadow-lg">
        <Title>{title}</Title>
        <p className="mb-6 mt-[10px] flex flex-wrap items-center justify-center gap-2 text-center text-xs font-semibold text-[#1B1B1B] md:text-base">
          {sutTitle1}
          <span className="text-[#EF5F5F]">{sutTitle2}</span>
          và
          <span className="text-[#EF5F5F]">{sutTitle3}</span>
        </p>
        <div className="grid-col1 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {rooms.map((room) => (
            <div
              key={room.name}
              onClick={() => setSelectedRoom(room)} // Set the selected room
              className={`group cursor-pointer overflow-hidden rounded-3xl transition-all duration-300`}
            >
              <CustomImage
                src={room.image.src}
                alt={room.name}
                width={1000}
                height={500}
                className={`max-h-[180px] overflow-hidden rounded-3xl ${selectedRoom?.name === room.name ? 'border-2 border-[#3A449B]' : ''}`}
                classNameImg="rounded-3xl"
              />
              <p
                className={`mt-2 text-center text-sm md:text-base ${selectedRoom?.name === room.name ? 'text-[#3A449B]' : 'group-hover:text-[#3A449B]'}`}
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
