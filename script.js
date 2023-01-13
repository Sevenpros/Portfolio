const showMenuBtn = document.querySelector('#show-menu');
const mobileMenu = document.querySelector('.nav-bar-mobile');
const navBar = document.querySelector('.nav-bar');
const cancelMenuBtn = document.querySelector('#cancel-menu');
const menuList = document.querySelectorAll('.menu-list');
const projectSection = document.querySelector('.projects');

showMenuBtn.addEventListener('click', () => {
  navBar.classList.toggle('invisible');
  mobileMenu.classList.toggle('invisible');
});
cancelMenuBtn.addEventListener('click', () => {
  navBar.classList.toggle('invisible');
  mobileMenu.classList.toggle('invisible');
});
menuList.forEach((list) => {
  list.addEventListener('click', () => {
    navBar.classList.toggle('invisible');
    mobileMenu.classList.toggle('invisible');
  });
});
function createProject(name, description, image, technologies, liveLink, sourceLink) {
  const project = {
    name,
    description,
    image,
    technologies,
    liveLink,
    sourceLink,
  };
  return project;
}
const projects = [
  createProject('DOCTOR-MEET-UP',
    `DOCTOR-MEET-UP App is a React API web application
    (consisting of mobile and desktop versions) that allows users to
    book an appointment with their Doctors, users are allowed to add or
    remove doctors from the list with a decent-friendly design.`,
    'images/doctor.jpg',
    'RUBY,REACT, PostGres',
    'https://meetup.sethpro.com/',
    'https://github.com/Sevenpros/doctor-meet-up-frontend'),
  // createProject('BUDGET APP',
  //   'MY-BUDGET is a mobile web application that allows users to manage their budgets. Basically, a user can create different categories and add some transactions to the specific category after he/she can be able to know how much money she/he spent on what.',
  //   'images/budget_app.jpg',
  //   'RUBY,RAILS, POSTGRES',
  //   'https://my-budget.onrender.com',
  //   'https://github.com/Sevenpros/My-budget'),
  createProject('Africa\'s Talking Conference',
    ' This is The platform for Africa’s talking conference, so most of the contents presented in this project are references to the mentioned event. If you want to have such an awesome design for yourself or your company, you are in right place.',
    'images/conference.jpg',
    'HTML,CSS, JAVASCRIPT',
    'https://conference.sethpro.com/',
    'https://github.com/Sevenpros/Africas_talking_conference'),
  createProject('METRICS APP',
    ' This is a mobile web app where a user can view the real updated coronavirus information from all around the world, from the list of countries he/she can click on selected countries and the app takes you to the details page where you can see all details of coronavirus information of the selected county',
    'images/metrics.jpg',
    'REACT,REDUX, API',
    'https://metrics.sethpro.com',
    'https://github.com/Sevenpros/metrics-app'),
  createProject('MEALS',
    'In this project, using API different kinds of foods with pictures and descriptions are displayed on the page, the interface will let the user navigate through different kinds of foods by clicking on a particular category. Also, a user can like or comment on a specific meal.',
    'images/meals.png',
    'WEBPACK, JAVASCRIPT',
    'https://meals.sethpro.com',
    'https://github.com/Sevenpros/meals'),
  createProject('TODO LIST',
    'Todo_list is a web app that helps users manage their to-do lists. The app allows users to add, modify or delete the selected activity.',
    'images/todo.jpg',
    'BOOTSTRAP, JAVASCRIPT',
    'https://todollist.sethpro.com',
    'https://github.com/Sevenpros/todolist-app'),
  createProject('BOOK STORE',
    'With the design of this project, the user can add books to the shelve (object array) by clicking the add button and removing the books when the remove button is clicked.',
    'images/bookstore.png',
    'BOOTSTRAP, JAVASCRIPT',
    'https://bookstore.sethpro.com',
    'https://github.com/Sevenpros/book-store'),
];

function getProjectByName(name) {
  const project = projects.filter((pro) => pro.name === name);
  return project[0];
}

function fillHeader() {
  const header = document.createElement('header');
  header.classList.add('project-header');
  const projectTitle = document.createElement('h2');
  projectTitle.classList.add('"projects-section-title');
  projectTitle.textContent = 'My recent work';
  const line = document.createElement('div');
  line.classList.add('line');
  header.appendChild(projectTitle);
  header.appendChild(line);
  projectSection.appendChild(header);
}

function fillProject() {
  const gridContainer = document.createElement('div');
  gridContainer.classList.add('grid-container');

  for (let i = 0; i < projects.length; i += 1) {
    const projectTechnologies = projects[i].technologies.split(',');
    if (i === 0) {
      const projectCard = document.createElement('article');
      projectCard.classList.add('project-card');
      const projectImage = document.createElement('div');
      projectImage.classList.add('project-image');
      projectImage.innerHTML = `<img alt="image illustrating project" src="${projects[i].image}">`;
      const projectDescription = document.createElement('div');
      const techList = document.createElement('ul');
      const projectBtn = document.createElement('button');
      projectBtn.classList.add('project-button');
      projectBtn.textContent = 'See Project';
      projectBtn.id = `${projects[i].name}`;
      techList.classList.add('project-tech');
      projectDescription.classList.add('desc');
      projectDescription.innerHTML = `
      <div class="project-desc">
          <h3 class="desc-title">${projects[i].name}</h3>
          <p class="description">${projects[i].description}</p>
      </div>`;

      projectTechnologies.forEach((tech) => {
        const list = document.createElement('li');
        list.innerHTML = `<li><a href="#">${tech}</a></li>`;
        techList.appendChild(list);
      });
      projectCard.appendChild(projectImage);
      projectDescription.appendChild(techList);
      projectDescription.appendChild(projectBtn);
      projectCard.appendChild(projectDescription);
      projectSection.appendChild(projectCard);
      projectSection.appendChild(gridContainer);
    } else if (i > 0) {
      const projectArticle = document.createElement('article');
      projectArticle.classList.add('project-card');
      projectArticle.classList.add('mobile-card');
      const transparent = document.createElement('div');
      transparent.classList.add('transparent');
      const flexDescription = document.createElement('div');
      flexDescription.classList.add('flex-description');
      const projectDesc = document.createElement('div');
      projectDesc.classList.add('project-desc');
      projectDesc.classList.add('mobile-desc');
      const techLists = document.createElement('ul');
      const projectBtns = document.createElement('button');
      techLists.classList.add('project-tech');
      techLists.classList.add('mobile-tech');
      projectBtns.classList.add('project-button');
      projectBtns.classList.add('mobile-button');
      projectBtns.textContent = 'See Project';
      projectBtns.id = `${projects[i].name}`;

      projectDesc.innerHTML = `
      <h3 class="desc-title">${projects[i].name}</h3>
      <p class="description mobile-description">${projects[i].description}</p>`;

      projectTechnologies.forEach((tech) => {
        const list = document.createElement('li');
        list.innerHTML = `<li><a href="#">${tech}</a></li>`;
        techLists.appendChild(list);
      });
      gridContainer.appendChild(projectArticle);
      projectArticle.appendChild(transparent);
      flexDescription.appendChild(projectDesc);
      flexDescription.appendChild(techLists);
      transparent.appendChild(flexDescription);
      transparent.appendChild(projectBtns);
    }
  }
}

function fillPage() {
  fillHeader();
  fillProject();
}

function fillModal(project) {
  const projectTechnologies = project.technologies.split(',');
  const modalContainer = document.querySelector('.project-details');
  modalContainer.innerHTML = '';
  const modal = document.createElement('div');
  modal.classList.add('modal');

  const header = document.createElement('header');
  header.classList.add('modal-header');
  header.innerHTML = `
  <h2>${project.name}</h2>
  <img alt="x button to close the modal" class='cancel-modal' src="images/cancel.png">
  `;
  modal.appendChild(header);
  const techList = document.createElement('ul');
  techList.classList.add('project-tech');
  techList.classList.add('tech-details');

  projectTechnologies.forEach((tech) => {
    const list = document.createElement('li');
    list.innerHTML = `<li><a href="#">${tech}</a></li>`;
    techList.appendChild(list);
  });
  modal.appendChild(techList);
  const projectImage = document.createElement('div');
  const flexContainer = document.createElement('div');
  flexContainer.classList.add('flex-container');
  modal.appendChild(flexContainer);
  projectImage.classList.add('project-img');
  projectImage.innerHTML = `<img alt="image illustrating project" src="${project.image}">`;

  flexContainer.appendChild(projectImage);
  const projectDescription = document.createElement('div');
  projectDescription.classList.add('pro-description');
  projectDescription.innerHTML = `
      <p class="descript">${project.description}</p>
      <div class="pro-links">
          <a href="${project.liveLink}" target="_blank" class="project-button about-btn">See Live <img src="images/live.png"></a>
          <a href="${project.sourceLink}" target="_blank" class="project-button about-btn">See Source <img src="images/GitHub.png"></a>
      </div>
     `;
  flexContainer.appendChild(projectDescription);
  modalContainer.appendChild(modal);
}

function isStorageAvailable(type) {
  let storage;
  try {
    storage = window[type];
    const testItem = 'hello';
    storage.setItem(testItem, testItem);
    storage.removeItem(testItem);
    return true;
  } catch (error) {
    return error instanceof DOMException && (
      error.code === 22
      || error.code === 1014
      || error.name === 'QuotaExceededError'
      || error.name === 'NS_ERROR_DOM_QUOTA_REACHED')
      && (storage && storage.length !== 0);
  }
}
function addStorage() {
  const name = document.querySelector('#name').value;
  const email = document.querySelector('#email').value;
  const message = document.querySelector('#message').value;
  const formData = {
    name,
    email,
    message,
  };
  if (isStorageAvailable('localStorage')) {
    localStorage.setItem('form', JSON.stringify(formData));
  }
}

function setForm() {
  const formData = JSON.parse(localStorage.getItem('form'));
  if (!formData.name) {
    addStorage();
  } else {
    document.querySelector('#name').value = formData.name;
    document.querySelector('#email').value = formData.email;
    document.querySelector('#message').value = formData.message;
  }
}

window.addEventListener('load', () => { fillPage(); setForm(); });

const modalContainer = document.querySelector('.project-details');

projectSection.addEventListener('click', (e) => {
  if (e.target.classList.contains('project-button')) {
    modalContainer.classList.remove('invisible');
    const name = e.target.id;
    const project = getProjectByName(name);
    fillModal(project);
  }
});

modalContainer.addEventListener('click', (e) => {
  if (e.target.classList.contains('cancel-modal')) {
    modalContainer.classList.add('invisible');
  }
});
function displayError(error) {
  const errorDiv = document.querySelector('.error-div');
  const errorMessageDiv = document.querySelector('.error-message');
  errorDiv.classList.remove('invisible');
  errorMessageDiv.textContent = error;
}

const cancelMessage = document.querySelector('#cancel-message');
cancelMessage.addEventListener('click', () => {
  const errorDiv = document.querySelector('.error-div');
  errorDiv.classList.add('invisible');
});

const contactForm = document.querySelector('#cont-form');
contactForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const email = document.querySelector('#email');
  const emailAddress = email.value;
  const error = 'only use small letter for email address please.';
  if (emailAddress === emailAddress.toLowerCase()) {
    contactForm.submit();
  } else displayError(error);
});

contactForm.addEventListener('change', () => {
  addStorage();
});
