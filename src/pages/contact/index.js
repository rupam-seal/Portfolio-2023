import { CardItem } from "@/components/Card";
import { Container } from "@/components/Container";
import { Footer } from "@/components/Footer";
import { Heading } from "@/components/Heading";
import { Icon } from "@/components/Icon";
import { Meta } from "@/components/Meta";
import { Section } from "@/components/Section";
import { Social } from "@/components/Social";
import { Text } from "@/components/Text";
import { scaleVariant, textVariant } from "@/utils/motion";
import Link from "next/link";
import { Component } from "react";
import { social } from "../../../data/socialData";
import styles from "./index.module.css";

const title = "Contact me";
const description = "My contact information and social links.";

const phone = "+91 9395212761";
const email = "rupam.x.seal@gmail.com";

const index = () => {
  const senderEmail = email ? email : "";

  const handleClick = () => {
    window.open(`mailto:${senderEmail}`, "_blank");
  };

  return (
    <Section
      fullscreen={true}
      justify="sb"
      align="center"
      direction="column"
      className={styles.contact}
    >
      <Meta title={title} description={description} />
      <Section
        className={styles.section}
        align="center"
        justify="center"
        direction="column"
      >
        <Container>
          <Heading level={3} variants={textVariant(0.1)}>
            Contact me
          </Heading>
        </Container>
        <Container direction="column" className={styles.cardContainer}>
          <CardItem
            icon="phone"
            space="m"
            gap="l"
            justify=""
            scale="false"
            type="body"
            variants={textVariant(0.2)}
          >
            {phone}
          </CardItem>
          <CardItem
            icon="email"
            space="m"
            gap="l"
            justify=""
            scale="false"
            onClick={handleClick}
            type="body"
            variants={textVariant(0.2)}
          >
            {email}
          </CardItem>
        </Container>

        <Container variants={textVariant(0.4)}>
          <Social roundedIcon={true} />
        </Container>
      </Section>
      <Footer />
    </Section>
  );
};

export default index;
