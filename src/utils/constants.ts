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
