import Agriculture from './Agriculture.jpg';
import Camera from './Camera.jpg'
import Home from './Home.jpg'

export const projects = [
  {
    title: 'Agriculture IoT',
    description: 'An automation irrigation, temperature, humidity, and light control to optimize plant growth.',
    tags: ['Python', 'Arduino', 'SQL'],
    cover: Agriculture,
    screens: [
      {
        img: Agriculture,
        title: 'Agriculture IoT Greenhouse Automation', // Modal caption
        description: 'a smart farming project that uses IoT sensors and devices to monitor and control environmental conditions inside a greenhouse. It automates irrigation, temperature, humidity, and light control to optimize plant growth, reduce manual labor, and increase crop yield efficiently.'
      },
      {
        img: Home,
        title: 'Smart Home Energy Management', // Modal caption
        description: 'a smart home project that uses IoT devices to monitor, control, and optimize energy usage in a home. It helps track real-time power consumption, automate appliances, and reduce energy waste, leading to increased efficiency and lower electricity bills.'
      },
      {
        img: Camera,
        title: 'CCTV Camera Surveillance System', // Modal caption
        description: 'a smart surveillance system that combines IoT connectivity with deep learning algorithms to detect, recognize, and alert suspicious activities in real-time. It enables intelligent video analysis, such as facial recognition and motion detection, enhancing security and reducing false alarms.'
      }
    ]
  },
  {
    title: 'CCTV Camera',
    description: 'Camera that can detect, recognize, and alert suspicious activities in real-time.',
    tags: ['Python', 'Raspberry Pi', 'Pytorch'],
    cover: Camera,
    screens: [
      {
        img: Camera,
        title: 'CCTV Camera Surveillance System', // Modal caption
        description: 'smart surveillance system that combines IoT connectivity with deep learning algorithms to detect, recognize, and alert suspicious activities in real-time. It enables intelligent video analysis, such as facial recognition and motion detection, enhancing security and reducing false alarms.'
      },
      {
        img: Home,
        title: 'Smart Home Energy Management', // Modal caption
        description: 'system that uses IoT devices to monitor, control, and optimize energy usage in a home. It helps track real-time power consumption, automate appliances, and reduce energy waste, leading to increased efficiency and lower electricity bills.'
      },
      {
        img: Agriculture,
        title: 'Agriculture IoT Greenhouse Automation', // Modal caption
        description: 'a smart farming project that uses IoT sensors and devices to monitor and control environmental conditions inside a greenhouse. It automates irrigation, temperature, humidity, and light control to optimize plant growth, reduce manual labor, and increase crop yield efficiently.'
      }
    ]
  },

  {
    title: 'Smart Home',
    description: 'A smart home project that tracks power consumption in real-time, automates appliances, and reduces energy waste.',
    tags: ['Python', 'Arduino', 'JavaScript'],
    cover: Home,
    screens: [
      {
        img: Home,
        title: 'Smart Home Energy Management', // Modal caption
        description: 'system that uses IoT devices to monitor, control, and optimize energy usage in a home. It helps track real-time power consumption, automate appliances, and reduce energy waste, leading to increased efficiency and lower electricity bills.'
      },
      {
        img: Agriculture,
        title: 'Agriculture IoT Greenhouse Automation', // Modal caption
        description: 'a smart farming project that uses IoT sensors and devices to monitor and control environmental conditions inside a greenhouse. It automates irrigation, temperature, humidity, and light control to optimize plant growth, reduce manual labor, and increase crop yield efficiently.'
      },
      {
        img: Camera,
        title: 'CCTV Camera Surveillance System', // Modal caption
        description: 'a smart surveillance system that combines IoT connectivity with deep learning algorithms to detect, recognize, and alert suspicious activities in real-time. It enables intelligent video analysis, such as facial recognition and motion detection, enhancing security and reducing false alarms.'
      }
    ]
  }
]
