export interface ContactInfo {
  email: string;
  phone: string;
  address: string;
  coordinates: {
    latitude: number;
    longitude: number;
  };
  socialLinks: SocialLink[];
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}

export const contactInfo: ContactInfo = {
  email: 'hello@nextswitch.com',
  phone: '+1 (555) 123-4567',
  address: '123 Tech Street, Innovation City, IC 12345',
  coordinates: {
    latitude: 40.7128,
    longitude: -74.0060
  },
  socialLinks: [
    {
      platform: 'LinkedIn',
      url: 'https://linkedin.com/company/nextswitch',
      icon: 'linkedin'
    },
    {
      platform: 'Twitter',
      url: 'https://twitter.com/nextswitch',
      icon: 'twitter'
    },
    {
      platform: 'GitHub',
      url: 'https://github.com/nextswitch',
      icon: 'github'
    },
    {
      platform: 'Facebook',
      url: 'https://facebook.com/nextswitch',
      icon: 'facebook'
    }
  ]
};

export const serviceOptions = [
  { value: 'web-development', label: 'Web Development' },
  { value: 'mobile-development', label: 'Mobile Development' },
  { value: 'tech-training', label: 'Tech Training' },
  { value: 'innovation-labs', label: 'Innovation Labs' },
  { value: 'custom-software-development', label: 'Custom Software Development' },
  { value: 'it-consulting', label: 'IT Consulting' },
  { value: 'general-inquiry', label: 'General Inquiry' }
];
