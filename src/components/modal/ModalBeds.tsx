import RoomSrc2 from '@/assets/images/room/r2.png';
import { AnimatePresence, motion } from 'framer-motion';
import React, { useCallback, useState } from 'react';
import { useForm } from 'react-hook-form';
import CustomImage from '../../components/CustomImage';
import Title from '../Title/Title';

export interface RoomProps {
  id?: number;
  name: string;
  image: { src: string };
  type_text: string;
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

const ModalBeds: React.FC<RoomSelectionModalProps> = ({
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

  // Filter rooms directly inside the render method
  const { setValue } = useForm();
  const handleRoomSelection = useCallback((room: RoomProps) => {
    setSelectedRoom(room);
  }, []);

  const handleConfirmSelection = useCallback(() => {
    if (selectedRoom) {
      onSelectRoom(selectedRoom);
      setValue('bed', selectedRoom.id);

      onClose();
    }
  }, [onSelectRoom, selectedRoom, onClose]);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
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
            {sutTitle1} <span className="text-[#EF5F5F]">{sutTitle2}</span> và{' '}
            <span className="text-[#EF5F5F]">{sutTitle3}</span>
          </p>

          {/* Room type selection buttons */}

          {/* Room list */}
          <motion.div layout className="grid-col1 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {rooms.map((room) => (
              <motion.div
                key={room.id}
                initial={{ opacity: 0.5 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.7 }}
                onClick={() => handleRoomSelection(room)}
                className={`group cursor-pointer overflow-hidden rounded-3xl transition-all duration-300 ${
                  selectedRoom?.id === room.id ? 'border-2 border-[#3A449B]' : ''
                }`}
              >
                <CustomImage
                  src={RoomSrc2.src || room.image.src}
                  alt={room.name}
                  width={1000}
                  height={500}
                  className="max-h-[180px] overflow-hidden rounded-3xl"
                />
                <p
                  className={`mt-2 text-center text-sm md:text-base ${
                    selectedRoom?.id === room.id
                      ? 'font-semibold text-[#3A449B]'
                      : 'group-hover:text-[#3A449B]'
                  }`}
                >
                  {room.name}
                </p>
              </motion.div>
            ))}
          </motion.div>

          {/* Confirm button */}
          <div className="mt-10 flex flex-col gap-2">
            <button
              type="button"
              className={`mx-auto w-[220px] rounded-3xl bg-[#3A449B] px-6 py-2 text-sm text-white md:text-base ${
                !selectedRoom ? 'cursor-not-allowed opacity-50' : ''
              }`}
              onClick={handleConfirmSelection}
              disabled={!selectedRoom}
            >
              Chọn
            </button>
          </div>
        </div>
      </div>
    </AnimatePresence>
  );
};

export default ModalBeds;
