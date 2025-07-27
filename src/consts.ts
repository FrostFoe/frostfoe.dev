import type { IconMap, SocialLink, Site } from '@/types'

export const SITE: Site = {
  title: 'frostfoe.dev',
  description:
    'Design engineer and cybersecurity enthusiast based in Bangladesh.',
  href: 'https://frostfoe.netlify.app',
  author: 'frostfoe',
  locale: 'en-US',
  featuredPostCount: 2,
  postsPerPage: 4,
}

export const NAV_LINKS: SocialLink[] = [
  {
    href: '/',
    label: 'Home',
  },
  {
    href: '/blog',
    label: 'blog',
  },
]

export const SOCIAL_LINKS: SocialLink[] = [
  {
    href: 'https://github.com/FrostFoe',
    label: 'GitHub',
  },
  {
    href: 'https://twitter.com/FrostFoe',
    label: 'Twitter',
  },
  {
    href: 'mailto:frostfoe@gmail.com',
    label: 'Email',
  },
  {
    href: '/rss.xml',
    label: 'RSS',
  },
]

export const ICON_MAP: IconMap = {
  Website: 'lucide:globe',
  GitHub: 'lucide:github',
  LinkedIn: 'lucide:linkedin',
  Twitter: 'lucide:twitter',
  Email: 'lucide:mail',
  RSS: 'lucide:rss',
}
