'use client';
import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import SectionBanner from './_components/SectionBanner';
import SectionIntroduce from './_components/SectionIntroduce';

const IntroducePage = () => {
  // State to track visibility of sections
  const [visibleSections, setVisibleSections] = useState<boolean[]>(new Array(2).fill(false));

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
        <SectionBanner />
      </motion.div>

      {/* Section Introduce */}
      <motion.div
        ref={(el: HTMLDivElement | null) => {
          sectionRefs.current[1] = el;
        }}
        {...createInViewAnimation(1)}
      >
        <SectionIntroduce />
      </motion.div>
    </main>
  );
};

export default IntroducePage;
