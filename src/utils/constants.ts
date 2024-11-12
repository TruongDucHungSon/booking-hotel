import { Service } from '@/components/modal/ModalServicer';
import p1 from '../assets/images/banner/p1.jpg';
import p2 from '../assets/images/banner/p2.jpg';
import p3 from '../assets/images/banner/p3.jpg';
import p4 from '../assets/images/banner/p4.jpg';
import p5 from '../assets/images/banner/p5.png';
import p6 from '../assets/images/banner/p6.jpg';
import New1 from '../assets/images/new/new1.png';
import Service1 from '../assets/images/service/sv1.png';
import Service2 from '../assets/images/service/sv2.png';
import Service3 from '../assets/images/service/sv3.png';
import Service4 from '../assets/images/service/sv4.png';
import Service5 from '../assets/images/service/sv5.png';
import pr1 from '../assets/svgs/introduce/pr1.jpg';

import RoomSrc1 from '@/assets/images/room/r1.png';
import RoomSrc2 from '@/assets/images/room/r2.png';
import RoomSrc3 from '@/assets/images/room/r3.png';
import RoomSrc4 from '@/assets/images/room/r4.png';
import RoomSrc5 from '@/assets/images/room/r5.png';
import RoomSrc6 from '@/assets/images/room/r6.png';

import sv1 from '@/assets/images/new/sv1.png';
import sv2 from '@/assets/images/new/sv2.png';
import sv3 from '@/assets/images/new/sv3.png';
import sv4 from '@/assets/images/new/sv4.png';
import sv5 from '@/assets/images/new/sv5.png';
import { RoomProps } from '@/components/modal/SelectionModalForm';

export const Navigation = [
  {
    name: 'Trang chủ',
    link: '/',
  },
  {
    name: 'Giới thiệu',
    link: '/gioi-thieu',
  },
  {
    name: 'Dịch vụ',
    link: '/dich-vu',
  },
  {
    name: 'Sản phẩm',
    link: '/san-pham',
  },
  {
    name: 'Giỏ hàng',
    link: '/gio-hang',
  },
  {
    name: 'Tin tức',
    link: '/tin-tuc',
  },
  {
    name: 'Liên hệ',
    link: '/lien-he',
  },
] as const;

export type NavigationProps = {
  name: string;
  link: string;
};

export const SERVICE = [
  {
    id: 0,
    image: Service1,
    title: 'trị liệu phòng chung',
    path: '#',
  },
  {
    id: 1,
    image: Service2,
    title: 'trị liệu phòng vip',
    path: '#',
  },
  {
    id: 2,
    image: Service3,
    title: 'trị liệu đôi bàn chân',
    path: '#',
  },
  {
    id: 3,
    image: Service4,
    title: 'điện di, thông kinh lạc',
    path: '#',
  },
  {
    id: 4,
    image: Service5,
    title: 'thủy trị liệu',
    path: '#',
  },
  {
    id: 4,
    image: Service1,
    title: 'Massage shiatsu',
    path: '#',
  },
  {
    id: 4,
    image: Service1,
    title: 'Massage shiatsu',
    path: '#',
  },
  {
    id: 4,
    image: Service1,
    title: 'Massage shiatsu',
    path: '#',
  },
  {
    id: 4,
    image: Service1,
    title: 'Massage shiatsu',
    path: '#',
  },
] as const;

export const NEW = [
  {
    id: 0,
    image: New1,
    title: ' Thông báo thanh lý TSĐB lần 04: Xe ô tô nhãn hiệu...',
    path: '#',
    location: 'Hồ Chí Minh',
    content:
      'Ngày 15/6/2024, Ngân hàng TMCP Công Thương Việt Nam (VietinBank) đã trao tặng 1 xe ô tô cứu thương trị giá 1,1 tỷ đồng cho',
    date: '01/01/2022',
  },
  {
    id: 1,
    image: New1,
    title: ' Thông báo thanh lý TSĐB lần 04: Xe ô tô nhãn hiệu...',
    location: 'Hà Nội',
    date: '01/01/2022',
    content:
      'Ngày 15/6/2024, Ngân hàng TMCP Công Thương Việt Nam (VietinBank) đã trao tặng 1 xe ô tô cứu thương trị giá 1,1 tỷ đồng cho',
    path: '#',
  },
  {
    id: 2,
    image: New1,
    title: ' Thông báo thanh lý TSĐB lần 04: Xe ô tô nhãn hiệu...',
    location: 'Hồ Chí Minh',
    date: '01/01/2022',
    content:
      'Ngày 15/6/2024, Ngân hàng TMCP Công Thương Việt Nam (VietinBank) đã trao tặng 1 xe ô tô cứu thương trị giá 1,1 tỷ đồng cho',
    path: '#',
  },
  {
    id: 3,
    image: New1,
    title: ' Thông báo thanh lý TSĐB lần 04: Xe ô tô nhãn hiệu...',
    location: 'Hà Nội',
    date: '01/01/2022',
    content:
      'Ngày 15/6/2024, Ngân hàng TMCP Công Thương Việt Nam (VietinBank) đã trao tặng 1 xe ô tô cứu thương trị giá 1,1 tỷ đồng cho',
    path: '#',
  },
] as const;

export const newsArticles = [
  {
    title: 'Top 3 Sữa Tắm Hương Nước Hoa Thơm Quyến Rũ',
    description:
      'Ngoài việc dưỡng ẩm và làm sạch làn da, thì sữa tắm hương nước hoa mang đến hương thơm quyến rũ dài lâu',
    date: '19/06/2023',
    image:
      'https://images.unsplash.com/photo-1493857671505-72967e2e2760?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGludGVyaW9yJTIwZGVzaWdufGVufDB8fDB8fHww', // Replace with actual paths
  },
  {
    title: 'Top 3 Sữa Tắm Hương Nước Hoa Thơm Quyến Rũ',
    description:
      'Ngoài việc dưỡng ẩm và làm sạch làn da, thì sữa tắm hương nước hoa mang đến hương thơm quyến rũ dài lâu',
    date: '19/06/2023',
    image:
      'https://images.unsplash.com/photo-1493857671505-72967e2e2760?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGludGVyaW9yJTIwZGVzaWdufGVufDB8fDB8fHww',
  },
  {
    title: 'Top 3 Sữa Tắm Hương Nước Hoa Thơm Quyến Rũ',
    description:
      'Ngoài việc dưỡng ẩm và làm sạch làn da, thì sữa tắm hương nước hoa mang đến hương thơm quyến rũ dài lâu',
    date: '19/06/2023',
    image:
      'https://images.unsplash.com/photo-1493857671505-72967e2e2760?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGludGVyaW9yJTIwZGVzaWdufGVufDB8fDB8fHww',
  },
  {
    title: 'Top 3 Sữa Tắm Hương Nước Hoa Thơm Quyến Rũ',
    description:
      'Ngoài việc dưỡng ẩm và làm sạch làn da, thì sữa tắm hương nước hoa mang đến hương thơm quyến rũ dài lâu',
    date: '19/06/2023',
    image:
      'https://images.unsplash.com/photo-1493857671505-72967e2e2760?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGludGVyaW9yJTIwZGVzaWdufGVufDB8fDB8fHww',
  },
  {
    title: 'Top 3 Sữa Tắm Hương Nước Hoa Thơm Quyến Rũ',
    description:
      'Ngoài việc dưỡng ẩm và làm sạch làn da, thì sữa tắm hương nước hoa mang đến hương thơm quyến rũ dài lâu',
    date: '19/06/2023',
    image:
      'https://images.unsplash.com/photo-1493857671505-72967e2e2760?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGludGVyaW9yJTIwZGVzaWdufGVufDB8fDB8fHww',
  },
  {
    title: 'Top 3 Sữa Tắm Hương Nước Hoa Thơm Quyến Rũ',
    description:
      'Ngoài việc dưỡng ẩm và làm sạch làn da, thì sữa tắm hương nước hoa mang đến hương thơm quyến rũ dài lâu',
    date: '19/06/2023',
    image:
      'https://images.unsplash.com/photo-1493857671505-72967e2e2760?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGludGVyaW9yJTIwZGVzaWdufGVufDB8fDB8fHww',
  },
  {
    title: 'Top 3 Sữa Tắm Hương Nước Hoa Thơm Quyến Rũ',
    description:
      'Ngoài việc dưỡng ẩm và làm sạch làn da, thì sữa tắm hương nước hoa mang đến hương thơm quyến rũ dài lâu',
    date: '19/06/2023',
    image:
      'https://images.unsplash.com/photo-1493857671505-72967e2e2760?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGludGVyaW9yJTIwZGVzaWdufGVufDB8fDB8fHww',
  },
  {
    title: 'Top 3 Sữa Tắm Hương Nước Hoa Thơm Quyến Rũ',
    description:
      'Ngoài việc dưỡng ẩm và làm sạch làn da, thì sữa tắm hương nước hoa mang đến hương thơm quyến rũ dài lâu',
    date: '19/06/2023',
    image:
      'https://images.unsplash.com/photo-1493857671505-72967e2e2760?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGludGVyaW9yJTIwZGVzaWdufGVufDB8fDB8fHww',
  },
  {
    title: 'Top 3 Sữa Tắm Hương Nước Hoa Thơm Quyến Rũ',
    description:
      'Ngoài việc dưỡng ẩm và làm sạch làn da, thì sữa tắm hương nước hoa mang đến hương thơm quyến rũ dài lâu',
    date: '19/06/2023',
    image:
      'https://images.unsplash.com/photo-1493857671505-72967e2e2760?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGludGVyaW9yJTIwZGVzaWdufGVufDB8fDB8fHww',
  },
];

export interface Branch {
  name: string;
  coords: [number, number];
  address: string;
}

export const branches: Branch[] = [
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
    coords: [21.0285, 105.8542],
    address: 'Số 1 Đinh Tiên Hoàng, Hoàn Kiếm, Hà Nội',
  },
  {
    name: 'Hải Phòng',
    coords: [20.8449, 106.6881],
    address: '25 Đường Lê Chân, Hải Phòng',
  },
  {
    name: 'Bình Dương',
    coords: [11.3257, 106.6631],
    address: '32 Đại lộ Bình Dương, TP. Thủ Dầu Một, Bình Dương',
  },
  {
    name: 'Thành Phố Hồ Chí Minh',
    coords: [10.7769, 106.7009],
    address: 'Đường Nguyễn Huệ, Quận 1, TP. Hồ Chí Minh',
  },
];

export const featuredArticles = [
  {
    title: 'HiFu Plus – Công Nghệ Nâng Cơ Trẻ Hóa Da Số 1 Hiện Nay',
    date: 'Mừng ngày 8-3 sắp gõ cửa! Bạn đã chọn được món quà ưng ý để dành tặng những...',
  },
  {
    title: 'Những Lý Do Khiến Nhật Bản Trở Thành Quốc Gia Đáng Sống Nhất Thế Giới',
    date: 'Mừng ngày 8-3 sắp gõ cửa! Bạn đã chọn được món quà ưng ý để dành tặng những...',
  },
  {
    title: 'Moichi Skin – Phương Pháp Làm Đẹp Da Đến Từ Nhật Bản',
    date: 'Mừng ngày 8-3 sắp gõ cửa! Bạn đã chọn được món quà ưng ý để dành tặng những...',
  },
];

export const products = [
  {
    id: 1,
    name: 'Sữa tắm Victoria’s Secret hương thơm quyến rũ',
    price: 560000,
    originalPrice: 670000,
    image: pr1,
  },
  {
    id: 2,
    name: 'Sữa tắm Victoria’s Secret hương thơm quyến rũ',
    price: 560000,
    originalPrice: 670000,
    image: pr1,
  },
  {
    id: 3,
    name: 'Sữa tắm Victoria’s Secret hương thơm quyến rũ',
    price: 560000,
    originalPrice: 670000,
    image: pr1,
  },
  {
    id: 4,
    name: 'Sữa tắm Victoria’s Secret hương thơm quyến rũ',
    price: 560000,
    originalPrice: 670000,
    image: pr1,
  },
  {
    id: 5,
    name: 'Sữa tắm Victoria’s Secret hương thơm quyến rũ',
    price: 560000,
    originalPrice: 670000,
    image: pr1,
  },
  {
    id: 6,
    name: 'Sữa tắm Victoria’s Secret hương thơm quyến rũ',
    price: 560000,
    originalPrice: 670000,
    image: pr1,
  },
  {
    id: 7,
    name: 'Sữa tắm Victoria’s Secret hương thơm quyến rũ',
    price: 560000,
    originalPrice: 670000,
    image: pr1,
  },
  {
    id: 8,
    name: 'Sữa tắm Victoria’s Secret hương thơm quyến rũ',
    price: 560000,
    originalPrice: 670000,
    image: pr1,
  },
  {
    id: 9,
    name: 'Sữa tắm Victoria’s Secret hương thơm quyến rũ',
    price: 560000,
    originalPrice: 670000,
    image: pr1,
  },
  {
    id: 10,
    name: 'Sữa tắm Victoria’s Secret hương thơm quyến rũ',
    price: 560000,
    originalPrice: 670000,
    image: pr1,
  },
  {
    id: 11,
    name: 'Sữa tắm Victoria’s Secret hương thơm quyến rũ',
    price: 560000,
    originalPrice: 670000,
    image: pr1,
  },
  {
    id: 12,
    name: 'Sữa tắm Victoria’s Secret hương thơm quyến rũ',
    price: 560000,
    originalPrice: 670000,
    image: pr1,
  },
  {
    id: 13,
    name: 'Sữa tắm Victoria’s Secret hương thơm quyến rũ',
    price: 560000,
    originalPrice: 670000,
    image: pr1,
  },
  {
    id: 14,
    name: 'Sữa tắm Victoria’s Secret hương thơm quyến rũ',
    price: 560000,
    originalPrice: 670000,
    image: pr1,
  },
  {
    id: 15,
    name: 'Sữa tắm Victoria’s Secret hương thơm quyến rũ',
    price: 560000,
    originalPrice: 670000,
    image: pr1,
  },
  {
    id: 16,
    name: 'Sữa tắm Victoria’s Secret hương thơm quyến rũ',
    price: 560000,
    originalPrice: 670000,
    image: pr1,
  },
] as const;

export const ServicesBooking = [
  {
    categoryId: 0,
    categoryTitle: 'Gói trị liệu phòng chung',
    image:
      'https://images.unsplash.com/photo-1493857671505-72967e2e2760?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGludGVyaW9yJTIwZGVzaWdufGVufDB8fDB8fHww',
    services: [
      {
        id: 0,
        title: 'Gói trị liệu phòng chung 60p',
        duration: '60',
        price: '900.000 ',
        description: [
          'Tắm sạch bằng bộ sản phẩm tắm gội thảo dược theo mùa',
          'Xông hơi ướt với lá xông theo mùa, ngâm chân với thảo dược',
          'Mát xa với chào dưỡng sinh, trà ngải cứu, nước uống thảo dược và hoa quả',
        ],
      },
      {
        id: 1,
        title: 'Gói trị liệu phòng chung 90p',
        duration: '90',
        price: '1.200.000 ',
        description: [
          'Tắm sạch bằng bộ sản phẩm tắm gội thảo dược theo mùa',
          'Xông hơi ướt với lá xông theo mùa, ngâm chân với thảo dược',
          'Mát xa với chào dưỡng sinh, trà ngải cứu, nước uống thảo dược và hoa quả',
          'Chăm sóc toàn thân với kem Ngải Diệp/ kem Gừng và phương pháp chườm ngải cứu nóng',
        ],
      },
      {
        id: 2,
        title: 'Gói trị liệu phòng chung 120p',
        duration: ' 20',
        price: '1.600.000 ',
        description: [
          'Tắm sạch bằng bộ sản phẩm tắm gội thảo dược theo mùa',
          'Xông hơi ướt với lá xông theo mùa, ngâm chân với thảo dược',
          'Mát xa với chào dưỡng sinh, trà ngải cứu, nước uống thảo dược và hoa quả',
          'Chăm sóc toàn thân với kem Ngải Diệp/ kem Gừng và phương pháp chườm ngải cứu nóng',
          'Ăn nhẹ với cháo dưỡng sinh, trứng ngải cứu, nước uống thảo dược và hoa quả',
        ],
      },
    ],
  },
  {
    categoryId: 1,
    categoryTitle: 'Gói trị liệu phòng VIP',
    image:
      'https://images.unsplash.com/photo-1493857671505-72967e2e2760?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGludGVyaW9yJTIwZGVzaWdufGVufDB8fDB8fHww',
    services: [
      {
        id: 0,
        title: 'Gói dịch vụ toàn thân 60p',
        duration: '60',
        price: '900.000',
        description: [
          'Tắm sạch bằng bộ sản phẩm tắm gội thảo dược theo mùa',
          'Xông hơi ướt với lá xông theo mùa, ngâm chân với thảo dược',
          'Mát xa với chào dưỡng sinh, trà ngải cứu, nước uống thảo dược và hoa quả',
        ],
      },
      {
        id: 1,
        title: 'Gói dịch vụ toàn thân 90p',
        duration: '90',
        price: '1.200.000 ',
        description: [
          'Tắm sạch bằng bộ sản phẩm tắm gội thảo dược theo mùa',
          'Xông hơi ướt với lá xông theo mùa, ngâm chân với thảo dược',
          'Mát xa với chào dưỡng sinh, trà ngải cứu, nước uống thảo dược và hoa quả',
          'Chăm sóc toàn thân với kem Ngải Diệp/ kem Gừng và phương pháp chườm ngải cứu nóng',
        ],
      },
      {
        id: 2,
        title: 'Gói dịch vụ toàn thân 120p',
        duration: ' 20',
        price: '1.600.000 ',
        description: [
          'Tắm sạch bằng bộ sản phẩm tắm gội thảo dược theo mùa',
          'Xông hơi ướt với lá xông theo mùa, ngâm chân với thảo dược',
          'Mát xa với chào dưỡng sinh, trà ngải cứu, nước uống thảo dược và hoa quả',
          'Chăm sóc toàn thân với kem Ngải Diệp/ kem Gừng và phương pháp chườm ngải cứu nóng',
          'Ăn nhẹ với cháo dưỡng sinh, trứng ngải cứu, nước uống thảo dược và hoa quả',
        ],
      },
    ],
  },
  {
    categoryId: 2,
    categoryTitle: 'Gói trị liệu truyền thống',
    image:
      'https://images.unsplash.com/photo-1493857671505-72967e2e2760?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGludGVyaW9yJTIwZGVzaWdufGVufDB8fDB8fHww',
    services: [
      {
        id: 0,
        title: 'Gói trị liệu truyền thống 60p',
        duration: '60',
        price: '900.000 ',
        description: [
          'Tắm sạch bằng bộ sản phẩm tắm gội thảo dược theo mùa',
          'Xông hơi ướt với lá xông theo mùa, ngâm chân với thảo dược',
          'Mát xa với chào dưỡng sinh, trà ngải cứu, nước uống thảo dược và hoa quả',
        ],
      },
      {
        id: 1,
        title: 'Gói trị liệu truyền thống 90p',
        duration: '90',
        price: '1.200.000 ',
        description: [
          'Tắm sạch bằng bộ sản phẩm tắm gội thảo dược theo mùa',
          'Xông hơi ướt với lá xông theo mùa, ngâm chân với thảo dược',
          'Mát xa với chào dưỡng sinh, trà ngải cứu, nước uống thảo dược và hoa quả',
          'Chăm sóc toàn thân với kem Ngải Diệp/ kem Gừng và phương pháp chườm ngải cứu nóng',
        ],
      },
      {
        id: 2,
        title: 'Gói trị liệu truyền thống 120p',
        duration: ' 20',
        price: '1.600.000 ',
        description: [
          'Tắm sạch bằng bộ sản phẩm tắm gội thảo dược theo mùa',
          'Xông hơi ướt với lá xông theo mùa, ngâm chân với thảo dược',
          'Mát xa với chào dưỡng sinh, trà ngải cứu, nước uống thảo dược và hoa quả',
          'Chăm sóc toàn thân với kem Ngải Diệp/ kem Gừng và phương pháp chườm ngải cứu nóng',
          'Ăn nhẹ với cháo dưỡng sinh, trứng ngải cứu, nước uống thảo dược và hoa quả',
        ],
      },
    ],
  },
  {
    categoryId: 3,
    categoryTitle: 'Gói trị liệu nâng cao',
    image:
      'https://images.unsplash.com/photo-1493857671505-72967e2e2760?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGludGVyaW9yJTIwZGVzaWdufGVufDB8fDB8fHww',
    services: [
      {
        id: 0,
        title: 'Gói trị liệu nâng cao 60p',
        duration: '60',
        price: '900.000 ',
        description: [
          'Tắm sạch bằng bộ sản phẩm tắm gội thảo dược theo mùa',
          'Xông hơi ướt với lá xông theo mùa, ngâm chân với thảo dược',
          'Mát xa với chào dưỡng sinh, trà ngải cứu, nước uống thảo dược và hoa quả',
        ],
      },
      {
        id: 1,
        title: 'Gói trị liệu nâng cao 90p',
        duration: '90',
        price: '1.200.000 ',
        description: [
          'Tắm sạch bằng bộ sản phẩm tắm gội thảo dược theo mùa',
          'Xông hơi ướt với lá xông theo mùa, ngâm chân với thảo dược',
          'Mát xa với chào dưỡng sinh, trà ngải cứu, nước uống thảo dược và hoa quả',
          'Chăm sóc toàn thân với kem Ngải Diệp/ kem Gừng và phương pháp chườm ngải cứu nóng',
        ],
      },
      {
        id: 2,
        title: 'Gói trị liệu nâng cao 120p',
        duration: ' 20',
        price: '1.600.000 ',
        description: [
          'Tắm sạch bằng bộ sản phẩm tắm gội thảo dược theo mùa',
          'Xông hơi ướt với lá xông theo mùa, ngâm chân với thảo dược',
          'Mát xa với chào dưỡng sinh, trà ngải cứu, nước uống thảo dược và hoa quả',
          'Chăm sóc toàn thân với kem Ngải Diệp/ kem Gừng và phương pháp chườm ngải cứu nóng',
          'Ăn nhẹ với cháo dưỡng sinh, trứng ngải cứu, nước uống thảo dược và hoa quả',
        ],
      },
    ],
  },
  {
    categoryId: 4,
    categoryTitle: 'Gói trị liệu chuyên sâu',
    image:
      'https://images.unsplash.com/photo-1493857671505-72967e2e2760?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGludGVyaW9yJTIwZGVzaWdufGVufDB8fDB8fHww',
    services: [
      {
        id: 0,
        title: 'Gói trị liệu chuyên sâu 60p',
        duration: '60',
        price: '900.000 ',
        description: [
          'Tắm sạch bằng bộ sản phẩm tắm gội thảo dược theo mùa',
          'Xông hơi ướt với lá xông theo mùa, ngâm chân với thảo dược',
          'Mát xa với chào dưỡng sinh, trà ngải cứu, nước uống thảo dược và hoa quả',
        ],
      },
      {
        id: 1,
        title: 'Gói trị liệu chuyên sâu 90p',
        duration: '90',
        price: '1.200.000 ',
        description: [
          'Tắm sạch bằng bộ sản phẩm tắm gội thảo dược theo mùa',
          'Xông hơi ướt với lá xông theo mùa, ngâm chân với thảo dược',
          'Mát xa với chào dưỡng sinh, trà ngải cứu, nước uống thảo dược và hoa quả',
          'Chăm sóc toàn thân với kem Ngải Diệp/ kem Gừng và phương pháp chườm ngải cứu nóng',
        ],
      },
      {
        id: 2,
        title: 'Gói trị liệu chuyên sâu 120p',
        duration: ' 20',
        price: '1.600.000 ',
        description: [
          'Tắm sạch bằng bộ sản phẩm tắm gội thảo dược theo mùa',
          'Xông hơi ướt với lá xông theo mùa, ngâm chân với thảo dược',
          'Mát xa với chào dưỡng sinh, trà ngải cứu, nước uống thảo dược và hoa quả',
          'Chăm sóc toàn thân với kem Ngải Diệp/ kem Gừng và phương pháp chườm ngải cứu nóng',
          'Ăn nhẹ với cháo dưỡng sinh, trứng ngải cứu, nước uống thảo dược và hoa quả',
        ],
      },
    ],
  },
];

export const servicesData: Service[] = [
  {
    id: '1',
    name: 'Service A',
    image: p1,
  },
  {
    id: '2',
    name: 'Service B',
    image: p2,
  },
  {
    id: '3',
    name: 'Service C',
    image: p3,
  },
  {
    id: '4',
    name: 'Service D',
    image: p4,
  },
  {
    id: '5',
    name: 'Service E',
    image: p5,
  },
  {
    id: '6',
    name: 'Service S',
    image: p6,
  },
  // Add more services as needed
];

export const vouchers = [
  { discount: '5', minimum: '500K', validDate: '15/10/2024' },
  { discount: '10', minimum: '1.000K', validDate: '15/10/2024' },
  { discount: '15', minimum: '1.500K', validDate: '15/10/2024' },
];

export const productsBooking = [
  {
    id: '0',
    name: 'Sản phẩm 1',
    price: 100.0,
    originalPrice: 200.0,
    imageUrl:
      'https://images.unsplash.com/photo-1526947425960-945c6e72858f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8c3BhJTIwcHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D',
  },
  {
    id: '1',
    name: 'Sản phẩm 2',
    price: 100.0,
    originalPrice: 200.0,
    imageUrl:
      'https://images.unsplash.com/photo-1526947425960-945c6e72858f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8c3BhJTIwcHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D',
  },
  {
    id: '2',
    name: 'Sản phẩm 3',
    price: 100.0,
    originalPrice: 200.0,
    imageUrl:
      'https://images.unsplash.com/photo-1526947425960-945c6e72858f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8c3BhJTIwcHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D',
  },
  {
    id: '3',
    name: 'Sản phẩm 4',
    price: 100.0,
    originalPrice: 200.0,
    imageUrl:
      'https://images.unsplash.com/photo-1526947425960-945c6e72858f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8c3BhJTIwcHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D',
  },
  {
    id: '4',
    name: 'Sản phẩm 5',
    price: 100.0,
    originalPrice: 200.0,
    imageUrl:
      'https://images.unsplash.com/photo-1526947425960-945c6e72858f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8c3BhJTIwcHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D',
  },
  {
    id: '6',
    name: 'Sản phẩm 6',
    price: 100.0,
    originalPrice: 200.0,
    imageUrl:
      'https://images.unsplash.com/photo-1526947425960-945c6e72858f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8c3BhJTIwcHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D',
  },
];

export const services = [
  {
    id: 1,
    name: 'Gói trị liệu phòng chung',
    image: sv1,
  },
  {
    id: 2,
    name: 'Gói trị liệu phòng VIP',
    image: sv2,
  },
  {
    id: 3,
    name: 'Gói trị liệu truyền thống',
    image: sv3,
  },
  {
    id: 4,
    name: 'Gói trị liệu nâng cao',
    image: sv4,
  },
  {
    id: 5,
    name: 'Gói trị liệu chuyên sâu',
    image: sv5,
  },
] as const;

export const typeServices = [
  {
    id: 1,
    type: 'Massage tại cửa hàng',
  },
  {
    id: 2,
    type: 'Massage tại nhà',
  },
] as const;

export const roomsData: RoomProps[] = [
  { name: 'Phòng Luxury VIP 1 ', image: RoomSrc1 },
  { name: 'Phòng Luxury VIP 2', image: RoomSrc2 },
  { name: 'Phòng Luxury VIP 3', image: RoomSrc3 },
  { name: 'Phòng Luxury VIP 4', image: RoomSrc4 },
  { name: 'Phòng Luxury VIP 5', image: RoomSrc5 },
  { name: 'Phòng Luxury VIP 6', image: RoomSrc6 },
];
export const bedsData: RoomProps[] = [
  { name: 'Giường Luxury Thượng Hạng 1 ', image: RoomSrc1 },
  { name: 'Giường Luxury Thượng Hạng 2', image: RoomSrc2 },
  { name: 'Giường Luxury Thượng Hạng 3', image: RoomSrc3 },
  { name: 'Giường Luxury Thượng Hạng 4', image: RoomSrc4 },
  { name: 'Giường Luxury Thượng Hạng 5', image: RoomSrc5 },
  { name: 'Giường Luxury Thượng Hạng 6', image: RoomSrc6 },
];

export const serviceLocations = [
  {
    label: 'Massage tại cửa hàng',
    value: 1,
  },
  {
    label: 'Massage tại nhà',
    value: 2,
  },
];

export const availableTimes = [
  '08:30',
  '09:00',
  '09:30',
  '10:00',
  '10:30',
  '11:00',
  '11:30',
  '12:00',
  '12:30',
  '13:00',
  '13:30',
  '14:00',
  '14:30',
  '15:00',
  '15:30',
  '16:00',
  '16:30',
  '17:00',
  '17:30',
  '18:00',
  '18:30',
  '19:00',
  '19:30',
  '20:00',
  '20:30',
  '21:00',
  '21:30',
  '22:00',
];

export const NUMBER_PEOPLE = [1, 2, 3, 4, 5];
