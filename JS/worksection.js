const htmls = document.getElementsByTagName('html')[0];
const cardContainer = document.querySelector('.card-container');
const popupContainer = document.querySelector('main article');

const projects = [
  {
    id: 'project_1',
    images: {
      img: './image/Snapshoot-Portfolio1.png',
      cancelPop: './image/icons/Disabled.svg',
      altText: 'project 1 preview image',
    },
    name: 'Multi-Post Stories Gain+Glory',
    heading: 'Keeping track of hundreds of components',
    languages: [
      'Ruby on rails',
      'CSS',
      'JavaScript',
      'HTML',
    ],
    technologies: [
      'Codekit',
      'GitHub',
      'Javascript',
      'Bootstrap',
      'Terminal',
      'Codepen',
    ],

    button: 'See Project',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
    list: [
      {
        text: 'See Live',
        icon: './image/icons/Icon-Export@2x.svg',
        liveDemo: 'https://cynthiainga.github.io/',
      },
      {
        text2: 'See Source',
        icon: './image/icons/Icon-GitHub-1.svg',
        codeSource: 'https://github.com/cynthiainga/Personal-Portfolio',
      },
    ],
  },
  {
    id: 'project_2',
    images: {
      img: './image/Img-Placeholder.png',
      cancelPop: './image/icons/Disabled.svg',
      altText: 'project 2 preview image',
    },
    name: 'Multi-Post Stories Gain+Glory',
    heading: 'Keeping track of hundreds of components',
    languages: [
      'Ruby on rails',
      'CSS',
      'JavaScript',
      'HTML',
    ],
    technologies: [
        'Codekit',
        'GitHub',
        'Javascript',
        'Bootstrap',
        'Terminal',
        'Codepen',
    ],

    button: 'See Project',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
    list: [
      {
        text: 'See Live',
        icon: './image/icons/Icon-Export@2x.svg',
        liveDemo: 'https://cynthiainga.github.io/',
      },
      {
        text2: 'See Source',
        icon: './image/icons/Icon-GitHub-1.svg',
        codeSource: 'https://github.com/cynthiainga/Personal-Portfolio',
      },
    ],
  },
  {
    id: 'project_3',
    images: {
      img: './image/Snapshoot-Portfolio(1).png',
      cancelPop: './image/icons/Disabled.svg',
      altText: 'project 3 preview image',
    },
    name: 'Multi-Post Stories Gain+Glory',
    heading: 'Keeping track of hundreds of components',
    languages: [
      'Ruby on rails',
      'CSS',
      'JavaScript',
      'HTML',
    ],
    technologies: [
      'Codekit',
      'GitHub',
       'Javascript',
      'Bootstrap',
      'Terminal',
      'Codepen',
    ],

    button: 'See Project',
    description:  'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
    list: [
      {
        text: 'See Live',
        icon: './image/icons/Icon-Export@2x.svg',
        liveDemo: 'https://cynthiainga.github.io/',
      },
      {
        text2: 'See Source',
        icon: './image/icons/Icon-GitHub-1.svg',
        codeSource: 'https://github.com/cynthiainga/Personal-Portfolio',
      },
    ],
  },
  {
    id: 'project_4',
    images: {
      img: './image/Snapshoot-Portfolio(2).png',
      cancelPop: './image/icons/Disabled.svg',
      altText: 'project 4 preview image',
    },
    name: 'Multi-Post Stories Gain+Glory',
    heading: 'Keeping track of hundreds of components',
    languages: [
      'Ruby on rails',
      'CSS',
      'JavaScript',
      'HTML',
    ],
    technologies: [
      'Codekit',
      'GitHub',
      'Javascript',
      'Bootstrap',
      'Terminal',
      'Codepen',
    ],

    button: 'See Project',
    description:  'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
    list: [
      {
        text: 'See Live',
        icon: './images/icons/Icon-Export@2x.svg',
        liveDemo: 'https://cynthiainga.github.io/',
      },
      {
        text2: 'See Source',
        icon: './images/icons/Icon-GitHub-1.svg',
        codeSource: 'https://github.com/cynthiainga/Personal-Portfolio',

      },
    ],
  },
  {
    id: 'project_5',
    images: {
      img: './image/Snapshoot-Portfolio.png',
      cancelPop: './image/icons/Disabled.svg',
      altText: 'project 5 preview image',
    },
    name: 'Multi-Post Stories Gain+Glory',
    heading: 'Keeping track of hundreds of components',
    languages: [
      'Ruby on rails',
      'CSS',
      'JavaScript',
      'HTML',
    ],
    technologies: [
      'Codekit',
      'GitHub',
      'Javascript',
      'Bootstrap',
      'Terminal',
      'Codepen',
    ],

    button: 'See Project',
    description:  'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
    list: [
      {
        text: 'See Live',
        icon: './image/icons/Icon-Export@2x.svg',
        liveDemo: 'https://cynthiainga.github.io/',
      },
      {
        text2: 'See Source',
        icon: './image/icons/Icon-GitHub-1.svg',
        codeSource: 'https://github.com/cynthiainga/Personal-Portfolio',
      },
    ],
  },
  {
    id: 'project_6',
    images: {
      img: './image/Rectangle-21.png',
      cancelPop: './image/icons/Disabled.svg',
      altText: 'project 6 preview image',
    },
    name: 'Multi-Post Stories Gain+Glory',
    heading: 'Keeping track of hundreds of components',
    languages: [
      'Ruby on rails',
      'CSS',
      'JavaScript',
      'HTML',
    ],
    technologies: [
      'Codekit',
      'GitHub',
      'Javascript',
      'Bootstrap',
      'Terminal',
      'Codepen',
    ],
    button: 'See Project',
    description:  'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
    list: [
      {
        text: 'See Live',
        icon: './image/icons/Icon-Export@2x.svg',
        liveDemo: 'https://cynthiainga.github.io/',
      },
      {
        text2: 'See Source',
        icon: './image/icons/Icon-GitHub-1.svg',
        codeSource: 'https://github.com/cynthiainga/Personal-Portfolio',
      },
    ],
  },
];
