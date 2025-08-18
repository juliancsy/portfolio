import type { IconMap, SocialLink, Site } from '@/types'

export const SITE: Site = {
  title: 'chengjin.js',
  description:
    "Julian Chengjin Sy's UX Engineer portfolio",
  href: 'https://chengj.in',
  author: 'juliancsy',
  locale: 'en-US',
  featuredPostCount: 2,
  postsPerPage: 3,
}

export const NAV_LINKS: SocialLink[] = [
  // {
  //   href: '/blog',
  //   label: 'blog',
  // },
  // {
  //   href: '/authors',
  //   label: 'authors',
  // },
  {
    href: '/case',
    label: 'case studies',
  },
  {
    href: '/about',
    label: 'about',
  },
]

export const SOCIAL_LINKS: SocialLink[] = [
  {
    href: 'https://github.com/',
    label: 'GitHub',
    user: 'juliancsy',
  },
  {
    href: 'https://www.linkedin.com/in/',
    label: 'LinkedIn',
    user: 'juliancsy',
  },
  {
    href: 'mailto:',
    label: 'Email',
    user: 'js@chengj.in',
  },
  // {
  //   href: '/rss.xml',
  //   label: 'RSS',
  // },
]

export const ICON_MAP: IconMap = {
  Website: 'lucide:globe',
  GitHub: 'lucide:github',
  LinkedIn: 'lucide:linkedin',
  Twitter: 'lucide:twitter',
  Email: 'lucide:mail',
  RSS: 'lucide:rss',
}
