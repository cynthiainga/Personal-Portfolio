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

function createCard(cardObject) {
  const li = document.createElement('li');
  li.className = 'card-item';
  li.innerHTML = `<div class="card-image">
  <img src="${cardObject.images.img}" alt="${cardObject.images.altText}">
  </div>
  <div class="card-details">
  <div class="card-title"> <h2>${cardObject.name}</h2> </div>
  <ul class="card-item-technologies">
  ${cardObject.languages.map((lang) => `<li>
   ${lang}</li>`).join('')}
  </ul>
  <div class="card-btn-container">
  <button type="button" class="card-btn ${cardObject.id}" id="${cardObject.id}">See Project</button> </div> </div>`
  return li;
}

projects.forEach((project) => {
  const card = createCard(project);
  cardContainer.appendChild(card);
});

function createPopup(object) {
    const popupCard = document.createElement('div');
    popupCard.classList.add('card-popup');
    popupCard.id = object.id;
    popupCard.innerHTML = `
    <div class="fixed">
    <div class="project-img">
    <img class="card-img" src="${object.images.img}" alt="${object.images.altText}">
    <img class="hide-icon" src="./image/icons/Disabled.svg" alt="close icon">
    </div>
    <div class="article">
      <h3>${object.heading}</h3>
      <ul class="program-lang d-flex">
      ${object.languages.map((lang) => `<li class="btn tag_btn mobile-invisible"> 
                                          ${lang}
                                          </li>`).join('')}
  
      ${object.technologies.map((tech) => `<li class="btn tag_btn desktop-invisible"> 
                                          ${tech}
                                          </li>`).join('')}
      </ul>
      <p>${object.description}</p>
      <div class="btns-popup d-flex">
      <a href="${object.list[0].liveDemo}"><button type="button" class="btn-card d-flex flex-center"><span>${object.list[0].text}</span><img src="./image/icons/Icon-Export@2x.svg" alt=""></button></a>
      <a href="${object.list[1].codeSource}"><button type="button" class="btn-card d-flex flex-center"><span>${object.list[1].text2}</span><img src="./image/icons/Icon-GitHub-1.svg" alt=""></button></a>
      </div>
    </div>
    </div>`;
    return popupCard;
  }
  
  const buttons = document.querySelectorAll('li.card-item .card-btn');
  const four = document.querySelectorAll('.card-popup .program-lang li:nth-child(4)');
  
  four.forEach((li) => {
    li.style.display = 'none';
  });
