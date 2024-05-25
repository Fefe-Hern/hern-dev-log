interface Project {
  title: string
  description: string
  href?: string
  imgSrc?: string
}

const projectsData: Project[] = [
  {
    title: 'BigCommerce',
    description: `I've worked with two large businesses that are moreso Marketplaces than Storefronts, and helped 
    migrate them to BigCommerce. I shall eventually make case studies, and some of the best challenges we've faced.`,
    imgSrc: '/static/images/bigcommerce.png',
    //href: 'https://www.google.com',
  },
  {
    title: 'Connectwise',
    description: `Upon migrating to Connectwise CRM, I've worked on custom API integrations, and developing the invoice and sales reports
     for our own usage.`,
    imgSrc: '/static/images/connectwise.png',
    //href: '/blog/the-time-machine',
  },
]

export default projectsData
