export interface SiteConfig {
  title: string;
  description: string;
  keywords: string;
  author: {
    name: string;
    jobTitle: string;
    email: string;
    alumniOf: object;
    socials: string[];
  };
}

export const siteConfig: SiteConfig = {
  title: 'Jake Wilson',
  description: 'Software developer and writer',
  keywords: 'Software, Developer',
  author: {
    name: 'Jake Wilson',
    jobTitle: 'Software Developer',
    email: 'hi@jkwlsn.dev',
    alumniOf: {
      type: 'EducationalOrganization',
      name: 'Makers Academy',
      sameAs: 'https://makers.tech/',
      startDate: '2025',
    },
    socials: [
      'https://www.linkedin.com/in/jkwlsn',
      'https://github.com/jkwlsn',
    ],
  },
};

export interface NavItem {
  rel: string;
  title: string;
  text: string;
  link: string;
}

export const nav: NavItem[] = [
  {
    rel: 'me',
    title: 'Work with me',
    text: 'Work',
    link: '/work',
  },
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
