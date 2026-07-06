import Linkedin from './linkedin.svg'
import Twitter from './x.svg'
import Youtube from './youtube.svg'
import Github from './github.svg'
import Facebook from './facebook.svg'
import Instagram from './instagram.svg'
import Website from './website.svg'

import type { ImageMetadata } from 'astro';
import type { SvgComponent } from 'astro/types';

export const socialMediaIcons = {
  linkedin: Linkedin,
  youtube: Youtube,
  github: Github,
  facebook: Facebook,
  instagram: Instagram,
  website: Website,
  x: Twitter,

} satisfies Record<string, SvgComponent & ImageMetadata>;
