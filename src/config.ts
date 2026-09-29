export interface SiteConfig {
  title: string;
  description: string;
  keywords: string;
}

export const siteConfig: SiteConfig = {
  title: "Jake Wilson",
  description: "Software developer and writer",
  keywords: "Software, Developer",
};

export interface NavItem {
  title: string;
  text: string;
  link: string;
}

export const nav: NavItem[] = [
  {
    rel: 'author',
    title: 'hi@jkwlsn.dev',
    text: 'Email',
    link: 'mailto:hi@jkwlsn.dev',
  },
  {
    rel: 'external',
    title: '@jkwlsn on GitHub',
    text: 'Github',
    link: 'https://github.com/jkwlsn',
  },
  {
    rel: 'external',
    title: '@jkwlsn on LinkedIn',
    text: 'LinkedIn',
    link: 'https://www.linkedin.com/in/jkwlsn',
  },
  {
    rel: 'alternate',
    title: 'RSS feed',
    link: '/rss.xml',
    text: 'RSS',
  },
];
