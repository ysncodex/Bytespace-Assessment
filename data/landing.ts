import type { Course } from '@/types/course';

export const courses: Course[] = [
  { title: 'Learn Figma from Basic', category: 'UI/UX Design', image: '/assets/course-figma.jpg' },
  { title: 'Build Digital Asset', category: 'Design', image: '/assets/course-digital-assets.jpg' },
  {
    title: 'the Power of Big Data',
    category: 'Data Science',
    image: '/assets/course-big-data.jpg',
  },
  {
    title: 'Balancing Productivity and Focus',
    category: 'Productivity',
    image: '/assets/course-productivity.jpg',
  },
  {
    title: 'Mastering Money Management',
    category: 'Business',
    image: '/assets/course-finance.jpg',
  },
  {
    title: 'From Idea to Startup Success',
    category: 'Marketing',
    image: '/assets/course-startup.jpg',
  },
];

export const categories = [
  'Featured',
  'Music',
  'Drawing & Painting',
  'Marketing',
  'Animation',
  'Social Media',
  'UI/UX Design',
  'Creative Marketing',
  'Digital Illustration',
  'Film & Video',
  'Crafts',
  'Freelance & Entrepreneurship',
  'Graphic Design',
  'Photography',
  'Productivity',
  'Web Development',
  'Data Science',
  'Cooking',
];

export const paths = [
  { icon: '/assets/category-design.png', label: 'Design' },
  { icon: '/assets/category-development.png', label: 'Development' },
  { icon: '/assets/category-it-software.png', label: 'IT & Software' },
  { icon: '/assets/category-business.png', label: 'Business' },
  { icon: '/assets/category-marketing.png', label: 'Marketing' },
  { icon: '/assets/category-photography.png', label: 'Photography' },
];

export const testimonials = [
  {
    name: 'Sarah M.',
    role: 'Enthusiastic Learner',
    img: '/assets/testimonial-sarah.png',
    quote:
      'ByteSpace has transformed my approach to learning. The diverse range of courses and the quality of content provided by creators have exceeded my expectations. The platform truly fosters a sense of community and lifelong learning.',
  },
  {
    name: 'James L.',
    role: 'Lifelong Learner',
    img: '/assets/testimonial-james.png',
    quote:
      "I've tried several online learning platforms, and ByteSpace stands out for its vibrant community and the variety of courses available. The easy navigation and engaging content make it a go-to platform for continuous skill development.",
  },
  {
    name: 'Alex B.',
    role: 'Inspired Creator',
    img: '/assets/testimonial-alex.png',
    quote:
      "As a creator, ByteSpace has been a game-changer for me. The Course Editor is user-friendly, and the support from the community is incredible. It's fulfilling to see my courses making a positive impact on learners globally.",
  },
];

export const partnerMarks = [1, 2, 3, 4, 5].map((number) => `/assets/partner-mark-0${number}.png`);
