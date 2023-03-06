import React from 'react';
import { classes } from '../../utils/styles';
import styles from './Icon.module.css';

import { FaPython } from 'react-icons/fa';
import { FaJava } from 'react-icons/fa';
import { IoLogoJavascript } from 'react-icons/io';
import { SiKotlin } from 'react-icons/si';
import { SiCplusplus } from 'react-icons/si';
import { SiDjango } from 'react-icons/si';
import { SiThreedotjs } from 'react-icons/si';
import { FaBootstrap } from 'react-icons/fa';
import { SiSelenium } from 'react-icons/si';
import { SiAndroidstudio } from 'react-icons/si';
import { TbBrandVscode } from 'react-icons/tb';
import { BsGit } from 'react-icons/bs';
import { SiGitlab } from 'react-icons/si';
import { GrDocker } from 'react-icons/gr';
import { TbBrandFigma } from 'react-icons/tb';
import { SiAdobexd } from 'react-icons/si';
import { SiAdobephotoshop } from 'react-icons/si';
import { SiBlender } from 'react-icons/si';
import { SiSketch } from 'react-icons/si';

export const icons = {
  python: FaPython,
  java: FaJava,
  javascript: IoLogoJavascript,
  kotlin: SiKotlin,
  cplusplus: SiCplusplus,
  django: SiDjango,
  threejs: SiThreedotjs,
  bootstrap: FaBootstrap,
  selenium: SiSelenium,
  androidstudio: SiAndroidstudio,
  vscode: TbBrandVscode,
  git: BsGit,
  gitlab: SiGitlab,
  docker: GrDocker,
  figma: TbBrandFigma,
  adobexd: SiAdobexd,
  adobephotoshop: SiAdobephotoshop,
  blender: SiBlender,
  sketch: SiSketch,
};

const Icon = ({ icon, className, ...rest }) => {
  const IconComponent = icons[icon];

  return (
    <IconComponent className={classes(styles.icon, className)} {...rest} />
  );
};

export default Icon;
