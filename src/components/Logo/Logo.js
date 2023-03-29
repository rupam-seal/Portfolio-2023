import Link from 'next/link';
import { Container } from '../Container';
import { Heading } from '../Heading';
import { Image } from '../Image';

import styles from './Logo.module.css';

export const Logo = () => {
  return (
    <Container align="center" className={styles.logo}>
      <Link className={styles.text} href="/">
        <svg
          width="34"
          height="34"
          viewBox="0 0 53 45"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_27_166)">
            <path
              d="M23.687 1.12381L51.891 29.2137V44.2936H38.7291V34.6347L18.2442 14.2324H13.9888V44.2936H0.826904V1.12381H23.687Z"
              fill="var(--colorTextTitle)"
            />
            <path
              d="M53 9C53 13.4183 49.4183 17 45 17C40.5817 17 37 13.4183 37 9C37 4.58172 40.5817 1 45 1C49.4183 1 53 4.58172 53 9Z"
              fill="var(--colorTextTitle)"
            />
          </g>
          <defs>
            <clipPath id="clip0_27_166">
              <rect
                width="52"
                height="44"
                fill="white"
                transform="translate(0.826904 0.70871)"
              />
            </clipPath>
          </defs>
        </svg>
      </Link>
    </Container>
  );
};
