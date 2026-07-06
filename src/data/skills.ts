import type { SvgComponent } from 'astro/types';
import type { ImageMetadata } from 'astro';

import Astro from '../assets/icons/astro.svg';
import CLanguange from '../assets/icons/c.svg';
import CPP from '../assets/icons/cpp.svg';
import JS from '../assets/icons/javascript.svg';
import Github from '../assets/icons/github.svg';
import Next from '../assets/icons/next.svg';
import Nodejs from '../assets/icons/nodejs.svg';
import Notion from '../assets/icons/notion.svg';
import Php from '../assets/icons/php.svg';
import PostgreSQL from '../assets/icons/postgresql.svg';
import PS from '../assets/icons/photoshop.svg';
import Python from '../assets/icons/python.svg';
import React from '../assets/icons/reactjs.svg';
import Supabase from '../assets/icons/supabase.svg';
import Tailwind from '../assets/icons/tailwind.svg';
import Typescript from '../assets/icons/typescript.svg';

type Skill = {
  name: string;
  icon: SvgComponent & ImageMetadata
}

export const skills = [
  {
    name: 'Astro',
    icon: Astro,
  },
  {
    name: 'Typescript',
    icon: Typescript,
  },
  // {
  //   name: 'Javascript',
  //   icon: JS,
  // },
  {
    name: 'Tailwind',
    icon: Tailwind,
  },
  {
    name: 'Node.js',
    icon: Nodejs,
  },
  {
    name: 'PostgreSQL',
    icon: PostgreSQL,
  },
  {
    name: 'Supabase',
    icon: Supabase,
  },
  {
    name: 'C',
    icon: CLanguange,
  },
  {
    name: 'GitHub',
    icon: Github,
  },
  //{
  //   name: 'C++',
  //   icon: CPP,
  //},
  {
    name: 'Adobe Photoshop',
    icon: PS,
  },
  // {
  //   name: 'Notion',
  //   icon: Notion,
  // }

] as Skill[];
