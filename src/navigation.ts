import { getPermalink } from './utils/permalinks';

export const headerData = {
  links: [],
  actions: [{ text: 'Github', href: 'https://github.com/mamahuhu-io', target: '_blank' }],
};

export const footerData = {
  links: [],
  secondaryLinks: [
    { text: 'Terms', href: getPermalink('/terms') },
    { text: 'Privacy Policy', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    { ariaLabel: 'Mail', icon: 'tabler:mail', href: 'mailto:support#mamahuhu.io' },
    { ariaLabel: 'Discussions', icon: 'tabler:message-chatbot', href: 'https://github.com/mamahuhu-io' },
    { ariaLabel: 'Issues', icon: 'tabler:info-square-rounded', href: 'https://github.com/mamahuhu-io' },
    { ariaLabel: 'Github', icon: 'tabler:brand-github', href: 'https://github.com/mamahuhu-io' },
  ],
  footNote: `
    🚀 © 2025 <a class="dark:text-muted" href="https://mamahuhu.io/"> Mamahuhu.io</a> · All rights reserved.
  `,
};
