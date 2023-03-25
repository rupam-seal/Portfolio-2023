import React, { useEffect, useRef, useState } from 'react';

import { classes } from '../../utils/styles';
import styles from './Home.module.css';

import { Section } from '../../components/Section';
import { Hero } from './Hero';
import { ProjectsSummery } from './ProjectsSummery';
import { About } from './About';
import { motion } from 'framer-motion';
import { Footer } from '@/components/Footer';

export const Home = () => {
  const [visibleSections, setVisibleSections] = useState([]);

  const hero = useRef();
  const projectsSummery = useRef();
  const about = useRef();

  useEffect(() => {
    const sections = [hero, projectsSummery, about];

    const sectionObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const section = entry.target;
            observer.unobserve(section);
            if (visibleSections.includes(section)) return;
            setVisibleSections((prevSections) => [...prevSections, section]);
          }
        });
      },
      { rootMargin: '0px 0px -10% 0px', thershold: 0.1 }
    );

    sections.forEach((section) => {
      sectionObserver.observe(section.current);
    });

    return () => {
      sectionObserver.disconnect();
    };
  }, [visibleSections]);

  return (
    <div className={styles.section}>
      <Hero
        sectionRef={hero}
        visible={visibleSections.includes(hero.current)}
      />
      <ProjectsSummery
        sectionRef={projectsSummery}
        visible={visibleSections.includes(projectsSummery.current)}
      />
      <About
        sectionRef={about}
        visible={visibleSections.includes(about.current)}
      />
      <Footer />
    </div>
  );
};
