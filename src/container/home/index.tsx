'use client';
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useLocationData } from '@/services/location/Location.Service';
import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import SectionBanner from './_components/SectionBanner';
import SectionContact from './_components/SectionContact';
import SectionCustomer from './_components/SectionCustomer';
import SectionFormBooking from './_components/SectionFormBooking';
import SectionIntroduce from './_components/SectionIntroduce';
import SectionNew from './_components/SectionNew';
import SectionSale from './_components/SectionSale';
import SectionService from './_components/SectionService';

const HomePage = () => {
  const { data: DATA_LOCATIONS } = useLocationData();
  const LOCATIONS: any = DATA_LOCATIONS || [];

  // Store the visibility state for each section
  const [visibleSections, setVisibleSections] = useState<boolean[]>(new Array(8).fill(false));

  // Create references for each section
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Intersection observer options
  const options = {
    root: null, // observe in the viewport
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

    // Clean up the observer on component unmount
    return () => {
      observer.disconnect();
    };
  }, []);

  // Function to generate animations with delays for each section
  const createInViewAnimation = (index: number) => ({
    initial: { opacity: 0, y: 50 },
    animate: { opacity: visibleSections[index] ? 1 : 0, y: visibleSections[index] ? 0 : 50 },
    exit: { opacity: 0, y: 50 },
    transition: { duration: 0.5, delay: 0.06 * index },
  });

  return (
    <main className="relative">
      {/* Section Banner */}
      <motion.div
        ref={(el: HTMLDivElement | null) => {
          sectionRefs.current[0] = el;
        }}
        {...createInViewAnimation(0)}
      >
        <SectionBanner />
      </motion.div>

      {/* Section Form Booking */}
      <motion.div
        ref={(el: HTMLDivElement | null) => {
          sectionRefs.current[1] = el;
        }}
        {...createInViewAnimation(1)}
      >
        <SectionFormBooking LOCATIONS={LOCATIONS} />
      </motion.div>

      {/* Section Introduce */}
      <motion.div
        ref={(el: HTMLDivElement | null) => {
          sectionRefs.current[2] = el;
        }}
        {...createInViewAnimation(2)}
      >
        <SectionIntroduce />
      </motion.div>

      {/* Section Service */}
      <motion.div
        ref={(el: HTMLDivElement | null) => {
          sectionRefs.current[3] = el;
        }}
        {...createInViewAnimation(3)}
      >
        <SectionService />
      </motion.div>

      {/* Section Sale */}
      <motion.div
        ref={(el: HTMLDivElement | null) => {
          sectionRefs.current[4] = el;
        }}
        {...createInViewAnimation(4)}
      >
        <SectionSale />
      </motion.div>

      {/* Section New */}
      <motion.div
        ref={(el: HTMLDivElement | null) => {
          sectionRefs.current[5] = el;
        }}
        {...createInViewAnimation(5)}
      >
        <SectionNew />
      </motion.div>

      {/* Section Customer */}
      <motion.div
        ref={(el: HTMLDivElement | null) => {
          sectionRefs.current[6] = el;
        }}
        {...createInViewAnimation(6)}
      >
        <SectionCustomer />
      </motion.div>

      {/* Section Contact */}
      <motion.div
        ref={(el: HTMLDivElement | null) => {
          sectionRefs.current[7] = el;
        }}
        {...createInViewAnimation(7)}
      >
        <SectionContact />
      </motion.div>
    </main>
  );
};

export default HomePage;
