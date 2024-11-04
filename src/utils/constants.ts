import pr1 from '@/assets/svgs/introduce/pr1.jpg';
import New1 from '../assets/images/new/new1.png';
import Service1 from '../assets/images/service/sv1.png';
import Service2 from '../assets/images/service/sv2.png';
import Service3 from '../assets/images/service/sv3.png';
import Service4 from '../assets/images/service/sv4.png';
import Service5 from '../assets/images/service/sv5.png';

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
