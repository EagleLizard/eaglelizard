const { SECTIONS_ENUM } = require('../shared/sections-enum');
import { HomePage } from '../home/home';
import { AdminPage } from '../admin/admin';
import { AboutPage } from '../about/about';
import { ImagesPage } from '../images/images';

export class Section {
  constructor(sectionKey, component, label, route) {
    this.key = sectionKey;
    this.component = component;
    this.label = label;
    this.route = route;
  }
}

const section_map = {
  [SECTIONS_ENUM.HOME]: new Section(
    SECTIONS_ENUM.HOME,
    HomePage,
    'Home',
    '/'
  ),
  [SECTIONS_ENUM.ADMIN]: new Section(
    SECTIONS_ENUM.ADMIN,
    AdminPage,
    'Admin',
    '/admin'),
  [SECTIONS_ENUM.ABOUT]: new Section(
    SECTIONS_ENUM.ABOUT,
    AboutPage,
    'About',
    '/about'),
  [SECTIONS_ENUM.IMAGES]: new Section(
    SECTIONS_ENUM.IMAGES,
    ImagesPage,
    'Images',
    '/images'),
};

const sections = [
  section_map.HOME,
  section_map.ADMIN,
  section_map.ABOUT,
  section_map.IMAGES,
];

export {
  sections,
};
