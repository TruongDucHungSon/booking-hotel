'use client';
import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import SectionBooking from './_components/SectionBooking';
import SectionGallery from './_components/SectionGallery';

const ServicesPage = () => {
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
    initial: { opacity: 0, y: 50 },
    animate: { opacity: visibleSections[index] ? 1 : 0, y: visibleSections[index] ? 0 : 50 },
    exit: { opacity: 0, y: 50 },
    transition: { duration: 0.4, delay: 0.08 * index },
  });

  return (
    <main className="container">
      {/* Section Booking */}
      <motion.div
        ref={(el: HTMLDivElement | null) => {
          sectionRefs.current[0] = el;
        }}
        {...createInViewAnimation(0)}
      >
        <SectionBooking />
      </motion.div>

      {/* Section Gallery */}
      <motion.div
        ref={(el: HTMLDivElement | null) => {
          sectionRefs.current[1] = el;
        }}
        {...createInViewAnimation(1)}
      >
        <SectionGallery />
      </motion.div>
    </main>
  );
};

export default ServicesPage;
