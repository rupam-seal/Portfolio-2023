import styles from './Skills.module.css';

import { Container } from '@/components/Container';
import { Heading } from '@/components/Heading';
import { IconCard } from '@/components/IconCard';
import { Section } from '@/components/Section';
import { staggerContainer, textVariant } from '@/utils/motion';
import { framework, language, tools, ui } from '../../../data/skillData';
import { memo } from 'react';

export const Skills = memo(({ visible, sectionRef }) => {
  return (
    <Section
      className={styles.skills}
      direction={'column'}
      align="center"
      justify="center"
      ref={sectionRef}
    >
      {visible && (
        <>
          <Container
            variants={staggerContainer(0.2, 0.2)}
            className={styles.header}
          >
            <Heading level={1} weight="bold" variants={textVariant(0.1)}>
              SKILLS
            </Heading>
          </Container>
          <Section className={styles.content}>
            <IconCard title={'PROGRAMMING LANGUAGES'} items={language} />
            <IconCard title={'FRAMEWORK/LIBRARIES'} items={framework} />
            <IconCard title={'TOOLS'} items={tools} />
            <IconCard title={'UI/UX'} items={ui} />
          </Section>
        </>
      )}
    </Section>
  );
});
