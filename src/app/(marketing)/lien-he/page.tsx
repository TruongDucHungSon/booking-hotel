import dynamic from 'next/dynamic';

const ContactPage = dynamic(() => import('../../../container/contact-us'), { ssr: false });
const page = () => {
  return <ContactPage />;
};

export default page;
