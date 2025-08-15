import Agriculture from './Agriculture.jpg';
import Camera from './Camera.jpg'
import Home from './Home.jpg'
export const projects = [
  {
    title: 'Agriculture IoT',
    description: 'An automation irrigation, temperature, humidity, and light control to optimize plant growth.',
    tags: ['Python', 'Arduino', 'SQL'],
    link: 'https://example.com',
    repo: 'https://github.com/yourname/animatefolio',
    cover: Agriculture,
    screens: [Agriculture, Camera, Home]
  },
  {
    title: 'CCTV Camera',
    description: 'Camera that can detect, recognize, and alert suspicious activities in real-time.',
    tags: ['Python', 'Raspberry Pi', 'Pytorch'],
    link: 'https://example.com',
    repo: 'https://github.com/yourname/shoply',
    cover: Camera,
    screens: [Camera, Home, Agriculture]
  },
  {
    title: 'Smart Home',
    description: 'Real-Time tracking of power consumption, automate appliances, and reduce energy waste.',
    tags: ['Python', 'Arduino', 'JavaScript'],
    link: 'https://example.com',
    repo: 'https://github.com/yourname/dashkit',
    cover: Home,
    screens: [Home, Agriculture, Camera]
  }
]
