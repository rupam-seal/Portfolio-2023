import { Container } from '@/components/Container';
import { Text } from '@/components/Text';
import { categories } from '../../../data/categoriesData';
import styles from './Selector.module.css';

const Selector = ({ category, setCatagory }) => {
  return (
    <Container className={styles.container}>
      <Options category={category} setCatagory={setCatagory} />
    </Container>
  );
};
export default Selector;

export const Options = ({ category, setCatagory }) => {
  const handleClick = (category) => {
    return setCatagory(category);
  };
  return (
    <>
      {categories.map((item, index) => (
        <Container
          key={index}
          align="center"
          justify="center"
          className={category === item.category ? styles.active : styles.normal}
          onClick={() => handleClick(item.category)}
        >
          <Text light size="m" weight="medium" className={styles.text}>
            {item.label}
          </Text>
        </Container>
      ))}
    </>
  );
};
