export interface Branch {
  id: string;
  name: string;
  address: string;
  phone: string;
  hours: string;
  mapEmbedUrl: string;
}

export const branches: Branch[] = [
  {
    id: 'mount-road',
    name: 'Mount Road - Main Branch',
    address: '123 Mount Road, Chennai - 600002',
    phone: '+91 44 1234 5678',
    hours: '11:00 AM - 11:00 PM',
    mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.9320558633866!2d80.24678731482171!3d13.041793990813754!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5267b5f90b0c27%3A0x9c24d6b3b3f8f0e8!2sMount%20Road%2C%20Chennai!5e0!3m2!1sen!2sin!4v1234567890123'
  },
  {
    id: 't-nagar',
    name: 'T. Nagar Branch',
    address: '456 Usman Road, T. Nagar, Chennai - 600017',
    phone: '+91 44 1234 5679',
    hours: '11:00 AM - 11:30 PM',
    mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.2557899642544!2d80.24122631482149!3d13.028095390826562!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a526788b3f95b4d%3A0x4d95e5e9c5e9c5e9!2sT%20Nagar%2C%20Chennai!5e0!3m2!1sen!2sin!4v1234567890124'
  },
  {
    id: 'adyar',
    name: 'Adyar Branch',
    address: '789 TTK Road, Adyar, Chennai - 600020',
    phone: '+91 44 1234 5680',
    hours: '11:00 AM - 11:00 PM',
    mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.6954545454545!2d80.22887531482113!3d13.008812390844897!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5266f6f6f6f6f7%3A0x1e1e1e1e1e1e1e1e!2sAdyar%2C%20Chennai!5e0!3m2!1sen!2sin!4v1234567890125'
  },
  {
    id: 'anna-nagar',
    name: 'Anna Nagar Branch',
    address: '321 2nd Avenue, Anna Nagar, Chennai - 600040',
    phone: '+91 44 1234 5681',
    hours: '11:00 AM - 11:30 PM',
    mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.1234567890123!2d80.24567891482189!3d13.067890990795678!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a526123456789ab%3A0xabcdef1234567890!2sAnna%20Nagar%2C%20Chennai!5e0!3m2!1sen!2sin!4v1234567890126'
  },
  {
    id: 'velachery',
    name: 'Velachery Branch',
    address: '654 Velachery Main Road, Chennai - 600042',
    phone: '+91 44 1234 5682',
    hours: '11:00 AM - 11:00 PM',
    mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.9876543210987!2d80.23456781482067!3d12.98765439087654!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525abcdef12345%3A0x9876543210abcdef!2sVelachery%2C%20Chennai!5e0!3m2!1sen!2sin!4v1234567890127'
  },
];
