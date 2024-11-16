'use client';
import CustomImage from '@/components/CustomImage';
import Title from '@/components/Title/Title';
import { useArticleDetailData, useArticlesData } from '@/services/article/Article.Service';
import { formatDateString } from '@/utils/helpers';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';

const ArticleDetailPage = () => {
  const params = useParams();
  const slugArticleDetail = params.id;

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const { data: DATA_ARTICLES_DETAIL, refetch } = useArticleDetailData(slugArticleDetail);
  const ARTICLESDETAIL: any = DATA_ARTICLES_DETAIL?.data || [];

  const { data: DATA_ARTICLES } = useArticlesData();
  const ARTICLES: any = DATA_ARTICLES?.data || [];

  const [selectedCategory, setSelectedCategory] = useState<number | null>(1);

  useEffect(() => {
    if (slugArticleDetail) {
      refetch();
    }
  }, [slugArticleDetail, refetch]);

  const currentCategory = ARTICLESDETAIL?.category?.id;

  const filteredArticles = selectedCategory
    ? ARTICLES.filter((item: any) => item.category?.id === selectedCategory)
    : ARTICLES.filter((item: any) => item.category?.id === currentCategory);

  const handleCategoryClick = (categoryId: any) => {
    setSelectedCategory(categoryId);
  };

  const uniqueCategories = ARTICLES.reduce((acc: any[], item: any) => {
    if (item.category && !acc.find((cat) => cat.id === item.category.id)) {
      acc.push(item.category);
    }
    return acc;
  }, []);

  return (
    <main>
      <motion.div
        className="mx-auto w-full px-5 py-10 lg:w-[880px] lg:px-0 lg:py-20"
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
      >
        <motion.div className="flex items-center gap-1 text-sm font-medium" variants={fadeInUp}>
          <Link href="/tin-tuc" className="text-[#EF5F5F]">
            Danh mục tin tức
          </Link>
          <span>/</span>
          <p>Chi tiết tin tức</p>
        </motion.div>

        <motion.h1
          className="mt-4 text-xl font-bold text-gray-800 md:text-2xl lg:text-[32px] lg:leading-10"
          variants={fadeInUp}
        >
          {ARTICLESDETAIL?.summary}
        </motion.h1>

        <motion.div
          className="mb-6 mt-2 flex items-center justify-between text-xs text-[#4F4F4F] md:text-sm"
          variants={fadeInUp}
        >
          <span>{formatDateString(ARTICLESDETAIL.created_at)}</span>
        </motion.div>

        <motion.div
          className="border-b border-b-[#EEEEEE] pb-4 text-gray-700 md:pb-8"
          variants={fadeInUp}
        >
          <p className="mb-6 text-sm font-semibold md:text-base">{ARTICLESDETAIL?.title}</p>

          <CustomImage
            src={
              ARTICLESDETAIL.featured_image
                ? 'https://images.unsplash.com/photo-1519415510236-718bdfcd89c8?w=500&auto=format&fit=crop&q=60'
                : ARTICLESDETAIL.featured_image
            }
            alt="SeABank event"
            width={800}
            height={450}
            className="w-full rounded-2xl"
          />

          <p className="mt-3 text-sm md:mt-6 md:text-base">{ARTICLESDETAIL?.content}</p>

          <div className="mb-5 mt-4 flex flex-wrap items-center gap-3 md:mt-6 lg:mb-10">
            <p className="text-sm font-semibold md:text-base">Từ khóa:</p>
            {uniqueCategories.map((category: any) => (
              <motion.button
                key={category.id}
                className="rounded-full bg-[#EEEEEE] px-4 py-2 text-xs font-medium md:text-sm"
                onClick={() => handleCategoryClick(category.id)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category.name}
              </motion.button>
            ))}
          </div>
        </motion.div>
      </motion.div>

      <motion.div
        className="container mt-6"
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
      >
        <Title>Tin tức liên quan</Title>
        <div className="grid grid-cols-1 gap-4 pb-10 sm:grid-cols-2 lg:grid-cols-3 lg:pb-20">
          {filteredArticles.length > 0 ? (
            filteredArticles.map((item: any) => (
              <motion.div
                key={item.id}
                className="mt-3 rounded-xl bg-[#F3F3F3] p-4 md:mt-5"
                variants={fadeInUp}
                whileHover={{ scale: 1.02 }}
              >
                <Link href={`/tin-tuc/${item.id}`}>
                  <CustomImage
                    src={
                      ARTICLESDETAIL.featured_image
                        ? 'https://images.unsplash.com/photo-1519415510236-718bdfcd89c8?w=500&auto=format&fit=crop&q=60'
                        : ARTICLESDETAIL.featured_image
                    }
                    alt="Related News"
                    width={400}
                    height={250}
                    className="h-[220px] w-full rounded-lg object-cover"
                  />
                </Link>
                <h3 className="mt-3 text-sm font-semibold md:mt-4 md:text-base">{item.title}</h3>
                <p className="mt-1 line-clamp-3 text-xs text-[#828282] md:mt-[10px] md:text-sm">
                  {item.content}
                </p>
                <div className="mt-2 flex items-center justify-between md:mt-3">
                  <p className="text-xs text-[#4F4F4F]">{formatDateString(item.created_at)}</p>
                  <Link
                    href={`/tin-tuc/${item.id}`}
                    className="group flex items-center justify-center gap-2 text-sm font-medium text-[#3A449B] hover:underline md:text-base"
                  >
                    Đọc tiếp
                    <motion.span
                      className="transition-all duration-300 group-hover:translate-x-2"
                      whileHover={{ x: 5 }}
                    >
                      <svg width="17" height="17" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9 7l3 3-3 3" stroke="currentColor" strokeWidth="2" />
                      </svg>
                    </motion.span>
                  </Link>
                </div>
              </motion.div>
            ))
          ) : (
            <p className="text-sm text-gray-500">Không có tin tức liên quan.</p>
          )}
        </div>
      </motion.div>
    </main>
  );
};

export default ArticleDetailPage;
