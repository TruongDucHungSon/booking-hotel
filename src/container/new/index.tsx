'use client';
import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import SectionBannerNew from './_components/SectionBannerNew';
import SectionFeaturedNew from './_components/SectionFeaturedNew';
import SectionListNews from './_components/SectionListNews';

const NewsPage = () => {
  // State to track visibility of sections
  const [visibleSections, setVisibleSections] = useState<boolean[]>(new Array(3).fill(false));

  // Create refs for each section
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Intersection observer options
  const options = {
    root: null, // Observe in the viewport
    threshold: 0.1, // Trigger when 10% of the element is visible
  };

  // Handle visibility change of each section
  const handleIntersection = (entries: IntersectionObserverEntry[]) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const index = sectionRefs.current.indexOf(entry.target as HTMLDivElement);
        setVisibleSections((prev) => {
          const updated = [...prev];
          updated[index] = true;
          return updated;
        });
      }
    });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(handleIntersection, options);

    // Observe each section
    sectionRefs.current.forEach((section) => {
      if (section) observer.observe(section);
    });

    // Clean up observer on component unmount
    return () => {
      observer.disconnect();
    };
  }, []);

  // Function to generate animations with delays for each section
  const createInViewAnimation = (index: number) => ({
    initial: { opacity: 0, y: 50 }, // Start from bottom and invisible
    animate: { opacity: visibleSections[index] ? 1 : 0, y: visibleSections[index] ? 0 : 50 }, // Fade in and move up
    exit: { opacity: 0, y: 50 }, // Fade out and move down when exiting
    transition: { duration: 0.5, delay: 0.1 * index }, // Add delay for staggered effect
  });

  return (
    <main>
      {/* Section Banner */}
      <motion.div
        ref={(el: HTMLDivElement | null) => {
          sectionRefs.current[0] = el;
        }}
        {...createInViewAnimation(0)}
      >
        <SectionBannerNew />
      </motion.div>

      <div className="container grid grid-cols-1 gap-6 py-10 lg:grid-cols-[0.7fr,2fr] lg:py-20">
        {/* Section Featured */}
        <motion.div
          ref={(el: HTMLDivElement | null) => {
            sectionRefs.current[1] = el;
          }}
          {...createInViewAnimation(1)}
        >
          <SectionFeaturedNew />
        </motion.div>

        {/* Section List News */}
        <motion.div
          ref={(el: HTMLDivElement | null) => {
            sectionRefs.current[2] = el;
          }}
          {...createInViewAnimation(2)}
        >
          <SectionListNews />
        </motion.div>
      </div>
    </main>
  );
};

export default NewsPage;
