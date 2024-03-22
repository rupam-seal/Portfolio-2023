import { Button } from "@/components/Button";
import { Container } from "@/components/Container";
import { Footer } from "@/components/Footer";
import { Heading } from "@/components/Heading";
import { Meta } from "@/components/Meta";
import { Text } from "@/components/Text";
import { textVariant } from "@/utils/motion";
import styles from "./index.module.css";

const title = "Hire me";
const description = "I am looking for a Web Development job.";

const index = () => {
  return (
    <Container
      align="center"
      justify="center"
      className={styles.section}
      direction="column"
    >
      <Meta title={title} description={description} />
      <Container className={styles.container} direction="column">
        <Heading
          align="center"
          level={4}
          className={styles.title}
          variants={textVariant(0.1)}
        >
          Android / UI-UX / Web Developer.
        </Heading>
        <Text align="center" secondary size="m" variants={textVariant(0.15)}>
          As a full-stack developer specializing in both Android and web
          development, I bring a versatile skill set and a passion for crafting
          seamless digital experiences. With expertise in front-end and back-end
          technologies, I thrive in creating engaging user interfaces and robust
          backend architectures. My journey in software development has been
          fueled by a blend of self-learning, hands-on experience, and a
          relentless drive to stay abreast of emerging technologies.
        </Text>
        <Text align="center" secondary size="m" variants={textVariant(0.15)}>
          I also have a keen interest and experience in integrating artificial
          intelligence (AI) into applications to enhance user experiences and
          automate processes. Leveraging AI technologies such as machine
          learning and natural language processing, I have implemented
          intelligent features that elevate the functionality and efficiency of
          digital solutions. Whether it&apos;s developing recommendation
          systems, chatbots, or predictive analytics, I am adept at harnessing
          the power of AI to deliver innovative solutions that anticipate and
          adapt to user needs.
        </Text>
      </Container>
      <Button
        variants={textVariant(0.35)}
        href={"/contact"}
        size="m"
        icon={"send"}
        className={styles.button}
      >
        Send message
      </Button>
      <Footer />
    </Container>
  );
};

export default index;
