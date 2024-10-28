import React from 'react';
import CustomImage from '../../components/CustomImage';
import Title from '../Title/Title';

export interface RoomProps {
  name: string;
  image: { src: string }; // URL to the room image
}

interface RoomSelectionModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectRoom: (room: RoomProps) => void;
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
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-20">
      <div className="w-[90%] rounded-lg bg-white px-16 py-12 shadow-lg">
        <Title>{title}</Title>
        <p className="mb-6 mt-[10px] flex flex-wrap items-center justify-center gap-2 text-center text-base font-semibold text-[#1B1B1B]">
          {sutTitle1}
          <span className="text-[#EF5F5F]">{sutTitle2}</span>
          và
          <span className="text-[#EF5F5F]">{sutTitle3}</span>
        </p>
        <div className="grid-col1 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {rooms.map((room) => (
            <div
              key={room.name}
              onClick={() => {
                onSelectRoom(room);
                onClose();
              }}
              className="group cursor-pointer overflow-hidden rounded-3xl"
            >
              <CustomImage
                src={room.image.src}
                alt={room.name}
                width={1000}
                height={500}
                className="h-[180px] scale-100 overflow-hidden rounded-3xl transition-all duration-300 group-hover:scale-105"
                classNameImg="rounded-3xl"
              />
              <p className="mt-2 text-center group-hover:text-[#3A449B]">{room.name}</p>
            </div>
          ))}
        </div>
        <button
          className="mt-4 w-full rounded-md bg-[#3A449B] px-6 py-2 text-white"
          onClick={onClose}
        >
          Đóng
        </button>
      </div>
    </div>
  );
};

export default SelectionModalForm;
