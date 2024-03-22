import Link from "next/link";

import styles from "./About.module.css";

import { Section } from "@/components/Section";
import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";
import { imageVariant, staggerContainer, textVariant } from "@/utils/motion";
import { Text } from "@/components/Text";
import { Button } from "@/components/Button";
import { A } from "@/components/A";
import { Img } from "@/components/Img";
import { Icon } from "@/components/Icon";
import { memo, useState } from "react";
import useAudio from "@/hooks/useAudio";

import profileImage from "../../assets/images/profile/profile.png";
import backgroundImage from "../../assets/images/profile/background.jpg";
import audio from "../../assets/sounds/about.mp3";

export const About = memo(({ visible, sectionRef }) => {
  const { isPlaying, play, pause } = useAudio(audio);

  const handleMouseEnter = () => {
    play();
  };

  const handleMouseLeave = () => {
    pause();
  };

  return (
    <Section
      direction={"column"}
      className={styles.section}
      align={"center"}
      justify={"center"}
      ref={sectionRef}
    >
      {visible && (
        <>
          <Container>
            <Heading level={1} weight="Bold" variants={textVariant(0.1)}>
              ABOUT ME
            </Heading>
          </Container>
          <Section className={styles.content}>
            <Container
              className={styles.imageContainer}
              align="center"
              justify="center"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              variants={imageVariant("0.4")}
            >
              <Img
                className={styles.image}
                src={profileImage}
                href="https://unsplash.com/photos/7Y1CI9FCcNM?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink"
                rounded={true}
                alt="Photo by Rootnot Studio on Unsplash"
              />
              <Img
                className={styles.imageBg}
                src={backgroundImage}
                href="https://unsplash.com/photos/7Y1CI9FCcNM?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink"
                rounded={true}
                alt="Photo by Rootnot Studio on Unsplash"
              />
            </Container>
            <Container
              className={styles.details}
              align="left"
              direction="column"
            >
              <Container align="center" variants={textVariant(0.1)}>
                <Heading level={3} size="m" weight="medium">
                  Hi there
                </Heading>
                <Container className={styles.waveContainer}>
                  <span className={styles.wave}>👋</span>
                </Container>
              </Container>
              <Text
                size="m"
                weight="regular"
                secondary
                variants={textVariant(0.3)}
              >
                As a full-stack developer specializing in both Android and web
                development, I bring a versatile skill set and a passion for
                crafting seamless digital experiences. With expertise in{" "}
                <A link={"/projects"}>front-end</A> and{" "}
                <A link={"/projects"}>back-end</A> technologies, I thrive in
                creating engaging user interfaces and robust backend
                architectures. My journey in software development has been
                fueled by a blend of self-learning, hands-on experience, and a
                relentless drive to stay abreast of emerging technologies.
              </Text>
              <Button
                variants={textVariant(0.35)}
                href={"/contact"}
                size="m"
                icon={"send"}
              >
                Send message
              </Button>
            </Container>
          </Section>
        </>
      )}
    </Section>
  );
});

About.displayName = "About";
