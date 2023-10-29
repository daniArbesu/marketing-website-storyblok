import { Service, Testimonial } from '../../types';

export const services: Service[] = [
  {
    title: 'Website',
    subtitle: '1 month',
    description: 'Website made specifically for your business',
    price: '500 EUR'
  },
  {
    title: 'SEM Campaign',
    subtitle: '1 month',
    description: 'Ads Campaign for Google Ads to increase awareness of your business',
    price: '400 EUR'
  },
  {
    title: 'Website + SEM Campaign',
    subtitle: '1 month',
    description:
      'Brand new website + Ads Campaign for Google Ads to increase awareness of your business',
    price: '700 EUR'
  }
];

export const testimonials: Testimonial[] = [
  {
    name: 'Timo',
    comment: 'They did an amazing job with our bussiness',
    image: 'https://xsgames.co/randomusers/avatar.php?g=male'
  },
  {
    name: 'Paul',
    comment: 'They did wonders',
    image: 'https://xsgames.co/randomusers/avatar.php?g=male'
  },
  {
    name: 'Jennifer',
    comment: 'Amazing Job',
    image: 'https://xsgames.co/randomusers/avatar.php?g=female'
  }
];
