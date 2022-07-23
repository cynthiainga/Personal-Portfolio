const htmls = document.getElementsByTagName('html')[0];
const cardContainer = document.querySelector('.card-container');
const popupContainer = document.querySelector('main article');

const projects = [
  {
    id: 'project_1',
    images: {
      img: './image/Capstone1.png',
      cancelPop: './image/icons/Disabled.svg',
      altText: 'project 1 preview image',
    },
    name: 'AfroFemCoders',
    heading: 'AFRO FEM CODERS  SCHOOL ONLIGNE',
    languages: ['HTML', 'CSS', 'JavaScript'],
    technologies: ['Codekit', 'GitHub', 'Javascript', 'Terminal', 'Codepen'],

    button: 'See Project',
    description:
      'Afro Fem Coders aims to create a space that gives women a chance to learn programming in a safe and encouraging environment. Our community is currently made up 1300+ students across 20+ African countries.Female students face numerous challenges, as academic spaces are often unsafe and unsupportive, and there remains a heavy stigma around women pursuing careers in technology.',
    list: [
      {
        text: 'See Live',
        icon: './image/icons/Icon-Export@2x.svg',
        liveDemo: 'https://cynthiainga.github.io/Capstone-Proj-1/',
      },
      {
        text2: 'See Source',
        icon: './image/icons/Icon-GitHub-1.svg',
        codeSource: 'https://github.com/cynthiainga/Capstone-Proj-1',
      },
    ],
  },
  {
    id: 'project_2',
    images: {
      img: './image/Desktop.png',
      cancelPop: './image/icons/Disabled.svg',
      altText: 'project 2 preview image',
    },
    name: 'Leaderboard',
    heading: 'LEADERBOARD',
    languages: ['API', 'JavaScript', 'CSS', 'HTML'],
    technologies: [
      'Codekit',
      'GitHub',
      'Terminal',
      'Codepen',
    ],

    button: 'See Project',
    description:
      'The leaderboard website displays scores submitted by different players. It also allows you to submit your score. All data is preserved thanks to the external Leaderboard API service.',
    list: [
      {
        text: 'See Live',
        icon: './image/icons/Icon-Export@2x.svg',
        liveDemo: 'https://cynthiainga.github.io/leaderboard/dist',
      },
      {
        text2: 'See Source',
        icon: './image/icons/Icon-GitHub-1.svg',
        codeSource: 'https://github.com/cynthiainga/leaderboard',
      },
    ],
  },
  {
    id: 'project_3',
    images: {
      img: './image/continents.png',
      cancelPop: './image/icons/Disabled.svg',
      altText: 'project 3 preview image',
    },
    name: 'Covid-19 Tracker',
    heading: 'COVID-19 TRACKER',
    languages: ['React & Redux', 'JavaScript', 'HTML', 'CSS'],
    technologies: [
      'Codekit',
      'GitHub',
      'Javascript',
      'Terminal',
      'Codepen',
    ],

    button: 'See Project',
    description:
      'Covid-19-Webapp is a tracking site that provides the necessary information on covid-19 cases in any African country and other continents their update.',
    list: [
      {
        text: 'See Live',
        icon: './image/icons/Icon-Export@2x.svg',
        liveDemo: 'https://covid-19-appli.netlify.app/',
      },
      {
        text2: 'See Source',
        icon: './image/icons/Icon-GitHub-1.svg',
        codeSource: 'https://github.com/cynthiainga/Covid-19-webapp',
      },
    ],
  },
  {
    id: 'project_4',
    images: {
      img: './image/budgetapp.png',
      cancelPop: './image/icons/Disabled.svg',
      altText: 'project 4 preview image',
    },
    name: 'Budget Application',
    heading: 'TRANSFER MONEY',
    languages: ['Ruby on rails', 'SCSS', 'JavaScript', 'HTML'],
    technologies: [
      'Codekit',
      'GitHub',
      'Javascript',
      'SASS',
      'Terminal',
      'Codepen',
    ],

    button: 'See Project',
    description:
      "The TransferMoney app is a mobile web application which helps users to manage their budget. It has features of listing transactions associated on a category and with the app you can see how much money you spent on that category.",
    list: [
      {
        text: 'See Live',
        icon: './images/icons/Icon-Export@2x.svg',
        liveDemo: 'https://blooming-ravine-10044.herokuapp.com/',
      },
      {
        text2: 'See Source',
        icon: './images/icons/Icon-GitHub-1.svg',
        codeSource: 'https://github.com/cynthiainga/Budget_App',
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
    languages: ['Ruby on rails', 'CSS', 'JavaScript', 'HTML'],
    technologies: [
      'Codekit',
      'GitHub',
      'Javascript',
      'Bootstrap',
      'Terminal',
      'Codepen',
    ],

    button: 'See Project',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
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
    languages: ['Ruby on rails', 'CSS', 'JavaScript', 'HTML'],
    technologies: [
      'Codekit',
      'GitHub',
      'Javascript',
      'Bootstrap',
      'Terminal',
      'Codepen',
    ],
    button: 'See Project',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
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
  ${cardObject.languages
    .map(
      (lang) => `<li>
   ${lang}</li>`,
    )
    .join('')}
  </ul>
  <div class="card-btn-container">
  <button type="button" class="card-btn ${cardObject.id}" id="${
  cardObject.id
}">See Project</button> </div> </div>`;
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
    <img class="card-img" src="${object.images.img}" alt="${
  object.images.altText
}">
    <img class="hide-icon" src="./image/icons/Disabled.svg" alt="close icon">
    </div>
    <div class="article">
      <h3>${object.heading}</h3>
      <ul class="program-lang d-flex">
      ${object.languages
    .map(
      (lang) => `<li class="btn tag_btn mobile-invisible"> 
                                          ${lang}
                                          </li>`,
    )
    .join('')}
  
      ${object.technologies
    .map(
      (tech) => `<li class="btn tag_btn desktop-invisible"> 
                                          ${tech}
                                          </li>`,
    )
    .join('')}
      </ul>
      <p>${object.description}</p>
      <div class="btns-popup d-flex">
      <a class="btn-card d-flex flex-center" href="${
  object.list[0].liveDemo
}"><span>${
  object.list[0].text
}</span><img src="./image/icons/Icon-Export@2x.svg" alt=""></a>
      <a class="btn-card d-flex flex-center" href="${
  object.list[1].codeSource
}"><span>${
  object.list[1].text2
}</span><img src="./image/icons/Icon-GitHub-1.svg" alt=""></a>
      </div>
    </div>
    </div>`;
  return popupCard;
}
const buttons = document.querySelectorAll('li.card-item .card-btn');
const four = document.querySelectorAll(
  '.card-popup .program-lang li:nth-child(4)',
);
four.forEach((li) => {
  li.style.display = 'none';
});

projects.forEach((project) => {
  buttons.forEach((button) => {
    button.addEventListener('click', () => {
      if (project.id === button.id) {
        const popupCard = createPopup(project);
        popupContainer.appendChild(popupCard);
        document.querySelector('.card-popup').classList.add('active');
        popupContainer.style.visibility = 'visible';
        htmls.style.overflow = 'hidden';
        const popAnimation = popupContainer.querySelector('.card-popup');
        popAnimation.classList.add('inActive');
        setTimeout(() => {
          popAnimation.classList.remove('inActive');
        }, 1000);

        const closeBtn = document.querySelector('.card-popup .hide-icon');

        closeBtn.addEventListener('click', () => {
          const popAnimation = popupContainer.querySelector('.card-popup');
          popAnimation.classList.add('outActive');

          setTimeout(() => {
            document
              .querySelector('.card-popup.active')
              .classList.remove('active');
            popAnimation.classList.remove('outActive');
            popupContainer.style.visibility = 'hidden';
            htmls.style.overflow = 'auto';
          }, 700);
          setTimeout(() => {
            popupContainer.innerHTML = '';
          }, 1000);
        });
      }
    });
  });
});
