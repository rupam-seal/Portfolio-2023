import styles from './Icon.module.css';
import { classes } from '@/utils/styles';

/**
 * ICON COMPONENT
 * This component is used to render icons from various icon libraries
 * using the icons object.
 * The icons object maps icon names to their corresponding components.
 **/

/**
 * LANGUAGE
 **/
import { FaPython } from 'react-icons/fa';
import { FaJava } from 'react-icons/fa';
import { TbBrandJavascript } from 'react-icons/tb';
import { SiKotlin } from 'react-icons/si';
import { SiCplusplus } from 'react-icons/si';
import { ImHtmlFive2 } from 'react-icons/im';
import { BsFiletypeCss } from 'react-icons/bs';
/**
 * FRAMEWORK
 **/
import { SiDjango } from 'react-icons/si';
import { SiThreedotjs } from 'react-icons/si';
import { FaReact } from 'react-icons/fa';
import { TbBrandNextjs } from 'react-icons/tb';
import { FaBootstrap } from 'react-icons/fa';
import { SiTailwindcss } from 'react-icons/si';
/**
 * TOOLS
 **/
import { SiAndroidstudio } from 'react-icons/si';
import { TbBrandVscode } from 'react-icons/tb';
import { BsGit } from 'react-icons/bs';
import { FaGithubAlt } from 'react-icons/fa';
import { SiGitlab } from 'react-icons/si';
import { GrDocker } from 'react-icons/gr';
/**
 * UI/UX
 **/
import { TbBrandFigma } from 'react-icons/tb';
import { SiAdobexd } from 'react-icons/si';
import { SiAdobephotoshop } from 'react-icons/si';
import { SiBlender } from 'react-icons/si';
import { SiSketch } from 'react-icons/si';
/**
 * LIBRARY
 **/
import { SiAxios } from 'react-icons/si';
/**
 * Social
 **/
import { FaLinkedinIn } from 'react-icons/fa';
import { AiFillInstagram } from 'react-icons/ai';
/**
 * OTHERS
 **/
import { BsArrowDownLeftCircleFill } from 'react-icons/bs';
import { ImArrowUpRight2 } from 'react-icons/im';
import { BsArrowUpRight } from 'react-icons/bs';
import { RiSendPlaneFill } from 'react-icons/ri';
import { SlGlobe } from 'react-icons/sl';
import { HiMenuAlt4 } from 'react-icons/hi';
import { CgClose } from 'react-icons/cg';
import { MdWavingHand } from 'react-icons/md';
import { TbSun } from 'react-icons/tb';
import { TbMoonFilled } from 'react-icons/tb';
import { MdDesignServices } from 'react-icons/md';
import { ImPhone } from 'react-icons/im';
import { MdEmail } from 'react-icons/md';

export const icons = {
  /**
   * LANGUAGE
   **/
  Python: FaPython,
  Java: FaJava,
  JavaScript: TbBrandJavascript,
  Kotlin: SiKotlin,
  'C++': SiCplusplus,
  HTML: ImHtmlFive2,
  CSS: BsFiletypeCss,
  /**
   * FRAMEWORK
   **/
  Django: SiDjango,
  'Three.js': SiThreedotjs,
  'React.js': FaReact,
  'Next.js': TbBrandNextjs,
  Bootstrap: FaBootstrap,
  TailwindCSS: SiTailwindcss,
  /**
   * TOOLS
   **/
  AndroidStudio: SiAndroidstudio,
  VsCode: TbBrandVscode,
  Git: BsGit,
  Github: FaGithubAlt,
  Gitlab: SiGitlab,
  Docker: GrDocker,
  /**
   * UI/UX
   **/
  Figma: TbBrandFigma,
  AdobeXD: SiAdobexd,
  Photoshop: SiAdobephotoshop,
  Blender: SiBlender,
  Sketch: SiSketch,
  /**
   * LIBRARY
   **/
  Axios: SiAxios,
  /**
   * SOCIAL
   **/
  Linkedin: FaLinkedinIn,
  Instagram: AiFillInstagram,
  /**
   * OTHERS
   **/
  leftCircle: BsArrowDownLeftCircleFill,
  arrowRight: ImArrowUpRight2,
  arrowRightLight: BsArrowUpRight,
  send: RiSendPlaneFill,
  web: SlGlobe,
  menu: HiMenuAlt4,
  close: CgClose,
  hire: MdWavingHand,
  day: TbSun,
  night: TbMoonFilled,
  ui: MdDesignServices,
  phone: ImPhone,
  email: MdEmail,
};

export const Icon = ({ icon, className, type, ...rest }) => {
  const IconComponent = icons[icon];

  return (
    <IconComponent
      className={classes(styles.icon, className)}
      data-type={type}
      {...rest}
    />
  );
};
